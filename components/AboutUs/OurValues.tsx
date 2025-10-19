import React from "react";
import styles from "./OurValues.module.scss";
import { useRouter } from "next/router";

const OurValues = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading =
    locale === "ar"
      ? {
          main: "قيمنا",
          sub: "",
        }
      : {
          main: "Our",
          sub: "Values",
        };

  const commitmentText =
    locale === "ar" ? "التزامنا بالتميز" : "Our Commitment to Excellence";

  const contentDescription =
    locale === "ar"
      ? "نحن في جلف ليزرتاج ملتزمون بتقديم أعلى مستويات الجودة والابتكار ورضا العملاء. هدفنا هو توفير منتجات وتجارب تشد الانتباه وتثير الحماس وتلهم اللاعبين. نؤمن بإنشاء علاقات طويلة الأمد مع عملائنا، مما يضمن أن كل موقع نعمل معه يقدم تجربة لا تُنسى وآمنة للاعبين."
      : " At Gulf Laser Tag, we are driven by a commitment to quality, innovation, and customer satisfaction. Our goal is to provide not just products, but experiences that engage, excite, and inspire. We believe in creating long-lasting relationships with our clients, ensuring that each venue we work with delivers a memorable and safe experience for their players.";

  const getOurValuesPointsData = () => {
    if (locale === "ar") {
      return [
        {
          title: "الابتكار المستمر",
          desc: "نبحث باستمرار عن أحدث التقنيات لتقديم تجارب ألعاب ذكية وتفاعلية لا مثيل لها.",
        },
        {
          title: "السلامة أولاً",
          desc: "نلتزم بتطبيق أعلى معايير السلامة الدولية عبر جميع معداتنا وتصاميم الساحات، لضمان بيئة آمنة لجميع اللاعبين.",
        },
        {
          title: "الشراكة والتعاون",
          desc: "نؤمن بأن نجاحنا متجذر في نجاح عملائنا وشركائنا. لهذا السبب نعمل جنبًا إلى جنب لتحقيق أهدافهم.",
        },
        {
          title: "تمكين",
          desc: "نحن ملتزمون بتمكين رواد الأعمال لبناء مشاريع ترفيهية قوية ومستدامة تعكس رؤيتهم وتحقق طموحاتهم.",
        },
      ];
    }
    return [
      {
        title: "Continuous Innovation",
        desc: "We constantly seek out the latest technologies to deliver smart, interactive, and unmatched gaming experiences.",
      },
      {
        title: "Safety First",
        desc: "We are committed to applying the highest international safety standards across all our equipment and arena designs, ensuring a secure environment for all players.",
      },
      {
        title: "Partnership & Collaboration",
        desc: "We believe our success is rooted in the success of our clients and partners. That’s why we work side by side to achieve their goals.",
      },
      {
        title: "Empowerment",
        desc: "We are dedicated to empowering entrepreneurs to build strong, sustainable entertainment projects that reflect their vision and fulfill their ambitions.",
      },
    ];
  };

  // const ourValuesPointsData = [
  //   {
  //     title: "Indoor Galaxy Eclipse",
  //     desc: "Offering dynamic and immersive gameplay in a futuristic setting.",
  //   },
  //   {
  //     title: "Quality",
  //     desc: "Only the best equipment and service, meeting the highest safety standards.",
  //   },
  //   {
  //     title: "Customer-Centric",
  //     desc: "Tailored solutions and ongoing support for every client.",
  //   },
  // ];

  const ourValuesPointsData = getOurValuesPointsData();

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
                      <h3 className={styles.ourStoryHeading}>
                        {heading.main} <span>{heading.sub}</span>
                      </h3>
                      <span className={styles.commitmentText}>
                        {commitmentText}
                      </span>
                      {/* <p className={styles.contentDescription}>
                        {contentDescription}
                      </p> */}
                    </div>
                    {ourValuesPointsData.map((point, index) => (
                      <div className={styles.contentPoint} key={index}>
                        <h4 className={styles.pointTitle}>{point.title}</h4>
                        <p className={styles.pointDesc}>{point.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.gridItemImgWrapper}>
                  <div className={styles.gridItemImg}>
                    <img src="/images/ourvalue.webp" alt={`ourvalues`} />
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

export default OurValues;
