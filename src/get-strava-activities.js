import {
  collection,
  doc,
  query,
  where,
  getDocs,
  writeBatch,
  getDoc,
} from "firebase/firestore";

import db from "./firestoreService";

const STRAVA_CLUB_ID = "soledad-million";

const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;

export const getNewAccessToken = async () => {
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

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("expires_at", expires_at);

    return access_token;
  } else {
    console.error("Failed to refresh token:", data);
  }
};

async function checkAndRefreshToken() {
  let accessToken = localStorage.getItem("access_token");
  const expiresAt = localStorage.getItem("expires_at");
  const currentTime = Math.floor(Date.now() / 1000);

  if (!accessToken || (expiresAt && currentTime >= expiresAt)) {
    accessToken = await getNewAccessToken();
  }

  return accessToken;
}

export const runFetchStravaActivities = async () => {
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
  storeActivities(activities);
};

const storeActivities = async (activities) => {
  const batch = writeBatch(db); // Initialize a Firestore batch
  let currentDate = new Date().toJSON().slice(0, 10);

  const activityPromises = activities
    .filter((activity) => activity.type === "Ride") // Only process "Ride" activities
    .map(async (activity) => {
      const activityData = {
        athleteName: `${activity.athlete.firstname} ${activity.athlete.lastname}`,
        activityName: activity.name || "Unnamed Activity", // Handle missing name
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

      // Check if the activity already exists
      const activityDocRef = doc(db, "activities", activityId);
      const docSnapshot = await getDoc(activityDocRef);

      if (!docSnapshot.exists()) {
        console.log("doesnt exist", data);
        // Add the activity to the batch if it doesn't exist
        batch.set(activityDocRef, data);
      }
    });

  try {
    await Promise.all(activityPromises); // Wait for all document existence checks to complete
    await batch.commit(); // Commit the batch to Firestore
    console.log("Batch commit successful");
  } catch (error) {
    console.error("Error adding activities in batch:", error);
  }
};

export const getAllActivitiesFromFirebase = async () => {
  const ref = collection(db, "activities");

  let currentDate = new Date()
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
    .slice(0, 9);

  const q = query(ref, where("date", "==", currentDate));

  let result = [];

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
  } catch (error) {
    console.error("Error querying documents: ", error);
  }

  const totalElevationGain = result.reduce(
    (acc, curr) => acc + curr.elevationGain,
    0
  );

  const sortedResults = result.sort(
    (a, b) => b.elevationGain - a.elevationGain
  );

  return {
    totalElevationGain,
    sortedResults,
  };
};
