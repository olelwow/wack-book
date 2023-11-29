import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import LogOutAlert from "../AccountSettings/LogOutAlert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AccountMenu({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [logOutAlertOpen, setLogOutAlertOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log(anchorEl);
  };

  const GoToSettings = () => {
    navigate("/AccountSettingsPage");
  };

  const handleLogOutAlertOpen = () => {
    setLogOutAlertOpen(true);
  };

  const handleLogOutAlertClose = () => {
    setLogOutAlertOpen(false);
  };

  // useState definieras här istället för i LogOutAlert komponenten, skickas vidare som 'props' när man kallar komponenten.

  return (
    <React.Fragment>
      <Box
        id="accountSettingsContainer"
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <Tooltip title="Account settings">
          <IconButton
            id="accountButton"
            onClick={handleClick}
            size="large"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}>S</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={GoToSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {t("MainPage.2")}
        </MenuItem>
        <MenuItem onClick={handleLogOutAlertOpen}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {t("MainPage.3")}
        </MenuItem>
      </Menu>
      <LogOutAlert
        isOpen={logOutAlertOpen}
        onClose={handleLogOutAlertClose}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      {/* Här kan man skicka in så kallade props genom komponenten, som sedan kan användas i komponenten. */}
    </React.Fragment>
  );
}
// Lägg till state för inloggad eller ej.
