import React from "react";
import { Box, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import { MAIN_COLOR, SECONDARY_COLOR, THIRD_COLOR } from "./util";
import { NavButton } from "./Shared/Button";
import { photos } from "./photos";

export const PhotoPage = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  const isLargeScreen = useMediaQuery('(max-width:1200px)');
  const getCols = () => {
    if(isSmallScreen){
      return 1;
    } else if(isMediumScreen){
      return 2;
    } else if(isLargeScreen){
      return 3;
    } else {
      return 4;
    } 
  }

  return (
    <Box
      sx={{
        backgroundColor: SECONDARY_COLOR,
        padding: 2.5,
        height: "100%",
        minHeight: "100vh",
        paddingBottom: 5,
        color: 'black'
      }}
    >
      <NavButton
        url="/"
        text={"go back"}
      />
      <Typography sx={{ paddingTop: 4 }} variant="h3" color={MAIN_COLOR}>
        SOLEDAD MILLION GALLERY
      </Typography>
      <Typography fontSize="15px" color={THIRD_COLOR}> 
        Want to thank Henry and James? Leave a tip 
        <a href="buymeacoffee.com/jamesphotographyco" target="_blank" rel="noopener noreferrer" style={{ color: MAIN_COLOR, textDecoration: 'none' }}> here!</a>
      </Typography>
      <ImageList variant="standard" cols={getCols()} gap={5*getCols()}> 
      {photos.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            loading="lazy"
            alt={item.alt}
          />
        </ImageListItem>
      ))}
      </ImageList>
      <Typography sx={{ paddingTop: 4 }} variant="h3" color={MAIN_COLOR}>
        MORE PHOTOS COMING SOON...
      </Typography>
    </Box>
  );
};
