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

export const SEP_22 = "20240922";

function HomePage() {
  const [elevationGain, setElevationGain] = useState(0);

  const navigate = useNavigate();

  const currentDate = getCurrentDateInPST();

  useEffect(() => {
    const fetchActivities = async () => {
      const elevGain = await getElevationGainForDate(SEP_22);
      console.log(currentDate);
      setElevationGain(elevGain);
    };

    fetchActivities();

    document.body.style.overflow = "hidden";

    // Enable scrolling on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [currentDate]);

  const handleNavigate = () => {
    navigate("/almost-there");
  };

  const progressHeight = (elevationGain / 1000000) * 100;

  return (
    <>
      <Box
        sx={{
          height: `${progressHeight}dvh`,
          width: "100vw",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          opacity: 0.2,
          overflow: "hidden",
        }}
      />

      <Box
        sx={{
          height: "100dvh", // Full viewport height
          width: "100%", // Full width
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 4,
          paddingBottom: 20,
          backgroundColor: SECONDARY_COLOR,
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              gap: 1,
              mt: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Box sx={{ mt: 0 }}>
                <img src="/equinox_logo.png" alt="maap logo" width="80" />
              </Box>
              <Box sx={{ mt: 0 }}>
                <img src="/1.png" alt="best logo" width="80" />
              </Box>
            </Box>
            <Typography
              variant="h3"
              style={{
                color: "black",
                fontSize: 30,
                letterSpacing: "-1px",
                lineHeight: "30px",
              }}
            >
              {"SOLEDAD MILLION CHALLENGE"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography style={{ fontSize: 14 }} mt={0.5}>
                presented by
              </Typography>
              <Box sx={{ mb: 2 }}>
                <img src="/Maap_logo.png" alt="maap logo" width="100" />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ bottom: 40, position: "relative", color: MAIN_COLOR }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontSize: "19vw" }}
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
