import React from "react";
import { Box, Typography } from "@mui/material";

import { MAIN_COLOR, SECONDARY_COLOR } from "./util";

export const Stats = () => {
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
      <Typography variant="h3" color={MAIN_COLOR}>
        PUNCHING NUMBERS RIGHT NOW... COME BACK SOON
      </Typography>
    </Box>
  );
};
