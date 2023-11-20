import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AccountSettings = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container id="accountSettingsPage" maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#b6dcac",
            height: "40vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginLeft: "2em" }}
          >
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              sx={{ width: "20em", marginTop: "2em" }}
              id="changeUserName"
              label="Byt användarnamn"
              variant="standard"
            />
            <Button size="small" sx={{ color: "#070707" }}>
              Byt användarnamn
            </Button>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginLeft: "2em" }}
          >
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              sx={{ width: "20em", marginTop: "2em" }}
              id="changePassWord"
              label="Byt lösenord"
              variant="standard"
            />
            <Button size="small" sx={{ color: "#070707" }}>
              Byt lösenord
            </Button>
          </Box>
          <Button size="large" sx={{ color: "#070707", marginTop: "5em"}}>
            Ta bort konto
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AccountSettings;
// Skapa separat fil för funktion som sköter inloggning.
