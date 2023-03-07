import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DimsumList from "../components/DimsumList";
import About from "@/components/About";
import Featured from "../components/Featured";
import { useState } from "react";
import Add from "@/components/Add";
import AddButton from "@/components/AddButton";
import OurMission from "@/components/OurMission";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ dimsumList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <>
      <Head>
        <title>dimsum | Le spécialiste des dimsum</title>
        <meta
          name="description"
          content="Meilleur restaurant de Dim Sum sur Paris"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose}/>}
      <About/>
      <DimsumList dimsumList={dimsumList} />
      <OurMission/>
      {!close && <Add setClose={setClose}/>}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("/api/products");
  return {
    props: {
      dimsumList: res.data,
      admin,
    },
  };
};
