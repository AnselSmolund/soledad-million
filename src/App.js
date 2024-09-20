import "./App.css";
import React, { useState, useEffect } from "react";
import { Typography, Box, CssBaseline, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getElevationGainForDate } from "./get-strava-activities";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Leaderboard, PasswordScreen } from "./Leaderboard";
import { MAIN_COLOR, SECONDARY_COLOR, getCurrentDateInPST } from "./util";

function HomePage() {
  const [elevationGain, setElevationGain] = useState(0);

  const navigate = useNavigate();

  const currentDate = getCurrentDateInPST();
  useEffect(() => {
    const fetchActivities = async () => {
      const elevGain = await getElevationGainForDate(currentDate);
      setElevationGain(elevGain);
    };

    fetchActivities();
  }, [currentDate]);

  const handleNavigate = () => {
    navigate("/almost-there");
  };

  const progressHeight = (elevationGain / 1000000) * 100;
  console.log(elevationGain);
  return (
    <>
      <Box
        sx={{
          height: `${progressHeight}vh`,
          width: "100vw",
          backgroundColor: "black",
          position: "absolute",
          bottom: 0,
          opacity: 0.3,
          overflow: "hidden",
        }}
      />

      <Box
        sx={{
          minHeight: "100vh", // Full viewport height
          width: "100%", // Full width
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 10,
          paddingBottom: 20,
          backgroundColor: SECONDARY_COLOR,
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Box>
          <Typography variant="h4" style={{ color: "black" }}>
            {"SOLEDAD MILLION CHALLENGE"}
          </Typography>
          <Typography style={{ fontSize: 14 }}> presented by MAAP</Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{ color: MAIN_COLOR, textAlign: "center", fontSize: "20vw" }}
          >
            {elevationGain.toLocaleString()}'
          </Typography>
        </Box>
        <Box>
          <Button sx={{ color: MAIN_COLOR }} onClick={handleNavigate}>
            View Leaderboard
          </Button>
        </Box>
      </Box>
    </>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: "Everett, Arial, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/almost-there" element={<PasswordScreen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
