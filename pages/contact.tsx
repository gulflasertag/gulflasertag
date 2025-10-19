import Head from "next/head";
import type { NextPage } from "next";
import Header from "@/components/Header/Header";
import Contact from "@/components/Contact/Contact";
import ContactPageintro from "@/components/Contact/ContactPageintro";
import Footer from "@/components/Footer/Footer";

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Gulf Laser Tag: Premium Laser Tag Equipment & Arena Setup Solutions
        </title>
        <link rel="canonical" href="https://www.gulflasertag.net/contact" />
        <link
          rel="alternate"
          href="https://www.gulflasertag.net/contact"
          hrefLang="ar"
        />
        <link
          rel="alternate"
          href="https://www.gulflasertag.net/en/contact"
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
        <meta
          property="og:url"
          content="https://www.gulflasertag.net/contact"
        />
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
        <ContactPageintro />
        <Contact />
        <Footer />
      </>
    </>
  );
};

export default ContactPage;
