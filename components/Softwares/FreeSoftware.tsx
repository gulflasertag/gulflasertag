import React from "react";
import styles from "./FreeSoftware.module.scss";
import { useRouter } from "next/router";

const FreeSoftware = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading = locale === "ar" ? "برنامج السوفت وير مجاني" : "Free Software";
  const sectionGameScenarios =
    locale === "ar"
      ? {
          sectionHeader: "سيناريوهات اللعبة",
          sectionDescription:
            "سوف تحصل على مجموعة من النصوص التصورية الجاهزة مرفقة مع معدات اللعب، والتي تم اختبارها في ظروف حقيقية محاكية للواقع، وذلك كي تمضي كل يوم جديد بطريقة مبتكرة ومختلفة. باستخدام برنامج تصميم سيناريوهات اللعبة، يمكنك تعديل المهام الحالية أو إنشاء سيناريو فريد خاص بك.",
        }
      : {
          sectionHeader: "Game scenarios",
          sectionDescription:
            "Together with the equipment you get a package of ready-made scripts, tested in real conditions, so that every day passes in a new way. Using the script designer, you can modify existing missions or create your own unique script.",
        };

  const sectionBattleRoyale =
    locale === "ar"
      ? {
          sectionHeader: "باتل رويال (المعركة الملكية)",
          sectionDescription:
            "تعد باتل رويال أحد اتجاهات الألعاب الرئيسية الأكثر شيوعًا في السنوات الأخيرة، حيث يحلم معظم اللاعبين في جميع أنحاء العالم بخوض تجارب حقيقية محاكية للواقع. والآن أصبح الأمر ممكنًا. ليست باتل رويال (المعركة الملكية) مجرد وضع جديد فقط، ,وإنما هي لعبة شمولية متكاملة تواكب نظائرها من ألعاب الكمبيوتر الشهيرة الأخرى بشكل أفضل.",
        }
      : {
          sectionHeader: "Battle royale",
          sectionDescription:
            "Battle Royale is one of the main gaming trends of the recent years. People all over the world dream of playing in real conditions, and now it has become possible. Battle Royale is not just a new mode, but a full-fledged game that best matches the iconic computer counterparts.",
        };
  const sectionOnlineStatistics =
    locale === "ar"
      ? {
          sectionHeader: "إحصائيات أونلاين",
          sectionDescription:
            "يتيح لك البرنامج أن تحصل على إحصائيات وبيانات لحظية خاصة باللعبة و أن ترى دردشة أحداث اللعبة على شاشة الكمبيوتر أو على شاشة الهاتف لديك. تقوم خاصية دردشة الأحداث بعرض تصرفات وخطوات اللاعبين طوال المباراة. كما أن هذه الإحصائيات اللحظية تعرض لك أداء كل لاعب على حدى وأداء الفريق بشكل عام",
        }
      : {
          sectionHeader: "Online statistics",
          sectionDescription:
            "The software allows you to get game statistics in real time and see a chat of game events on a computer or smartphone screen. The event Chat displays the actions of players throughout the match. Statistics in real time displays the performance of each player, and the team performance in general.",
        };
  const sectionEasyOperation =
    locale === "ar"
      ? {
          sectionHeader: "سهل التشغيل",
          sectionDescription:
            "للتحكم في أجهزة اللعبة، قم باستخدام التطبيق المجاني لنظام التشغيل ويندوز أو أندرويد. لقد حرصنا على إتاحة وظائف تشغيلية واسعة النطاق في البرنامج واعتنينا بتوفير عناصر بسيطة ومريحة.",
        }
      : {
          sectionHeader: "Easy operation",
          sectionDescription:
            "To control the game devices, use the free application for Windows or Android. We put extensive functionality in the software, and took care of simplicity and convenience.",
        };
  return (
    <>
      <div
        // className={styles.freeSoftMainDiv}
        className={`${styles.freeSoftMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.freeSoftContainer}>
          <div className={styles.freeSoftSubDiv}>
            <h3 className={styles.freeSoftHeading}>{heading}</h3>
            <div className={styles.freeSoftBelowDiv}>
              <div className={styles.freeSoftSectionMain}>
                <div className={styles.freeSoftSection}>
                  <p className={styles.sectionHeader}>
                    {sectionGameScenarios.sectionHeader}
                  </p>
                  <span className={styles.sectionDescription}>
                    {sectionGameScenarios.sectionDescription}
                  </span>
                </div>
                <div className={styles.freeSoftSection}>
                  <p className={styles.sectionHeader}>
                    {sectionBattleRoyale.sectionHeader}
                  </p>
                  <span className={styles.sectionDescription}>
                    {sectionBattleRoyale.sectionDescription}
                  </span>
                </div>
              </div>
              <div className={styles.freeSoftCenterDivWrapper}>
                <div className={styles.freeSoftCenterImgDiv}>
                  <img src={"/images/freesoftware.webp"} alt="freesoftware" />
                </div>
              </div>
              <div className={styles.freeSoftSectionMain}>
                <div className={styles.freeSoftSection}>
                  <p className={styles.sectionHeader}>
                    {sectionOnlineStatistics.sectionHeader}
                  </p>
                  <span className={styles.sectionDescription}>
                    {sectionOnlineStatistics.sectionDescription}
                  </span>
                </div>
                <div className={styles.freeSoftSection}>
                  <p className={styles.sectionHeader}>
                    {sectionEasyOperation.sectionHeader}
                  </p>
                  <span className={styles.sectionDescription}>
                    {sectionEasyOperation.sectionDescription}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile layout - only visible on screens < 1199px */}
            <div className={styles.freeSoftMobileLayout}>
              <div className={styles.freeSoftCenterDivWrapper}>
                <div className={styles.freeSoftCenterImgDiv}>
                  <img src={"/images/freesoftware.webp"} alt="freesoftware" />
                </div>
              </div>
              <div className={styles.freeSoftSectionsRow}>
                <div className={styles.freeSoftSectionMain}>
                  <div className={styles.freeSoftSection}>
                    <p className={styles.sectionHeader}>
                      {sectionGameScenarios.sectionHeader}
                    </p>
                    <span className={styles.sectionDescription}>
                      {sectionGameScenarios.sectionDescription}
                    </span>
                  </div>
                  <div className={styles.freeSoftSection}>
                    <p className={styles.sectionHeader}>
                      {sectionBattleRoyale.sectionHeader}
                    </p>
                    <span className={styles.sectionDescription}>
                      {sectionBattleRoyale.sectionDescription}
                    </span>
                  </div>
                </div>
                <div className={styles.freeSoftSectionMain}>
                  <div className={styles.freeSoftSection}>
                    <p className={styles.sectionHeader}>
                      {sectionOnlineStatistics.sectionHeader}
                    </p>
                    <span className={styles.sectionDescription}>
                      {sectionOnlineStatistics.sectionDescription}
                    </span>
                  </div>
                  <div className={styles.freeSoftSection}>
                    <p className={styles.sectionHeader}>
                      {sectionEasyOperation.sectionHeader}
                    </p>
                    <span className={styles.sectionDescription}>
                      {sectionEasyOperation.sectionDescription}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeSoftware;

//                       that best matches the iconic computer counterparts.
//                     </span>
//                   </div>
//                 </div>
//                 <div className={styles.freeSoftSectionMain}>
//                   <div className={styles.freeSoftSection}>
//                     <p className={styles.sectionHeader}>Online statistics</p>
//                     <span className={styles.sectionDescription}>
//                       The software allows you to get game statistics in real
//                       time and see a chat of game events on a computer or
//                       smartphone screen. The event Chat displays the actions of
//                       players throughout the match. Statistics in real time
//                       displays the performance of each player, and the team
//                       performance in general.
//                     </span>
//                   </div>
//                   <div className={styles.freeSoftSection}>
//                     <p className={styles.sectionHeader}>Easy operation</p>
//                     <span className={styles.sectionDescription}>
//                       To control the game devices, use the free application for
//                       Windows or Android. We put extensive functionality in the
//                       software,and took care of simplicity and convenience.
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FreeSoftware;
