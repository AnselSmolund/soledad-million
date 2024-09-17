import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  CssBaseline,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getAllActivitiesFromFirebase } from "./get-strava-activities";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      textAlign: "center",
      color: "#FFFFFF",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      textAlign: "center",
      color: "#FF6F61",
      marginBottom: "2rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

function HomePage() {
  const [rideData, setRideData] = useState(undefined);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await getAllActivitiesFromFirebase();
      setRideData(response);
    };

    fetchActivities();
  }, []);

  if (!rideData) {
    return <h1> loading </h1>;
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Full-screen container with background image */}
      <Box
        sx={{
          minHeight: "100vh", // Full viewport height
          width: "100%", // Full width
          backgroundImage: `url('/bg-img.jpg')`, // Reference your image from the public folder
          backgroundSize: "fill",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 4,
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for content
            borderRadius: 2,
            padding: 4,
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h1" style={{ color: "black" }}>
              {"SOLEDAD MILLION CHALLENGE"}
            </Typography>
            <Typography style={{ fontSize: 14 }}> presented by MAAP</Typography>
          </Box>
          <Typography variant="h2">
            {}
            <span style={{ fontSize: 20 }}> TOTAL </span>
            <br />
            {rideData.totalElevationGain.toLocaleString()} FT
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ marginBottom: 2 }}>
            LEADERBOARD
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {rideData.sortedResults.map((activity, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 275,
                  maxWidth: 300,
                  marginBottom: 2,
                  backgroundColor: "#f5f5f5",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h2"
                    component="div"
                    gutterBottom
                    style={{ fontSize: 20 }}
                  >
                    {activity.athleteName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Elev:{" "}
                    <span style={{ fontWeight: 700 }}>
                      {activity.elevationGain.toLocaleString()} ft
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Distance:{" "}
                    <span style={{ fontWeight: 700 }}>
                      {activity.distance} miles
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Elapsed Time:{" "}
                    <span style={{ fontWeight: 700 }}>
                      {activity.elapsedTime} minutes
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Date:{" "}
                    <span style={{ fontWeight: 700 }}>{activity.date}</span>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

const password = "maap";
const App = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (currentInput === password) {
      setIsAuthenticated(true);
    }
  }, [currentInput]);

  if (isAuthenticated) {
    return <HomePage />;
  }
  return (
    <Container sx={{ mt: 30 }}>
      <Typography variant="h4" sx={{ color: "white" }}>
        {"SOLEDAD MILLION CHALLENGE"}
      </Typography>
      <Typography variant="h6" sx={{ color: "black", mb: 10 }}>
        enter password to continue
      </Typography>
      <TextField
        value={currentInput}
        onChange={(val) => {
          setCurrentInput(val.currentTarget.value);
        }}
      ></TextField>
    </Container>
  );
};

export default App;
