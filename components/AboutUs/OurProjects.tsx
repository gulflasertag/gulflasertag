import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./OurProjects.module.scss";
import { useRouter } from "next/router";

const OurProjects = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const swiperRef: any = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView]: any = useState(1);
  const [currentSwiperInstance, setCurrentSwiperInstance] = useState<any>(null);

  const heading =
    locale === "ar"
      ? "مشاريعنا في الدول العربية"
      : "Our Projects in Gulf Region";

  const getProjectData = () => {
    if (locale === "ar") {
      return [
        {
          id: 1,
          title: "ليزر تاغ تشيرنوبيل",
          description: "أكبر ساحة ليزر تاغ في المملكة!",
          image: "/images/op1.webp",
        },
        {
          id: 2,
          title: "TeenKSA",
          description:
            "مساحة نابضة بالحياة ومثيرة تم إنشاؤها حصريًا للمراهقين للاستمتاع بمرح لا نهاية له!",
          image: "/images/op2.webp",
        },
        {
          id: 3,
          title: "حديقة شلال الترفيهية",
          description: "استمتع بتجارب مليئة بالمرح للعائلة بأكملها!",
          image: "/images/op3.webp",
        },
        {
          id: 4,
          title: "قرية هيلوت لبنان",
          description: "اهرب إلى الطبيعة وابحث عن الهدوء!",
          image: "/images/op4.jpg",
        },
        {
          id: 5,
          title: "ليزر تاغ B1-200",
          description: "انغمس في مغامرات مثيرة في عالم الليزر تاغ!",
          image: "/images/op5.webp",
        },
      ];
    }
    return [
      {
        id: 1,
        title: "Chernobyl Lasertag",
        description:
          "Chernobyl LaserTag – The largest laser tag arena in the Kingdom!",
        image: "/images/op1.webp",
      },
      {
        id: 2,
        title: "TeensKSA",
        description:
          "A vibrant and exciting space created exclusively for teens to enjoy endless fun and entertainment!",
        image: "/images/op2.webp",
      },
      {
        id: 3,
        title: "Shallal Theme Park",
        description:
          "Shallal Theme Park – Enjoy fun-filled experiences for the whole family!",
        image: "/images/op3.webp",
      },
      {
        id: 4,
        title: "Hillout Lebanon",
        description: "Hillout Village – Escape into nature and find serenity!",
        image: "/images/op4.webp",
      },
      {
        id: 5,
        title: "B1-200 Lasertag",
        description:
          "B1-200 LaserTag – Immerse yourself in thrilling laser tag adventures!",
        image: "/images/op5.webp",
      },
    ];
  };

  // const projectsData = [
  //   {
  //     id: 1,
  //     title: "INDOOR GALAXY ECLIPSE",
  //     description:
  //       "Offering dynamic and immersive gameplay in a futuristic setting.",
  //     image: "/images/op1.webp",
  //   },
  //   {
  //     id: 2,
  //     title: "OUTDOOR LASER TAG SYSTEMS",
  //     description:
  //       "Built for durability and precision, ideal for large-scale outdoor arenas.",
  //     image: "/images/op2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "VION VR",
  //     description:
  //       "A free-roam virtual reality system that takes players into another dimension of entertainment.",
  //     image: "/images/op3.webp",
  //   },
  //   {
  //     id: 4,
  //     title: "Air Bunkers",
  //     description:
  //       "A free-roam virtual reality system that takes players into another dimension of entertainment.",
  //     image: "/images/op5.webp",
  //   },
  //   {
  //     id: 5,
  //     title: "Air Bunkers Mid way",
  //     description:
  //       "A free-roam virtual reality system that takes players into another dimension of entertainment with full of excitement and joy.",
  //     image: "/images/op1.webp",
  //   },
  // ];

  const projectsData = getProjectData();

  // Get current slides per view from swiper instance
  const getCurrentSlidesPerView = () => {
    if (currentSwiperInstance) {
      // Get the actual rendered slides per view, accounting for partial slides
      const realSlidesPerView = currentSwiperInstance.params.slidesPerView;
      return typeof realSlidesPerView === "number"
        ? Math.floor(realSlidesPerView)
        : 1;
    }
    return Math.floor(slidesPerView);
  };

  // Handle swiper state changes
  const handleSlideChange = (swiper: any) => {
    // console.log(
    //   "Slide changed - activeIndex:",
    //   swiper.activeIndex,
    //   "slidesPerView:",
    //   swiper.params.slidesPerView
    // );
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveIndex(swiper.activeIndex);

    // Update slides per view from swiper params
    const currentSlidesPerView = swiper.params.slidesPerView;
    setSlidesPerView(currentSlidesPerView);
  };

  // Handle swiper initialization
  const handleSwiper = (swiper: any) => {
    setCurrentSwiperInstance(swiper);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setSlidesPerView(swiper.params.slidesPerView);
    setActiveIndex(swiper.activeIndex);
  };

  // Calculate number of dots based on total slides and visible slides
  const getTotalDots = () => {
    const visibleSlides = getCurrentSlidesPerView();
    // For fractional slidesPerView, we need to calculate how many "positions" we can scroll to
    const totalSlides = projectsData.length;
    const maxScrollableIndex = totalSlides - visibleSlides;
    return Math.ceil(maxScrollableIndex) + 1;
  };

  // Get current dot index based on active slide
  const getCurrentDotIndex = () => {
    const visibleSlides = getCurrentSlidesPerView();
    const totalSlides = projectsData.length;
    const maxScrollableIndex = totalSlides - visibleSlides;

    // Calculate which dot should be active based on current position
    const progress = activeIndex / maxScrollableIndex;
    const dotIndex = Math.round(progress * (getTotalDots() - 1));

    // console.log(
    //   "getCurrentDotIndex - activeIndex:",
    //   activeIndex,
    //   "dotIndex:",
    //   dotIndex,
    //   "totalDots:",
    //   getTotalDots()
    // );

    return Math.max(0, Math.min(dotIndex, getTotalDots() - 1));
  };

  // Handle previous slide
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Handle next slide
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Handle dot click
  const handleDotClick = (dotIndex: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const visibleSlides = getCurrentSlidesPerView();
      const totalSlides = projectsData.length;
      const maxScrollableIndex = totalSlides - visibleSlides;

      // Calculate the slide index for this dot
      const slideIndex = Math.round(
        (dotIndex / (getTotalDots() - 1)) * maxScrollableIndex
      );

      // console.log(
      //   "Dot clicked - dotIndex:",
      //   dotIndex,
      //   "slideIndex:",
      //   slideIndex
      // );

      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  return (
    <>
      {/* <div
        className={styles.PageIntroStroke}
        // className={`${styles.PageIntroStroke} ${
        //   locale === "ar" ? styles.rtl : ""
        // }`}
      ></div> */}
      <div
        className={`${styles.ourProjectMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.ourProjectContainer}>
          <div className={styles.ourProjectSubDiv}>
            <h3 className={styles.ourProjectHeading}>{heading}</h3>
            <div className={styles.ourProjectSliderMainDiv}>
              <Swiper
                key={locale}
                dir={locale === "ar" ? "rtl" : "ltr"}
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={false}
                initialSlide={0}
                onSlideChange={handleSlideChange}
                onSwiper={handleSwiper}
                navigation={{
                  prevEl: `.${styles.customPrevBtn}`,
                  nextEl: `.${styles.customNextBtn}`,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: true,
                  },
                  1024: {
                    slidesPerView: 2.2,
                    centeredSlides: false,
                    spaceBetween: 25,
                  },
                  1280: {
                    slidesPerView: 3.3,
                    spaceBetween: 30,
                  },
                }}
                className={styles.projectSwiper}
              >
                {projectsData.map((project) => (
                  <SwiperSlide
                  // key={project.id}
                  >
                    <div className={styles.projectCard}>
                      <div className={styles.projectImageContainer}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className={styles.projectImage}
                        />
                      </div>
                      <div className={styles.projectContent}>
                        <h4 className={styles.projectTitle}>{project.title}</h4>
                        <p className={styles.projectDescription}>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className={styles.navigationContainer}>
                <button
                  className={`${styles.navButtonWrapperPrev} ${
                    isBeginning ? styles.disabled : ""
                  }`}
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  disabled={isBeginning}
                >
                  <div
                    className={`${styles.navButton} ${styles.prevButton} ${
                      isBeginning ? styles.disabled : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M7.6777 14.0525L3.1252 9.50001L7.6777 4.94751"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.875 9.5H3.2525"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <div className={styles.paginationDots}>
                  {Array.from({ length: getTotalDots() }, (_, index) => (
                    <span
                      key={index}
                      className={`${styles.dot} ${
                        index === getCurrentDotIndex() ? styles.activeDot : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDotClick(index)}
                    ></span>
                  ))}
                </div>

                <button
                  className={`${styles.navButtonWrapperNext} ${
                    isEnd ? styles.disabled : ""
                  }`}
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  disabled={isEnd}
                >
                  <div
                    className={`${styles.navButton} ${styles.nextButton} ${
                      isEnd ? styles.disabled : ""
                    }`}
                  >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjects;
