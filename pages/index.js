import Abilities from "components/layouts/Abilities/Abilities";
import Cities from "components/layouts/Cities/Cities";
import Explore from "components/layouts/Explore/Explore";
import Footer from "components/layouts/Footer/Footer";
import Goal from "components/layouts/Goal/Goal";
import Hero from "components/layouts/Hero/Hero";
import LinkdenGroup from "components/layouts/LinkdenGroup/LinkdenGroup";
import Navbar from "components/layouts/Navbar/Navbar";
import Partners from "components/layouts/Partners/Partners";
import Team from "components/layouts/Team/Team";
import Trust from "components/layouts/Trust/Trust";
import Try from "components/layouts/Try/Try";
import Tutorial from "components/layouts/Tutorial/Tutorial";
import Head from "next/head";
import { PageContainer } from "styles/globalStyles";

export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>Ganbatte</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Cities />
      <Abilities />
      <Try />
      <Tutorial />
      <Team />
      <Goal />
      <Trust />
      <Explore />
      <Partners />
      <LinkdenGroup />
      <Footer />
    </PageContainer>
  );
}