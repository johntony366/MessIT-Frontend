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

const MessCard = ({
  meal,
  menu,
  timing,
}: {
  meal: "Breakfast" | "Lunch" | "Snacks" | "Dinner";
  menu: String;
  timing: String;
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
