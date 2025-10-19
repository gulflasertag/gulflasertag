import React from "react";
import styles from "./ContactPageIntro.module.scss";
import { useRouter } from "next/router";

function ContactPageintro() {
  const { locale } = useRouter();
  return (
    <div
      className={`${styles.PageIntroMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.PageIntroContainer}>
        <div className={styles.PageIntroSub}>
          <div className={styles.PageIntroHeading}>
            <h1>{locale === "ar" ? "تواصل معنا" : "Get in touch"}</h1>
            <p>
              {locale === "ar"
                ? "كل شيء يبدأ بمرحباً"
                : "Everything starts from a Hello"}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.PageIntroStroke}>
        <img src="/images/pageintrostroke.webp" alt="Designing of Arenas" />
      </div>
    </div>
  );
}

export default ContactPageintro;
