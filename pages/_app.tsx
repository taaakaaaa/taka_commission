import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import DrawerCard from "../src/drawer";

export const AppBar = dynamic(() => import("../src/appbar"), {
  ssr: false,
});

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#A3B5FF",
    },
    secondary: {
      main: "#DD5175",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar onCardClick={() => setOpen(true)} />
        <Component {...pageProps} />
        <DrawerCard onCardClose={() => setOpen(false)} open={open} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
