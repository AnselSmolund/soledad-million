import { collection, doc, getDocs, getDoc } from "firebase/firestore";

import db from "./firestoreService";

export const getActivitiesByDate = async (date) => {
  try {
    const ridesCollectionRef = collection(db, "activities", date, "rides");
    const ridesSnapshot = await getDocs(ridesCollectionRef);

    if (ridesSnapshot.empty) {
      console.log(`No activities found for the date: ${date}`);
      return [];
    }

    const activities = ridesSnapshot.docs.map((doc) => doc.data());

    const topRides = activities
      .sort((a, b) => b.elevationGain - a.elevationGain)
      .slice(0, 10);

    console.log(`Activities for date ${date}:`, activities);
    return { topRides, totalActivities: activities.length };
  } catch (error) {
    console.error("Error retrieving activities:", error);
  }
};

export const getElevationGainForDate = async (date) => {
  try {
    const elevationDocRef = doc(db, "dailyElevationGain", date);
    const elevationSnapshot = await getDoc(elevationDocRef);

    if (elevationSnapshot.exists()) {
      const elevationData = elevationSnapshot.data();
      const totalElevationGain = elevationData.totalElevationGain || 0;

      console.log(`Total elevation gain for ${date}: ${totalElevationGain}`);
      return totalElevationGain;
    } else {
      console.log(`No elevation data found for date: ${date}`);
      return 0;
    }
  } catch (error) {
    console.error("Error retrieving total elevation gain:", error);
  }
};
