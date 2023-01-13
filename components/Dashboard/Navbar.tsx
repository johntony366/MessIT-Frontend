import { Flex, Heading, IconButton, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "./SideDrawer";

const Navbar = ({ messType }: { messType: String }) => {
  const navbarBg = useColorModeValue("gray.300", "#212121");
  const navbarColor = useColorModeValue("gray.700", "gray.100");
  // const navbarBorderColor = useColorModeValue("gray.400", "#424242");

  return (
    <Flex
      justify="center"
      align="center"
      bg={navbarBg}
      w="100vw"
      h="75px"
      color={navbarColor}
      boxShadow="md"
    >
      <SideDrawer />
      <Heading size="lg">{messType}</Heading>
    </Flex>
  );
};

export default Navbar;
