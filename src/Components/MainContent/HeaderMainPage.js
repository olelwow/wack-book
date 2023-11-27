import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AccountMenu from "./AccountMenu";
import WackBookHome from "./WackBookHome";
import DarkMode from "./DarkMode";
import DarkModeButton from "./DarkModeButton";

const HeaderAfterLogin = ({isAuthenticated, setIsAuthenticated}) => {

  return (
    <AppBar id="loggedInHeaderBar">
      <DarkMode>
      <DarkModeButton />
      </DarkMode>
      <WackBookHome />

      <AccountMenu isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}/>
    </AppBar>
  );
};

export default HeaderAfterLogin;
