import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  HStack,
  Image,
  RadioGroup,
  Select,
  Text,
  useRadio,
  useRadioGroup,
  UseRadioProps,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const MessType = () => {
  const router = useRouter();

  function RadioCard(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props?.children}
        </Box>
      </Box>
    );
  }

  function ChooseHostel() {
    const options = ["mens", "ladies"];

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "hostel",
      defaultValue: "mens",
    });

    const group = getRootProps();

    return (
      <HStack {...group}>
        {(() => {
          const value = options[0];
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              <VStack align="center">
                <Image
                  src={"/images/man.png"}
                  alt={"Animated picture of a man"}
                  w="64px"
                />
                <Text>Men&apos;s Hostel</Text>
              </VStack>
            </RadioCard>
          );
        })()}

        {(() => {
          const value = options[1];
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              <VStack align="center">
                <Image
                  src={"/images/woman.png"}
                  alt={"Animated picture of a woman"}
                  w="64px"
                />
                <Text>Ladies&apos; Hostel</Text>
              </VStack>
            </RadioCard>
          );
        })()}
      </HStack>
    );
  }

  return (
    <Box h="100vh" w="100vw" bg="#1a202e" p={12}>
      <VStack h="100%" justify="center" gap={6} color="white">
        <Text color="white" fontSize="28px">
          First, we need some <b style={{ color: "#60a5fa" }}>information</b>
        </Text>
        <Text>This is required to find you the right mess menu</Text>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            const hostel = e.target.hostel.value;
            const messType = e.target.messType.value;
            const messDetails = hostel + "-" + messType;
            localStorage.setItem("mess", messDetails);
            router.push("/dashboard");
          }}
        >
          <VStack gap={6}>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Hostel type</FormLabel>
              <ChooseHostel />
            </FormControl>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Mess type</FormLabel>
              <Select name="messType">
                <option value="special" style={{ color: "black" }}>
                  Special Mess
                </option>
                <option value="veg" style={{ color: "black" }}>
                  Veg Mess
                </option>
                <option value="nonveg" style={{ color: "black" }}>
                  Non-Veg Mess
                </option>
              </Select>
            </FormControl>
            <Button colorScheme={"blue"} type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default MessType;
