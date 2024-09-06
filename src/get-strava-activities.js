const STRAVA_ACCESS_TOKEN = "45aa9d8c70571e91141bd186ffa8af091a680338";
const STRAVA_CLUB_ID = "soledad-million";

export const getStuff = async () => {
  const url = `https://www.strava.com/api/v3/clubs/${STRAVA_CLUB_ID}/activities?per_page=50`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${STRAVA_ACCESS_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Error fetching Strava activities: ${response.statusText}`
      );
    }

    const activities = await response.json();

    const activitiesByAthlete = {};

    activities.forEach((activity) => {
      const athleteName = `${activity.athlete.firstname} ${activity.athlete.lastname}`;
      if (!activitiesByAthlete[athleteName]) {
        activitiesByAthlete[athleteName] = activity;
      }
    });

    const result = Object.values(activitiesByAthlete).map((activity) => ({
      athleteName: `${activity.athlete.firstname} ${activity.athlete.lastname}`,
      activityName: activity.name,
      elevationGain: Math.ceil(activity.total_elevation_gain * 3.28),
      distance: Math.ceil(activity.distance * 0.000621371),
      elapsedTime: Math.ceil(activity.elapsed_time / 60),
    }));

    const totalElevationGain =
      result.reduce((acc, curr) => acc + curr.elevationGain, 0) * 3.28;

    return {
      statusCode: 200,
      elevGain: Math.ceil(totalElevationGain),
      athletes: result,
    };
  } catch (error) {
    console.error("Error fetching Strava activities:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Strava activities" }),
    };
  }
};
