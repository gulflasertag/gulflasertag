import React from "react";
import styles from "./CatalogsIntro.module.scss";
import { useRouter } from "next/router";

const CatalogsIntro = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const heading = locale === "ar" ? "دليل المنتاجات" : "Catalogs";
  return (
    <div
      // className={styles.PageIntroMain}
      className={`${styles.PageIntroMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.PageIntroContainer}>
        <div className={styles.PageIntroSub}>
          <div className={styles.PageIntroHeading}>
            {/* <h1>Manuals</h1> */}
            <h1>{heading}</h1>
            {/* <p>
              From futuristic sci-fi landscapes to tactical urban layouts, we
              design immersive arenas tailored to your brand, space, and
              audience.
            </p> */}
          </div>
        </div>
      </div>
      <div className={styles.PageIntroStroke}>
        <img src="/images/pageintrostroke.webp" alt="Manuals" />
      </div>
    </div>
  );
};

export default CatalogsIntro;
