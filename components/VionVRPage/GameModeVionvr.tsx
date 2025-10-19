import React from "react";
import styles from "./GameModeVionvr.module.scss";
import { useRouter } from "next/router";

const GameModeVionvr = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const appTaskHeadingDiv =
    locale === "ar"
      ? {
          headingH4: (
            <>
              تطبيق للجميع
              <br />
              مهام الأعمال في الواقع الافتراضي
            </>
          ),
          headingH5: "تطبيق شامل لمهام الأعمال في الواقع الافتراضي",
          description:
            "تتضمن مجموعة عصابة الرأس شريطين للعرق مصنوعين من مادة Air Mesh القابلة للتنفس.",
          featureTitle: "الميزات",
        }
      : {
          headingH4: (
            <>
              App for All
              <br />
              VR Business Tasks
            </>
          ),
          headingH5: "App for All VR Business Tasks",
          description:
            " The headband kit includes 2 sweatbands made of breathable Air Mesh material.",
          featureTitle: "Features",
        };

  const gameHeading = locale === "ar" ? "أوضاع اللعبة" : "Game Modes";

  const getGameModeData = () => {
    if (locale === "ar") {
      return [
        {
          title: "مباراة الموت الجماعي والقتال الحر",
          description: "معركة البقاء بين الفرق و المواجهة المفتوحة للجميع.",
          // "هذه أوضاع كلاسيكية حيث يحتاج اللاعبون إلى جمع أعلى عدد من النقاط لهزيمة خصومهم.",
        },
        {
          title: "السيطرة",
          description:
            "تحتوي المنطقة الافتراضية على منطقة سيطرة حول علم رقمي. يكسب اللاعبون نقاطًا للبقاء داخل منطقة السيطرة ولإصابة الخصوم.",
        },
        {
          title: "المكافآت",
          description:
            "وضع يكسب فيه اللاعبون نقاطًا ليس فقط لإصابة الخصوم ولكن أيضًا لجمع المكافآت المنتشرة في جميع أنحاء المنطقة الافتراضية. بالإضافة إلى ذلك، يمكن أن تعيد القطع الأثرية صحتهم.",
        },
        {
          title: "ضد الروبوتات",
          description:
            "وضع يواجه فيه لاعب، بمفرده أو في فريق يصل إلى ستة أفراد، خصومًا فريدين يتحكم بهم الكمبيوتر.",
        },
      ];
    }
    return [
      {
        title: "TEAM DEATH-MATCH AND FREE-FOR-ALL",
        description:
          "These are classic modes where players need to accumulate the highest number of points to defeat their opponents.",
      },
      {
        title: "DOMINATION",
        description:
          "The virtual location features a capture zone around a digital flag. Players earn points for staying within the capture zone and for hitting opponents.",
      },
      {
        title: "BONUSES",
        description:
          "A mode where players earn points not only for hitting opponents but also for collecting bonuses scattered throughout the virtual zone. Additionally, artifacts can replenish their health.",
      },
      {
        title: "AGAINST BOTS",
        description:
          "A mode where a player, either alone or in a team of up to six individuals, faces unique computer-controlled opponents.",
      },
    ];
  };

  const getAppTasksData = () => {
    if (locale === "ar") {
      return [
        {
          title: "إدارة اللعبة بسهولة",
          image: "/icons/gamechange.svg",
          alt: "easyGameManagement",
          desc: "يعمل التطبيق المريح على أتمتة عملية إعداد وإطلاق السيناريوهات. يستغرق تغيير السيناريو أقل من 30 ثانية، ويتطلب حدثًا واحدًا فقط مدربًا واحدًا.",
        },
        {
          title: "إحصائيات مخصصة",
          image: "/icons/statistics.svg",
          alt: "personalizedStatistics",
          desc: "يعرض التطبيق إحصائيات الفريق التفصيلية ومقاييس اللاعبين الفردية. يتيح ذلك إبراز إنجازات كل لاعب ويحفزهم على العودة وتجاوز نتائجهم.",
        },
      ];
    }
    return [
      {
        title: "EASY GAME MANAGEMENT",
        image: "/icons/gamechange.svg",
        alt: "easyGameManagement",

        desc: "The convenient app automates the process of setting up and launching scenarios. Changing scenarios takes less than 30 seconds, and only one instructor is needed to conduct an event.",
      },
      {
        title: "PERSONALIZED STATISTICS",
        image: "/icons/statistics.svg",
        alt: "personalizedStatistics",
        desc: "The app displays detailed team statistics and individual player metrics. This allows highlighting the achievements of each player and motivates them to come back and surpass their results.",
      },
    ];
  };

  const gameModeData = getGameModeData();
  const appTasksData = getAppTasksData();

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
                <h3>{gameHeading}</h3>
              </div>

              <div className={styles.gameModeGridDiv}>
                {gameModeData.map((item, index) => (
                  <div className={styles.gameModeGridItem} key={index}>
                    {/* <div className={styles.gameModeGridItemImg}>
                      <img src={item.image} alt={item.title} />
                    </div> */}
                    <div className={styles.gameModeGridItemContent}>
                      <h4 className={styles.gridItemTitle}>{item.title}</h4>
                      <p className={styles.gridItemDesc}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* App for All VR Business Tasks div */}
            <div className={styles.appTaskSubDiv}>
              <div className={styles.appTaskImgDiv}>
                <img src="/images/vrbusinesstask.webp" alt="VR Business Task" />
              </div>

              <div className={styles.appTaskContentDiv}>
                <div className={styles.appTaskHeadingDiv}>
                  <h4>{appTaskHeadingDiv.headingH4}</h4>
                  <h5>{appTaskHeadingDiv.headingH5}</h5>
                  {/* <p>{appTaskHeadingDiv.description}</p> */}
                </div>
                <div className={styles.appTaskInfo}>
                  <h4 className={styles.featureTitle}>
                    {appTaskHeadingDiv.featureTitle}
                  </h4>
                  <div
                    className={styles.gameModeGridDiv}
                    id={styles.appTaskGridDiv}
                  >
                    {appTasksData.map((item, index) => (
                      <div className={styles.gameModeGridItem} key={index}>
                        <div className={styles.gameModeGridItemImg}>
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className={styles.gameModeGridItemContent}>
                          <h4
                            className={styles.gridItemTitle}
                            style={{ color: "#040707" }}
                          >
                            {item.title}
                          </h4>
                          <p className={styles.gridItemDesc}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.PageIntroStroke}></div>
      </div>
    </>
  );
};

export default GameModeVionvr;
