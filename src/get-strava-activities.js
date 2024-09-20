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

    const topRides = activities.sort(
      (a, b) => b.elevationGain - a.elevationGain
    );

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

export const fakeElevationData = () => {
  return 130120;
};

export const fakeRideData = () => {
  const activities = [
    {
      activityName: "Morning Ride",
      athleteName: "AJ I.",
      date: "20240918",
      distance: 32,
      elapsedTime: 120,
      elevationGain: 300,
      id: "AJ5870906",
    },
    {
      activityName: "Evening Jog",
      athleteName: "Sam T.",
      date: "20240917",
      distance: 5,
      elapsedTime: 30,
      elevationGain: 20,
      id: "ST9203458",
    },
    {
      activityName: "Interval Training",
      athleteName: "Lena M.",
      date: "20240916",
      distance: 8,
      elapsedTime: 45,
      elevationGain: 50,
      id: "LM8347201",
    },
    {
      activityName: "Hill Climb",
      athleteName: "Chris J.",
      date: "20240915",
      distance: 15,
      elapsedTime: 80,
      elevationGain: 500,
      id: "CJ2340950",
    },
    {
      activityName: "Recovery Walk",
      athleteName: "AJ I.",
      date: "20240914",
      distance: 3,
      elapsedTime: 20,
      elevationGain: 0,
      id: "AJ5870907",
    },
    {
      activityName: "Cool Down",
      athleteName: "Eva G.",
      date: "20240913",
      distance: 4,
      elapsedTime: 16,
      elevationGain: 10,
      id: "EG8470921",
    },
    {
      activityName: "Speed Run",
      athleteName: "Jake B.",
      date: "20240912",
      distance: 12,
      elapsedTime: 55,
      elevationGain: 200,
      id: "JB9203842",
    },
    {
      activityName: "Trail Hike",
      athleteName: "Anna S.",
      date: "20240911",
      distance: 18,
      elapsedTime: 140,
      elevationGain: 400,
      id: "AS9082304",
    },
    {
      activityName: "Sprint Session",
      athleteName: "AJ I.",
      date: "20240910",
      distance: 6,
      elapsedTime: 30,
      elevationGain: 50,
      id: "AJ5870908",
    },
    {
      activityName: "Afternoon Ride",
      athleteName: "Paul K.",
      date: "20240909",
      distance: 40,
      elapsedTime: 130,
      elevationGain: 350,
      id: "PK9210345",
    },
    {
      activityName: "Warm Up",
      athleteName: "AJ I.",
      date: "20240908",
      distance: 3,
      elapsedTime: 10,
      elevationGain: 0,
      id: "AJ5870909",
    },
    {
      activityName: "Mountain Biking",
      athleteName: "Chris J.",
      date: "20240907",
      distance: 25,
      elapsedTime: 150,
      elevationGain: 600,
      id: "CJ2340951",
    },
    {
      activityName: "Crossfit Workout",
      athleteName: "Sam T.",
      date: "20240906",
      distance: 0,
      elapsedTime: 60,
      elevationGain: 0,
      id: "ST9203459",
    },
    {
      activityName: "Sunset Walk",
      athleteName: "Eva G.",
      date: "20240905",
      distance: 4,
      elapsedTime: 25,
      elevationGain: 10,
      id: "EG8470922",
    },
    {
      activityName: "Sprint Intervals",
      athleteName: "Lena M.",
      date: "20240904",
      distance: 7,
      elapsedTime: 40,
      elevationGain: 30,
      id: "LM8347202",
    },
    {
      activityName: "City Cycling",
      athleteName: "AJ I.",
      date: "20240903",
      distance: 22,
      elapsedTime: 100,
      elevationGain: 150,
      id: "AJ5870910",
    },
    {
      activityName: "Morning Hike",
      athleteName: "Paul K.",
      date: "20240902",
      distance: 20,
      elapsedTime: 180,
      elevationGain: 450,
      id: "PK9210346",
    },
    {
      activityName: "Beach Run",
      athleteName: "Sam T.",
      date: "20240901",
      distance: 8,
      elapsedTime: 50,
      elevationGain: 0,
      id: "ST9203460",
    },
    {
      activityName: "Endurance Ride",
      athleteName: "Chris J.",
      date: "20240831",
      distance: 60,
      elapsedTime: 240,
      elevationGain: 800,
      id: "CJ2340952",
    },
    {
      activityName: "Yoga Session",
      athleteName: "Eva G.",
      date: "20240830",
      distance: 0,
      elapsedTime: 45,
      elevationGain: 0,
      id: "EG8470923",
    },
  ];

  return activities;
};
