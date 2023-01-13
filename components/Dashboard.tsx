import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { DatePicker } from "./Datepicker/Datepicker";
import Navbar from "./Dashboard/Navbar";
import MessCard from "./Dashboard/MessCard";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [messType, setMessType] = useState("");
  const router = useRouter();
  console.log(selectedDate);

  useEffect(() => {
    const mess = localStorage.getItem("mess");
    if (!mess) {
      router.push("/");
    } else {
      setMessType(mess);
    }
  }, [router]);

  const onSelectedDay = (d: Date) => {
    setSelectedDate(d);
  };

  return (
    <>
      <Navbar messType={messType} />
      <Box h="100%" w="100vw" bg="#1a202e" p={12} pt={2} color="white">
        <DatePicker getSelectedDay={onSelectedDay} selectDate={selectedDate} />

        <VStack mt={8} spacing={6} maxW={"650px"} mx="auto">
          <MessCard
            meal="Breakfast"
            menu={`Masala Dosa, Sambar, Chutney, Fresh Juice, Cold Milk, Chocos, Bread, Butter, Jam Tea, Coffee, Milk, Moong Dal Sprout, Scrambled egg`}
            timing={"7:00 AM to 9:00 AM"}
          />
          <MessCard
            meal="Lunch"
            menu={`Phulka, Dal Fry, Tandoori Chicken, Paneer, Amritsari, White  rice, Sambar, Rasam, Loose Curd, Fryums, Louki Channa Masala, Sweet: Gulab Jamun/ Kala jamun`}
            timing={"12:30 PM to 2:30 PM"}
          />
          <MessCard
            meal="Snacks"
            menu={`Veg samosa, Sauce, Hot badam milk, coffee`}
            timing={"4:30 PM to 6:00 PM"}
          />
          <MessCard
            meal="Dinner"
            menu={`Phulka, Dal Rajma, Idly, Sambar, Chutney, White Rice, Dhum Aloo/ Banaras Aloo Rasam, Loose Curd, Cream of Tomato, Fruits: Fresh Fruits`}
            timing={"7:00 PM to 9:00 PM"}
          />
        </VStack>
      </Box>
    </>
  );
};

export default Dashboard;
