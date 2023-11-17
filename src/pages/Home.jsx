import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <Box className="text_center" style={ {color:isMobile?'White':theme.palette.primary.main}}>Home</Box>;
};

export default Home;
