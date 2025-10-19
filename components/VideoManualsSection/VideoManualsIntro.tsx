import React from "react";
import styles from "./VideoManualsIntro.module.scss";
import { useRouter } from "next/router";

const VideoManualsIntro = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading = locale === "ar" ? "إرشادات الفيديو" : "Video Manuals";

  return (
    <div
      // className={styles.PageIntroMain}
      className={`${styles.PageIntroMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.PageIntroContainer}>
        <div className={styles.PageIntroSub}>
          <div className={styles.PageIntroHeading}>
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
        <img src="/images/pageintrostroke.webp" alt="Video Manuals" />
      </div>
    </div>
  );
};

export default VideoManualsIntro;
