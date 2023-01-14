import React, { useEffect } from "react";
import { useRouter } from "next/router";
import GetStarted from "../components/GetStarted";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const messDetails = localStorage.getItem("mess");

    if (messDetails) {
      router.push("/dashboard");
    }
  }, [router]);

  return <GetStarted />;
}
