import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./OurDesigning.module.scss";
import { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const OurDesigning = () => {
  const swiperRef = useRef<any>(null);
  // const swiperRef = useRef(null);
  // const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { locale } = useRouter();

  const heading =
    locale === "ar"
      ? { main: "تصميمنا", sub: "للساحات" }
      : { main: "Our Designing", sub: "of Arenas" };

  // Sample arena images data
  const arenaImages = [
    {
      id: 1,
      src: "/images/design1.webp", // Replace with your actual image paths
      alt: "Arena Design 1",
    },
    {
      id: 2,
      src: "/images/design2.webp",
      alt: "Arena Design 2",
    },
    {
      id: 3,
      src: "/images/design3.webp",
      alt: "Arena Design 3",
    },
    {
      id: 4,
      src: "/images/design4.webp",
      alt: "Arena Design 4",
    },
    {
      id: 5,
      src: "/images/design5.webp",
      alt: "Arena Design 5",
    },
    // Add more images as needed
  ];
  const handlePrev = () => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && !isEnd) {
      swiperRef.current.slideNext();
    }
  };
  const updateNavigationState = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1025) {
        setSlidesPerView(2);
        setIsMobile(false);
      } else {
        setSlidesPerView(1);
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.ourDesignClipPathDiv}></div>
      <div
        className={`${styles.ourDesignMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.ourDesignContainer}>
          <div className={styles.ourDesignSubDiv}>
            <h3 className={styles.ourDesignHeading}>
              {heading.main} <span>{heading.sub}</span>
            </h3>
            <div className={styles.ourDesignSliderMainDiv}>
              {/* <button
                ref={swiperRef}
                className={`${styles.navButton} ${styles.prevButton}`}
                aria-label="Previous slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}
              {!isMobile && (
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
              )}

              <div className={styles.swiperContainer}>
                <Swiper
                  key={locale}
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    updateNavigationState(swiper);
                  }}
                  onSlideChange={(swiper) => {
                    updateNavigationState(swiper);
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                  }}
                  className={styles.arenaSwiper}
                >
                  {arenaImages.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div className={styles.slideImageContainerWrapper}>
                        <div className={styles.slideImageContainer}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className={styles.arenaImage}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {!isMobile && (
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
              )}

              {/* <button
                ref={swiperRef}
                className={`${styles.navButton} ${styles.nextButton}`}
                aria-label="Next slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}
              {isMobile && (
                <div className={styles.navigationButtonsContainer}>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDesigning;
