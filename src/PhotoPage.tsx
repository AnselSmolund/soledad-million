import React from "react";
import { Box, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";

import { MAIN_COLOR, SECONDARY_COLOR } from "./util";
import { NavButton } from "./Shared/Button";

const photos = [
  {
    img: './gallery/DSC07062.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/DSC07077.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/DSC07339.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/DSC07347.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/DSC07384.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/1.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/2.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/3.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/4.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/5.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/6.jpg',
    alt: 'image1'
  },
  {
    img: './gallery/7.jpg',
    alt: 'image1'
  },
]


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
    } else{
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
        STILL UPLOADING... COME BACK SOON FOR MORE
      </Typography>
      

    </Box>
  );
};
