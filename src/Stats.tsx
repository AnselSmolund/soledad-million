import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { MAIN_COLOR } from "./util";
import {
  SEP22DISTANCE,
  SEP22ELAPSEDTIME,
  SEP22ELEVATION,
} from "./get-strava-activities";
import { NavButton } from "./Shared/Button";

export const Stats = () => {
  return (
    <Container
      sx={{
        height: "100%",
        minHeight: "100vh",
        paddingBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 30,
      }}
    >
      <Box>
        <Typography color={MAIN_COLOR} sx={{ fontSize: 20 }}>
          {SEP22ELEVATION.toLocaleString()} Feet of climbing
        </Typography>
        <Typography color={MAIN_COLOR} sx={{ fontSize: 20 }}>
          {SEP22ELAPSEDTIME.toLocaleString()} Minutes Ridden
        </Typography>
        <Typography color={MAIN_COLOR} sx={{ fontSize: 20 }}>
          {SEP22DISTANCE.toLocaleString()} Miles Covered
        </Typography>
      </Box>
      <Box>
        <NavButton url="/" text={"go back"} />
      </Box>
    </Container>
  );
};
