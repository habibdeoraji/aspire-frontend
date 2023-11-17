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
import { ReactComponent as BuisnessFinanceIcon } from "./../../assets/icons/business-and-finance-1.svg";
import { ReactComponent as NextIcon } from "./../../assets/icons/next.svg";

import CardCarousel from "../ElementaryComponents/CardCarousal";
import {  CardsContext } from "../../pages/Cards";
import { recent_transactions } from "../../utils/transactionsData";
import DeleteCardModal from "../Modals/DeleteCardModal";

const MyDebitCard = () => {
  const theme = useTheme();
  const { cards, setCards, activeCard, setActiveCard } = useContext(CardsContext);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showRecentTransactions, setShowRecentTransactions] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {
    setActiveCard(cards[0]);
  }, [cards?.length]);
  
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
      setActiveCard(updatedCardData);
      setCards(cardsData);
      updateCard(cardsData);
    }
  };

  // Handle Card Delete
  const handleConfirm = async () => {
    const active_card_id = activeCard?.id;
    const cardsData = JSON.parse(JSON.stringify(cards));
    try {
      await deleteCard(active_card_id);
      const newData = cardsData.filter((card) => card.id !== active_card_id);
      setCards(newData);
      setOpenDeleteModal(false);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleClose = () => {
    setOpenDeleteModal(false);
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
          overflowX: "hidden",
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
          <Button
            style={{ ...customActionButtonStyle }}
            onClick={() => setOpenDeleteModal(true)}
          >
            <CancelCardIcon />
            <Typography sx={{ ...customActionTexStyle, textTransform: "none" }}>
              Cancel card
            </Typography>
          </Button>
          <DeleteCardModal
            open={openDeleteModal}
            handleClose={handleClose}
            handleConfirm={handleConfirm}
          />
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
          marginTop:!isMobile && "60px"
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
            <ListItemText primary="Recent Transactions" />
            <IconButton
              edge="end"
              aria-label="details"
              onClick={() => setShowRecentTransactions(!showRecentTransactions)}
            >
              {showRecentTransactions ? <UpArrowIcon /> : <DownArrowIcon />}
            </IconButton>
          </Box>
          {showRecentTransactions && (
            <Box style={{ width: "100%", overflowX: "hidden" }}>
              <Box
                style={{
                  padding: "1.5rem",
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              >
                {recent_transactions?.map((transaction, index) => {
                  const {
                    icon,
                    merchant,
                    description,
                    date,
                    amount,
                    iconColor,
                  } = transaction;
                  const isCredit = amount.trim().charAt(0) === "+";
                  return (
                    <Box
                      key={date+amount+index}
                      style={{
                        display: "flex",
                        borderBottom: "1px solid #F0F0F0",
                        padding: "0.5rem",
                      }}
                    >
                      <Box
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: iconColor,
                          padding: "10px",
                          minWidth: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}
                      >
                        {icon}
                      </Box>
                      <Box style={{ width: "80%" }}>
                        <Typography
                          style={{
                            fontSize: "16px",
                            color: theme.palette.grey[400],
                            fontWeight: "bold",
                          }}
                        >
                          {merchant}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "16px",
                            color: theme.palette.grey[300],
                          }}
                        >
                          {date}
                        </Typography>
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            marginTop: "10px",
                          }}
                        >
                          <BuisnessFinanceIcon
                            style={{
                              backgroundColor: theme.palette.primary[200],
                              width: "12px",
                              height: "8px",
                              borderRadius: "7px",
                              padding: "5px",
                            }}
                          />
                          <Typography
                            style={{ color: theme.palette.primary[200] }}
                          >
                            {description}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          width: "20%",
                          gap: 4,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          style={{
                            color: isCredit
                              ? theme.palette.secondary[100]
                              : "black",
                            fontWeight: "bold",
                          }}
                        >
                          {amount}
                        </Typography>
                        <Typography>
                          <NextIcon />
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box
                style={{
                  textAlign: "center",
                  backgroundColor: theme.palette.secondary[50],
                  color: theme.palette.secondary.main,
                  padding: "1.5rem",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  View All Transactionds
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MyDebitCard;
