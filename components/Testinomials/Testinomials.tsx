import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Testinomials.module.scss";

const Testinomials = () => {
  const { locale } = useRouter();
  const swiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Heading with <span>
  const heading =
    locale === "ar" ? (
      <>
        قوتنا تنبع من <span>ثقة عملائنا</span>
      </>
    ) : (
      <>
        Built on Customer <span>Trust</span>
      </>
    );

  // Testimonials translations
  const testimonials =
    locale === "ar"
      ? [
          {
            id: 1,
            rating: 5,
            title: "البحرين – الرفاع",
            content: "خدمة الدعم ممتازة والتوصيل كان سريعًا، شكراً لكم.",
            author: "نواف الفهد",
            position: "",
            avatar: "NA",
          },
          {
            id: 2,
            rating: 5,
            title: "المملكة العربية السعودية – جدة",
            content: "خدمة العملاء ممتازة والردود سريعة وواضحة.",
            author: "محمد القحطاني",
            position: "",
            avatar: "MA",
          },
          {
            id: 3,
            rating: 5,
            title: "الإمارات العربية المتحدة – العين",
            content:
              "تم تقديم تدريب ممتاز على الأدوات؛ وكان الشرح واضحًا وسهل التطبيق.",
            author: "كولن",
            position: "مديرة العمليات",
            avatar: "C",
          },
        ]
      : [
          {
            id: 1,
            rating: 5,
            title: "Riffah - Bahrain",
            content:
              "The support service was excellent and the delivery was fast, thank You!",
            author: "Nawaf Al-Fahad",
            position: "",
            avatar: "NA",
          },
          {
            id: 2,
            rating: 5,
            title: "Jeddah - Saudi Arabia",
            content:
              "Customer service is excellent, and the responses are quick and clear.",
            author: "Mohammed Al-Qahtani",
            position: "",
            avatar: "MA",
          },
          {
            id: 3,
            rating: 5,
            title: "Al Ain - United Arab Emirates",
            content:
              "Excellent training was provided on the tools; the explanation was clear and easy to apply.",
            author: "Collin",
            position: "",
            avatar: "C",
          },
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        className={`${styles.star} ${index < rating ? styles.filled : ""}`}
      >
        <img src="/icons/star.svg" alt="star" />
      </div>
    ));
  };

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };

    // Trigger immediately too, just in case
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div id="testinomials" className={styles.testinomialsClipPathDiv}></div>
      <div
        className={`${styles.testinomialsMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.testinomialsContainer}>
          <div className={styles.testinomialsSubDiv}>
            <h3 className={styles.testinomialsHeading}>{heading}</h3>
            <div className={styles.testinomialsSliderMainDiv}>
              {/* Prev Button */}
              {!isMobile && (
                <button
                  className={`${styles.navButtonWrapperPrev} ${
                    isBeginning ? styles.disabled : ""
                  }`}
                  onClick={handlePrev}
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

              {/* Swiper */}
              <div className={styles.swiperContainer}>
                <Swiper
                  key={locale}
                  modules={[Navigation]}
                  spaceBetween={44}
                  // slidesPerView={slidesPerView}
                  dir={locale === "ar" ? "rtl" : "ltr"} // <-- This enables RTL for Arabic
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    updateNavigationState(swiper);
                  }}
                  onSlideChange={(swiper) => updateNavigationState(swiper)}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 20 }, // 0px to 767px
                    768: { slidesPerView: 2, spaceBetween: 20 }, // 768px to 1023px
                    1024: { slidesPerView: 2, spaceBetween: 30 }, // 1024px and up
                  }}
                  className={styles.testimonialsSwiper}
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className={styles.testimonialCardClipPath}>
                        <div className={styles.testimonialCard}>
                          <div className={styles.testimonialHeader}>
                            <div className={styles.rating}>
                              {renderStars(testimonial.rating)}
                            </div>
                            <h4 className={styles.testimonialTitle}>
                              {testimonial.title}
                            </h4>
                          </div>
                          <p className={styles.testimonialContent}>
                            {testimonial.content}
                          </p>
                          <div className={styles.testimonialFooter}>
                            <div className={styles.avatar}>
                              {testimonial.avatar}
                            </div>
                            <div className={styles.authorInfo}>
                              <span className={styles.authorName}>
                                {testimonial.author}
                              </span>
                              {/* <span className={styles.authorPosition}>
                                {testimonial.position}
                              </span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Next Button */}
              {!isMobile && (
                <button
                  className={`${styles.navButtonWrapperNext} ${
                    isEnd ? styles.disabled : ""
                  }`}
                  onClick={handleNext}
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

export default Testinomials;
