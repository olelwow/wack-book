import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const LogOutAlert = (props) => {
  // Notera props    ^
  const navigate = useNavigate();

  const handleAlertClose = () => {
    props.onClose();
  };

  const LogOutConfirm = () => {
    props.onClose();
    navigate("/");
  };

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      {
        /* Open och close styrs av props som kommer in via AccountMenu.js */ ...{}
      }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Du är påväg att logga ut, är du säker?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Medans du är utloggad kanske du missar viktiga inlägg från dina
          vänner.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={LogOutConfirm}>Logga ut</Button>
        {/* Loggar ut användaren */}
        <Button onClick={handleAlertClose}>Avbryt utloggning</Button>
        {/* Avbryter utloggning */}
      </DialogActions>
    </Dialog>
  );
};

export default LogOutAlert;
