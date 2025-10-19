import React from "react";
import styles from "./TaggersDescSection.module.scss";
import { useRouter } from "next/router";

const TaggersDescSection = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const description =
    locale === "ar" ? (
      <>
        مصممة للدقة. مُبتكرة للأداء.
        <br />
        اكتشف مجموعتنا من أجهزة ليزر تاغ الجيل الجديد المصممة لتناسب جميع
        مستويات الخبرة من اللعب الترفيهي إلى المنافسات الاحترافية.
      </>
    ) : (
      <>
        Engineered for precision. Designed for performance.
        <br />
        Explore our range of next-gen laser taggers tailored for all experience
        levels—from casual to competitive gameplay.
      </>
    );

  return (
    <>
      <div
        className={`${styles.softwareSubTitleMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.softwareSubTitleContainer}>
          <div className={styles.softwareSubTitleSub}>
            <div className={styles.headingDiv}>
              {/* <h3>softwareSubTitle Form</h3> */}
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.PageIntroStroke} ${
            locale === "ar" ? styles.rtl : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default TaggersDescSection;
