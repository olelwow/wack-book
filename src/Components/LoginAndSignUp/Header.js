import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import LanguageSelector from "../Language/LanguageSelector";

const HeaderBeforeLogin = () => {
  return (
    <AppBar id="headerBar">
      <LanguageSelector currentPage="/" />
      <Button id="wackBookTitle">WackBook</Button>
    </AppBar>
  );
};

export default HeaderBeforeLogin;
