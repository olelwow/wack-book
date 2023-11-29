import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { LockReset } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormDialog from "./ChangePwOrUsnDialog";
import { useTranslation } from "react-i18next";

import { useState } from "react";

const AccountSettings = ({
  setLoggedInUser,
  loggedInUser,
  setIsAuthenticated,
  isAuthenticated,
}) => {
  const [newUserName, setNewUserName] = useState("");
  const [newPassWord, setNewPassWord] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container id="accountSettingsPage" maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#b6dcac",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: "0.5", textAlign: "center", my: 2 }}
          >
            {loggedInUser}
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginLeft: "2em" }}
          >
            <AccountCircle
              sx={{ color: "#070707", mr: 1, my: 0.5, fontSize: "26px" }}
            />
            <TextField
              sx={{ width: "20em", marginTop: "2em" }}
              id="changeUserName"
              label={t("AccountSettings.0")}
              variant="standard"
              placeholder={loggedInUser}
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <Button
              size="small"
              onClick={(e) => setAlertOpen(e.target)}
              sx={{
                color: "#070707",
                backgroundColor: "#cefac3",
                my: 1,
                marginLeft: "0.5em",
              }}
            >
              {t("AccountSettings.0")}
            </Button>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginLeft: "2em" }}
          >
            <LockReset
              sx={{ color: "#070707", mr: 1, my: 0.5, fontSize: "26px" }}
            />
            <TextField
              sx={{ width: "20em", marginTop: "2em" }}
              id="changePassWord"
              label={t("AccountSettings.1")}
              variant="standard"
              value={newPassWord}
              onChange={(e) => setNewPassWord(e.target.value)}
            />
            <Button
              size="small"
              onClick={(e) => setAlertOpen(e.target)}
              sx={{
                color: "#070707",
                backgroundColor: "#cefac3",
                my: 1,
                marginLeft: "1em",
              }}
            >
              {t("AccountSettings.1")}
            </Button>
          </Box>
          <Button
            onClick={(e) => setAlertOpen(e.target)}
            size="large"
            sx={{ color: "#070707", marginTop: "5em" }}
          >
            {t("AccountSettings.2")}
          </Button>
        </Box>
      </Container>
      <FormDialog
        isOpen={alertOpen}
        onClose={handleAlertClose}
        setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
        newPassWord={newPassWord}
        setNewPassWord={setNewPassWord}
        newUserName={newUserName}
        setNewUserName={setNewUserName}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        /* En jävla massa skit ovan */
      />
    </React.Fragment>
  );
};

export default AccountSettings;
