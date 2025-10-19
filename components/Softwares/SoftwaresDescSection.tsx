import React from "react";
import styles from "./SoftwaresDescSection.module.scss";
import { useRouter } from "next/router";

const SoftwaresDescSection = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const description =
    locale === "ar"
      ? "تم تصميم حلول البرمجيات لدينا لتعزيز تجربة اللعب، وضمان عمليات سلسة، وتكامل مثالي مع إعدادات الليزر تاغ الخاصة بك."
      : // ? "تم تصميم حلول البرمجيات لدينا لتعزيز تجربة الألعاب، مما يضمن عمليات سلسة وتكامل سلس مع إعدادات الليزر تاج الخاصة بك."
        "Our software solutions are designed to enhance the gaming experience, ensuring smooth operations and seamless integration with your laser tag setup.";

  return (
    <>
      <div
        // className={styles.softwareSubTitleMain}
        className={`${styles.softwareSubTitleMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.softwareSubTitleContainer}>
          <div className={styles.softwareSubTitleSub}>
            <div className={styles.headingDiv}>
              {/* <h3>softwareSubTitle Form</h3> */}
              <p>
                {/* Our software solutions are designed to enhance the gaming
                experience, ensuring smooth operations and seamless integration
                with your laser tag setup. */}
                {description}
              </p>
            </div>
          </div>
        </div>
        <div
          // className={styles.PageIntroStroke}
          className={`${styles.PageIntroStroke} ${
            locale === "ar" ? styles.rtl : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default SoftwaresDescSection;
