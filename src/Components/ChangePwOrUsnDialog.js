import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import GenerateCaesarCipher from "./CaesarCipher";
import { useState } from "react";

export default function FormDialog({
  isOpen,
  onClose,
  setLoggedInUser,
  loggedInUser,
  newPassWord,
  setNewPassWord,
  newUserName,
  setNewUserName,
}) {
  
  const defaultUSNMessage = `Du är påväg att ändra ditt användarnamn... Skriv in ditt lösenord för att fortsätta.`;
  const defaultPWMessage = `Du är påväg att ändra ditt lösenord... Skriv in ditt gamla lösenord för att fortsätta.`;
  const defaultDeleteAccountMessage = `Du är påväg att ta bort ditt konto... Skriv in ditt lösenord för att bekräfta.`;

  const [passwordCheck, setPasswordCheck] = useState("");
  const [userNameMessage, setUserNameMessage] = useState(defaultUSNMessage); 
  const [passWordMessage, setPassWordMessage] = useState(defaultPWMessage);
  const [deleteAccountMessage, setDeleteAccountMessage] = useState(defaultDeleteAccountMessage);



  const changePassWord = () => {
   
    const { Encrypt } = GenerateCaesarCipher(
      13,
      "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+;:,.<>?/".split("")
      // Tar in möjliga tecken genom strängen ovan, och flyttar x antal steg
      // beroende på skiftvärdet, i detta fall 13 steg.
    );

    let existingData = JSON.parse(localStorage.getItem("users")) || [];

    let i;
    let user;
    const encryptedPassword = Encrypt(passwordCheck);
    // eftersom i och user används senare deklareras den utanför for-loopen.

    for (i = 0; i < existingData.length; i++) {
      if (existingData[i][3] === loggedInUser && encryptedPassword === existingData[i][2]) {
        user = {
          0: existingData[i][0],
          1: existingData[i][1],
          2: Encrypt(newPassWord),
          3: existingData[i][3],
        };
      }
    }
    if (user !== undefined) {
      
      if (existingData.length > 0) {
      existingData[i - 1] = user;
      // Ersätter gamla användaren med det nya namnet. Samma lösenord fortf.
      }
      else {
        existingData[i] = user;
      }
      localStorage.setItem("users", JSON.stringify(existingData));
      // Sparar i localStorage.
      onClose();
      setNewPassWord("");
      } else {
        setPassWordMessage("Du skrev fel lösenord!");
      }
  };

  const changeUserName = () => {

    const { Encrypt } = GenerateCaesarCipher(
      13,
      "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+;:,.<>?/".split("")
      // Tar in möjliga tecken genom strängen ovan, och flyttar x antal steg
      // beroende på skiftvärdet, i detta fall 13 steg.
    );

    let existingData = JSON.parse(localStorage.getItem("users")) || [];
    const encryptedPassword = Encrypt(passwordCheck);
    let i;
    let user;
    // eftersom i och user används senare deklareras den utanför for-loopen.

    for (i = 0; i < existingData.length; i++) {
      if (existingData[i][3] === loggedInUser && encryptedPassword === existingData[i][2]) {
        const name = newUserName.split(".");
        user = {
          0: name[0],
          1: name[1],
          2: existingData[i][2],
          3: newUserName.toLowerCase(),
        };
        
      } else {
        console.log(user);
        
      }
      
    }
    if (user !== undefined) {
    setLoggedInUser(newUserName);
    
    existingData[i - 1] = user;
    // Ersätter gamla användaren med det nya namnet. Samma lösenord fortf.

    localStorage.setItem("users", JSON.stringify(existingData));
    // Sparar i localStorage.
    onClose();
    setNewUserName("");
    } else {
      setUserNameMessage("Du skrev fel lösenord!");
    }
    
  };

  const deleteAccount = () => {
    const { Encrypt } = GenerateCaesarCipher(
      13,
      "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+;:,.<>?/".split("")
      // Tar in möjliga tecken genom strängen ovan, och flyttar x antal steg
      // beroende på skiftvärdet, i detta fall 13 steg.
    );

    let existingData = JSON.parse(localStorage.getItem("users")) || [];
    const encryptedPassword = Encrypt(passwordCheck);

    


    
  }
  

  if (newUserName !== "") {
    return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Ändra lösenord</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {userNameMessage}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Lösenord"
          type="password"
          fullWidth
          variant="standard"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={changeUserName}>Ändra</Button>
        <Button onClick={onClose}>Avbryt</Button>
      </DialogActions>
    </Dialog>
    );
  }
  else if (newUserName === "" && newPassWord === "") {
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Ändra lösenord</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {deleteAccountMessage}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Lösenord"
            type="password"
            fullWidth
            variant="standard"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={changeUserName}>Ändra</Button>
          <Button onClick={onClose}>Avbryt</Button>
        </DialogActions>
      </Dialog>
      );
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Ändra lösenord</DialogTitle>
      <DialogContent>
        <DialogContentText>
        {passWordMessage}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Lösenord"
          type="password"
          fullWidth
          variant="standard"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={changePassWord}>Ändra</Button>
        <Button onClick={onClose}>Avbryt</Button>
      </DialogActions>
    </Dialog>
  );
}
