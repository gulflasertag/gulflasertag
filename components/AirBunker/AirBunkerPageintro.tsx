import React from "react";
import styles from "./AirBunkerPageintro.module.scss";
import { useRouter } from "next/router";

function AirBunkerPageintro() {
  const { locale } = useRouter();

  return (
    <div
      className={`${styles.PageIntroMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.PageIntroContainer}>
        <div className={styles.PageIntroSub}>
          <div className={styles.PageIntroHeading}>
            <div className={styles.PageIntroIcon}>
              {locale === "ar" ? (
                <img
                  src="/images/arabicairbunkericon.png"
                  alt="Air Bunker Icon"
                />
              ) : (
                <img src="/images/airbunkericon.webp" alt="Air Bunker Icon" />
              )}
            </div>
            <h1>
              {locale === "ar"
                ? "ليزر تاغ، بينت بول، آرتشر تاغ وسباقات الطائرات بدون طيار نيرف"
                : "LASERTAG, PAINTBALL, ARCHERITAG, & NERF DRONE RACING"}
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.PageIntroStroke}>
        <img src="/images/pageintrostroke.webp" alt="Designing of Arenas" />
      </div>
    </div>
  );
}

export default AirBunkerPageintro;
