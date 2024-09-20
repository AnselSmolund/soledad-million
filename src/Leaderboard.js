import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  TextField,
  Button,
  Grid2,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getCurrentDateInPST, MAIN_COLOR, SECONDARY_COLOR } from "./util";
import { getActivitiesByDate } from "./get-strava-activities";

const correctPassword = "maap";

export const PasswordScreen = () => {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      navigate("/leaderboard");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // Full viewport height
        width: "100%", // Full width
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: 4,
        color: MAIN_COLOR,
        backgroundColor: SECONDARY_COLOR,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h5" sx={{ mb: 3 }}>
          Enter Password to View Leaderboard
        </Typography>

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          color="secondary"
        />

        <Button onClick={handlePasswordSubmit} sx={{ color: "#E9FEB2" }}>
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export const Leaderboard = () => {
  const [activities, setActivities] = useState([]);
  const currentDate = getCurrentDateInPST();

  useEffect(() => {
    const fetchActivities = async () => {
      console.log("fetching");
      const rides = await getActivitiesByDate(currentDate);
      setActivities(rides.topRides);
    };

    fetchActivities();
  }, [currentDate]);

  return (
    <Box
      sx={{
        backgroundColor: SECONDARY_COLOR,
        paddingTop: 5,
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" color={MAIN_COLOR}>
        LEADERBOARD
      </Typography>
      <Typography variant="h5" color={MAIN_COLOR} mb={7}>
        {activities.length} rides today
      </Typography>

      <Grid2 justifyContent={"center"} container spacing={3}>
        {activities.map((activity, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 275,
              maxWidth: 300,
              padding: 2,
              backgroundColor: "#4f5d75",
              borderRadius: 2,
              transition: "transform 0.3s ease",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom sx={{ color: MAIN_COLOR, fontSize: 14 }}>
                {`#${index + 1}`}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: 600, fontSize: 20, mb: 1, color: MAIN_COLOR }}
              >
                {activity.athleteName}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: 14, fontWeight: 700, color: MAIN_COLOR, mb: 2 }}
              >
                {activity.activityName}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 500 }}
                  >
                    Elev
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: MAIN_COLOR, fontSize: 16 }}
                  >
                    {activity.elevationGain.toLocaleString()}ft
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 500 }}
                  >
                    Distance
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: MAIN_COLOR, fontSize: 16 }}
                  >
                    {activity.distance}mi
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 500 }}
                  >
                    Time
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: MAIN_COLOR, fontSize: 16 }}
                  >
                    {activity.elapsedTime}min
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Grid2>
    </Box>
  );
};
