import React from "react";
import styles from "./TaggersIntro.module.scss";
import { useRouter } from "next/router";

const TaggersIntro = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading = locale === "ar" ? "البنادق" : "Taggers";

  return (
    <div
      className={`${styles.PageIntroMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.PageIntroContainer}>
        <div className={styles.PageIntroSub}>
          <div className={styles.PageIntroHeading}>
            <div className={styles.pageIntroImgDiv}>
              <img src={"/images/netroniclogo.webp"} alt="netroniclogo" />
            </div>
            <h1>{heading}</h1>
          </div>
        </div>
      </div>
      <div className={styles.PageIntroStroke}>
        <img src="/images/pageintrostroke.webp" alt="Softwares" />
      </div>
    </div>
  );
};

export default TaggersIntro;
