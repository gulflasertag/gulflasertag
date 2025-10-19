import React from "react";
import styles from "./ServiceVionvr.module.scss";
import { useRouter } from "next/router";

const ServiceVionvr = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading = locale === "ar" ? "الخدمة والدعم" : "Service and Support";

  const getServiceVionvrData = () => {
    if (locale === "ar") {
      return [
        {
          title: "إدارة اللعبة السهلة",
          src: "/icons/easygame.svg",
          alt: "easyGameManagement",
          desc: "تقوم التطبيق المريح بأتمتة عملية إعداد وإطلاق السيناريوهات. يستغرق تغيير السيناريو أقل من 30 ثانية، ويحتاج حدث واحد إلى مشرف واحد فقط.",
        },
        {
          title: "إحصائيات مخصصة",
          src: "/icons/statistics.svg",
          alt: "personalizedStatistics",
          desc: "يعرض التطبيق إحصائيات الفريق التفصيلية ومقاييس اللاعبين الفردية. يتيح ذلك تسليط الضوء على إنجازات كل لاعب ويحفزهم على العودة وتجاوز نتائجهم.",
        },
        {
          title: "الإعداد عن بُعد",
          src: "/icons/statistics.svg",
          alt: "remoteConfiguration",
          desc: "من الأجهزة والبرامج.",
        },
      ];
    }
    return [
      {
        title: "EASY GAME MANAGEMENT",
        src: "/icons/easygame.svg",
        alt: "easyGameManagement",
        desc: "The convenient app automates the process of setting up and launching scenarios. Changing scenarios takes less than 30 seconds, and only one instructor is needed to conduct an event.",
      },
      {
        title: "PERSONALIZED STATISTICS",
        src: "/icons/statistics.svg",
        alt: "personalizedStatistics",
        desc: "The app displays detailed team statistics and individual player metrics. This allows highlighting the achievements of each player and motivates them to come back and surpass their results.",
      },
      {
        title: "REMOTE CONFIGURATION",
        src: "/icons/statistics.svg",
        alt: "remoteConfiguration",
        desc: "of hardware and software.",
      },
    ];
  };

  const ServiceVionvrData = getServiceVionvrData();

  return (
    <>
      <div
        className={`${styles.ourValuesMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.ourValuesContainer}>
          <div className={styles.ourValuesSub}>
            <div className={styles.ourValuesGrid}>
              {/* {ourValuesData.map((item, index) => ( */}
              <div className={styles.ourValuesGridItem}>
                <div className={styles.gridItemContent}>
                  <div className={styles.contentInfo}>
                    <div className={styles.contentHeading}>
                      <h3 className={styles.ourStoryHeading}>{heading}</h3>
                    </div>
                    {ServiceVionvrData.map((point, index) => (
                      <div className={styles.contentDataDiv} key={index}>
                        <div className={styles.contentDataDivImg}>
                          <img src={point.src} alt={point.alt} />
                        </div>
                        <div className={styles.contentPoint}>
                          <h4 className={styles.pointTitle}>{point.title}</h4>
                          <p className={styles.pointDesc}>{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.gridItemImgWrapper}>
                  <div className={styles.gridItemImg}>
                    <img
                      src="/images/servicesupport.webp"
                      alt={`servicesupport`}
                    />
                  </div>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceVionvr;
