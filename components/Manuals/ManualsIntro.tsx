import React from "react";
import styles from "./ManualsIntro.module.scss";
import { useRouter } from "next/router";

const ManualsIntro = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const heading = locale === "ar" ? "إرشادات الاستخدام" : "Manuals";
  return (
    <div
      // className={styles.PageIntroMain}
      className={`${styles.PageIntroMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.PageIntroContainer}>
        <div className={styles.PageIntroSub}>
          <div className={styles.PageIntroHeading}>
            <h1>{heading}</h1>
          </div>
        </div>
      </div>
      <div className={styles.PageIntroStroke}>
        <img src="/images/pageintrostroke.webp" alt="Manuals" />
      </div>
    </div>
  );
};

export default ManualsIntro;
