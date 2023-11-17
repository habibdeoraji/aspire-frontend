import React, { useState } from "react";
import {
  Card,
  Typography,
  IconButton,
  CardContent,
  Box,
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as VisibilityIcon } from "./../../assets/icons/remove_red_eye-24px.svg";
import { ReactComponent as VisaLogo } from "./../../assets/icons/Visa Logo.svg";
import { ReactComponent as AspireLogo } from "./../../assets/icons/Aspire Logo-1.svg";
import { useTheme } from "@emotion/react";
import { Button } from "@material-ui/core";
import ShowCardNumber from "./ShowCardNumber";

const DebitCard = ({ cardDetails }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showCardNumber, setShowCardNumber] = useState(false);
  const { id, name, card_number, cvv, expiry_date, card_frozen_status } =
    cardDetails;

  return (
    <Card
      sx={{
        background: theme.palette.secondary.main,
        color: "white",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "none",
        margin: isMobile && "1.5rem",
        position: "relative",
        opacity: card_frozen_status ? "50%" : "100%",
        cursor: card_frozen_status ? "pointer" : "default",
      }}
      style={{ margin: "0 1rem" }}
    >
      <CardContent
        style={{
          position: "relative",
          height: "220px",
          boxSizing: "border-box",
        }}
      >
        <Button
          onClick={() => setShowCardNumber(!showCardNumber)}
          color="inherit"
          style={{
            backgroundColor: "white",
            textTransform: "none",
            borderRadius: "6px",
            borderBottomRightRadius: 0,
            position: "absolute",
            top: "-18px",
            right: "-18px",
            width: "190px",
            display: "flex",
            justifyContent: "space-between",
            color: theme.palette.secondary.main,
          }}
        >
          {showCardNumber ? (
            <VisibilityIcon style={{ color: theme.palette.secondary.main }} />
          ) : (
            <VisibilityIcon />
          )}
          <Typography
            style={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
          >
            {showCardNumber ? "Hide" : "Show"} card number{" "}
          </Typography>
        </Button>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "0.5rem",
          }}
        >
          <AspireLogo />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Typography
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "1.25rem",
            }}
          >
            {name}
          </Typography>
          <ShowCardNumber
            card_number={card_number}
            show_number={showCardNumber}
          />
          <Box
            style={{
              display: "flex",
              width: "200px",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <Typography
              sx={{ fontSize: "1rem" }}
              style={{ color: "white", fontWeight: "bold" }}
            >
              Thru: {expiry_date}
            </Typography>
            <Box
              style={{ color: "white", display: "flex" }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: "1rem", marginRight:'6px' }}>
                CVV:
              </Typography>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {showCardNumber ? cvv : "***"}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <VisaLogo />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DebitCard;
