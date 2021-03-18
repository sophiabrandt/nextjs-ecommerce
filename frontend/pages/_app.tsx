import { Page } from "@/components/Page";
import { Fonts, theme } from "@/infrastructure/theme";
import "@/infrastructure/theme/nprogress.css";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useApollo } from "@/lib/apollo";
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
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={customTheme}>
        <Fonts />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
