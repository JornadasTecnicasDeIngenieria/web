import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "../styles/createEmotionCache";
import { Analytics } from "@vercel/analytics/next";

import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import theme from "../styles/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Head>
        <title>JTI - Jornadas Técnicas de Ingeniería</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
