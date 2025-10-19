import React from "react";
import styles from "./GameWork.module.scss";
import { useRouter } from "next/router";

const GameWork = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading =
    locale === "ar"
      ? {
          main: "كيف تعمل",
          sub: "اللعبة؟",
        }
      : {
          main: "How does the",
          sub: "game work?",
        };

  const getOurValuesPointsData = () => {
    if (locale === "ar") {
      return [
        {
          title: "التحضير",
          desc: "اعتمادًا على الوضع، يمكن تقسيم اللاعبين إلى فرق والتنافس ضد بعضهم البعض أو تحدي الذكاء الاصطناعي. يتم تجهيز الزوار بمجموعة الألعاب ويخضعون لجلسات تدريبية تستمر حتى 5 دقائق.",
        },
        {
          title: "هدف اللعبة",
          desc: "يقوم اللاعبون بإطلاق النار على بعضهم البعض أو على أعداء افتراضيين باستخدام أسلحة متنوعة متاحة في متجر اللعبة. تُمنح النقاط لكل ضربة وإلغاء تنشيط. في نهاية كل جولة، يتم تحديد الفائز بناءً على اللاعب أو الفريق الذي حقق أعلى نتيجة.",
        },
        {
          title: "مدة اللعبة",
          desc: "يمكنك تحديد مدة اللعبة بنفسك، لكننا نوصي باستخدام الخيار الأكثر شيوعًا الذي تقدمه ساحات في آر  حول العالم:",
          timing: [
            { time: "20 دقيقة", desc: "مدة الجلسة المثلى" },
            { time: "5 دقائق", desc: "التعليم والتحضير للعبة" },
            {
              time: "15 دقيقة",
              desc: "وقت اللعب، خلاله يمكن للاعبين تبديل الجوانب، تجربة أوضاع مختلفة، واستكشاف ما يصل إلى 5 خرائط مختلفة.",
            },
          ],
        },
      ];
    }
    return [
      {
        title: "Preparation",
        desc: "Depending on the mode, players can be divided into teams and battle against each other or challenge artificial intelligence. Visitors are equipped with game sets and undergo training sessions lasting up to 5 minutes.",
      },
      {
        title: "Game Objective",
        desc: "Players shoot each other or virtual enemies using various weapons available in the in-game store. Points are awarded for each hit and deactivation. At the end of each round, the winner is determined based on the player or team with the highest score.",
      },
      {
        title: "Game Duration",
        desc: "You can determine the duration of the game yourself, but we recommend using the most popular option offered by VR arenas worldwide:",
        timing: [
          { time: "20 min", desc: "Optimal session duration" },
          { time: "5 min", desc: "Instruction and game preparation" },
          {
            time: "15 min",
            desc: "gameplay time, during which players can switch sides, try different modes, and experience up to 5 different maps.",
          },
        ],
      },
    ];
  };

  const ourValuesPointsData = getOurValuesPointsData();

  return (
    <>
      <div
        className={`${styles.ourValuesMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div
          className={styles.PageIntroStroke}
          id={styles.PageIntroStrokeUp}
        ></div>
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
                    </div>
                    {ourValuesPointsData.map((point, index) => (
                      <div className={styles.contentPoint} key={index}>
                        <h4 className={styles.pointTitle}>{point.title}</h4>
                        <p className={styles.pointDesc}>{point.desc}</p>
                        {point.timing && (
                          <div className={styles.pointTiming}>
                            {point.timing.map((time, index) => (
                              <div
                                className={styles.pointTimingItem}
                                key={index}
                              >
                                <span className={styles.pointTimingTitle}>
                                  {time.time}
                                </span>
                                <span className={styles.pointTimingDesc}>
                                  {time.desc}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.gridItemImgWrapper}>
                  <div className={styles.gridItemImg}>
                    <img src="/images/gamechange.webp" alt={`ourvalues`} />
                    {/* <img src="/images/white.webp" alt={`ourvalues`} /> */}
                  </div>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
        <div className={styles.PageIntroStroke}></div>
      </div>
    </>
  );
};

export default GameWork;
