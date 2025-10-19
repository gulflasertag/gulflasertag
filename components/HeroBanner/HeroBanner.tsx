import React from "react";
import styles from "./Herobanner.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const HeroBanner = () => {
  const { locale } = useRouter();

  // Translation object
  const heroContent =
    locale === "ar"
      ? {
          title: "ارتقِ بلعبك مع أنظمة ليزر تاغ الخليج",
          description:
            " نقدّم أنظمة ليزر تاغ مبتكرة للصالات الداخلية والساحات الخارجية وتجارب الواقع الافتراضي (VR) مصممة لتوفير مغامرات غامرة مليئة بالإثارة، مع ضمان تجربة لا تُنسى لجميع الأعمار ومستويات المهارة.",
          button: "ابدأ الآن",
        }
      : {
          title: "Elevate Your Game with Gulf Laser Tag",
          description:
            "Innovative laser tag systems for indoor, outdoor & VR, engineered to deliver an immersive and thrilling experience, ensuring unforgettable adventures for players of all ages and skill levels.",
          button: "Get Started",
        };

  return (
    <div
      className={`${styles.heroMainDiv} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.heroVideoMainDiv}>
        <video
          src="/video/herobanner.mp4"
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className={styles.heroTextDiv}>
        <h1>{heroContent.title}</h1>
        <div className={styles.heroTextRightDiv}>
          <p className={styles.heroDescription}>{heroContent.description}</p>
          <div className={styles.readmoreBtnWrapper}>
            <Link href="/contact">
              <button className={styles.readmoreBtn}>
                <div
                  className={styles.readmoreBtnContent}
                  data-button-type="readmore"
                >
                  <p>{heroContent.button}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M11.3223 4.94751L15.8748 9.50001L11.3223 14.0525"
                      stroke="#9f1c20"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.125 9.5H15.7475"
                      stroke="#9f1c20"
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

      <div className={styles.redClipPathDiv}>
        <img src="/images/pageintrostroke.webp" alt="herobannerstroke" />
      </div>
    </div>
  );
};

export default HeroBanner;
