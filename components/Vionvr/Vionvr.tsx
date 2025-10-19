import React from "react";
import styles from "./Vionvr.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

function Vionvr() {
  const { locale } = useRouter();

  // Text based on locale
  const content =
    locale === "ar"
      ? {
          headingMain: "فيون",
          headingSpan: "VR",
          subheading: "بعد جديد في الترفيه القائم على الموقع",
          description:
            "ادخل إلى المستقبل مع فيون VR - جاذبية VR الحرة التي توفر تجربة مثيرة وتفاعلية. مثالية لمراكز الترفيه، تجلب فيون VR اللاعبين إلى عالم افتراضي ديناميكي حيث يمكنهم الاستكشاف والتفاعل والتنافس معًا في الوقت الحقيقي.",
          readMore: "اقرأ المزيد",
        }
      : {
          headingMain: "Vion",
          headingSpan: "VR",
          subheading: "A New Dimension in Location-Based Entertainment",
          description:
            "Step into the future with Vion VR—an immersive free-roam VR attraction that offers an exciting and interactive experience. Perfect for entertainment centers, Vion VR brings players into a dynamic virtual world where they can explore, interact, and compete together in real-time.",
          readMore: "Read More",
        };

  return (
    <>
      <div className={styles.vionMainStroke}></div>
      <div
        className={`${styles.vionMain} ${locale === "ar" ? styles.rtl : ""}`}
      >
        <div className={styles.vionBg}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoBackground}
          >
            <source src="/video/vionvrzoom.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={styles.overlay}></div>

          <div className={styles.vionMenImg}>
            <img src="/images/vionvrwomen.webp" alt="vionvrwomen" />
          </div>
        </div>

        <div className={styles.vionContainer}>
          <div className={styles.vionSub}>
            <div className={styles.vionContent}>
              <div className={styles.vionHeading}>
                <h3>
                  {content.headingMain} <span>{content.headingSpan}</span>
                </h3>
                <p>{content.subheading}</p>
              </div>

              <div className={styles.vionInfo}>
                <p>{content.description}</p>
                <div className={styles.readmoreBtnWrapper}>
                  <Link href="/vionvr">
                    <button className={styles.readmoreBtn}>
                      <div
                        className={styles.readmoreBtnContent}
                        data-button-type="readmore"
                      >
                        <p>{content.readMore}</p>
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

export default Vionvr;
