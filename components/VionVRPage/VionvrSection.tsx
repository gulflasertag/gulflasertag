import React from "react";
import styles from "./VionvrSection.module.scss";
import { useRouter } from "next/router";

const VionvrSection = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const heading =
    locale === "ar"
      ? {
          main: "فيون",
          sub: "في آر",
        }
      : {
          main: "Vion",
          sub: "VR",
        };

  const description =
    locale === "ar"
      ? "فيون في آر هي تجربة ترفيهية غامرة بالواقع الافتراضي، حيث يتنافس اللاعبون فيما بينهم أو ضد الكمبيوتر في مواقع فريدة ومميزة."
      : // ? "بواسطة وضع اليد على المستشعر الموجود على البطن، يمكن للاعب تفعيل إحدى القوى الخارقة لفترة محدودة."
        "";

  const readMoreText = locale === "ar" ? "اقرأ المزيد" : "Read More";

  const getFeatureItems = () => {
    if (locale === "ar") {
      return [
        {
          img: "/icons/vionvrfeature1.svg",
          alt: "Virtual Reality Experience",
          text: "مجموعة ألعاب خفيفة الوزن تتكون من سماعة رأس وعصا تحكم",
        },
        // {
        //   img: "/icons/vionvrfeature2.svg",
        //   alt: "Superpowers",
        //   text: "مسدس الواقع الافتراضي مع ارتداد - تجربة واقعية",
        // },
        {
          img: "/icons/vionvrfeature3.svg",
          alt: "Immersive Gameplay",
          text: "حرية كاملة في الحركة وعدم وجود تأثير دوار الحركة",
        },
      ];
    }
    return [
      {
        img: "/icons/vionvrfeature1.svg",
        alt: "Virtual Reality Experience",
        text: " A lightweight gaming kit consists of a headset and joystick",
      },
      // {
      //   img: "/icons/vionvrfeature2.svg",
      //   alt: "Superpowers",
      //   text: "VR blaster with recoil - a realistic experience",
      // },
      {
        img: "/icons/vionvrfeature3.svg",
        alt: "Immersive Gameplay",
        text: "Complete freedom Of movement and no motion sickness effect",
      },
    ];
  };

  const featureItems = getFeatureItems();

  return (
    <>
      {/* <div className={styles.vionMainStroke}></div> */}
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

          {/* <div className={styles.vionMenImg}>
            <img src="/images/vionvrmen.webp" alt="galaxyspaceMen" />
          </div> */}
          <div className={styles.vionMenImg}>
            <img src="/images/vionvrwomen2.webp" alt="vionvrwomen" />
          </div>
        </div>

        <div className={styles.vionContainer}>
          <div className={styles.vionSub}>
            <div className={styles.vionContent}>
              <div className={styles.vionHeading}>
                <h3>
                  {heading.main} <span>{heading.sub}</span>
                </h3>
                <p>{description}</p>
              </div>

              <div className={styles.vionInfo}>
                <div className={styles.vionFeaturesGridDiv}>
                  {featureItems.map((feature, idx) => (
                    <div className={styles.vionFGridItem} key={idx}>
                      <img src={feature.img} alt={feature.alt} />
                      <p>{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className={styles.readmoreBtnWrapper}>
                <button className={styles.readmoreBtn}>
                  <div
                    className={styles.readmoreBtnContent}
                    data-button-type="readmore"
                  >
                    <p>{readMoreText}</p>
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
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.125 9.5H15.7475"
                        stroke="white"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VionvrSection;
