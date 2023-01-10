import { Box, VStack, Image, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

import React from "react";

const GetStarted = () => {
  const router = useRouter();

  return (
    <Box h="100vh" w="100vw" bg="#1a202e" p={12}>
      <VStack h="100%" justify="center" gap={6}>
        <Image
          src="/images/indexImage.png"
          alt="boy eating his meal"
          w={{ base: "250px", sm: "300px", md: "350px" }}
        />
        <Text color="white" fontSize="28px">
          See your <b style={{ color: "#60a5fa" }}>Mess Menu</b> on The Go
        </Text>
        <Button
          colorScheme={"blue"}
          onClick={() => {
            router.push("/details");
          }}
        >
          Get Started →
        </Button>
      </VStack>
    </Box>
  );
};

export default GetStarted;
