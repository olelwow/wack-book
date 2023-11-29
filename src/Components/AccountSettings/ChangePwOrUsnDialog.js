import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import GenerateCaesarCipher from "../LoginAndSignUp/CaesarCipher";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FormDialog({
  isOpen,
  onClose,
  setLoggedInUser,
  loggedInUser,
  newPassWord,
  setNewPassWord,
  newUserName,
  setNewUserName,
  setIsAuthenticated,
  isAuthenticated,
}) {
  const { t, i18n } = useTranslation();

  const defaultUSNMessage = `${t("AccountSettings.4")}`;
  const defaultPWMessage = `${t("AccountSettings.5")}`;
  const defaultDeleteAccountMessage = `${t("AccountSettings.6")}`;

  const [passwordCheck, setPasswordCheck] = useState("");
  const [userNameMessage, setUserNameMessage] = useState(defaultUSNMessage);
  const [passWordMessage, setPassWordMessage] = useState(defaultPWMessage);
  const [deleteAccountMessage, setDeleteAccountMessage] = useState(
    defaultDeleteAccountMessage
  );
  const navigate = useNavigate();

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
      if (
        existingData[i][3] === loggedInUser &&
        encryptedPassword === existingData[i][2]
      ) {
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
      } else {
        existingData[i] = user;
      }
      localStorage.setItem("users", JSON.stringify(existingData));
      // Sparar i localStorage.
      onClose();
      setNewPassWord("");
    } else {
      setPassWordMessage(t("AccountSettings.7"));
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
      if (
        existingData[i][3] === loggedInUser &&
        encryptedPassword === existingData[i][2]
      ) {
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
      setUserNameMessage(t("AccountSettings.7"));
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
    // eftersom i och user används senare deklareras den utanför for-loopen.

    for (let i = 0; i < existingData.length; i++) {
      if (
        existingData[i][3] === loggedInUser &&
        encryptedPassword === existingData[i][2]
      ) {
        existingData.splice(i, 1);
        localStorage.setItem("users", JSON.stringify(existingData));
        setIsAuthenticated(false);
        navigate("/");
        break;
      } else {
        setDeleteAccountMessage(t("AccountSettings.7"));
      }
    }
  };
  // Tar bort kontot

  if (newUserName !== "") {
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>{t("AccountSettings.0")}</DialogTitle>
        <DialogContent>
          <DialogContentText>{userNameMessage}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("AccountSettings.3")}
            type="password"
            fullWidth
            variant="standard"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={changeUserName}>{t("AccountSettings.8")}</Button>
          <Button onClick={onClose}>{t("AccountSettings.9")}</Button>
        </DialogActions>
      </Dialog>
    );
  } else if (newUserName === "" && newPassWord === "") {
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>{t("AccountSettings.2")}</DialogTitle>
        <DialogContent>
          <DialogContentText>{deleteAccountMessage}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("AccountSettings.3")}
            type="password"
            fullWidth
            variant="standard"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteAccount}>{t("AccountSettings.2")}</Button>
          <Button onClick={onClose}>{t("AccountSettings.9")}</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{t("AccountSettings.1")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{passWordMessage}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={t("AccountSettings.3")}
          type="password"
          fullWidth
          variant="standard"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={changePassWord}>{t("AccountSettings.8")}</Button>
        <Button onClick={onClose}>{t("AccountSettings.9")}</Button>
      </DialogActions>
    </Dialog>
  );
}
