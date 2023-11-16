import React from "react";
import { Box } from "@material-ui/core";

const CurrencyChip = () => {
  const chipStyle = {
    backgroundColor: "#01D167", 
    boxSizing: "border-box",
    borderRadius: "6px", 
    padding: "10px 15px", 
    display: "inline-flex", 
    alignItems: "center", 
    justifyContent: "center", 
    color: "white", 
    fontWeight: "bold", 
    fontSize: "0.825rem", 
    width: "40px",
      height: "24px",
    marginRight:'12px'
  };

  return <Box style={chipStyle}>$$</Box>;
};

export default CurrencyChip;
