import React from "react";
import styles from "./IndoorGalaxyPageintro.module.scss";
import { useRouter } from "next/router";

function IndoorGalaxyPageintro() {
  const { locale } = useRouter();

  // Translations
  const t = {
    en: {
      label: "ECLIPSE",
      heading: "Indoor Galaxy Eclipse",
    },
    ar: {
      label: " إكليبس",
      // label: "كسوف",
      heading: "جالاكسي إكليبس الداخلية",
      // heading: "اندر جالاكسي إكليبس",
    },
  };

  const text = locale === "ar" ? t.ar : t.en;

  return (
    <div
      className={`${styles.PageIntroMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.PageIntroContainer}>
        <div className={styles.PageIntroSub}>
          <div className={styles.PageIntroHeading}>
            <div className={styles.PageIntroIcon}>
              <img src="/images/galaxyeclipseicon.webp" alt="Air Bunker Icon" />
            </div>

            <p>{text.label}</p>

            <h1>{text.heading}</h1>
          </div>
        </div>
      </div>
      <div className={styles.PageIntroStroke}>
        <img src="/images/pageintrostroke.webp" alt="Designing of Arenas" />
      </div>
    </div>
  );
}

export default IndoorGalaxyPageintro;
