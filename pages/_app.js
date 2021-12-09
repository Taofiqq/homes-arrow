import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Layout>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Layout>
    </>
  );
}

export default MyApp;
