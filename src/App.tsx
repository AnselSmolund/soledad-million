import "./App.css";
import React, { useEffect } from "react";
import { Typography, Box, CssBaseline, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { sep22Data, SEP22ELEVATION } from "./get-strava-activities";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Leaderboard } from "./Leaderboard";
import { MAIN_COLOR, SECONDARY_COLOR, THIRD_COLOR } from "./util";
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

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <Box
      sx={{
        height: "100dvh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 3,
        }}
      >
        <Box sx={{ mb: 0 }}>
          <img src="/1.png" alt="best logo" width="60" />
        </Box>
        <Box sx={{ mt: 0 }}>
          <img src="/2.png" alt="maap logo" width="100" />
        </Box>
        <Box sx={{ mb: 0 }}>
          <img src="/equinox_logo.png" alt="best logo" width="65" />
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          color: MAIN_COLOR,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 3,
        }}
      >
        <Box
          sx={{
            position: "relative",
            color: THIRD_COLOR,
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center", fontSize: 27 }}>
            ON SEPTEMBER 22, <br></br>
            <span style={{ color: MAIN_COLOR }}>{sep22Data.length}</span>{" "}
            CYCLISTS CLIMBED A TOTAL OF
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ textAlign: "center", fontSize: "19vw" }}>
          {SEP22ELEVATION.toLocaleString()}'
        </Typography>
        <Typography sx={{ color: THIRD_COLOR, fontSize: "19px" }}>
          ON MT SOLEDAD IN SAN DIEGO CA
        </Typography>
      </Box>

      <NavButtons handleNavigate={handleNavigate} />
    </Box>
  );
}

interface NavButtonsProps {
  handleNavigate: (val: string) => void;
}
const NavButtons: React.FC<NavButtonsProps> = (props) => {
  const { handleNavigate } = props;
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        mt: 2,
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
  palette: {
    background: {
      default: SECONDARY_COLOR,
    },
  },
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

const App: React.FC = () => {
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
