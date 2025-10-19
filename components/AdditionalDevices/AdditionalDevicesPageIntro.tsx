import React from "react";
import styles from "./AdditionalDevicesPageIntro.module.scss";
import { useRouter } from "next/router";

function AdditionalDevicesPageIntro() {
  const { locale } = useRouter();
  return (
    <div
      className={`${styles.PageIntroMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.PageIntroContainer}>
        <div className={styles.PageIntroSub}>
          <div className={styles.PageIntroHeading}>
            <div className={styles.PageIntroIcon}>
              <img src="/images/netronicicon.webp" alt="Air Bunker Icon" />
            </div>

            <h1>
              {locale === "ar" ? "أجهزة إضافية مع البنادق" : "Accessories"}
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

export default AdditionalDevicesPageIntro;
