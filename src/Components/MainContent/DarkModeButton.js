import React, { useContext } from "react";
import {
    Box,
    IconButton,
    useTheme,
} from "@mui/material";
import { MUIWrapperContext } from "./DarkMode";

export default function DarkModeButton() {
    const theme = useTheme();
    const muiUtils = useContext(MUIWrapperContext);

    return (
        <Box>
            <IconButton
                sx={{ fontSize: "1rem", position: "fixed", left: "0", paddingTop: "1px" }}
                onClick={muiUtils.toggleColorMode}
                color="inherit"
                disableTouchRipple
                disableRipple
            >
                {theme.palette.mode === "dark" ? (
                    <span role="img" aria-label="sun">
                        Go Light ☀️
                    </span>
                ) : (
                    <span role="img" aria-label="moon">
                        Go Dark 🌚
                    </span>
                )}
            </IconButton>
        </Box>
    );
}