import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AccountMenu from "./AccountMenu";

const HeaderAfterLogin = () => {
  return (
    <AppBar id="loggedInHeaderBar">
      <h1>WackBook</h1>
      <AccountMenu />
    </AppBar>
  );
};

export default HeaderAfterLogin;
