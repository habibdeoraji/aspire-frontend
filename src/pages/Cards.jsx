import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import BalanceInfo from "../components/Cards/BalanceInfo";
import CardsTabs from "../components/Cards/CardsTabs";
import { useTheme } from "@emotion/react";

const Cards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box style={{ padding: isMobile ? 0 : "3.75rem", paddingTop: 0, }}>
      <BalanceInfo />
      <CardsTabs />
    </Box>
  );
};

export default Cards;
