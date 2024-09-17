const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");

admin.initializeApp();
const db = admin.firestore();

// Retrieve secrets from Firebase environment variables
const clientId = functions.config().strava.client_id;
const clientSecret = functions.config().strava.client_secret;
const refreshToken = functions.config().strava.refresh_token;
const STRAVA_CLUB_ID = "soledad-million";

// Cloud function triggered every 60 minutes
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

// Store Strava activities in Firestore
const storeActivities = async (activities) => {
  const batch = db.batch(); // Initialize a Firestore batch
  const currentDate = new Date().toJSON().slice(0, 10);

  const activityPromises = activities
    .filter((activity) => activity.type === "Ride") // Only process "Ride" activities
    .map(async (activity) => {
      const activityData = {
        athleteName: `${activity.athlete.firstname} ${activity.athlete.lastname}`,
        activityName: activity.name || "Unnamed Activity",
        elevationGain: Math.ceil(activity.total_elevation_gain * 3.28),
        distance: Math.ceil(activity.distance * 0.000621371),
        elapsedTime: Math.ceil(activity.elapsed_time / 60),
      };

      const activityId = `${activityData.elevationGain}${activityData.elapsedTime}${activityData.distance}`;
      const data = {
        ...activityData,
        date: currentDate,
        id: activityId,
      };

      const activityDocRef = db.collection("activities").doc(activityId);
      const docSnapshot = await activityDocRef.get();

      // If activity does not exist, add it to the batch
      if (!docSnapshot.exists) {
        console.log("Activity does not exist, adding:", data);
        batch.set(activityDocRef, data);
      }
    });

  try {
    await Promise.all(activityPromises); // Wait for all document existence checks
    await batch.commit(); // Commit the batch to Firestore
    console.log("Batch commit successful");
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
