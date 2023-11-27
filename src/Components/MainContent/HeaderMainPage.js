import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AccountMenu from "./AccountMenu";
import WackBookHome from "./WackBookHome";
import DarkMode from "./DarkMode";
import DarkModeButton from "./DarkModeButton";

const HeaderAfterLogin = () => {
  return (
    <AppBar id="loggedInHeaderBar">
      <DarkMode>
      <DarkModeButton />
      </DarkMode>
      <WackBookHome />
      <AccountMenu />
    </AppBar>
  );
};

export default HeaderAfterLogin;
