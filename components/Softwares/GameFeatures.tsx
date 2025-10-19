import React from "react";
import styles from "./GameFeatures.module.scss";
import { useRouter } from "next/router";

const GameFeatures = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading =
    locale === "ar" ? "تجربتك الكاملة للعبة" : "Game Changing Features";

  const getGameFeatureDetails = () => {
    if (locale === "ar") {
      return [
        {
          imgsrc: "/icons/achievements.svg",
          contentTitle: "الإنجازات",
          contentDesc:
            "في نهاية الجولة، يتم منح المشاركين رتبًا خاصة وفقًا لمهاراتهم وأسلوب لعبهم. سيتمكن كل مشارك من الفخر برتبته، حتى لو لم تتمكن فريقه من الفوز.",
        },
        {
          imgsrc: "/icons/scoreboard.svg",
          contentTitle: "لوحة النتائج",
          contentDesc:
            "وحدة الارتداد متزامنة تمامًا مع الطلقات وقادرة على الوصول إلى 565 نبضة في الدقيقة. إذا أطلق اللاعب طلقة واحدة، فإن الارتداد يكون لمسة واحدة، وإذا كانت ثلاث طلقات، فهناك ثلاث لمسات.",
        },
        {
          imgsrc: "/icons/kidsmode.svg",
          contentTitle: "خاصية وضع الأطفال",
          contentDesc:
            "إن وضع الأطفال هو خاصية باللعبة تم تهيئتها لكي تُستخدم من قبل اللاعبين الصغار (الأطفال دون سن 8 سنوات). يسمح هذا التحكم المُبسَّط لك أن تفهم أساسيات اللعبة بشكل أسرع وأن تستمتع بمعركة ليزر تاغ مشوقة.",
        },
        {
          imgsrc: "/icons/fiscalstatistics.svg",
          contentTitle: "الإحصائيات المالية",
          contentDesc:
            "تتوفر إحصائيات منفصلة لمالك العمل مما يسمح له بتتبع الوقت والتاريخ ومدة كل مجموعة، مما يستبعد إمكانية الألعاب غير المصرح بها.",
        },
      ];
    }
    return [
      {
        imgsrc: "/icons/achievements.svg",
        contentTitle: "Achievements",
        contentDesc:
          "At the end of the round, the participants are awarded special ranks according to their skills and style of playing. Each participant will be able to be proud of his rank, even if his team did not manage to win.",
      },
      {
        imgsrc: "/icons/scoreboard.svg",
        contentTitle: "Score board",
        contentDesc:
          "The recoil module is fully synchronized with shots and is capable of reaching 565 beats per minute. If a player fires one shot, one impulse is tactile, and if it is a turn of three shots, there are three impulses.",
      },
      {
        imgsrc: "/icons/kidsmode.svg",
        contentTitle: "Kids mode",
        contentDesc:
          "Kids Mode is a game mode adapted for the youngest players (children under 8 years old). Simplified control allows you to quickly understand the principles of the game and enjoy an exciting laser tag battle.",
      },
      {
        imgsrc: "/icons/fiscalstatistics.svg",
        contentTitle: "Fiscal statistics",
        contentDesc:
          "Separate statistics are available for the business owner due to which he can track the time, date and duration of each set, excluding the possibility of unauthorized games.",
      },
    ];
  };

  // const gameFeatureDetails = [
  //   {
  //     imgsrc: "/icons/achievements.svg",
  //     contentTitle: "Achievements",
  //     contentDesc:
  //       "At the end of the round, the participants are awarded special ranks according to their skills and style of playing. Each participant will be able to be proud of his rank, even if his team did not manage to win.",
  //   },
  //   {
  //     imgsrc: "/icons/scoreboard.svg",
  //     contentTitle: "Score board",
  //     contentDesc:
  //       "The recoil module is fully synchronized with shots and is capable of reaching 565 beats per minute. If a player fires one shot, one impulse is tactile, and if it is a turn of three shots, there are three impulses.",
  //   },
  //   {
  //     imgsrc: "/icons/kidsmode.svg",
  //     contentTitle: "Kids mode",
  //     contentDesc:
  //       "Kids Mode is a game mode adapted for the youngest players (children under 8 years old). Simplified control allows you to quickly understand the principles of the game and enjoy an exciting laser tag battle.",
  //   },
  //   {
  //     imgsrc: "/icons/fiscalstatistics.svg",
  //     contentTitle: "Fiscal statistics",
  //     contentDesc:
  //       "Separate statistics are available for the business owner due to which he can track the time, date and duration of each set, excluding the possibility of unauthorized games.",
  //   },
  // ];

  const gameFeatureDetails = getGameFeatureDetails();

  return (
    <>
      <div
        // className={styles.gameFeatMainDiv}
        className={`${styles.gameFeatMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.gameFeatContainer}>
          <div className={styles.gameFeatSubDiv}>
            <h3 className={styles.gameFeatHeading}>{heading}</h3>
            <div className={styles.gameFeatGridMainDiv}>
              {gameFeatureDetails.map((feature, idx) => (
                <div className={styles.gameFeatGridItemWrapper} key={idx}>
                  <div className={styles.gameFeatGridItem}>
                    <div className={styles.gameFeatImgDiv}>
                      <img src={feature.imgsrc} alt={feature.contentTitle} />
                    </div>
                    <div className={styles.gameFeatContent}>
                      <p className={styles.gameFeatContentTitle}>
                        {feature.contentTitle}
                      </p>
                      <span className={styles.gameFeatContentDesc}>
                        {feature.contentDesc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className={styles.PageIntroStroke}></div> */}
      </div>
    </>
  );
};

export default GameFeatures;
