import React from "react";
import styles from "./IndoorGalaxyEclipse.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

function IndoorGalaxyEclipse() {
  const { locale } = useRouter();

  // Translation object
  const igeContent =
    locale === "ar"
      ? {
          heading: "جالاكسي إكليبس الداخلي",
          subHeading: "استكشف مستقبل الليزر تاغ",
          description:
            "انطلق في تجربة جالاكسي إكليبس الداخلي، نظام الليزر تاغ الثوري المصمم لتقديم تجربة غامرة لا مثيل لها. مع التكنولوجيا المتطورة وأسلوب اللعب الجذاب، يوفر نظامنا للاعبين مغامرة مثيرة تعزز العمل الجماعي والإثارة - دون عدوانية. استعد لتكون جزءًا من عصر جديد في الليزر تاغ.",
          button: "اقرأ المزيد",
        }
      : {
          heading: "Indoor Galaxy Eclipse",
          subHeading: "Explore the Future of Laser Tag",
          description:
            "Step into the Indoor Galaxy Eclipse, a revolutionary laser tag system designed to deliver an immersive experience like no other. With cutting-edge technology and engaging gameplay, our system offers players a thrilling adventure that promotes teamwork and excitement—without aggression. Get ready to be part of a new era in laser tag.",
          button: "Read More",
        };

  return (
    <>
      <div
        className={`${styles.igMainStroke} ${
          locale === "ar" ? styles.igMainStrokeAr : ""
        }`}
      ></div>
      <div className={`${styles.igeMain} ${locale === "ar" ? styles.rtl : ""}`}>
        <div className={styles.overlay}></div>
        <div className={styles.igeBg}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoBackground}
          >
            <source src="/video/spacegalaxy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={styles.igeMenImg}>
            <img
              src="/images/galaxyspacemen2.webp"
              alt="galaxyspaceMen"
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.igeContainer}>
          <div className={styles.igeSub}>
            <div className={styles.igeContent}>
              <div className={styles.igeHeading}>
                <h3>{igeContent.heading}</h3>
                <p>{igeContent.subHeading}</p>
              </div>

              <div className={styles.igeInfo}>
                <p>{igeContent.description}</p>

                <div className={styles.readmoreBtnWrapper}>
                  <Link href="/indoorgalaxyeclipse">
                    <button className={styles.readmoreBtn}>
                      <div
                        className={styles.readmoreBtnContent}
                        data-button-type="readmore"
                      >
                        <p>{igeContent.button}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M11.3223 4.94751L15.8748 9.50001L11.3223 14.0525"
                            stroke="white"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.125 9.5H15.7475"
                            stroke="white"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndoorGalaxyEclipse;
