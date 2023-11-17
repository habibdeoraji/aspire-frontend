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
import { useTheme } from "@emotion/react";
import { Button } from "@material-ui/core";

const DebitCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [showCardNumber, setShowCardNumber] = useState(false);

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
      }}
      style={{margin:'1rem'}}
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
            top: 0,
            right: 0,
          }}
        >
          {showCardNumber ? <VisibilityIcon /> : <VisibilityIcon />}
          <Typography>
            {showCardNumber ? "Hide" : "Show"} card number{" "}
          </Typography>
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection:'column',
            justifyContent: "space-between",
            marginTop:'2rem',
          }}
        >
          <Typography
            style={{ fontSize: '1.5rem', fontWeight: 'bold',color:'white', marginBottom: '1.25rem' }}
          >
            Mark Henry
          </Typography>
          {/* Conditionally render the card number based on showCardNumber */}
          {showCardNumber ? (
            <Typography sx={{ fontSize: "1rem", fontWeight:'bold', color:'white' }}>
              1234 5678 9012 3456
            </Typography>
          ) : (
            <Typography sx={{ fontSize: "1rem", fontWeight:'bold', color:'white' }}>
              •••• •••• •••• 2020
            </Typography>
          )}
          <Box style={{ display:'flex',width:'200px', justifyContent:'space-between', marginTop:'1rem'}}>
          <Typography variant="body2" sx={{ fontSize: "1rem", fontWeight:'bold', color:'white' }}>
            Thru: 12/20 
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem", fontWeight:'bold', color:'white' }}>
            CVV: ***
          </Typography>
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
