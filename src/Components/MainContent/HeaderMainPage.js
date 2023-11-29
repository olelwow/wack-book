import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AccountMenu from "./AccountMenu";
import WackBookHome from "./WackBookHome";
import LanguageSelector from "../Language/LanguageSelector"
import DarkMode from "./DarkMode";


const HeaderAfterLogin = ({isAuthenticated, setIsAuthenticated}) => {

  return (
    <AppBar id="loggedInHeaderBar">
      <LanguageSelector />
      <DarkMode />
      <WackBookHome />

      <AccountMenu isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}/>
    </AppBar>
  );
};

export default HeaderAfterLogin;
