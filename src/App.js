import React, { useState, useEffect, useRef } from "react";
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
import { getStuff } from "./get-strava-activities";

import { db } from './firebase';
import { addDoc, collection } from "@firebase/firestore"

function Home() {
  const messageRef = useRef();
  const ref = collection(db, "message");
  
  const handleSave = async(e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
    let data = {
      message: messageRef.current.value,
    }
    try{
      addDoc(ref, )
    }catch( e){
      console.log(e);
    }
  };
  return(
    <div>
      <form onSubmit={handleSave}>
        <label>Enter Message</label>
        <input type ="text" ref={messageRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

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
  const [activities, setActivities] = useState([]);
  const [totalElevationGain, setTotalElevationGain] = useState(0);

  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchActivities = async () => {
      const response = await getStuff();
      if (response.statusCode === 200) {
        setTotalElevationGain(response.elevGain);
        setActivities(response.athletes);
      } else {
        setError(true);
      }
    };

    if (!activities || activities.length === 0) {
      fetchActivities();
    }
  }, []);
  if (error) {
    return (
      <Container
        sx={{
          mt: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3"> CHECK BACK SEP_22</Typography>
        <Box
          component="img"
          sx={{
            width: 250,
            mt: 10,
          }}
          alt="The house from the offer."
          src="/Maap_logo.png"
        />
        <Home />
      </Container>
    );
  }
  if (!activities || (activities && activities.length <= 0)) {
    return <Container sx={{ mt: 40 }}> LOADING</Container>;
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
            {totalElevationGain.toLocaleString()} FT
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
            {activities.map((activity, index) => (
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

  // Use effect to update authentication state
  useEffect(() => {
    if (currentInput === password) {
      setIsAuthenticated(true);
    }
  }, [currentInput]); // Run effect only when `currentInput` changes

  // Only render HomePage once authentication is successful
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
