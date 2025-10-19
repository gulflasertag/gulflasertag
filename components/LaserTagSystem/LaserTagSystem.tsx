import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./LaserTagSystem.module.scss"; // adjust the path as needed
import { Span } from "next/dist/trace";
import Link from "next/link";

const LaserTagSystem = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile (1024px or below)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getReadmoreButton = () => {
    if (locale === "ar") {
      return (
        <button className={styles.readmoreBtn}>
          <div
            className={styles.readmoreBtnContent}
            data-button-type="readmore"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              transform="scaleX(-1)" // Flip the icon for RTL
            >
              <path
                d="M11.3223 4.94751L15.8748 9.50001L11.3223 14.0525"
                stroke="white"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.125 9.5H15.7475"
                stroke="white"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>عرض المزيد</p>
          </div>
        </button>
      );
    }
    return (
      <button className={styles.readmoreBtn}>
        <div className={styles.readmoreBtnContent} data-button-type="readmore">
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
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.125 9.5H15.7475"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    );
  };

  const getSlideData = () => {
    if (locale === "ar") {
      return [
        {
          id: 1,
          number: "01",
          tagnoimg: "/images/tag01.jpg",
          title: "البنادق",
          heading: "أجهزة ليزرتاغ <span>متطورة</span>",
          description:
            "تم تصميم أجهزة الليزر تاغ عالية الأداء لدينا من أجل التحمل والدقة، لتوفير تجربة لعب استثنائية. خفيفة الوزن، مريحة في الإمساك، ومزودة بحساسات متطورة تضمن الدقة والراحة في كل جولة لعب.",
          image: "/images/taggers.webp",
          link: "/taggers",
        },
        {
          id: 2,
          number: "02",
          tagnoimg: "/images/tag02.jpg",
          title: "الملحقات",
          heading:
            "ارتقِ بتجربة اللعب مع <span>إكسسوارات الليزرتاغ المتطورة</span>",
          description:
            "ارتقِ بتجربة الليزر تاغ الخارجية الخاصة بك باستخدام أجهزتنا الإضافية. من الحساسات التفاعلية إلى الملحقات القابلة للتخصيص، تتيح لك هذه الأجهزة إنشاء سيناريوهات فريدة تجذب اللاعبين بطرق جديدة ومثيرة.",
          image: "/images/gameplay.webp",
          link: "/additionaldevices",
        },
        {
          id: 3,
          number: "03",
          tagnoimg: "/images/tag03.jpg",
          title: "أجهزة سيناريو",
          heading: "أجهزة سيناريوهات <span>لعب ديناميكية</span>",
          description:
            "أنشئ أوضاع لعب غامرة وتحديات باستخدام أجهزة السيناريو متعددة الاستخدامات لدينا. من مولدات الدخان إلى الطائرات بدون طيار التفاعلية، تضيف أجهزتنا واقعية وعمقًا استراتيجيًا، مما يجعل كل لعبة لا تُنسى.",
          image: "/images/dynamic.webp",
          link: "/gamescenariodevices",
        },
        {
          id: 4,
          number: "04",
          tagnoimg: "/images/tag04.jpg",
          title: "البرمجيات",
          heading: "برمجيات سهلة الاستخدام لـ<span>تشغيل سلس</span>",
          description:
            "يتم تشغيل أنظمة الليزر تاغ الخاصة بنا بواسطة برمجيات سهلة الاستخدام تتيح للمشغلين تخصيص أوضاع اللعب، وتتبع إحصائيات اللاعبين، ومراقبة البيانات في الوقت الفعلي أثناء اللعب. سهولة إدارة المجموعات الكبيرة مع واجهات استخدام مريحة وسلسة.",
          image: "/images/software.webp",
          link: "/softwares",
        },
      ];
    }
    return [
      {
        id: 1,
        number: "01",
        tagnoimg: "/images/tag01.jpg",
        title: "TAGGERS",
        heading: "Advanced Laser <span> Tag Taggers</span>",
        description:
          "Our high-performance laser tag taggers are designed for durability and precision, offering an exceptional gaming experience. Lightweight, ergonomic, and equipped with state-of-the-art sensors, they ensure accuracy and comfort during every game.",
        image: "/images/taggers.webp",
        link: "/taggers",
      },
      {
        id: 2,
        number: "02",
        tagnoimg: "/images/tag02.jpg",
        title: "Accessories",
        heading: "Enhance Gameplay with  <span>Lasertag Accessories</span>",
        description:
          "Take your outdoor laser tag experience to the next level with our additional devices. From interactive target sensors to customizable accessories, these devices allow you to craft unique scenarios that engage players in new and exciting ways.",
        image: "/images/gameplay.webp",
        link: "/additionaldevices",
      },
      {
        id: 3,
        number: "03",
        tagnoimg: "/images/tag03.jpg",
        title: "SCENARIO DEVICES",
        heading: "Dynamic Game <span>Scenario Devices</span>",
        description:
          "Create immersive game modes and challenges with our versatile scenario devices.",
        image: "/images/dynamic.webp",
        link: "/gamescenariodevices",
      },
      {
        id: 4,
        number: "04",
        title: "SOFTWARES",
        tagnoimg: "/images/tag04.jpg",
        heading: "Intuitive Software for <span>Seamless Operation</span>",
        description:
          "Our laser tag systems are powered by easy-to-use software that allows operators to customize game modes, track player stats, and monitor real-time data during gameplay. Manage large groups and keep the game flowing smoothly with user-friendly interfaces.",
        image: "/images/software.webp",
        link: "/softwares",
      },
    ];
  };

  const slideData = getSlideData();

  const swiperRef = useRef<any>(null);

  return (
    <div
      // className={styles.laserTagMainDiv}
      className={`${styles.laserTagMainDiv} ${
        locale === "ar" ? styles.rtl : ""
      }`}
    >
      <div className={styles.laserTagContainer}>
        <div className={styles.laserTagSubDiv}>
          <h3 className={styles.laserTagHeading}>
            {locale === "ar" ? (
              <>
                نظام ألعاب الليزر تاغ{" "}
                <span className={styles.outdoor}>الخارجي</span>
              </>
            ) : (
              <>
                <span className={styles.outdoor}>Outdoor </span>Laser Tag System
              </>
            )}
          </h3>

          <div className={styles.slideMainDiv}>
            <div className={styles.slideDeatilMainDiv}>
              <Swiper
                key={locale} // Key to re-render on locale change
                dir={locale === "ar" ? "rtl" : "ltr"}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={100}
                slidesPerView={1}
                navigation={isMobile}
                // Disable autoplay for now
                autoplay={{
                  delay: 3000, // 4 seconds delay between slides
                  disableOnInteraction: false, // Continue autoplay even after user interaction
                  pauseOnMouseEnter: true, // Pause on hover
                }}
                speed={1000} // Smooth transition duration (1.2 seconds)
                allowTouchMove={false} // Disable touch/mouse drag
                allowSlideNext={true} // Allow programmatic slide navigation
                allowSlidePrev={true}
                loop={true} // Enable infinite loop
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // Use realIndex for loop
                className={styles.swiperContainer}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {slideData.map((slide) => (
                  <SwiperSlide
                  // key={slide.id}
                  >
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
                          <Link href={slide.link}>
                            <div className={styles.readmoreBtnWrapper}>
                              {getReadmoreButton()}
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sliderNumberDiv}>
        <div className={styles.numberNavigation}>
          {slideData.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.numberItem} ${
                activeSlide === index ? styles.active : ""
              }`}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideToLoop(index); // Use slideToLoop for infinite loop
                }
              }}
            >
              <div className={styles.numberCircle}>{slide.number}</div>
              <span className={styles.numberLabel}>{slide.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaserTagSystem;
