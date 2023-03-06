import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DimsumList from "../components/DimsumList";
import Featured from "../components/Featured";

const inter = Inter({ subsets: ["latin"] });

export default function Home({dimsumList}) {
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
      <Featured/>
      <DimsumList dimsumList={dimsumList}/>
    </>
  );
}

export const getServerSideProps = async() => {
  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props:{
      dimsumList: res.data
    }
  }
}
