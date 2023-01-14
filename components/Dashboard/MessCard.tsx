import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TimeIcon } from "@chakra-ui/icons";

const MessCard = ({
  meal,
  menu,
  timing,
  initial,
  animate,
}: {
  meal: "Breakfast" | "Lunch" | "Snacks" | "Dinner";
  menu: String;
  timing: String;
  initial: any;
  animate: any;
}) => {
  const cardBg = useColorModeValue("blue.100", "#2d3748");
  const cardColor = useColorModeValue("black", "white");

  return (
    <Card
      variant="elevated"
      bg={cardBg}
      borderInlineStart="6px solid #3669ee"
      maxW={"500px"}
      color={cardColor}
      as={motion.div}
      initial={initial}
      animate={animate}
    >
      <CardHeader pb={2}>
        <Heading fontSize={{ base: "2xl", lg: "3xl" }}>{meal}</Heading>
      </CardHeader>
      <CardBody py={2}>
        <Text fontSize={{ base: "lg", lg: "xl" }}>{menu}</Text>
      </CardBody>
      <CardFooter pt={2}>
        <HStack>
          <TimeIcon />
          <Text fontSize={{ base: "lg", lg: "xl" }}>{timing}</Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default MessCard;
