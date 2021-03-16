import { Page } from "@/components/Page";
import { Fonts, theme } from "@/infrastructure/theme";
import "@/infrastructure/theme/nprogress.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const customTheme = extendTheme({
  colors: theme.colors,
  fonts: theme.fonts,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
};

export default MyApp;
