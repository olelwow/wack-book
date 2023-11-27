  import React, { createContext, useMemo, useState, useEffect } from "react";
  import {
    createTheme,
    ThemeProvider,
    PaletteMode,
    Direction,
  } from "@mui/material";
  import rtlPlugin from "stylis-plugin-rtl";
  import { prefixer } from "stylis";
  import { CacheProvider } from "@emotion/react";
  import createCache from "@emotion/cache";
  
  export const MUIWrapperContext = createContext({
    toggleColorMode: () => {},
    changeDirection: (dir) => {},
  });
  
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  
  const emptyCache = createCache({
    key: "meaningless-key",
  });
  
  export default function DarkMode({ children }) {
    const [mode, setMode] = useState("light");
    const [direction, setDirection] = useState("ltr");
    
  
    const muiWrapperUtils = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
        changeDirection: (dir) => {
          setDirection(dir);
        },
      }),
      []
    );
  
    useEffect(() => {
      document.dir = direction;
    }, [direction]);
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
          direction,
        }),
      [mode, direction]
    );
  
    return (
      <CacheProvider value={direction === "rtl" ? cacheRtl : emptyCache}>
        <MUIWrapperContext.Provider value={muiWrapperUtils}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MUIWrapperContext.Provider>
      </CacheProvider>
    );
  }


