import { Flex, Heading, IconButton, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "./SideDrawer";

const Navbar = ({ messType }: { messType: String }) => {
  const navbarBg = useColorModeValue("gray.200", "#1a202e");
  const navbarColor = useColorModeValue("gray.700", "gray.100");
  const navbarBorderColor = useColorModeValue(
    "rgba(143, 149, 156, 0.28)",
    "rgba(143, 149, 156, 0.15)"
  );

  return (
    <Flex
      justify="center"
      align="center"
      bg={navbarBg}
      w="100vw"
      h="75px"
      color={navbarColor}
      borderBottom="1px solid"
      borderColor={navbarBorderColor}
    >
      <SideDrawer />
      <Heading size="lg">{messType}</Heading>
    </Flex>
  );
};

export default Navbar;
