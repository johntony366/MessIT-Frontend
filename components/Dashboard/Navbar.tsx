import { Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "./SideDrawer";

const Navbar = ({ messType }: { messType: String }) => {
  return (
    <Flex
      justify="center"
      align="center"
      bg="#212121"
      w="100vw"
      h="75px"
      color="white"
      borderBottom={"2px solid #424242"}
    >
      <SideDrawer />
      <Heading size="lg">{messType}</Heading>
    </Flex>
  );
};

export default Navbar;
