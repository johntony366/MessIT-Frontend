import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { DatePicker } from "./Datepicker/Datepicker";
import Navbar from "./Dashboard/Navbar";
import MessCard from "./Dashboard/MessCard";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [messType, setMessType] = useState("");

  const [menuData, setMenuData] = useState({
    breakfast: "",
    lunch: "",
    snacks: "",
    dinner: "",
  });
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const mess = localStorage.getItem("mess");
    if (!mess) {
      router.push("/");
    } else {
      setMessType(mess);
    }
  }, [router]);

  useEffect(() => {
    setLoading(true);

    // Simulating api call
    setTimeout(() => {
      setMenuData({
        breakfast: `Masala Dosa, Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, Bread, Butter, Jam Tea, Coffee, Milk, Moong Dal Sprout, Scrambled egg`,
        lunch: `Phulka, Dal Fry, Tandoori Chicken, Paneer, Amritsari, White  rice, Sambar, Rasam, Loose Curd, Fryums, Louki Channa Masala, Sweet: Gulab Jamun/ Kala jamun`,
        snacks: `Veg samosa, Sauce, Hot badam milk, coffee`,
        dinner: `Phulka, Dal Rajma, Idly, Sambar, Chutney, White Rice, Dhum Aloo/ Banaras Aloo Rasam, Loose Curd, Cream of Tomato, Fruits: Fresh Fruits`,
      });
      setLoading(false);
    }, 500);
  }, [selectedDate]);

  const onSelectedDay = (d: Date) => {
    setSelectedDate(d);
  };

  const dashboardBg = useColorModeValue("gray.200", "#1a202e");
  const dashboardColor = useColorModeValue("black", "white");

  const dateLabelColor = useColorModeValue("#2B6CB0", "#4299E1");
  const selectedDateColor = useColorModeValue("#2B6CB0", "#4299E1");

  return (
    <Flex minH="100vh" direction="column">
      <Navbar messType={messType} />
      <VStack
        h="100%"
        flexGrow={1}
        w="100vw"
        bg={dashboardBg}
        p={12}
        pt={2}
        color={dashboardColor}
      >
        <DatePicker
          getSelectedDay={onSelectedDay}
          selectDate={selectedDate}
          color={dateLabelColor}
        />

        {loading ? (
          <Flex grow={1} align="start" pt="25%">
            <Spinner />
          </Flex>
        ) : (
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            pt={"16px"}
            spacing={6}
            mx="auto"
            flexGrow={1}
          >
            <MessCard
              meal="Breakfast"
              menu={`Masala Dosa, Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, Bread, Butter, Jam Tea, Coffee, Milk, Moong Dal Sprout, Scrambled egg`}
              timing={"7:00 AM to 9:00 AM"}
              initial={{
                x: -50,
                y: -50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
            />
            <MessCard
              meal="Lunch"
              menu={`Phulka, Dal Fry, Tandoori Chicken, Paneer, Amritsari, White  rice, Sambar, Rasam, Loose Curd, Fryums, Louki Channa Masala, Sweet: Gulab Jamun/ Kala jamun`}
              timing={"12:30 PM to 2:30 PM"}
              initial={{
                x: +50,
                y: -50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
            />
            <MessCard
              meal="Snacks"
              menu={`Veg samosa, Sauce, Hot badam milk, coffee`}
              timing={"4:30 PM to 6:00 PM"}
              initial={{
                x: -50,
                y: +50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
            />
            <MessCard
              meal="Dinner"
              menu={`Phulka, Dal Rajma, Idly, Sambar, Chutney, White Rice, Dhum Aloo/ Banaras Aloo Rasam, Loose Curd, Cream of Tomato, Fruits: Fresh Fruits`}
              timing={"7:00 PM to 9:00 PM"}
              initial={{
                x: +50,
                y: +50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
            />
          </SimpleGrid>
        )}
      </VStack>
    </Flex>
  );
};

export default Dashboard;
