import React from "react";
import styles from "./VenueReq.module.scss";
import { useRouter } from "next/router";

const VenueReq = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading = locale === "ar" ? "متطلبات المكان" : "Venue Requirements";

  const getVenueData = () => {
    if (locale === "ar") {
      return [
        {
          id: 1,
          icon: "/icons/separation.svg",
          alt: "Separation Of The Game Zone",
          title: "فصل منطقة اللعبة",
          description:
            "يوصى بتحديد منطقة اللعبة في منطقة منفصلة داخل ساحة الواقع الافتراضي، بعيدًا عن المناطق الأخرى. سيسمح وجود 3 جدران للمستشعرات بتتبع حركة اللاعبين بشكل فعال.",
        },
        {
          id: 2,
          icon: "/icons/open.svg",
          alt: "Open Space",
          title: "مساحة مفتوحة",
          description:
            "يجب أن تكون منطقة اللعب خالية من الحواجز وفتحات الأبواب والعقبات الأخرى. يمكن وجود الأعمدة، بشرط أن يقوم فريقنا بضبط مواقعها داخل البيئة الافتراضية مقابل رسوم إضافية",
        },
        {
          id: 3,
          icon: "/icons/soft.svg",
          alt: "Soft Covering",
          title: "تغطية ناعمة",
          description:
            "قد يحاول اللاعبون التحرك عبر المنطقة التي توجد بها جدران أو أعمدة فعلية. لمنع الإصابات، يُوصى بتغطية الجدران والأعمدة بمواد ناعمة.",
        },
        {
          id: 4,
          icon: "/icons/additional.svg",
          alt: "Additional Requirements",
          title: "متطلبات إضافية",
          description:
            "من المهم أيضًا مراعاة المتطلبات الأخرى للمكان التي قد تفرضها التفتيشات المحلية للحرائق وغيرها.",
        },
        {
          id: 5,
          icon: "/icons/arena.svg",
          alt: "Arena Decoration",
          title: "تزيين الساحة",
          description:
            "لا يُنصح باستخدام الأسطح اللامعة في ديكور منطقة اللعبة. يجب أن تكون الجدران ذات تشطيب غير لامع، ولتحسين أداء المستشعرات، يُوصى باستخدام أنماط هندسية متباينة مع خطوط.",
        },
        {
          id: 6,
          icon: "/icons/lighting.svg",
          alt: "Lighting Sources",
          title: "مصادر الإضاءة",
          description:
            "يجب وضع مصادر الإضاءة الاصطناعية فقط على السقف. يجب أن تكون الإضاءة ثابتة ومتسقة. إذا كان لديك نوافذ، يجب تغطيتها بقماش سميك أو فيلم.",
        },
      ];
    }
    return [
      {
        id: 1,
        icon: "/icons/separation.svg",
        alt: "Separation Of The Game Zone",
        title: "SEPARATION OF THE GAME ZONE",
        description:
          "The game zone is recommended to be set up in a separate area within the VR arena, away from other zones. Having 3 walls will allow the sensors to effectively track player movement.",
      },
      {
        id: 2,
        icon: "/icons/open.svg",
        alt: "Open Space",
        title: "OPEN SPACE",
        description:
          "The game zone should be free of partitions, door openings, and other obstacles. The presence of columns is allowed, provided that we adapt them to the virtual location for an additional fee.",
      },
      {
        id: 3,
        icon: "/icons/soft.svg",
        alt: "Soft Covering",
        title: "SOFT COVERING",
        description:
          "Players may attempt to move through the area where physical walls or columns are located. To prevent injuries, it is recommended to cover the walls and columns with soft materials.",
      },
      {
        id: 4,
        icon: "/icons/additional.svg",
        alt: "Additional Requirements",
        title: "ADDITIONAL REQUIREMENTS",
        description:
          "It is also important to consider other requirements for the venue that may be imposed by local fire and other inspections.",
      },
      {
        id: 5,
        icon: "/icons/arena.svg",
        alt: "Arena Decoration",
        title: "ARENA DECORATION",
        description:
          "It is not recommended to use glossy and shiny surfaces in the decor of the game zone. The walls should have a matte finish, and for improved sensor performance, it is recommended to use contrasting geometric patterns with lines.",
      },
      {
        id: 6,
        icon: "/icons/lighting.svg",
        alt: "Lighting Sources",
        title: "LIGHTING SOURCES",
        description:
          "Artificial lighting sources should be placed only on the ceiling. The lighting should be static and uniform. If you have windows, they should be covered with thick fabric or film.",
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
                      <p className={styles.gridItemDesc}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VenueReq;
