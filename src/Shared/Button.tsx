import React from "react";
import { Box, Button } from "@mui/material";
import { MAIN_COLOR } from "../util";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  text: string;
  url: string;
}

export const NavButton: React.FC<NavButtonProps> = (props) => {
  const { text, url } = props;

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url)
  }

  return (
    <Box sx={{ mt: 0 }}>
      <Button size="large" sx={{ color: MAIN_COLOR }} onClick={() => handleNavigate(url)}>
        {text}
      </Button>
    </Box>
  );
};
