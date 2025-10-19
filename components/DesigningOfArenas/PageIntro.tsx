import React from "react";
import styles from "./PageIntro.module.scss";
import { useRouter } from "next/router";

function PageIntro() {
  const { locale } = useRouter();

  return (
    <div
      className={`${styles.PageIntroMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.PageIntroContainer}>
        <div className={styles.PageIntroSub}>
          <div className={styles.PageIntroHeading}>
            <h1>{locale === "ar" ? "تصميم الساحات" : "Designing of Arenas"}</h1>
            <p>
              {locale === "ar"
                ? "من المناظر المستقبلية المستوحاة من الخيال العلمي إلى التصاميم الحضرية التكتيكية، نصمم ساحات غامرة مصممة خصيصًا لعلامتك التجارية ومساحتك وجمهورك."
                : "From futuristic sci-fi landscapes to tactical urban layouts, we design immersive arenas tailored to your brand, space, and audience."}
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

export default PageIntro;
