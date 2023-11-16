import React from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";

import { ReactComponent as FreezeCardIcon } from "./../../assets/icons/Freeze card.svg";
import { ReactComponent as SetSpendLimitIcon } from "./../../assets/icons/Set spend limit.svg";
import { ReactComponent as AddtoGpayIcon } from "./../../assets/icons/GPay.svg";
import { ReactComponent as ReplaceCardIcon } from "./../../assets/icons/Replace card.svg";
import { ReactComponent as CancelCardIcon } from "./../../assets/icons/Deactivate card.svg";
import DebitCard from "../ElementaryComponents/DebitCard";
import { useTheme } from "@emotion/react";

const MyDebitCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          width: { xs: "100%", md: "48%" },
          backgroundColor: isMobile && "#0C365A",
        }}
      >
        <DebitCard />
        {/* Action Buttons for the Card */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderRadius: "1rem",
            borderBottomLeftRadius: isMobile ? 0 : "1rem",
            borderBottomRightRadius: isMobile ? 0 : "1rem",
            marginTop: "2rem",
            padding: "1.25rem",
            backgroundColor: theme.palette.white[300],
          }}
        >
          <Button style={{ ...customActionButtonStyle }}>
            <FreezeCardIcon />
            <Typography sx={{ ...customActionTexStyle, textTransform: "none" }}>
              Freeze card
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
          border: isMobile && 'none',
       }}>
        <Card  style={{borderRadius: 0,}}>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <FreezeCardIcon />
              </ListItemIcon>
              <ListItemText primary="Card details" />
              <IconButton edge="end" aria-label="details">
                <SetSpendLimitIcon />
              </IconButton>
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Recent transactions" />
              <IconButton edge="end" aria-label="transactions">
                <SetSpendLimitIcon />
              </IconButton>
            </ListItem>
          </List>
        </Card>
      </Box>
    </Box>
  );
};

export default MyDebitCard;
