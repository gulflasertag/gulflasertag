import Head from "next/head";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Footer from "@/components/Footer/Footer";
import LaserTagSystem from "@/components/LaserTagSystem/LaserTagSystem";
import OurServices from "@/components/OurServices/OurServices";
import Testinomials from "@/components/Testinomials/Testinomials";
import OurDesigning from "@/components/OurDesigning/OurDesigning";
import OurSystems from "@/components/OurSystems/OurSystems";
import IndoorGalaxyEclipse from "@/components/IndoorGalaxyEclipse/IndoorGalaxyEclipse";
import Airbunkers from "@/components/Airbunkers/Airbunkers";
import Vionvr from "@/components/Vionvr/Vionvr";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Gulf Laser Tag: Premium Laser Tag Equipment & Arena Setup Solutions
        </title>
        <link rel="canonical" href="https://www.gulflasertag.net/" />
        <link
          rel="alternate"
          href="https://www.gulflasertag.net/"
          hrefLang="ar"
        />
        <link
          rel="alternate"
          href="https://www.gulflasertag.net/en/"
          hrefLang="en"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Gulf Laser Tag provides premium laser tag equipment, arena design, and business setup support to help grow your entertainment center."
        />
        <meta property="og:title" content="Gulf Laser Tag" />
        <meta
          name="og:description"
          content="Gulf Laser Tag provides premium laser tag equipment, arena design, and business setup support to help grow your entertainment center."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="gulflasertag" />
        <meta property="og:url" content="https://www.gulflasertag.net/" />
        <meta name="keywords" content="gulflasertag" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.gulflasertag.net/favicon.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gulflasertag" />
        <meta name="twitter:title" content="Gulf Laser Tag" />
        <meta
          name="twitter:description"
          content="Gulf Laser Tag provides premium laser tag equipment, arena design, and business setup support to help grow your entertainment center."
        />
        <meta
          name="twitter:image"
          content="https://www.gulflasertag.net/favicon.svg"
        />
      </Head>

      <>
        <Header />
        <HeroBanner />
        <LaserTagSystem />
        <IndoorGalaxyEclipse />
        <Airbunkers />
        <OurDesigning />
        <Vionvr />
        <OurServices />
        <Testinomials />
        {/* <OurSystems /> */}
        <GetInTouch />
        <Footer />
      </>
    </>
  );
};

export default Home;
