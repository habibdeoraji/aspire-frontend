import React from "react";
import { Typography, Button, Box } from "@material-ui/core";
import { ReactComponent as AddIcon } from "./../../assets/icons/add.svg";
import CurrencyChip from "./CurrencyChip";
import { useTheme } from "@emotion/react";

function BalanceInfo() {
  const theme = useTheme()

  const balanceStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    padding: "20px",
  };

  const balanceTextStyle = {
    color: "black",
    margin: 0,
    fontSize: "14px",
    marginBottom:'8px'
  };

  const balanceAmountStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem",
  };

  const buttonStyle = {
    backgroundColor: theme.palette.primary[200],
      color: theme.palette.common.white,
    fontWeight:'bold',
  };

  return (
    <Box style={balanceStyle}>
      <Box>
        <Typography variant="body2" style={balanceTextStyle}>
          Available balance
        </Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <CurrencyChip />
          <Typography variant="h5" style={balanceAmountStyle}>
            3,000
          </Typography>
        </Box>
      </Box>
      <Button variant="outlined" startIcon={<AddIcon />} style={buttonStyle}>
          New card
        </Button>
    </Box>
  );
}

export default BalanceInfo;
