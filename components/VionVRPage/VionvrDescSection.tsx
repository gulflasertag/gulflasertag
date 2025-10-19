import React from "react";
import styles from "./VionvrDescSection.module.scss";
import { useRouter } from "next/router";

const VionvrDescSection = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const description =
    locale === "ar"
      ? "فيون في آر هو ترفيه الواقع الافتراضي الغامر حيث يتنافس اللاعبون ضد بعضهم البعض أو ضد الكمبيوتر في مواقع فريدة"
      : "VION is an immersive VR entertainment where players compete against each other or against the computer in unique locations.";
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
        <div className={styles.PageIntroStroke}></div>
      </div>
    </>
  );
};

export default VionvrDescSection;
