import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  return (
    <>
      <div
        className={styles.PageIntroStroke}
        // className={`${styles.PageIntroStroke} ${
        //   locale === "ar" ? styles.rtl : ""
        // }`}
      ></div>
      <div
        // className={styles.footerMainDiv}
        className={`${styles.footerMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.footerContainer}>
          <div className={styles.footerSubDiv}>
            {/* <div className={styles.footerContent}> */}
            {/* Logo and Description Section */}
            <div className={styles.logoSection}>
              <Link href="/">
                <div className={styles.logoContainer}>
                  <img
                    src="/images/footerlogo.webp"
                    alt="Gulf Laser Tag"
                    className={styles.logo}
                  />
                  <div className={styles.gulfText}>
                    <img
                      src="/images/gulffooter.webp"
                      alt="gulffooter"
                      className={styles.gulffooterImg}
                    />
                    <img
                      src="/images/lasertagfooter.webp"
                      alt="lasertagfooter"
                      className={styles.lasertagfooterImg}
                    />
                  </div>
                </div>
              </Link>
              <p className={styles.description}>
                {/* Gulf laser tag is the official representative
                <br />
                of lasertag.net in United Arab Emirates and Kingdom of Saudi
                Arabia. */}
                {locale === "ar" ? (
                  <>
                    جلف ليزر تاغ هي الممثل الرسمي والحصري لشركة Lasertag.net في
                    دول مجلس التعاون الخليجي، لتقديم أحدث تقنيات الليزرتاغ وحلول
                    الترفيه المبتكرة.
                  </>
                ) : (
                  <>
                    Gulf Lasertag is the official exclusive representative of
                    Lasertag.net in the GCC countries, delivering the latest
                    laser tag technology and innovative entertainment solutions
                  </>
                )}
              </p>
              <div className={styles.socialIcons}>
                <div className={styles.socialIcon}>
                  <img src="/icons/facebook.svg" alt="facebook" />
                </div>
                <div className={styles.socialIcon}>
                  <img src="/icons/twitter.svg" alt="twitter" />
                </div>
                <div className={styles.socialIcon}>
                  <img src="/icons/youtube.svg" alt="youtube" />
                </div>
              </div>
            </div>
            <div className={styles.linksMainSection}>
              {/* Quick Links Section */}
              <div className={styles.quickLinksSection}>
                <h3 className={styles.sectionTitle}>
                  {/* Quick Links */}
                  {locale === "ar" ? "روابط سريعة" : "Quick Links"}
                </h3>
                <ul className={styles.linksList}>
                  <li>
                    <Link href="/taggers" className={styles.footerLink}>
                      {locale === "ar" ? "البنادق" : "Taggers"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/additionaldevices"
                      className={styles.footerLink}
                    >
                      {/* Additional Devices With Taggers */}
                      {locale === "ar"
                        ? "أجهزة إضافية مع البنادق"
                        : "Accessories with Outdoor Lasertag"}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/netronic#dynamicgamescenariodevice"
                      className={styles.footerLink}
                    >
                      {/* Outdoor Game Scenario Devices */}
                      {locale === "ar"
                        ? "أجهزة سيناريو للساحات الخارجية"
                        : "Outdoor Game Scenario Devices"}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/indoorgalaxyeclipse"
                      className={styles.footerLink}
                    >
                      {/* Indoor Galaxy Eclipse */}
                      {locale === "ar"
                        ? "جالاكسي إكليبس الداخلية"
                        : "Indoor Galaxy Eclipse"}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/indoorgalaxyeclipse/#gamescenariodevices"
                      className={styles.footerLink}
                    >
                      {/* Indoor Galaxy Eclipse Game Scenario */}
                      {locale === "ar"
                        ? "أجهزة سيناريو للساحات الداخلية"
                        : "Indoor Game Scenario Devices"}
                    </Link>
                  </li>

                  <li>
                    <Link href="/softwares" className={styles.footerLink}>
                      {/* Softwares */}
                      {locale === "ar" ? "برمجيات" : "Softwares"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.verticleLine}></div>
              {/* Pages Section */}
              <div className={styles.pagesSection}>
                <h3 className={styles.sectionTitle}>
                  {/* Pages */}
                  {locale === "ar" ? "الصفحات" : "Pages"}
                </h3>
                <ul className={styles.linksList}>
                  <li>
                    <Link href="/aboutus" className={styles.footerLink}>
                      {locale === "ar" ? "معلومات عنا" : "About us"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={styles.footerLink}>
                      {locale === "ar" ? "اتصل بنا" : "Contact us"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/vionvr" className={styles.footerLink}>
                      {locale === "ar" ? "فيون في آر" : "VION VR"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/airbunker" className={styles.footerLink}>
                      {locale === "ar" ? "المخابئ الهوائية" : "Air Bunker"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/designingofarenas"
                      className={styles.footerLink}
                    >
                      {/* Designing of Arenas */}
                      {locale === "ar"
                        ? "تصميم الساحات"
                        : "Designing of Arenas"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/catalogs" className={styles.footerLink}>
                      {/* Service Provided */}
                      {locale === "ar" ? "دليل المنتاجات" : "Catalogs"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className={styles.copyrightSection}>
            <p className={styles.copyrightText}>
              {locale === "ar"
                ? "© 2025 حقوق النشر، جلف ليزر تاغ"
                : "© 2025 Copyright, Gulf Laser Tag"}
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Footer;
