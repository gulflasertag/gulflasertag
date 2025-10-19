import React from "react";
import styles from "./VionvrOffers.module.scss";
import { useRouter } from "next/router";

const VionVROffers = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading =
    locale === "ar"
      ? {
          main: "فيون في آر",
          sub: "العروض",
        }
      : {
          main: "Vion VR",
          sub: "Offers",
        };

  const description =
    locale === "ar" ? (
      <>
        جاذبية لن يملّ منها اللاعبون – 5 أوضاع و9 خرائط توفر 45 جلسة لعب فريدة.
        <br />
        يبرز التنوع من خلال نماذج الشخصيات والأسلحة عالية الجودة، التي تغمر
        اللاعبين في أجواء مختلفة داخل كل خريطة.
      </>
    ) : (
      <>
        An attraction that won't bore players - 5 different modes and 9 maps
        provide 45 unique gaming sessions.
        <br />
        The variety is emphasized by high-quality character and weapon models
        that immerse players in different atmospheres within the same map.
      </>
    );

  return (
    <>
      <div
        className={`${styles.softwareSubTitleMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div
          className={styles.PageIntroStroke}
          id={styles.PageIntroStrokeUp}
        ></div>
        <div className={styles.softwareSubTitleContainer}>
          <div className={styles.softwareSubTitleSub}>
            <div className={styles.headingDiv}>
              <h3>
                {heading.main} <span>{heading.sub}</span>
              </h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className={styles.PageIntroStroke}></div>
      </div>
    </>
  );
};

export default VionVROffers;
