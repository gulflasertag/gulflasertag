import React from "react";
import styles from "./Certificates.module.scss";
import { useRouter } from "next/router";

const Certificates = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading =
    locale === "ar"
      ? "شهادات اعتماد عالمية"
      : "Certified Quality You Can Trust";

  const getVenueData = () => {
    if (locale === "ar") {
      return [
        // {
        //   id: 1,
        //   icon: "/icons/separation.svg",
        //   alt: "certificate of type check-out",
        //   title: "فصل منطقة اللعبة",
        // },
        // {
        //   id: 2,
        //   icon: "/icons/open.svg",
        //   alt: "certificate of declaration of conformity",
        //   title: "مساحة مفتوحة",
        // },
        // {
        //   id: 3,
        //   icon: "/icons/soft.svg",
        //   alt: "certificate of soft covering",
        //   title: "تغطية ناعمة",
        // },
        // {
        //   id: 4,
        //   icon: "/icons/additional.svg",
        //   alt: "certificate of additional requirements",
        //   title: "متطلبات إضافية",
        // },
        {
          id: 1,
          icon: "/images/certificate1.png",
          alt: "certificate of type check-out",
          title: "شهادة فحص النوع (الوحدة ب)",
        },
        {
          id: 2,
          icon: "/images/certificate2.png",
          alt: "certificate of declaration of conformity",
          title: "شهادة المطابقة الأوروبية للجودة والسلامة",
        },
        {
          id: 3,
          icon: "/images/certificate3.png",
          alt: "certificate of soft covering",
          title: "شهادة نظام إدارة الجودة - ISO 9001",
        },
        {
          id: 4,
          icon: "/images/certificate4.png",
          alt: "certificate of additional requirements",
          title: "تقرير MSDS",
        },
      ];
    }
    return [
      {
        id: 1,
        icon: "/images/certificate1.png",
        alt: "certificate of type check-out",
        title: "Certificate of TYPE CHECK-OUT (MODULE B)",
      },
      {
        id: 2,
        icon: "/images/certificate2.png",
        alt: "certificate of declaration of conformity",
        title: "CE Certified for Quality & Safety",
      },
      {
        id: 3,
        icon: "/images/certificate3.png",
        alt: "certificate of soft covering",
        title: "ISOO 9001 - QUALITY MANAGEMENT SYSTEM CERTIFICATE",
      },
      {
        id: 4,
        icon: "/images/certificate4.png",
        alt: "certificate of additional requirements",
        title: "MSDS REPORT",
      },
    ];
  };

  const venueData = getVenueData();

  return (
    <>
      <div
        className={`${styles.softwareSubTitleMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.softwareSubTitleContainer}>
          <div className={styles.softwareSubTitleSub}>
            {/* game mode div */}
            <div className={styles.gameModeSubDiv}>
              <div className={styles.headingDiv}>
                <h3>{heading}</h3>
              </div>

              <div className={styles.gameModeGridDiv}>
                {venueData.map((item, index) => (
                  <div className={styles.gameModeGridItem} key={index}>
                    <div className={styles.gameModeGridItemImg}>
                      <img src={item.icon} alt={item.alt} />
                    </div>
                    <div className={styles.gameModeGridItemContent}>
                      <h4 className={styles.gridItemTitle}>{item.title}</h4>
                      {/* <p className={styles.gridItemDesc}>{item.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.PageIntroStroke}
          // className={`${styles.PageIntroStroke} ${
          //   locale === "ar" ? styles.rtl : ""
          // }`}
        ></div>
      </div>
    </>
  );
};

export default Certificates;
