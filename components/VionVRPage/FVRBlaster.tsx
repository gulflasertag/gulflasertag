import React from "react";
import styles from "./FVRBlaster.module.scss";
import { useRouter } from "next/router";

const FVRBlaster = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const headingDiv =
    locale === "ar"
      ? {
          heading: "بلاستر فالكون في آر",
          subHeading:
            "بلاستر فالكون هو الحل المثالي لساحة الواقع الافتراضي مع ميزات فريدة والعديد من المزايا",
        }
      : {
          heading: "Falcon VR Blaster",
          subHeading:
            "The FALCON Blaster is the perfect solution for a VR arena with unique features and numerous advantages",
        };

  const getFalconBlasterData = () => {
    if (locale === "ar") {
      return [
        {
          id: 1,
          icon: "/icons/technicalsupport.svg",
          alt: "Realistic Design and Sensation",
          title: "تصميم وإحساس واقعي",
          description:
            "يتيح بلاستر فالكون، مع ارتداده، للاعبين الشعور بالطلقات من الأسلحة المختلفة المتاحة في متجر اللعبة. وهذا يمكّن من أقصى درجات الانغماس في الواقع الافتراضي ويخلق مستوى لا مثيل له من الانغماس.",
        },
        {
          id: 2,
          icon: "/icons/businessdevelopment.svg",
          alt: "Impulse Recoil",
          title: "ارتداد نبضي",
          description:
            "سيختبر لاعبوك إحساسًا واقعيًا بإطلاق النار بفضل الارتداد النبضي. إنه يعزز اندفاع الأدرينالين ويضيف المزيد من الإثارة إلى اللعبة.",
        },
        {
          id: 3,
          icon: "/icons/informationalsupport.svg",
          alt: "Compatibility with Standard Controllers",
          title: "التوافق مع وحدات التحكم القياسية",
          description:
            "هذا يمنح اللاعبين الخيار. يمكنهم استخدام وحدة التحكم الخاصة بهم أو اختيار بلاستر فالكون لتجربة أكثر واقعية وجاذبية.",
        },
        {
          id: 4,
          icon: "/icons/informationalsupport.svg",
          alt: "Convenience and Safety",
          title: "الراحة والسلامة",
          description:
            "يتميز بلاستر فالكون بوزن مثالي يصل إلى 1.5 كجم، مما يجعله مريحًا للاعبين من جميع الأعمار. بالإضافة إلى ذلك، يحتوي على حاجز مطاطي يحمي اللاعبين من الأضرار العرضية.",
        },
        {
          id: 5,
          icon: "/icons/servicecenternetwork.svg",
          alt: "Reliability and Quality",
          title: "الموثوقية والجودة",
          description:
            "تم تصنيع بلاستر فالكون بمواد عالية الجودة، مما يضمن متانته. وهذا يقلل من مخاطر المشكلات الفنية ويضمن التشغيل السلس لساحتك.",
        },
        {
          id: 6,
          icon: "/icons/advancedequipment.svg",
          alt: "Flexibility and Compatibility",
          title: "المرونة والتوافق",
          description:
            "يتكامل بلاستر فالكون بشكل مريح وسريع في نظامك الحالي ويمكن تخصيصه بسهولة لتلبية احتياجات عملك.",
        },
        {
          id: 7,
          icon: "/icons/advancedequipment.svg",
          alt: "Support and Service",
          title: "الدعم والخدمة",
          description:
            "توفر VION VR دعمًا عالي الجودة لعملائها. بالإضافة إلى ذلك، يأتي معداتنا مع ضمان، مما يمنحك الثقة في موثوقيتها وجودتها.",
        },
        {
          id: 8,
          icon: "/icons/certifiedequipment.svg",
          alt: "Audience Engagement",
          title: "جذب الجمهور",
          description:
            "يعد بلاستر فالكون أداة قوية لجذب جمهورك في ساحة الواقع الافتراضي الخاصة بك. يخلق الإحساس الواقعي بإطلاق النار والارتداد النبضي تجربة عاطفية للاعبين، مما يجعلهم يرغبون في العودة إلى الساحة مرة بعد مرة.",
        },
      ];
    }
    return [
      {
        id: 1,
        icon: "/icons/technicalsupport.svg",
        alt: "Realistic Design and Sensation",
        title: "REALISTIC DESIGN AND SENSATION",
        description:
          "The FALCON Blaster, with its recoil, allows players to feel the shots from different weapons available in the in-game store. This enables maximum immersion in virtual reality and creates an unparalleled level of immersion.",
        // isActive: false,
      },
      {
        id: 2,
        icon: "/icons/businessdevelopment.svg",
        alt: "Impulse Recoil",
        title: "IMPULSE RECOIL",
        description:
          "Your players will experience realistic shooting sensations thanks to the impulse recoil. It enhances the adrenaline rush and adds more excitement to the game.",
        // isActive: false,
      },
      {
        id: 3,
        icon: "/icons/informationalsupport.svg",
        alt: "Compatibility with Standard Controllers",
        title: "COMPATIBILITY WITH STANDARD CONTROLLERS",
        description:
          "This gives players the choice. They can use their own controller or opt for the FALCON Blaster for a more realistic and engaging experience.",
        // isActive: false,
      },
      {
        id: 4,
        icon: "/icons/informationalsupport.svg",
        alt: "Convenience and Safety",
        title: "CONVENIENCE AND SAFETY",
        description:
          "The FALCON Blaster has an optimal weight of up to 1.5 kg, making it comfortable for players of all ages. Additionally, it features a rubber bumper that protects players from accidental damage.",
        // isActive: false,
      },
      {
        id: 5,
        icon: "/icons/servicecenternetwork.svg",
        alt: "Reliability and Quality",
        title: "RELIABILITY AND QUALITY",
        description:
          "The FALCON Blaster is made with high-quality materials, ensuring its durability. This reduces the risk of technical issues and ensures smooth operation of your arena.",
        // isActive: false,
      },
      {
        id: 6,
        icon: "/icons/advancedequipment.svg",
        alt: "Flexibility and Compatibility",
        title: "FLEXIBILITY AND COMPATIBILITY",
        description:
          "The FALCON Blaster conveniently and quickly integrates into your existing system and can be easily customized to meet the needs of your business.",
        // isActive: false,
      },
      {
        id: 7,
        icon: "/icons/advancedequipment.svg",
        alt: "Support and Service",
        title: "SUPPORT AND SERVICE",
        description:
          "VION VR provides high-quality support to its customers. Additionally, our equipment comes with a warranty, giving you confidence in its reliability and quality.",
        // isActive: false,
      },
      {
        id: 8,
        icon: "/icons/certifiedequipment.svg",
        alt: "Audience Engagement",
        title: "AUDIENCE ENGAGEMENT",
        description:
          "The FALCON Blaster is a powerful tool for engaging your audience in your VR arena. The realistic shooting sensation and impulse recoil create an emotional experience for players, making them want to come back to the arena again and again.",
        // isActive: false,
      },
    ];
  };

  const FalconBlasterData = getFalconBlasterData();

  return (
    <>
      <div
        className={`${styles.vrBlasterMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        {/* <div className={styles.vrBlasterMainOverlay}> */}
        <div className={styles.vrBlasterContainer}>
          <div className={styles.vrBlasterSubDiv}>
            <div className={styles.vrBlasterHeadingDiv}>
              <h3 className={styles.vrBlasterHeading}>{headingDiv.heading}</h3>
              <p className={styles.vrBlasterSubHeading}>
                {headingDiv.subHeading}
              </p>
            </div>
            <div className={styles.vrBlasterCardMainDiv}>
              {FalconBlasterData.map((service) => (
                // <div
                //   key={service.id}
                //   className={styles.serviceCardClipPath}
                //   // className={`${styles.serviceCard} ${
                //   //   service.isActive ? styles.serviceCardActive : ""
                //   // }`}
                // >
                <div className={styles.serviceCard} key={service.id}>
                  <div className={styles.serviceIcon}>
                    <img src={service.icon} alt={service.alt} />
                  </div>
                  <div className={styles.serviceTextDiv}>
                    <h4 className={styles.serviceTitle}>{service.title}</h4>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
                </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default FVRBlaster;
