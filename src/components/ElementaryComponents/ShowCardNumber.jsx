import { Typography, Box } from "@mui/material";
import React from "react";

const HiddenDots = () => {
  return (
    <Typography style={{ fontSize: "1.572rem",marginRight:'1rem', color:'white' }}>••••</Typography>
  );
};
const ShowCardNumber = ({ card_number, show_number, is_cvv = false }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center", gap: 2, height:'2rem', color:'white' }}>
      {card_number?.map((number, index) => {
        const hideNumber = !show_number && index !== 3;

        return (
          <Box key={index}>
            {hideNumber ? (
              <HiddenDots />
            ) : (
              <Typography
                sx={{ fontSize: "1rem", fontWeight: "bold", color: "white", marginRight:'1rem' }}
              >
                {number}{" "}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default ShowCardNumber;
