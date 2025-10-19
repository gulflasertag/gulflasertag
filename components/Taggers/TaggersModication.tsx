import React, { useState } from "react";
import styles from "./TaggersModication.module.scss";
import { useRouter } from "next/router";

const TaggersModication = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const TABS_WITH_ENG = [
    { key: "MAVERICK", label: "Maverick" },
    { key: "FALCONPREMIUM", label: "Falcon Premium" },
    {
      key: "FALCONTACTICALPRO",
      label: "FALCON TACTICAL PRO",
    },
    { key: "LUXPREMIUM", label: "Falcon LUX" },
  ];

  const TABS_WITH_ARABIC = [
    { key: "MAVERICK", label: "مافريك" },
    { key: "FALCONPREMIUM", label: "الإصدار المتميز" },
    { key: "FALCONTACTICALPRO", label: "فالكون تكتيكال برو" },
    { key: "LUXPREMIUM", label: "فالكون لوكس" },
  ];

  const TABS = locale === "ar" ? TABS_WITH_ARABIC : TABS_WITH_ENG;

  const getTabData = () => {
    if (locale === "ar") {
      return {
        MAVERICK: {
          falcons: [
            {
              image: "/images/maverick1.webp",
              name: "ترقبوا قريبًا",
              details: [],
            },
            {
              image: "/images/maverick2.webp",
              name: "",
              details: [],
            },
          ],
          features: [],
        },
        FALCONPREMIUM: {
          falcons: [
            {
              image: "/images/premiumf1.jpg",
              name: "فالكون 1",
              details: [
                { title: "الوزن", value: "39 أونصة" },
                { title: "وقت التشغيل", value: "24 ساعة" },
                { title: "الضمان", value: "سنة واحدة" },
              ],
            },
            {
              image: "/images/premiumf2.jpg",
              name: "فالكون 2",
              details: [
                { title: "الوزن", value: "42.5 أونصة" },
                { title: "وقت التشغيل", value: "24 ساعة" },
                { title: "الضمان", value: "سنة واحدة" },
              ],
            },
          ],
          features: [
            { name: "بلاستيك مقاوم للصدمات من مادة ABS", access: true },
            { name: "رأس مطاطي واقي", access: true },
            { name: "جهاز استشعاراليدين", access: true },
            { name: "شاشة IPS متعددة الألوان", access: true },
            { name: "أجهزة مدمجة للاستشعار بالإصابة", access: true },
            { name: "دفع الارتداد", access: true },
            { name: "طباعة تمويهية", access: false },
            { name: "رؤية النقطة الحمراء", access: false },
          ],
        },
        FALCONTACTICALPRO: {
          falcons: [
            {
              image: "/images/tacticalf1.webp",
              name: "فالكون 1",
              details: [
                { title: "الوزن", value: "46 أونصة" },
                { title: "وقت التشغيل", value: "24 ساعة" },
                { title: "الضمان", value: "سنة واحدة" },
              ],
            },
            {
              image: "/images/falcon2tacticaltagger.webp",
              name: "فالكون 2",
              details: [
                { title: "الوزن", value: "50 أونصة" },
                { title: "وقت التشغيل", value: "24 ساعة" },
                { title: "الضمان", value: "سنة واحدة" },
              ],
            },
          ],
          features: [
            { name: "بلاستيك مقاوم للصدمات من مادة ABS", access: true },
            { name: "رأس مطاطي واقي", access: true },
            { name: "جهاز استشعاراليدين", access: true },
            { name: "شاشة IPS متعددة الألوان", access: true },
            { name: "أجهزة مدمجة للاستشعار بالإصابة", access: true },
            { name: "دفع الارتداد", access: true },
            { name: "طباعة تمويهية", access: true },
            { name: "رؤية النقطة الحمراء", access: true },
          ],
        },
        LUXPREMIUM: {
          falcons: [
            {
              image: "/images/luxpremium1.jpg",
              name: "فالكون 1",
              details: [
                { title: "الوزن", value: "32 أونصة" },
                { title: "وقت التشغيل", value: "24 ساعة" },
                { title: "الضمان", value: "سنة واحدة" },
              ],
            },
            {
              image: "/images/luxpremium2.jpg",
              name: "فالكون 2",
              details: [
                { title: "الوزن", value: "38,8 أونصة" },
                { title: "وقت التشغيل", value: "24 ساعة" },
                { title: "الضمان", value: "سنة واحدة" },
              ],
            },
          ],
          features: [
            { name: " 10أسلحة في سلاح واحد", access: true },
            { name: "إطار مقاوم للصدمات", access: true },
            { name: "إضاءة ملونة لطلقات الفريق", access: true },
            { name: "إشارة ضوئية جانبية", access: true },
            { name: "مستشعرات مدمجة", access: true },
            { name: "شاشة IPS ملونة", access: true },
            { name: "دفع ارتداد", access: true },
            { name: "جهاز استشعار اليدين", access: true },
            { name: "طباعة تمويهية", access: false },
          ],
        },
      };
    }
    return {
      MAVERICK: {
        falcons: [
          {
            image: "/images/maverick1.webp",
            name: "Coming Soon!",
            details: [],
          },

          {
            image: "/images/maverick2.webp",
            name: "",
            details: [],
          },
        ],
        features: [],
      },
      FALCONPREMIUM: {
        falcons: [
          {
            image: "/images/premiumf1.jpg",
            name: "Falcon 1",
            details: [
              { title: "Weight", value: "39 oz" },
              { title: "Operating time", value: "24 Hours" },
              { title: "Warranty", value: "1 year" },
            ],
          },
          {
            image: "/images/premiumf2.jpg",
            name: "Falcon 2",
            details: [
              { title: "Weight", value: "42,5 oz" },
              { title: "Operating time", value: "24 Hours" },
              { title: "Warranty", value: "1 year" },
            ],
          },
        ],
        features: [
          { name: "Shockproof ABS plastic", access: true },
          { name: "Protective rubber tip", access: true },
          { name: "Two hand sensors", access: true },
          { name: "Multi-colored IPS-screen", access: true },
          { name: "Built-in hit sensors", access: true },
          { name: "Impulse recoil", access: true },
          { name: "Pixel print", access: false },
          { name: "Red dot sight", access: false },
        ],
      },
      FALCONTACTICALPRO: {
        falcons: [
          {
            image: "/images/tacticalf1.webp",
            name: "Falcon 1",
            details: [
              { title: "Weight", value: "46 oz" },
              { title: "Operating time", value: "24 Hours" },
              { title: "Warranty", value: "1 year" },
            ],
          },
          {
            image: "/images/falcon2tacticaltagger.webp",
            name: "Falcon 2",
            details: [
              { title: "Weight", value: "50 oz" },
              { title: "Operating time", value: "24 Hours" },
              { title: "Warranty", value: "1 year" },
            ],
          },
        ],
        features: [
          { name: "Shockproof ABS plastic", access: true },
          { name: "Protective rubber tip", access: true },
          { name: "Two hand sensors", access: true },
          { name: "Multi-colored IPS-screen", access: true },
          { name: "Built-in hit sensors", access: true },
          { name: "Impulse recoil", access: true },
          { name: "Pixel print", access: true },
          { name: "Red dot sight", access: true },
        ],
      },
      LUXPREMIUM: {
        falcons: [
          {
            image: "/images/luxpremium1.jpg",
            name: "Falcon 1",
            details: [
              { title: "Weight", value: "32 oz" },
              { title: "Operating time", value: "24 Hours" },
              { title: "Warranty", value: "1 year" },
            ],
          },
          {
            image: "/images/luxpremium2.jpg",
            name: "Falcon 2",
            details: [
              { title: "Weight", value: "38,8 oz" },
              { title: "Operating time", value: "24 Hours" },
              { title: "Warranty", value: "1 year" },
            ],
          },
        ],
        features: [
          { name: "10 Weapons in one", access: true },
          { name: "Shock resistant casing", access: true },
          { name: "Team colored shot illumination", access: true },
          { name: "Side-light Indication", access: true },
          { name: "Built-in hit sensors", access: true },
          { name: "Color IPS display", access: true },
          { name: "LUX Impulse recoil", access: true },
          { name: "Two hand sensors ", access: true },
          { name: "Pixel print", access: false },
        ],
      },
    };
  };

  const luxfalcon2Data =
    locale === "ar"
      ? {
          image: "/images/luxpremiumf2.webp",
          name: "فالكون لوكس",
          details: [
            { title: "الوزن", value: "39 أونصة" },
            { title: "وقت التشغيل", value: "24 ساعة" },
            { title: "الضمان", value: "سنة واحدة" },
          ],
        }
      : {
          image: "/images/luxpremiumf2.webp",
          name: "Falcon LUX",
          details: [
            { title: "Weight", value: "39 oz" },
            { title: "Operating time", value: "24 Hours" },
            { title: "Warranty", value: "1 year" },
          ],
        };

  const TAB_DATA: any = getTabData();

  const [activeTab, setActiveTab] = useState(
    locale === "ar" ? TABS_WITH_ARABIC[0].key : TABS_WITH_ENG[0].key
  );
  const tabKeys = TABS.map((tab) => tab.key);
  const currentData = TAB_DATA[activeTab];

  console.log(activeTab, "190909090");

  const maverickContentData =
    locale === "ar"
      ? {
          heading:
            "تعرف على مافريك من شركة نترونيك – مزيج متناغم بين التكنولوجيا والإبداع.",
          description:
            "صُمم لخوض تجربة ألعاب مكثفة، حيث يجمع هذا السلاح بين التصميم العصري والتحمّل العالي وسهولة الاستخدام.",
          features: [
            {
              title: "واقعية تفوق التوقعات –",
              description:
                "تصميم مستوحى من منصة الأسلحة الحقيقية مع نظام تلقيم يدوي يضعك في قلب تجربة الليزرتاغ الاحترافية بكل تفاصيلها.",
            },
            {
              title: "الابتكار –",
              description:
                "شاشة IPS مدمجة تعرض مؤشرات اللعبة، مع إضاءة تفاعلية للإطلاق وارتداد واقعي بالاهتزاز – لمسة التميّز الخاصة من نترونيك.",
            },
            {
              title: "المرونة –",
              description:
                "عشر أنواع من الأسلحة في جهاز واحد، مع أنماط إطلاق متعددة وإعدادات سيناريو متنوعة تجعل تجربة اللعب أكثر حيوية وإثارة من أي وقتٍ مضى.",
            },
            {
              title: "مافريك –",
              description:
                "ليس مجرد سلاح ليزرتاغ، بل هو أداة تزيد أرباح عملك وتجعل ألعابك تجربة لا تُنسى.",
            },
          ],
        }
      : {
          heading:
            "MEET MAVERICK BY NETRONIC – A SYMBIOSIS OF TECHNOLOGY AND EMOTION.",
          description:
            "Designed for intense gaming, this tagger combines modern design, durability, and ease of use.",
          features: [
            {
              title: "REALISM –",
              description:
                'the recognizable AR platform shape with a bolt reload immerses players in the atmosphere of "adult" laser tag',
            },
            {
              title: "INNOVATION –",
              description:
                "a built-in IPS screen with game indicators, dynamic shot lighting, and impulse and vibration recoil NETRONIC's signature",
            },
            {
              title: "FLEXIBILITY –",
              description:
                "10 types of weapons in 1 tagger, multiple firing modes, and scenario settings make the game as dynamic as possible",
            },
            {
              title: "MAVERICK –",
              description:
                "is not just a laser tag weapon. It's a tool that makes your business more profitable and your games unforgettable",
            },
          ],
        };

  return (
    <div
      // className={styles.tModicMainDiv}
      className={`${styles.tModicMainDiv} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.tModicContainer}>
        <div className={styles.tModicSubDiv}>
          <h3 className={styles.tModicHeading}>
            {(() => {
              if (activeTab === "FALCONPREMIUM") {
                return locale === "ar"
                  ? "فالكون الإصدار المتميز"
                  : "FALCON PREMIUM";
              }
              if (activeTab === "LUXPREMIUM") {
                return locale === "ar"
                  ? "فالكون لوكس الإصدار المتميز"
                  : "FALCON LUX PREMIUM";
              }
              if (activeTab === "FALCONTACTICALPRO") {
                return locale === "ar"
                  ? "فالكون تكتيكال برو"
                  : "FALCON TACTICAL PRO";
              }
              // Default: show tab label
              return TABS.find((tab) => tab.key === activeTab)?.label;
            })()}
          </h3>
          <div className={styles.tModicBelowDiv}>
            <div className={styles.tModicLeftDiv}>
              {TABS.map((tab) => (
                <div
                  key={tab.key}
                  className={`${styles.readmoreBtnWrapper} ${
                    activeTab === tab.key ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                  style={{ cursor: "pointer" }}
                >
                  <button className={styles.tabButton}>
                    <p className={styles.tabText}>{tab.label}</p>
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.tModicRightDiv}>
              {activeTab === "LUXPREMIUM" ? (
                <div className={styles.tModicFalconDivMain}>
                  {/* Falcon 1: Show 3 images */}
                  <div
                    className={styles.tModicFalcon1}
                    key="lux-falcon1"
                    id={styles.luxfalcon1}
                  >
                    <div className={styles.luxPremiumImgDivUp}>
                      <div className={styles.tModicFalconImgDivLux1}>
                        <img
                          className={styles.tModicFalconImg}
                          // src="/images/luxpremiumnew.webp"
                          src="/images/luxpremiumf1.webp"
                          alt="luxpremiumf1"
                        />
                      </div>
                      <div
                        className={styles.tModicFalconImgDivLux1}
                        style={{ transform: "rotateY(180deg)" }}
                      >
                        <img
                          className={styles.tModicFalconImg}
                          // src="/images/luxpremiumf1.webp"
                          src="/images/luxpremiumneww.webp"
                          alt="luxpremiumf1"
                        />
                      </div>
                    </div>
                    {/* <div className={styles.luxPremiumImgDivUp}></div> */}
                    <div className={styles.tModicFalconImgDivLux}>
                      <img
                        className={styles.tModicFalconImg}
                        src="/images/luxpremiumf3.webp"
                        alt="luxpremiumf1"
                      />
                    </div>
                  </div>
                  {/* Falcon 2: Only content section */}
                  <div className={styles.tModicFalcon1} key="lux-falcon2">
                    <div className={styles.fContentSection}>
                      <div className={styles.fSectionLuxDiv}>
                        <h4 className={styles.fSectionHeading}>
                          {luxfalcon2Data.name}
                        </h4>
                        <p className={styles.fSectionLuxPremium}>
                          {locale === "ar"
                            ? "مسدس ليزر تاغ صغير الحجم مزود بتقنية متطورة للاعبين صغار السن."
                            : "Compact tagger with advanced technology for the younger audience"}
                        </p>
                      </div>
                      <div className={styles.tModicLineInside}></div>
                      <div className={styles.fSectionDetailsDiv}>
                        {TAB_DATA.LUXPREMIUM.falcons[1].details.map(
                          (detail: any) => (
                            <div
                              className={styles.featuresData}
                              key={detail.title}
                            >
                              <p className={styles.featureTitle}>
                                {detail.title}
                              </p>
                              <span className={styles.featureDesc}>
                                {detail.value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeTab === "MAVERICK" ? (
                <>
                  <div className={styles.tModicFalconDivMain}>
                    <div className={styles.tModicFalcon1}>
                      <div className={styles.test}>
                        <div className={styles.tModicFalconImgDiv}>
                          <img
                            className={styles.tModicFalconImg}
                            src="/images/maverick1.webp"
                            alt="maverick1"
                          />
                        </div>
                        <div className={styles.tModicFalconImgDiv}>
                          <img
                            className={styles.tModicFalconImg}
                            src="/images/maverick2.webp"
                            alt="maverick2"
                          />
                        </div>
                      </div>
                      <div className={styles.fContentSection}>
                        <h4 className={styles.fSectionHeading}>
                          {maverickContentData.heading}
                        </h4>
                        <p className={styles.fSectionLuxPremium}>
                          {maverickContentData.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tModicLineInside}></div>
                  <div className={styles.maverikGGrid}>
                    {maverickContentData.features.map((feature, index) => (
                      <div className={styles.maverikGItem} key={index}>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className={styles.tModicFalconDivMain}>
                  {currentData.falcons.map((falcon: any, idx: any) => (
                    <div
                      className={styles.tModicFalcon1}
                      key={falcon.name + idx}
                    >
                      <div className={styles.tModicFalconImgDiv}>
                        <img
                          className={styles.tModicFalconImg}
                          src={falcon.image}
                          alt={falcon.name}
                        />
                      </div>
                      <div className={styles.fContentSection}>
                        <h4 className={styles.fSectionHeading}>
                          {falcon.name}
                        </h4>
                        {falcon.details.lengh > 0 && (
                          <div className={styles.tModicLineInside}></div>
                        )}
                        {falcon.details.lengh > 0 && (
                          <div className={styles.fSectionDetailsDiv}>
                            {falcon.details.map((detail: any) => (
                              <div
                                className={styles.featuresData}
                                key={detail.title}
                              >
                                <p className={styles.featureTitle}>
                                  {detail.title}
                                </p>
                                <span className={styles.featureDesc}>
                                  {detail.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {currentData.features.length > 0 && (
                <div className={styles.tModicLine}></div>
              )}
              <div
                // className={styles.tModicFacilitiesDiv}
                className={`${styles.tModicFacilitiesDiv} ${
                  activeTab === "LUXPREMIUM" ? styles.luxFacilities : ""
                }`}
              >
                {currentData.features.map((feature: any) => (
                  <div className={styles.facilitDivMain} key={feature.name}>
                    <img
                      className={styles.facilityAccessImg}
                      src={
                        feature.access ? "/icons/right.svg" : "/icons/cross.svg"
                      }
                      alt={feature.access ? "Accessible" : "Not Accessible"}
                      style={feature.access ? {} : { opacity: 0.4 }}
                    />
                    <p
                      className={styles.facilityName}
                      style={feature.access ? {} : { opacity: 0.4 }}
                    >
                      {feature.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaggersModication;
