import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

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
        <Heading size="lg">{meal}</Heading>
      </CardHeader>
      <CardBody py={2}>
        <Text>{menu}</Text>
      </CardBody>
      <CardFooter pt={2}>
        <Text>{timing}</Text>
      </CardFooter>
    </Card>
  );
};

export default MessCard;
