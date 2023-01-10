import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

// @ts-ignore
import DatePicker from "../components/DatePicker";

const Dashboard = () => {
  const router = useRouter();
  console.log(router.query.messDetails);

  useEffect(() => {
    // @ts-ignore
    document.querySelector(".scroll-head").style.backgroundColor = "#1a202e;";
  }, []);

  const onSelectedDay = (d: Date) => {
    console.log(d);
  };

  return (
    <Box h="100vh" w="100vw" bg="#1a202e" p={12} color="white">
      <DatePicker
        selectedDay={onSelectedDay}
        enableScroll={false}
        enableDays={180}
        enableDaysBefore={2}
      />
    </Box>
  );
};

export default Dashboard;
