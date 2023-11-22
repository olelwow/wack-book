import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import GenerateCaesarCipher from "./CaesarCipher";

export default function FormDialog({
  changeThis,
  changeTo,
  isOpen,
  onClose,
  setLoggedInUser,
  loggedInUser,
  newPassWord,
  setNewPassWord,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changePassWord = () => {
    const { Encrypt } = GenerateCaesarCipher(
      13,
      "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+;:,.<>?/".split("")
      // Tar in möjliga tecken genom strängen ovan, och flyttar x antal steg
      // beroende på skiftvärdet, i detta fall 13 steg.
    );

    let existingData = JSON.parse(localStorage.getItem("users")) || [];

    let i;
    let user = {};
    // eftersom i och user används senare deklareras den utanför for-loopen.

    for (i = 0; i < existingData.length; i++) {
      if (existingData[i][3] === loggedInUser) {
        user = {
          0: existingData[i][0],
          1: existingData[i][1],
          2: Encrypt(newPassWord),
          3: existingData[i][3],
        };
      }
    }
    existingData[i - 1] = user;
    // Ersätter gamla lösenordet med det nya.
    console.log("password changed");

    localStorage.setItem("users", JSON.stringify(existingData));
    // Sparar i localStorage.
    setNewPassWord("");
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Ändra lösenord</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Du är påväg att ändra ditt {changeThis} till {changeTo}. Skriv in ditt
          lösenord för att fortsätta.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Lösenord"
          type="password"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Ändra</Button>
        <Button onClick={onClose}>Avbryt</Button>
      </DialogActions>
    </Dialog>
  );
}
