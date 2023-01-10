import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import GetStarted from "../components/GetStarted";
import MessType from "../components/MessType";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const messDetails = localStorage.getItem("mess");
    console.log("Fetched user's mess details");

    if (messDetails) {
      router.push("/dashboard");
    }
  }, [router]);

  return <GetStarted />;
}
