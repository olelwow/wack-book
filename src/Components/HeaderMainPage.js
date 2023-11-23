import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AccountMenu from "./AccountMenu";
import WackBookHome from "./WackBookHome";

const HeaderAfterLogin = () => {
  return (
    <AppBar id="loggedInHeaderBar">
      <WackBookHome />
      {/* <h1>WackBook</h1> */}
      <AccountMenu />
    </AppBar>
  );
};

export default HeaderAfterLogin;
