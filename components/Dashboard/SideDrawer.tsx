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
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import ToggleColorMode from "./ToggleColorMode";

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const iconColor = useColorModeValue("black", "white");
  const iconHoverColor = useColorModeValue("gray.200", "");

  const drawerBg = useColorModeValue("gray.100", "#212121");
  const drawerColor = useColorModeValue("gray.700", "white");
  const drawerButtonHoverBg = useColorModeValue("gray.300", "#616161");

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
        color={iconColor}
        _hover={{
          bg: iconHoverColor,
        }}
        onClick={onOpen}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size="sm" placement="left">
        <DrawerOverlay />
        <DrawerContent bg={drawerBg} color={drawerColor}>
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
                bg="transparent"
                _hover={{ bg: drawerButtonHoverBg }}
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
