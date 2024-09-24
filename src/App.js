import "./App.css";
import React, { useEffect } from "react";
import { Typography, Box, CssBaseline, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SEP22ELEVATION } from "./get-strava-activities";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Leaderboard } from "./Leaderboard";
import { MAIN_COLOR, SECONDARY_COLOR } from "./util";
import { PhotoPage } from "./PhotoPage";
import { Stats } from "./Stats";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <>
      <Box
        sx={{
          height: "100dvh",
          width: "100%",
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

        <Box
          sx={{
            bottom: 40,
            position: "relative",
            color: MAIN_COLOR,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: 3,
          }}
        >
          <Box sx={{ position: "relative", color: MAIN_COLOR, mt: 5 }}>
            <Typography variant="h3" sx={{ textAlign: "center", fontSize: 25 }}>
              ON SEPTEMBER 22ND,{" "}
              <span style={{ fontWeight: 700, fontSize: 30 }}>255 </span>{" "}
              CYCLISTS CLIMBED A TOTAL OF
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontSize: "19vw" }}
          >
            {SEP22ELEVATION.toLocaleString()}'
            <Box sx={{ position: "relative", color: MAIN_COLOR, mt: 0 }}>
              <Typography
                variant="h3"
                sx={{ textAlign: "center", fontSize: "20px", mt: 3 }}
              >
                ON MT. SOLEDAD IN SAN DIEGO CA
              </Typography>
            </Box>
          </Typography>
        </Box>
        <NavButtons handleNavigate={handleNavigate} />
      </Box>
    </>
  );
}

const NavButtons = (props) => {
  const { handleNavigate } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
      }}
    >
      <Box>
        <Button
          size="large"
          sx={{ color: MAIN_COLOR }}
          onClick={() => handleNavigate("leaderboard")}
        >
          View Leaderboard
        </Button>
      </Box>
      <Box>
        <Button
          size="large"
          sx={{ color: MAIN_COLOR }}
          onClick={() => handleNavigate("stats")}
        >
          See Stats
        </Button>
      </Box>
      <Box>
        <Button
          size="large"
          sx={{ color: MAIN_COLOR }}
          onClick={() => handleNavigate("pictures")}
        >
          Photo Gallery
        </Button>
      </Box>
    </Box>
  );
};
const theme = createTheme({
  typography: {
    fontFamily: "Everett, Arial, sans-serif",
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: MAIN_COLOR,
          },
        },
      },
    },
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
          <Route path="/pictures" element={<PhotoPage />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
