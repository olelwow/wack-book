import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { LockReset } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";

const AccountSettings = ({ setLoggedInUser, loggedInUser }) => {
  const [newUserName, setNewUserName] = useState("");

  const changeUserName = () => {
    let existingData = JSON.parse(localStorage.getItem("users")) || [];

    console.log(existingData);
    let i;
    let user = {};

    for (i = 0; i < existingData.length; i++) {
      if (existingData[i][3] === loggedInUser) {
        const name = newUserName.split(".");
        user = {
          0: name[0],
          1: name[1],
          2: existingData[i][2],
          3: newUserName.toLowerCase(),
        };
      }
    }
    setLoggedInUser(newUserName);
    existingData[i - 1] = user;
    console.log(existingData);
    localStorage.setItem("users", JSON.stringify(existingData));
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
              label="Byt användarnamn"
              variant="standard"
              placeholder={loggedInUser}
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <Button
              size="small"
              onClick={changeUserName}
              sx={{
                color: "#070707",
                backgroundColor: "#cefac3",
                my: 1,
                marginLeft: "0.5em",
              }}
            >
              Byt användarnamn
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
              label="Byt lösenord"
              variant="standard"
            />
            <Button
              size="small"
              sx={{
                color: "#070707",
                backgroundColor: "#cefac3",
                my: 1,
                marginLeft: "1em",
              }}
            >
              Byt ditt lösenord
            </Button>
          </Box>
          <Button size="large" sx={{ color: "#070707", marginTop: "5em" }}>
            Ta bort konto
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AccountSettings;
// Skapa separat fil för funktion som sköter inloggning.
