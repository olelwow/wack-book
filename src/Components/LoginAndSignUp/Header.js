import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";

const HeaderBeforeLogin = () => {
  return (
    <AppBar id="headerBar">
      <Button id='wackBookTitle' >
        WackBook
        </Button>
    </AppBar>
  );
};

export default HeaderBeforeLogin;
