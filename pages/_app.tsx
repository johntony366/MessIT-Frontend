import "../styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{
          opacity: 0,
          x: "100vw",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: "-100vw",
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <Head>
          <title>Messit App</title>
          <meta
            name="description"
            content="Unmess the mess. See your hostel mess menu at the ease of a few clicks"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/favicon.webp" />
        </Head>
        <ChakraProvider>
          <Box w="100vw">
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </motion.div>
    </AnimatePresence>
  );
}
