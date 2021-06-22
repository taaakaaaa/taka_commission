import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import dynamic from 'next/dynamic'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export const AppBar = dynamic(() => import('../src/appbar'), {
  ssr: false,
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A3B5FF",
    },
    secondary: {
      main: "#DD5175",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
