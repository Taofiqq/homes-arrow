import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Homes Arrow </title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
