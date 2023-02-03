import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import firstPhoto from "public/assets/images/image-retro-pcs.jpg";
import secondPhoto from "public/assets/images/image-top-laptops.jpg";
import thirdPhoto from "../public/assets/images/image-gaming-growth.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>News homepage</title>
        <meta name="description" content="News homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Header />
        <Hero />
        <div className="container flex flex-col md:flex-row md:justify-between md:items-center mt-[64px] md:mt-[72px] pb-[78px] gap-[33px] md:gap-0">
          <Card
            image={firstPhoto}
            number="01"
            title="Reviving Retro PCs"
            paragraph="What happens when old PCs are given modern upgrades?"
          />
          <Card
            image={secondPhoto}
            number="02"
            title="Top 10 laptops of 2022"
            paragraph="Our best picks for various needs and budgets."
          />
          <Card
            image={thirdPhoto}
            number="03"
            title="The Growth of Gaming"
            paragraph="How the pandemic has sparked fresh opportunities."
          />
        </div>
      </main>
    </>
  );
}
