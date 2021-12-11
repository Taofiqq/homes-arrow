import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <ChakraProvider>
      <Box
        textAlign="center"
        p="5"
        color="gray.600"
        borderTop="1px"
        borderColor="gray.100"
      >
        © 2021 Homes Arrow, Inc.
      </Box>
    </ChakraProvider>
  );
};

export default Footer;
