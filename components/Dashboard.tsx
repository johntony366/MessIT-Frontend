import { useRouter } from "next/router";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  console.log(router.query.messDetails);

  return <div>Dashboard</div>;
};

export default Dashboard;
