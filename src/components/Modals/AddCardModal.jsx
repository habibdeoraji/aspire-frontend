import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as AddIcon } from "./../../assets/icons/add.svg";
import { addCard } from "../../services/mockApiService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
    p: 4,
  borderRadius:'12px'
};

const AddCardModal = ({reftechCards}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [cardName, setCardcardName] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
      addCard(cardName)
      reftechCards();
    handleClose();
  };

  const buttonStyle = isMobile
    ? {
        // backgroundColor: theme.palette.primary[100],
        color: theme.palette.primary[100],
        fontWeight: "bold",
        border: "none",
      }
    : {
        backgroundColor: theme.palette.primary[200],
        color: theme.palette.common.white,
        fontWeight: "bold",
      };

  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant="outlined"
        startIcon={
          <AddIcon style={{ color: isMobile && theme.palette.primary[100] }} />
        }
        style={{ ...buttonStyle, textTransform: "none" }}
      >
        New card
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Enter the card name
          </Typography>
          <TextField
            id="modal-description"
            label="Card name"
            value={cardName}
            onChange={(e) => setCardcardName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleSave} variant="contained" color="primary" style={{marginTop:'8px'}}>
            Add
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddCardModal;
