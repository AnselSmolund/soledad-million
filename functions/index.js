const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");

admin.initializeApp();
const db = admin.firestore();

const clientId = functions.config().strava.client_id;
const clientSecret = functions.config().strava.client_secret;
const refreshToken = functions.config().strava.refresh_token;
const STRAVA_CLUB_ID = "soledad-million";

exports.storeActivitiesCron = functions.pubsub
  .schedule("every 60 minutes")
  .onRun(async (context) => {
    try {
      const activities = await runFetchStravaActivities();
      await storeActivities(activities);
      console.log("Successfully stored new activities");
    } catch (error) {
      console.error("Error in storeActivitiesCron:", error);
    }
    return null;
  });

const getCurrentDateInPST = () => {
  const todaysDate = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // Convert the localized date to the YYYYMMDD format
  const [month, day, year] = todaysDate.split("/");
  return `${year}${month}${day}`;
};

const storeActivities = async (activities) => {
  const batch = db.batch();

  const currentDate = getCurrentDateInPST();

  const activityIdsDocRef = db.collection("activities").doc("allActivityIds");

  // Step 1: Fetch existing activity IDs
  let existingActivityIds = [];
  const activityIdsSnapshot = await activityIdsDocRef.get();

  if (activityIdsSnapshot.exists) {
    existingActivityIds = activityIdsSnapshot.data().ids || [];
  }

  const dateDocRef = db.collection("activities").doc(currentDate);

  const elevationGainRef = db.collection("dailyElevationGain").doc(currentDate);
  const elevationDocSnapshot = await elevationGainRef.get();
  let totalElevationGain = 0;

  if (elevationDocSnapshot.exists) {
    totalElevationGain = elevationDocSnapshot.data().totalElevationGain || 0;
  }

  const activityPromises = activities
    .filter((activity) => activity.type === "Ride")
    .map(async (activity) => {
      const elevationGain = Math.ceil(activity.total_elevation_gain * 3.28);
      const activityId = `${activity.athlete.firstname}${Math.ceil(
        activity.distance
      )}${Math.ceil(activity.elapsed_time)}`;

      const activityData = {
        athleteName: `${activity.athlete.firstname} ${activity.athlete.lastname}`,
        activityName: activity.name || "Unnamed Activity",
        elevationGain: elevationGain,
        distance: Math.ceil(activity.distance * 0.000621371),
        elapsedTime: Math.ceil(activity.elapsed_time / 60),
        id: activityId,
        date: currentDate,
      };

      if (existingActivityIds.includes(activityId)) {
        console.log(`Activity with ID ${activityId} already exists, skipping.`);
        return;
      }

      console.log("Adding new activity:", activityData);
      const activityDocRef = dateDocRef.collection("rides").doc(activityId);
      batch.set(activityDocRef, activityData);

      totalElevationGain += elevationGain;
      existingActivityIds.push(activityId);
    });

  try {
    await Promise.all(activityPromises);

    await batch.commit();
    console.log("Batch commit successful");

    await activityIdsDocRef.set({ ids: existingActivityIds }, { merge: true });
    console.log("Activity IDs updated.");

    await elevationGainRef.set({ totalElevationGain }, { merge: true });
    console.log("Elevation gain updated for date:", currentDate);
  } catch (error) {
    console.error("Error adding activities in batch:", error);
  }
};

// Store the access token and its expiration time in Firestore
const storeAccessToken = async (accessToken, expiresAt) => {
  const tokenRef = db.doc("tokens/strava");
  await tokenRef.set(
    {
      access_token: accessToken,
      expires_at: expiresAt,
    },
    { merge: true }
  );
};

// Retrieve the access token and expiration time from Firestore
const getStoredAccessToken = async () => {
  const tokenRef = db.doc("tokens/strava");
  const tokenDoc = await tokenRef.get();

  if (!tokenDoc.exists) {
    return null;
  }

  const { access_token, expires_at } = tokenDoc.data();
  return { access_token, expires_at };
};

// Check if the token is valid, refresh it if necessary
const checkAndRefreshToken = async () => {
  const tokenData = await getStoredAccessToken();
  let accessToken = tokenData ? tokenData.access_token : null;
  const expiresAt = tokenData ? tokenData.expires_at : null;
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

  // If token doesn't exist or is expired, refresh it
  if (!accessToken || (expiresAt && currentTime >= expiresAt)) {
    accessToken = await getNewAccessToken();
  }

  return accessToken;
};

// Refresh the access token using Strava's refresh token flow
const getNewAccessToken = async () => {
  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();
  if (response.ok) {
    const { access_token, expires_at } = data;

    // Store tokens in Firestore
    await storeAccessToken(access_token, expires_at);

    return access_token;
  } else {
    console.error("Failed to refresh token:", data);
    throw new Error("Token refresh failed");
  }
};

// Fetch Strava activities using the current access token
const runFetchStravaActivities = async () => {
  const accessToken = await checkAndRefreshToken();

  const url = `https://www.strava.com/api/v3/clubs/${STRAVA_CLUB_ID}/activities?per_page=200`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching Strava activities: ${response.statusText}`);
  }

  const activities = await response.json();
  return activities;
};
