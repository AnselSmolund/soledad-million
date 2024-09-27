import React from "react";
import "./App.css";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { MAIN_COLOR, SECONDARY_COLOR, THIRD_COLOR } from "./util";
import { NavButton } from "./Shared/Button";
import { shuffledPhotos } from "./photos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const PhotoPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");
  const isLargeScreen = useMediaQuery("(max-width:1200px)");
  const getCols = () => {
    if (isSmallScreen) {
      return 1;
    } else if (isMediumScreen) {
      return 2;
    } else if (isLargeScreen) {
      return 3;
    } else {
      return 4;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: SECONDARY_COLOR,
        padding: 2.5,
        height: "100%",
        minHeight: "100vh",
        paddingBottom: 5,
        color: "black",
      }}
    >
      <NavButton url="/" text={"go back"} />
      <Typography variant="h3" color={MAIN_COLOR}>
        SOLEDAD MILLION GALLERY
      </Typography>
      <Typography fontSize="15px" color={THIRD_COLOR}>
        Want to thank Henry and James? Leave a tip
        <a
          href="https://www.buymeacoffee.com/jamesphotographyco"
          target="_blank"
          rel="noreferrer"
          style={{ color: MAIN_COLOR, textDecoration: "none" }}
        >
          {" "}
          here!
        </a>
      </Typography>
      <ImageList variant="standard" cols={getCols()} gap={5 * getCols()}>
        {shuffledPhotos.map((item) => (
          <ImageListItem key={item.img}>
            <LazyLoadImage
              src={item.img}
              width={"100%"}
              alt={item.alt}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "0.4s" },
              }}
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
