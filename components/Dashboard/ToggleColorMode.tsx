import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={() => {
        toggleColorMode();
      }}
    >
      {colorMode === "dark" ? (
        <SunIcon color="yellow.300" />
      ) : (
        <MoonIcon color="#1a202a" />
      )}
    </Button>
  );
}

export default ToggleColorMode;
