import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../styles/theme";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <Head>
        <title>Messit App</title>
        <meta
          name="description"
          content="Unmess the mess. See your hostel mess menu at the ease of a few clicks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.webp" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  );
}
