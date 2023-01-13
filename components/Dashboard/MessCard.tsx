import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
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
  return (
    <Card
      variant="elevated"
      color="white"
      bg="#2d3748"
      borderInlineStart="6px solid #3669ee"
      w="100%"
    >
      <CardHeader pb={2}>
        <Heading color="white" size="lg">
          {meal}
        </Heading>
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
