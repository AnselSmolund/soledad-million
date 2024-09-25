import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Grid2,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MAIN_COLOR, SECONDARY_COLOR } from "./util";
import { RideType, sep22Data } from "./get-strava-activities";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { NavButton } from "./Shared/Button";

export const Leaderboard: React.FC = () => {
  const [sortedResults, setSortedResults] = useState(sep22Data);
  const [searchText, setSearchText] = useState("");

  const [sortBy, setSortBy] = useState("elevation");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const navigate = useNavigate();

  useEffect(() => {
    const newUpdatedList = [...sep22Data];

    const sortFunction = (a: any, b: any) => {
      const order = sortOrder === "asc" ? 1 : -1;
      switch (sortBy) {
        case "distance":
          return (a.distance.value - b.distance.value) * order;
        case "elevation":
          return (a.elevationGain.value - b.elevationGain.value) * order;
        case "name":
          return b.athleteName.localeCompare(a.athleteName) * order;
        case "elapsedTime":
          return (a.elapsedTime.value - b.elapsedTime.value) * order;
        default:
          return 0;
      }
    };

    newUpdatedList.sort(sortFunction);
    setSortedResults(newUpdatedList);
  }, [sortBy, sortOrder]);

  useEffect(() => {
    const newUpdatedList = [...sep22Data].filter((text) => {
      return text.athleteName
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });

    setSortedResults(newUpdatedList);
  }, [searchText]);

  const handleSortToggle = (newSort: string) => {
    if (newSort !== null) {
      if (sortBy === newSort) {
        setSortOrder((prev) => {
          return prev === "asc" ? "desc" : "asc";
        });
      } else {
        setSortBy(newSort);
        setSortOrder("desc");
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: SECONDARY_COLOR,
        paddingTop: 1,
        height: "100%",
        minHeight: "100vh",
        paddingBottom: 5,
      }}
    >
      <NavButton
        handleNavigate={() => {
          navigate("/");
        }}
        text={"go back"}
      />
      <Typography variant="h4" color={MAIN_COLOR} mb={3}>
        Leaderboard
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
          selectedType={sortBy}
          handleSortToggle={handleSortToggle}
          dir={sortOrder}
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
          <RiderCard activity={activity} key={index} />
        ))}
      </Grid2>
    </Box>
  );
};

interface ToggleButtonsProps {
  selectedType: string;
  handleSortToggle: (val: string) => void;
  dir: "asc" | "desc";
}

const ToggleButtons: React.FC<ToggleButtonsProps> = (props) => {
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
          ) : selectedType === sortType && dir === "desc" ? (
            <ArrowDownward sx={{ marginRight: 0.5, fontSize: "16px" }} />
          ) : null}
          {sortType.charAt(0).toUpperCase() + sortType.slice(1)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

interface RiderCardProps {
  activity: RideType;
}
const RiderCard: React.FC<RiderCardProps> = (props) => {
  const { activity } = props;
  return (
    <Card
      sx={{
        width: 300,
        padding: 2,
        backgroundColor: "#4f5d75",
        borderRadius: 2,
      }}
      onClick={() => (activity.url ? window.open(activity.url) : undefined)}
    >
      <CardContent
        sx={{
          textAlign: "center",
          height: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 900, fontSize: 18, color: MAIN_COLOR }}
        >
          {activity.athleteName}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ fontSize: 13, fontWeight: 100, color: MAIN_COLOR }}
        >
          {activity.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            position: "relative",
            top: 20,
          }}
        >
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
              {activity.elevationGain.value.toLocaleString()} ft
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontWeight: 100, fontSize: 12 }}
            >
              #{activity.elevationGain.rank}
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
              {activity.distance.value} mi
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontWeight: 100, fontSize: 12 }}
            >
              #{activity.distance.rank}
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
              sx={{ fontWeight: 700, color: MAIN_COLOR, fontSize: 16 }}
            >
              {activity.elapsedTime.value} MIN
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontWeight: 100, fontSize: 12 }}
            >
              #{activity.elapsedTime.rank}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
