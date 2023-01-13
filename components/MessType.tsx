import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Select,
  Text,
  useColorModeValue,
  useRadio,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const MessType = () => {
  const router = useRouter();

  const bg = useColorModeValue("gray.200", "#1a202e");
  const color = useColorModeValue("black", "white");
  const textHighlightColor = useColorModeValue("#3182CE", "#60a5fa");
  const messCardBg = useColorModeValue("gray.100", "#1a202e");
  const hostelCheckedBg = useColorModeValue("blue.500", "teal.600");

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
          bg={messCardBg}
          _checked={{
            bg: hostelCheckedBg,
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
    const options = ["MH", "LH"];

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "hostel",
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
                  w={{ base: "64px", lg: "84px" }}
                />
                <Text fontSize={{ base: "16px", lg: "24px" }}>
                  Men&apos;s Hostel
                </Text>
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
                  w={{ base: "64px", lg: "84px" }}
                />
                <Text fontSize={{ base: "16px", lg: "24px" }}>
                  Ladies&apos; Hostel
                </Text>
              </VStack>
            </RadioCard>
          );
        })()}
      </HStack>
    );
  }

  return (
    <Box h="100vh" w="100vw" bg={bg} color={color} p={12}>
      <VStack h="100%" justify="center" gap={6}>
        <Text fontSize={{ base: "36px", lg: "48px" }}>
          First, we need some{" "}
          <b style={{ color: textHighlightColor }}>information</b>
        </Text>
        <Text fontSize={{ base: "16px", lg: "24px" }}>
          This is required to find you the right mess menu
        </Text>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            const hostel = e.target.hostel.value;
            const messType = e.target.messType.value;
            const messDetails = hostel + " - " + messType;
            localStorage.setItem("mess", messDetails);
            router.push("/dashboard");
          }}
        >
          <VStack gap={6}>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend" fontSize={{ base: "16px", lg: "24px" }}>
                Hostel type
              </FormLabel>
              <ChooseHostel />
            </FormControl>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend" fontSize={{ base: "16px", lg: "24px" }}>
                Mess type
              </FormLabel>
              <Select
                name="messType"
                defaultValue={""}
                fontSize={{ base: "16px", lg: "24px" }}
              >
                <option hidden disabled value="">
                  Select mess type
                </option>
                <option value="Special Mess">Special Mess</option>
                <option value="Veg Mess">Veg Mess</option>
                <option value="Non-Veg Mess">Non-Veg Mess</option>
              </Select>
            </FormControl>
            <Button
              colorScheme={"blue"}
              type="submit"
              fontSize={{ base: "16px", lg: "24px" }}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default MessType;
