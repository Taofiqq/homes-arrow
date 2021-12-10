import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <ChakraProvider>
      <Box textAlign="center" p="5" color="red.600">
        2021. Realtor, Inc.
      </Box>
    </ChakraProvider>
  );
};

export default Footer;
