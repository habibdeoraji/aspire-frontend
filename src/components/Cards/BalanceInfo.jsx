import React from "react";
import { Typography, Box, useMediaQuery } from "@material-ui/core";
import CurrencyChip from "./CurrencyChip";
import { useTheme } from "@emotion/react";
import AddCardModal from "../Modals/AddCardModal";

const BalanceInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const balanceStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    padding: "20px",
  };

  const balanceTextStyle = {
    color: isMobile ? "white" : "black",
    margin: 0,
    fontSize: "14px",
    marginBottom: "8px",
  };

  const balanceAmountStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: isMobile ? "white" : "black",
  };



  return (
    <Box style={balanceStyle}>
      <Box>
        <Typography variant="body2" style={balanceTextStyle}>
          Account balance
        </Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <CurrencyChip />
          <Typography variant="h5" style={balanceAmountStyle}>
            3,000
          </Typography>
        </Box>
      </Box>
      <AddCardModal/>
    </Box>
  );
};

export default BalanceInfo;
