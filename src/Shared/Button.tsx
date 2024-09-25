import React from "react";
import { Box, Button } from "@mui/material";
import { MAIN_COLOR } from "../util";

interface NavButtonProps {
  handleNavigate: () => void;
  text: string;
}
export const NavButton: React.FC<NavButtonProps> = (props) => {
  const { handleNavigate, text } = props;
  return (
    <Box sx={{ mt: 0 }}>
      <Button size="large" sx={{ color: MAIN_COLOR }} onClick={handleNavigate}>
        {text}
      </Button>
    </Box>
  );
};
