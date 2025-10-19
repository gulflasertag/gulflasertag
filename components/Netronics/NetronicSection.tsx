import React, { useRef, useState } from "react";
import styles from "./NetronicSection.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const NetronicSection = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const headingDesc =
    locale === "ar"
      ? "أطلق العنان للإثارة مع نظام الليزر الخارجي الخاص بنا ، المصمم للمغامرات المليئة بالحركة في أي بيئة. سواء في الحقول المفتوحة أو الغابات أو الساحات المخصصة ، يجلب نظامنا أداءً عاليًا للعبة مع أحدث التقنيات لتجارب لا تُنسى."
      : "Unleash the excitement with our Outdoor Laser Tag System,designed for action-packed adventures in any environment.Whether in open fields, forests, or custom-built arenas, our system brings high-performance gameplay with the latest technology for unforgettable experiences.";

  const readMoreText = locale === "ar" ? "عرض البنادق" : "View Taggers";

  const getSlideData = () => {
    if (locale === "ar") {
      return [
        {
          id: 1,
          number: "01",
          tagnoimg: "/images/tag01.jpg",
          title: "أجهزة التاجرز",
          heading: "أجهزة ليزرتاغ <span>متطورة</span>",
          description:
            "تم تصميم أجهزة ليزر تاغ لدينا لتقديم تجربة لعب استثنائية تجمع بين الدقة والمتانة. خفيفة الوزن ومريحة، ومزودة بأحدث المستشعرات لضمان أقصى درجات الراحة والدقة في كل لعبة.",
          // description:
          //   "تم تصميم أجهزة التاجرز الخاصة بنا لتوفير تجربة لعب استثنائية من حيث الدقة والمتانة. خفيفة الوزن ومريحة، ومزودة بأحدث المستشعرات لضمان الدقة والراحة أثناء كل لعبة.",
          image: "/images/taggers.webp",
        },
        {
          id: 2,
          number: "02",
          tagnoimg: "/images/tag02.jpg",
          title: "الأجهزة والملحقات",
          heading: "عزز تجربة اللعب مع <span>ملحقات الليزر تاغ</span>",
          description:
            "ارتقِ بتجربة الليزر تاغ الخارجية إلى المستوى التالي مع أجهزتنا الإضافية. من أجهزة الاستشعار التفاعلية إلى الملحقات القابلة للتخصيص، تتيح لك هذه الأجهزة إنشاء سيناريوهات فريدة تشرك اللاعبين بطرق جديدة ومثيرة.",
          image: "/images/netronicenhance.webp",
        },
        {
          id: 3,
          number: "03",
          tagnoimg: "/images/tag03.jpg",
          title: "أجهزة السيناريو",
          heading: "أوضاع لعب غامرة مع <span>أجهزة سيناريو ديناميكية</span>",
          description:
            "أنشئ أوضاع لعب غامرة وتحديات باستخدام أجهزتنا المتنوعة للسيناريو.  تضيف أجهزتنا الواقعية والعمق الاستراتيجي، مما يجعل كل لعبة لا تُنسى حقًا.",
          // description:
          //   "أنشئ أوضاع لعب غامرة وتحديات باستخدام أجهزتنا المتنوعة للسيناريو. تضيف أجهزتنا الواقعية والعمق الاستراتيجي، مما يجعل كل لعبة لا تُنسى حقًا.",
          image: "/images/dynamic.webp",
        },
      ];
    }
    return [
      {
        id: 1,
        number: "01",
        tagnoimg: "/images/tag01.jpg",
        title: "TAGGERS",
        heading: "Advanced Laser <span>Tag Taggers</span>",
        description:
          "Our high-performance laser tag taggers are designed for durability and precision, offering an exceptional gaming experience. Lightweight, ergonomic, and equipped with state-of-the-art sensors, they ensure accuracy and comfort during every game.",
        image: "/images/taggers.webp",
      },
      {
        id: 2,
        number: "02",
        tagnoimg: "/images/tag02.jpg",
        title: "DEVICES & TAGGERS",
        heading: "Enhance Gameplay with  <span>Lasertag Accessories</span>",
        description:
          "Take your outdoor laser tag experience to the next level with our additional devices. From interactive target sensors to customizable accessories, these devices allow you to craft unique scenarios that engage players in new and exciting ways.",
        image: "/images/netronicenhance.webp",
      },
      {
        id: 3,
        number: "03",
        tagnoimg: "/images/tag03.jpg",
        title: "SCENARIO DEVICES",
        heading: "Dynamic Game <span>Scenario Devices</span>",
        description:
          "Create immersive game modes and challenges with our versatile scenario devices. Our devices add realism and strategic depth, making each game truly unforgettable.",
        image: "/images/dynamic.webp",
      },
    ];
  };

  const getFalconsData = () => {
    if (locale === "ar") {
      return [
        {
          img: "/images/netrof1.webp",
          alt: "netrof1",
          title: "فالكون F1",
          desc: "نموذج عالمي يناسب الأطفال من 5-6 سنوات والبالغين",
          size: "21.5 بوصة",
        },
        {
          img: "/images/netronictacticalf1.webp",
          alt: "falconf2tactical",
          title: "فالكون F1 تكتيكال برو",
          desc: "نموذج كامل الحجم مريح للأطفال من 12 سنة والبالغين",
          size: "25 بوصة",
        },
        {
          img: "/images/mavericktagger.webp",
          alt: "maverick",
          title: "مافريك",
          desc: "صُمم لخوض تجربة ألعاب مكثفة، حيث يجمع هذا السلاح بين التصميم العصري والتحمّل العالي وسهولة الاستخدام.",
          size: "25 بوصة",
        },
        {
          img: "/images/falconf2.webp",
          alt: "f1lux",
          title: "فالكون F2",
          desc: "نموذج عالمي يناسب الأطفال من 5-6 سنوات والبالغين",
          size: "21.5 بوصة",
        },
        {
          img: "/images/luxf2.webp",
          alt: "luxf2",
          title: "فالكون F2 تكتيكال برو",
          desc: "نموذج كامل الحجم مريح للأطفال من 12 سنة والبالغين",
          size: "25 بوصة",
        },
        {
          img: "/images/lux.webp",
          alt: "lux",
          title: "فالكون لوكس بريميوم",
          desc: "جهاز تاجر مدمج مع إضاءة ساطعة مناسب للأطفال والألعاب الداخلية",
          size: "16.5 بوصة",
        },
      ];
    }
    return [
      {
        img: "/images/netrof1.webp",
        alt: "netrof1",
        title: "FALCON F1",
        desc: "Universal model that is suitable for both children from 5-6 years old and adults",
        size: "21,5 in",
      },
      {
        img: "/images/netronictacticalf1.webp",
        alt: "falconf2tactical",
        title: "Falcon F1 Tactical pro",
        desc: "Full-size model that will  be convenient for  children from 12 years  old and adults",
        size: "25 in",
      },
      {
        img: "/images/mavericktagger.webp",
        alt: "maverick",
        title: "Maverick",
        desc: "Designed for intense gaming, this tagger combines modern design, durability, and ease of use.",
        size: "25 in",
      },
      {
        img: "/images/falconf2.webp",
        alt: "f1lux",
        title: "Falcon F2",
        desc: "Universal model that is  suitable for both children  from 5-6 years old and  adults",
        size: "21,5 in",
      },
      {
        img: "/images/luxf2.webp",
        alt: "luxf2",
        title: "Falcon F2 Tactical pro",
        desc: "Full-size model that will  be convenient for  children from 12 years  old and adults",
        size: "25 in",
      },
      {
        img: "/images/lux.webp",
        alt: "lux",
        title: "Falcon Lux Premium",
        desc: "Compact tagger with bright  illumination for working  with children and indoor  playing",
        size: "16,5 in",
      },
    ];
  };

  const getGameDevices = () => {
    if (locale === "ar") {
      return [
        {
          img: "/images/netronicsirius.webp",
          alt: "sirius",
          title: "سيريوس",
          desc: "الجهاز الأكثر شعبية والأهم في كل ساحة لعب. يتم وضع محطات سيريوس في قاعدة كل فريق لتجديد اللاعبين، وفي أجزاء مختلفة من ساحة اللعب لإنشاء مناطق إشعاع منفصلة أو نقاط إعادة تعبئة الذخيرة.",
        },
        {
          img: "/images/smartbox.webp",
          alt: "smartbox",
          title: "صندوق الهيمنة الذكي",
          desc: "صندوق الهيمنة الذكي هو من بين أكثر أجهزة السيناريو شعبية في صناعة الليزر تاغ. عادة ما يتم وضعه في مركز ساحة اللعب أو في مناطق أخرى ذات نشاط عالٍ للاعبين.",
        },
        {
          img: "/images/supernova.webp",
          alt: "supernova",
          title: "قنبلة الليزر سوبرنوفا",
          desc: "تتيح سوبرنوفا إعادة إنشاء سيناريوهات شهيرة من ألعاب الكمبيوتر، حيث يتم تقسيم مجموعة من اللاعبين إلى فرق إرهابية ومكافحة الإرهاب، مع فريق واحد مكلف بتوصيل القنبلة ووضعها على منصة NFC خاصة وتفعيلها، بينما يجب على الفريق الآخر تعطيل القنبلة.",
        },
      ];
    }
    return [
      {
        img: "/images/netronicsirius.webp",
        alt: "sirius",
        title: "SIRIUS",
        desc: "The most popular and essential scenario device on every playing field. SIRIUS stations are placed at each team's base for player respawn, and in various parts of the playing field to create separate radiation zones or ammo refill points.",
      },
      {
        img: "/images/smartbox.webp",
        alt: "smartbox",
        title: "SMART DOMINATION BOX",
        desc: "Smart Domination Box is among the most popular scenario devices in the laser tag industry. It is usually placed in the playfield center or in other areas of high players’ activity.",
      },
      {
        img: "/images/supernova.webp",
        alt: "supernova",
        title: "SUPERNOVA LASER TAG-BOMB",
        desc: "SUPERNOVA gives an opportunity to recreate popular scenarios from computer games, when group of players is divided into terrorist and counter-terrorist teams, with one team supposed to deliver, place a bomb onto the special NFC-platform and to activate it, while the other team must have the bomb deactivated.",
      },
    ];
  };

  const gameDevices = getGameDevices();
  const falconsData = getFalconsData();
  const slideData = getSlideData();

  return (
    <>
      <div
        // className={styles.netronicSectionMain}
        className={`${styles.netronicSectionMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.netronicSectionContainer}>
          <div className={styles.netronicSectionSub}>
            <div className={styles.headingDiv}>
              {/* <h3>netronicSection Form</h3> */}
              <p>{headingDesc}</p>
            </div>
            <div className={styles.netronic1MainDiv}>
              <div className={styles.net1SlideMainDiv}>
                {slideData.slice(0, 1).map((slide) => (
                  <div className={styles.slideContent}>
                    <div className={styles.slideTextDiv}>
                      <div className={styles.slideNumberBadge}>
                        <img src={slide.tagnoimg} alt={slide.number} />
                      </div>
                      <div className={styles.slideTextDivContent}>
                        <div
                          className={styles.slideHeading}
                          dangerouslySetInnerHTML={{ __html: slide.heading }}
                        />
                        {/* {slide.heading} */}
                        {/* </div> */}
                        <p className={styles.slideDescription}>
                          {slide.description}
                        </p>
                        {/* <button className={styles.viewMoreBtn}>
                            View More →
                          </button> */}
                        <Link href="/taggers">
                          <div className={styles.readmoreBtnWrapper}>
                            <button className={styles.readmoreBtn}>
                              <div
                                className={styles.readmoreBtnContent}
                                data-button-type="readmore"
                              >
                                <p>{readMoreText}</p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  viewBox="0 0 19 19"
                                  fill="none"
                                >
                                  <path
                                    d="M11.3223 4.94751L15.8748 9.50001L11.3223 14.0525"
                                    stroke="white"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M3.125 9.5H15.7475"
                                    stroke="white"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.slideRightMainImgDiv}>
                      <div className={styles.slideImageDiv}>
                        <img
                          src={slide.image || "/placeholder.svg"}
                          alt={slide.title}
                          className={styles.slideImage}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.netFalconsGridDiv}>
                {falconsData.map((item, idx) => (
                  <div className={styles.netFalcGridItem} key={idx}>
                    <div className={styles.netFalcImgWrapper}>
                      <div className={styles.netFalcImgContainer}>
                        <img
                          src={item.img}
                          alt={item.alt}
                          className={styles.netFalcImg}
                        />
                      </div>
                    </div>
                    <div className={styles.netFalcContent}>
                      <h4 className={styles.netFalcTitle}>{item.title}</h4>
                      <div className={styles.netFalcLine}></div>
                      <p className={styles.netFalcDesc}>{item.desc}</p>
                      <p className={styles.netFalcDesc}>{item.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.netronic1MainDiv}>
              <div className={styles.net1SlideMainDiv}>
                {slideData.slice(1, 2).map((slide) => (
                  <div
                    className={styles.slideContent}
                    id={styles.slideContent2}
                  >
                    <div className={styles.slideTextDiv}>
                      <div className={styles.slideNumberBadge}>
                        <img src={slide.tagnoimg} alt={slide.number} />
                      </div>
                      <div className={styles.slideTextDivContent}>
                        <div
                          className={styles.slideHeading}
                          dangerouslySetInnerHTML={{ __html: slide.heading }}
                        />
                        {/* {slide.heading} */}
                        {/* </div> */}
                        <p className={styles.slideDescription}>
                          {slide.description}
                        </p>
                        {/* <button className={styles.viewMoreBtn}>
                            View More →
                          </button> */}
                        {/* <div className={styles.readmoreBtnWrapper}>
                          <button className={styles.readmoreBtn}>
                            <div
                              className={styles.readmoreBtnContent}
                              data-button-type="readmore"
                            >
                              <p>View More</p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                              >
                                <path
                                  d="M11.3223 4.94751L15.8748 9.50001L11.3223 14.0525"
                                  stroke="white"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M3.125 9.5H15.7475"
                                  stroke="white"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </button>
                        </div> */}
                      </div>
                    </div>

                    <div className={styles.slideRightMainImgDiv}>
                      <div className={styles.slideImageDiv}>
                        {/* <Link href="/additionaldevices">
                          <div className={`${styles.dot} ${styles.dotHead}`}>
                            <div className={styles.dotInside}></div>
                          </div>
                        </Link> */}
                        <Link href="/additionaldevices">
                          <div className={`${styles.dot} ${styles.dotGrenade}`}>
                            <div className={styles.dotInside}></div>
                          </div>
                        </Link>
                        <Link href="/additionaldevices">
                          <div className={`${styles.dot} ${styles.dotJacket}`}>
                            <div className={styles.dotInside}></div>
                          </div>
                        </Link>
                        <Link href="/additionaldevices">
                          <div className={`${styles.dot} ${styles.dotHand}`}>
                            <div className={styles.dotInside}></div>
                          </div>
                        </Link>
                        <img
                          src={slide.image || "/placeholder.svg"}
                          alt={slide.title}
                          className={styles.slideImage}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              id="dynamicgamescenariodevice"
              className={styles.netronic1MainDiv}
            >
              <div className={styles.net1SlideMainDiv}>
                {slideData.slice(2).map((slide) => (
                  <div
                    className={styles.slideContent}
                    id={styles.slideContent3}
                  >
                    <div
                      className={styles.slideTextDiv}
                      id={styles.slideTextDiv3}
                      // style={{ width: "100%", maxWidth: "100%" }}
                    >
                      <div className={styles.slideNumberBadge}>
                        <img src={slide.tagnoimg} alt={slide.number} />
                      </div>
                      <div
                        className={styles.slideTextDivContent}
                        style={{ alignItems: "center" }}
                      >
                        <div
                          className={styles.slideHeading}
                          dangerouslySetInnerHTML={{ __html: slide.heading }}
                        />
                        <p
                          className={styles.slideDescription}
                          style={{ textAlign: "center" }}
                        >
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.gameDeviceGridDiv}>
                {gameDevices.map((item, idx) => (
                  <div
                    // className={styles.gameDeviceGridItem}
                    className={`${styles.gameDeviceGridItem} ${
                      idx === 0 ? styles.activeGameDevice : ""
                    }`}
                    key={idx}
                  >
                    <div className={styles.gameDeviceImgWrapper}>
                      <img
                        src={item.img}
                        alt={item.alt}
                        className={styles.gameDeviceImg}
                      />
                      <div className={styles.gameDeviceImgOverlay}></div>
                    </div>
                    <div className={styles.gameDeviceContent}>
                      <h4 className={styles.gameDeviceTitle}>{item.title}</h4>
                      <p className={styles.gameDeviceDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.PageIntroStroke}></div> */}
      </div>
    </>
  );
};

export default NetronicSection;
