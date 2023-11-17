import React, { useEffect, useState, createContext } from "react";
import { Box, useMediaQuery } from "@mui/material";
import BalanceInfo from "../components/Cards/BalanceInfo";
import CardsTabs from "../components/Cards/CardsTabs";
import { useTheme } from "@emotion/react";
import { getCards } from "../services/mockApiService";

export const CardsContext = createContext();

const Cards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState([]);

  useEffect(() => {
    getCards().then((fetchedCards) => setCards(fetchedCards));
  }, []);


  console.log('cards',cards)
  return (
    <CardsContext.Provider value={{ cards, setCards, activeCard, setActiveCard }}>
      <Box style={{ padding: isMobile ? 0 : "3.75rem", paddingTop: 0 }}>
        <BalanceInfo />
        <CardsTabs />
      </Box>
    </CardsContext.Provider>
  );
};

export default Cards;
