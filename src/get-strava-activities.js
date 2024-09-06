const STRAVA_CLUB_ID = "soledad-million";

const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;

export const getNewAccessToken = async () => {
  console.log(refreshToken);
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

export const getStuff = async () => {
  const accessToken = await checkAndRefreshToken();

  const url = `https://www.strava.com/api/v3/clubs/${STRAVA_CLUB_ID}/activities?per_page=200`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
      if (activity.type !== "Ride") {
        return;
      }
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

    const sortedResults = result.sort(
      (a, b) => b.elevationGain - a.elevationGain
    );
    return {
      statusCode: 200,
      elevGain: Math.ceil(totalElevationGain),
      athletes: sortedResults,
    };
  } catch (error) {
    console.error("Error fetching Strava activities:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Strava activities" }),
    };
  }
};
