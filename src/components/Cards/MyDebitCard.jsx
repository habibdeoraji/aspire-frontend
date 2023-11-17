import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  getCards,
  updateCard,
  deleteCard,
} from "./../../services/mockApiService";

import { ReactComponent as FreezeCardIcon } from "./../../assets/icons/Freeze card.svg";
import { ReactComponent as SetSpendLimitIcon } from "./../../assets/icons/Set spend limit.svg";
import { ReactComponent as AddtoGpayIcon } from "./../../assets/icons/GPay.svg";
import { ReactComponent as ReplaceCardIcon } from "./../../assets/icons/Replace card.svg";
import { ReactComponent as CancelCardIcon } from "./../../assets/icons/Deactivate card.svg";
import { ReactComponent as CardDetailsIcon } from "./../../assets/icons/Group 11889.svg";
import { ReactComponent as PaymentsIcon } from "./../../assets/icons/Payments.svg";
import { ReactComponent as UpArrowIcon } from "./../../assets/icons/up-arrow.svg";
import { ReactComponent as DownArrowIcon } from "./../../assets/icons/down-arrow.svg";

import CardCarousel from "../ElementaryComponents/CardCarousal";
import { CardsContext } from "../../pages/Cards";

const MyDebitCard = () => {
  const theme = useTheme();
  const { cards, setCards } = useContext(CardsContext);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showRecentTransactions, setShowRecentTransactions] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    getCards().then((fetchedCards) => setCards(fetchedCards));
  }, []);

  useEffect(() => {
    setActiveCard(cards[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards?.length]);

  console.log("cards", cards);
  console.log("activeCard", activeCard);

  const customActionButtonStyle = {
    width: "20%",
    display: "flex",
    flexDirection: "column",
  };
  const customActionTexStyle = {
    width: "80%",
    fontSize: "14px",
    color: theme.palette.primary[300],
    textAlign: "center",
    marginTop: "0.5rem",
  };

  const handleCardFreeze = () => {
    const cardsData = JSON.parse(JSON.stringify(cards));
    const index = cardsData.findIndex((card) => card.id === activeCard.id);

    if (index !== -1) {
      const updatedCardData = {
        ...activeCard,
        card_frozen_status: !activeCard?.card_frozen_status,
      };
      cardsData[index] = updatedCardData;
      setActiveCard(updatedCardData)
      setCards(cardsData);
      updateCard(cardsData)
    }
  };

  console.log("card updated", cards);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 0,
        justifyContent: "space-between",
      }}
    >
      {/* Debit Card Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "52%" },
          backgroundColor: isMobile && "#0C365A",
        }}
      >
        <CardCarousel cards={cards} setActiveCard={setActiveCard} />

        {/* Action Buttons for the Card */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderRadius: "1rem",
            borderBottomLeftRadius: isMobile ? 0 : "1rem",
            borderBottomRightRadius: isMobile ? 0 : "1rem",
            marginTop: "2rem",
            marginLeft: isMobile ? "0" : "1rem",
            marginRight: isMobile ? "0" : "1rem",
            padding: "1.25rem",
            backgroundColor: theme.palette.white[300],
          }}
        >
          <Button
            style={{ ...customActionButtonStyle }}
            onClick={handleCardFreeze}
          >
            <FreezeCardIcon />
            <Typography sx={{ ...customActionTexStyle, textTransform: "none" }}>
              {activeCard?.card_frozen_status ? "Unfreeze card" : "Freeze card"}
            </Typography>
          </Button>
          <Button style={{ ...customActionButtonStyle }}>
            <SetSpendLimitIcon />
            <Typography sx={{ ...customActionTexStyle, textTransform: "none" }}>
              Set spend limit
            </Typography>
          </Button>
          <Button style={{ ...customActionButtonStyle }}>
            <AddtoGpayIcon />
            <Typography sx={{ ...customActionTexStyle, textTransform: "none" }}>
              Add to GPay
            </Typography>
          </Button>
          <Button style={{ ...customActionButtonStyle }}>
            <ReplaceCardIcon />
            <Typography sx={{ ...customActionTexStyle, textTransform: "none" }}>
              Replace card
            </Typography>
          </Button>
          <Button style={{ ...customActionButtonStyle }}>
            <CancelCardIcon />
            <Typography sx={{ ...customActionTexStyle, textTransform: "none" }}>
              Cancel card
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* Transaction Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          border: isMobile && "none",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: isMobile ? "2rem" : "0",
          paddingBottom: isMobile ? "5rem" : 0,
          background: "white",
          zIndex: 10,
        }}
      >
        <Box
          style={{
            borderRadius: "8px",
            boxShadow: "0 2px 12px rgba(0, 0, 0, .1)",
          }}
        >
          <Box
            style={{
              display: "flex",
              padding: "1.5rem",
              backgroundColor: theme.palette.white[200],
              borderRadius: "8px",
              boxShadow: "0 2px 12px rgba(0, 0, 0, .1)",
            }}
          >
            <ListItemIcon>
              <CardDetailsIcon />
            </ListItemIcon>
            <ListItemText primary="Card details" />
            <IconButton
              edge="end"
              aria-label="details"
              onClick={() => setShowCardDetails(!showCardDetails)}
            >
              {showCardDetails ? <UpArrowIcon /> : <DownArrowIcon />}
            </IconButton>
          </Box>
          {showCardDetails && (
            <Box style={{ padding: "1.5rem" }}>
              <Typography>Card Details</Typography>
            </Box>
          )}
        </Box>

        <Box
          style={{
            borderRadius: "8px",
            backgroundColor: "white",
            border: "1px solid #FCFCFC",
            boxShadow: "0 2px 12px rgba(0, 0, 0, .1)",
          }}
        >
          <Box
            style={{
              display: "flex",
              padding: "1.5rem",
              backgroundColor: theme.palette.white[200],
              borderRadius: "8px",
              boxShadow: "0 2px 12px rgba(0, 0, 0, .1)",
            }}
          >
            <ListItemIcon>
              <PaymentsIcon />
            </ListItemIcon>
            <ListItemText primary="Card details" />
            <IconButton
              edge="end"
              aria-label="details"
              onClick={() => setShowRecentTransactions(!showRecentTransactions)}
            >
              {showRecentTransactions ? <UpArrowIcon /> : <DownArrowIcon />}
            </IconButton>
          </Box>
          {showRecentTransactions && (
            <Box style={{ padding: "1.5rem" }}>
              <Typography>Recent Transactions</Typography>
              <Typography>Card Details</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MyDebitCard;