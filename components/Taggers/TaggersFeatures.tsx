import React from "react";
import styles from "./TaggersFeatures.module.scss";
import { useRouter } from "next/router";

const TaggersFeatures = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading = locale === "ar" ? "الميزات" : "Features";

  const getTaggersFeaturesData = () => {
    if (locale === "ar") {
      return [
        {
          heading: "شاشة IPS متعددة الألوان",
          points: [
            {
              title: "التحمل",
              desc: "الشاشة مدمجة في حوامل تركيب خاصة ومحميّة بزجاج سميك 6 مم، مما يلغي التلف الميكانيكي والانزلاق عند السقوط.",
            },
            {
              title: "سهولة الاستخدام",
              desc: "زاوية الرؤية الواسعة بدون وهج تضمن وضوح رؤية جميع المؤشرات من أي زاوية. الإضاءة الخلفية الساطعة تسمح للزوار برؤية جميع مؤشرات اللعبة بوضوح حتى في الطقس المشمس.",
            },
            {
              title: "اللعب التفاعلي",
              desc: "30 مؤشرًا ملونًا يسهل فهمها للاعبين من جميع الأعمار ويسمح لهم بإدراك المعلومات بسهولة حتى في ديناميكية اللعبة العالية.",
            },
            {
              title: "الراحة",
              desc: "مؤشرات الخدمة للشاشة تسمح بتخصيص مجموعات اللعبة على الفور. المعلومات المعروضة في وضع التمهيد تحسن عملية تحديث المعدات إلى الإصدار الجديد في بضع دقائق.",
            },
          ],
          image: "/images/ipsscreen.webp",
        },
        {
          heading: "دفع <span>الارتداد</span>",
          points: [
            {
              title: "الانغماس في اللعبة",
              desc: "عند إطلاق النار، تمر النبضات الموجهة إلى الكتف على طول الجسم، مقلدة الارتداد الحقيقي من السلاح. تأثير الارتداد أكثر واقعية بكثير من الاهتزاز المعتاد للجسم، مما يعزز الانغماس في طريقة اللعب.",
            },
            {
              title: "إطلاق نار واقعي",
              desc: "وحدة دفع الارتداد متزامنة تمامًا مع الطلقات وهي قادرة على الوصول إلى تردد 565 نبضة في الدقيقة. إذا أطلق لاعب طلقة واحدة، يتم إطلاق نبضة ارتدادية واحدة، وإذا أطلق مجموعة متتالية من ثلاث طلقات، فسيشعر بثلاث نبضات",
              // desc: "وحدة الارتداد متزامنة بالكامل مع الطلقات وقادرة على الوصول إلى 565 نبضة في الدقيقة. إذا أطلق اللاعب طلقة واحدة، فإن نبضة واحدة تكون لمسية، وإذا كانت ثلاث طلقات، فهناك ثلاث نبضات.",
            },
            {
              title: "أفضل من الاهتزاز",
              desc: "يشعر اللاعب بوضوح بضربات تجاه كتفه، وليس مجرد ارتعاش مستمر في جميع أنحاء الجسم كالذي يحدث عند استخدام محرك اهتزازي. الإحساس بتأثير اللمس الحقيقي يمنح اللاعبين المزيد من المشاعر",
              // desc: "يشعر اللاعب بوضوح بالضربات نحو الكتف، وليس الاهتزاز الثابت في جميع أنحاء الجسم الذي يتم إنشاؤه عند استخدام محرك الاهتزاز. تعطي الإحساس اللمسي بالتأثير الحقيقي اللاعبين المزيد من المشاعر.",
            },
            {
              title: "الاستقلالية",
              desc: "بفضل نظام الطاقة المستقل مع بطارية منفصلة، لا يؤثر الارتداد النبضي على وقت تشغيل البازوكا نفسها.",
            },
          ],
          image: "/images/impulserecoil.webp",
        },
      ];
    }
    return [
      {
        heading: "Multi-colored <span>IPS screen</span>",
        points: [
          {
            title: "Durability",
            desc: "The screen is integrated in special mounting racks and protected with 6 mm glass, which eliminates mechanical damage and displacement when falling.",
          },
          {
            title: "Usability",
            desc: "The wide viewing angle without glare ensures clear visibility of all indicators from any angle. Bright backlighting allows visitors to clearly see all game indicators even in sunny weather.",
          },
          {
            title: "Gamification",
            desc: "30 coloured indicators are intuitive for players of any age and allows them to perceive the information easily even in high dynamic of the game",
          },
          {
            title: "Convenience",
            desc: "Service indicators of the screen allow immediate game sets customizing. Information displayed in boot-mode optimizes the process of updating the equipment up to the new version in a few minutes.",
          },
        ],
        image: "/images/ipsscreen.webp",
      },
      {
        heading: "Impulse <span>recoil</span>",
        points: [
          {
            title: "Immersion in the game",
            desc: "When fired, impulses directed to the shoulder pass along the body, imitating the real recoil from the weapon. The recoil effect is much more realistic than the usual vibration of the body, which enhances the involvement in the gameplay.",
          },
          {
            title: "Realistic shot",
            desc: "The recoil module is fully synchronized with shots and is capable of reaching 565 beats per minute. If a player fires one shot, one impulse is tactile, and if it is a turn of three shots, there are three impulses.",
          },
          {
            title: "Better than vibration",
            desc: "The player clearly feels the hits towards the shoulder, and not the steady trembling throughout the body which is created when using the vibro-motor. A tactile sense of real impact gives players more emotions.",
          },
          {
            title: "Autonomy",
            desc: "Due to the autonomous power supply system with a separate battery, impulse recoil does not affect the operating time of the blaster itself.",
          },
        ],
        image: "/images/impulserecoil.webp",
      },
    ];
  };

  const taggersFeaturesData = getTaggersFeaturesData();

  return (
    <>
      <div
        // className={styles.taggersFeatMain}
        className={`${styles.taggersFeatMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.taggersFeatContainer}>
          <div className={styles.taggersFeatSub}>
            <h3 className={styles.testinomialsHeading}>{heading}</h3>
            <div className={styles.taggersFeatGrid}>
              {taggersFeaturesData.map((item, index) => (
                <div key={index} className={styles.taggersFeatGridItem}>
                  <div className={styles.gridItemContent}>
                    <div className={styles.contentInfo}>
                      <div
                        className={styles.contentHeading}
                        dangerouslySetInnerHTML={{ __html: item.heading }}
                      />
                      <div className={styles.pointsGridMainDiv}>
                        {item.points.map((point, idx) => (
                          <div key={idx} className={styles.pointsDiv}>
                            <h4 className={styles.pointTitle}>{point.title}</h4>
                            <p className={styles.pointDescription}>
                              {point.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.gridItemImgWrapper}>
                    <div className={styles.gridItemImg}>
                      <img src={item.image} alt={`gridimg${index + 1}`} />
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

export default TaggersFeatures;
