import React,{useEffect, useState} from "react";
import { Box, useMediaQuery } from "@mui/material";
import BalanceInfo from "../components/Cards/BalanceInfo";
import CardsTabs from "../components/Cards/CardsTabs";
import { useTheme } from "@emotion/react";
import { getCards } from "../services/mockApiService";

const Cards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [myCards, setMyCards] = useState(null);

  useEffect(() => {
    getCards().then((fetchedCards) => setMyCards(fetchedCards));
  }, []);

  const reftechCards = () => {
    getCards().then((fetchedCards) => setMyCards(fetchedCards));
  }

  return (
    <Box style={{ padding: isMobile ? 0 : "3.75rem", paddingTop: 0, }}>
      <BalanceInfo myCards={myCards} />
      <CardsTabs myCards={myCards} />
    </Box>
  );
};

export default Cards;
