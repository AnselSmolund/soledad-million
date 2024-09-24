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
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MAIN_COLOR, SECONDARY_COLOR } from "./util";
import { sep22Data } from "./get-strava-activities";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

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
  const [sortedResults, setSortedResults] = useState(sep22Data);
  const [searchText, setSearchText] = useState("");

  const [currentSort, setCurrentSort] = useState({
    type: "elevation",
    dir: "dsc",
  });

  useEffect(() => {
    const newUpdatedList = [...sep22Data];

    const sortFunction = (a, b) => {
      const order = currentSort.dir === "asc" ? 1 : -1;
      switch (currentSort.type) {
        case "distance":
          return (a.distance - b.distance) * order;
        case "elevation":
          return (a.elevationGain - b.elevationGain) * order;
        case "name":
          return b.athleteName.localeCompare(a.athleteName) * order;
        case "elapsedTime":
          return (a.elapsedTime - b.elapsedTime) * order;
        default:
          return 0;
      }
    };

    newUpdatedList.sort(sortFunction);
    setSortedResults(newUpdatedList);
  }, [currentSort]);

  useEffect(() => {
    const newUpdatedList = [...sep22Data].filter((text) => {
      return text.athleteName
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });

    setSortedResults(newUpdatedList);
  }, [searchText]);

  const handleSortToggle = (newSort) => {
    if (newSort !== null) {
      if (currentSort.type === newSort) {
        setCurrentSort((prev) => ({
          ...prev,
          dir: prev.dir === "asc" ? "dsc" : "asc",
        }));
      } else {
        setCurrentSort({ type: newSort, dir: "dsc" });
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: SECONDARY_COLOR,
        paddingTop: 5,
        height: "100%",
        minHeight: "100vh",
        paddingBottom: 5,
      }}
    >
      <Typography variant="h3" color={MAIN_COLOR} mb={3}>
        LEADERBOARD
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          mb: 2,
        }}
      >
        <ToggleButtons
          selectedType={currentSort.type}
          handleSortToggle={handleSortToggle}
          dir={currentSort.dir}
        />
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, outline: "none" },
            "& label.Mui-focused": {
              color: MAIN_COLOR,
            },
            "& label": {
              color: "black",
              fontSize: 14,
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: MAIN_COLOR,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0,0,0,.1)",
              },
              "&:hover fieldset": {
                borderColor: MAIN_COLOR,
              },
              "&.Mui-focused fieldset": {
                borderColor: "#6F7E8C",
              },
            },
          }}
        >
          <TextField
            onChange={(val) => setSearchText(val.currentTarget.value)}
            sx={{
              ml: 2,
              width: 330,
            }}
            label={"Search"}
            fullWidth
            size="small"
          />
        </Box>
      </Box>
      <Grid2 justifyContent={"center"} container spacing={3}>
        {sortedResults.map((activity, index) => (
          <Card
            key={index}
            sx={{
              width: 260,
              padding: 2,
              backgroundColor: "#4f5d75",
              borderRadius: 2,
              transition: "transform 0.3s ease",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
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

const ToggleButtons = (props) => {
  const { selectedType, handleSortToggle, dir } = props;

  return (
    <ToggleButtonGroup value={selectedType} exclusive size={"small"}>
      {["elevation", "distance", "name", "elapsedTime"].map((sortType) => (
        <ToggleButton
          key={sortType}
          value={sortType}
          aria-label={`sort by ${sortType}`}
          selected={selectedType === sortType}
          onClick={() => handleSortToggle(sortType)}
          sx={{
            display: "flex",
            alignItems: "center",
            color: selectedType === sortType ? "#fff" : "#000",
            backgroundColor:
              selectedType === sortType ? "#007bff" : "transparent",
          }}
        >
          {selectedType === sortType && dir === "asc" ? (
            <ArrowUpward sx={{ marginRight: 0.5, fontSize: "16px" }} />
          ) : selectedType === sortType && dir === "dsc" ? (
            <ArrowDownward sx={{ marginRight: 0.5, fontSize: "16px" }} />
          ) : null}
          {sortType.charAt(0).toUpperCase() + sortType.slice(1)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
