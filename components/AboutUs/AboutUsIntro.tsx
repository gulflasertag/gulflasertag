import React from "react";
import styles from "./AboutUsIntro.module.scss";
import { useRouter } from "next/router";

const AboutUsIntro = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading = locale === "ar" ? "نبذة عن الشركة" : "About Us";
  const description =
    locale === "ar"
      ? "تُحدث شركة Gulf Lasertag ثورة في صناعة الألعاب باستخدام أنظمة متطورة للعب الداخلي والخارجي والواقع الافتراضي، موفرة تجارب غامرة وعالية الأداء لجميع الأعمار ومستويات المهارة"
      : "Gulf Lasertag revolutionizes the industry with state-of-the-art indoor, outdoor, and VR systems, delivering immersive, high-performance experiences for all ages and skill levels.";

  return (
    <>
      <div
        className={`${styles.aboutUsIntroMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.aboutUsIntroContainer}>
          <div className={styles.aboutUsIntroSub}>
            <div className={styles.aboutUsIntroHeading}>
              <h1>{heading}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className={styles.PageIntroStroke}>
          <img src="/images/pageintrostroke.webp" alt="Designing of Arenas" />
        </div>
      </div>
    </>
  );
};

export default AboutUsIntro;
