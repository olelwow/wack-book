import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import DarkMode from "../MainContent/DarkMode";

const HeaderBeforeLogin = () => {
  return (
    <AppBar id="headerBar">
      <DarkMode />
      <Button id='wackBookTitle' >
        WackBook
        </Button>
    </AppBar>
  );
};

export default HeaderBeforeLogin;