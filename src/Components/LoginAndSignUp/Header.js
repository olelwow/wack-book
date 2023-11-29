import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import LanguageSelector from "../Language/LanguageSelector";
import DarkMode from "../MainContent/DarkMode";


const HeaderBeforeLogin = () => {
  return (
    <AppBar id="headerBar">

      <LanguageSelector />
      <Button id="wackBookTitle">WackBook</Button>
      <DarkMode />
      <Button id='wackBookTitle' >
        WackBook
        </Button>
    </AppBar>
  );
};

export default HeaderBeforeLogin;