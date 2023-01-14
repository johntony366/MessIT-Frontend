import {
  Box,
  VStack,
  Image,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import React from "react";

function GetStarted() {
  const router = useRouter();

  const bg = useColorModeValue("white", "#1a202e");
  const color = useColorModeValue("black", "white");

  return (
    <Box h="100vh" w="100vw" bg={bg} p={12}>
      <VStack h="100%" justify="center" gap={6}>
        <Image
          src="/images/indexImage.png"
          alt="boy eating his meal"
          w={{ base: "250px", sm: "300px", md: "350px" }}
        />
        <Text
          color={color}
          fontSize={{ base: "36px", lg: "48px" }}
          as={motion.p}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          See your <b style={{ color: "#60a5fa" }}>Mess Menu</b> on The Go
        </Text>
        <Button
          as={motion.button}
          colorScheme="blue"
          fontSize={{ base: "16px", lg: "24px" }}
          p={{ base: 4, lg: 8 }}
          onClick={() => {
            router.push("/details");
          }}
          whileHover={{
            scale: 1.2,
          }}
        >
          Get Started →
        </Button>
      </VStack>
    </Box>
  );
}

export default GetStarted;
