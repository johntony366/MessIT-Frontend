import React from "react";

import { HamburgerIcon } from "@chakra-ui/icons";

import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
  Button,
  DrawerCloseButton,
  VStack,
  Heading,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import ToggleColorMode from "./ToggleColorMode";

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <IconButton
        position="absolute"
        left="4"
        zIndex="10"
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        variant="outline"
        borderColor={"rgba(0,0,0,0)"}
        _hover={{
          bg: "#616161",
        }}
        onClick={onOpen}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size="sm" placement="left">
        <DrawerOverlay />
        <DrawerContent bg="#212121" color="white">
          <DrawerCloseButton />
          {/* <DrawerHeader borderBottomWidth="1px">
            <Heading size="lg">I am the Header!</Heading>
          </DrawerHeader> */}
          <DrawerBody>
            <Heading size="lg" mt={4}>
              General
            </Heading>
            <VStack mt={4} mb={16} align="start">
              <Button
                w="100%"
                bg="#212121"
                _hover={{ bg: "#616161" }}
                justifyContent="flex-start"
                onClick={() => {
                  if (localStorage) {
                    localStorage.removeItem("mess");
                    router.push("/");
                  }
                }}
              >
                Reset
              </Button>
            </VStack>
            <Heading size="lg" mt={4}>
              Preferences
            </Heading>
            <VStack mt={4} mb={16} align="start" pl={4}>
              <Flex justify="start" align="center" gap={8}>
                <Text textAlign="left">Theme</Text>
                <ToggleColorMode />
              </Flex>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
