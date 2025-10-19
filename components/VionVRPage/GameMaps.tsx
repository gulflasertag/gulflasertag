import React from "react";
import styles from "./GameMaps.module.scss";
import { useRouter } from "next/router";

const GameMaps = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const headingDiv =
    locale === "ar"
      ? {
          heading: "تخصيص خرائط اللعبة حسب موقعك.",
          subHeading: "الحجم الأمثل لموقع اللعبة:",
          gameReqBoxText: (
            <>
              <div className={styles.test}>
                <span>64 م2</span>
                <div className={styles.testInner}>
                  <p>
                    احصل على حزم الخرائط واطلب تعديل الخريطة لتناسب تمامًا حجم
                    وميزات موقعك! سيعمل خبراؤنا على مواءمة الأعمدة والزوايا وكل
                    عنصر معماري لتجربة واقع افتراضي فريدة من نوعها.
                  </p>
                  <p>
                    كما يمكن لفريقنا المتميز ضبط الخريطة لتتناسب مع مساحة موقعك،
                    أبعاده، أعمدته، وكل تفاصيله المعمارية مقابل رسوم إضافية،
                    لتستمتع بتجربة مصممة خصيصًا لك.
                  </p>
                </div>
              </div>
            </>
          ),
        }
      : {
          heading: "Adapting Game Maps to Your Location",
          subHeading: "Optimal Game Location Size:",
          gameReqBoxText: (
            <>
              <div className={styles.test}>
                <span>64 m2</span>
                <div className={styles.testInner}>
                  <p>
                    By purchasing map packages, you have the opportunity to
                    request the adaptation of the map to fit the size and
                    features of your venue. Our specialists will adapt columns,
                    corners, and other architectural elements to unique
                    constructions within the VR environment
                  </p>
                  <p>
                    Our experts can adapt the map to the area, dimensions,
                    columns, and other features of your venue for an additional
                    fee.
                  </p>
                </div>
              </div>
            </>
          ),
        };

  const getGameReqDiv = () => {
    if (locale === "ar") {
      return [
        {
          img: "/icons/8m8m.svg",
          alt: "8m8m",
          text: "8م * 8م",
        },
        {
          img: "/icons/people.svg",
          alt: "people",
          text: "6 أشخاص",
        },
      ];
    }
    return [
      {
        img: "/icons/8m8m.svg",
        alt: "8m8m",
        text: "8M * 8M",
      },
      {
        img: "/icons/people.svg",
        alt: "people",
        text: "6 People",
      },
    ];
  };

  const gameReqDiv = getGameReqDiv();

  return (
    <>
      <div
        className={`${styles.gameMapMain} ${locale === "ar" ? styles.rtl : ""}`}
      >
        <div className={styles.gameMapContainer}>
          <div className={styles.gameMapSub}>
            <div className={styles.headingDiv}>
              <h3>{headingDiv.heading}</h3>
              <p>{headingDiv.subHeading}</p>
            </div>
            <div className={styles.gameReqDivMain}>
              {gameReqDiv.map((item, idx) => (
                <div className={styles.gameReqDiv} key={idx}>
                  <img src={item.img} alt={item.alt} />
                  <p className={styles.gameReqDivText}>{item.text}</p>
                </div>
              ))}
            </div>
            <div className={styles.gameReqContentDiv}>
              <div className={styles.gameReqBoxDivFlex}>
                <div className={styles.gameReqBoxDivImg}>
                  <img src="/images/gamereqboxtl.webp" alt="vr" />
                </div>
                <div className={styles.gameReqBoxDivImg}>
                  <img src="/images/gamereqboxbl.webp" alt="vr" />
                </div>
              </div>
              <div className={styles.gameReqBoxText}>
                {headingDiv.gameReqBoxText}
              </div>
              <div className={styles.gameReqBoxDivFlex}>
                <div className={styles.gameReqBoxDivImg}>
                  <img src="/images/gamereqboxtr.webp" alt="vr" />
                </div>
                <div className={styles.gameReqBoxDivImg}>
                  <img src="/images/gamereqboxbr.webp" alt="vr" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameMaps;
