import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./OurSystems.module.scss";

const OurSystems = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const [activeSlide, setActiveSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef<any[]>([]);
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heading =
    locale === "ar"
      ? {
          main: "استكشف",
          sub: "أنظمتنا",
        }
      : { main: "Explore", sub: " Our Systems" };

  const getSystemData = () => {
    if (locale === "ar") {
      return [
        {
          id: 1,
          title: "نيوترونيك",
          video: "/video/neutronicvideo.mp4",
        },
        {
          id: 2,
          title: "جالاكسي إكليبس",
          video: "/video/galaxyeclipsevideo.mp4",
        },
        {
          id: 3,
          title: "مستشفى مهجور - فيون الواقع الافتراضي",
          video: "/video/abhospitalvideo.mp4",
        },
      ];
    }
    return [
      {
        id: 1,
        title: "NEUTRONIC",
        video: "/video/neutronicvideo.mp4",
      },
      {
        id: 2,
        title: "Galaxy Eclipse",
        video: "/video/galaxyeclipsevideo.mp4",
      },
      {
        id: 3,
        title: "Abandoned Hospital - Vion VR",
        video: "/video/abhospitalvideo.mp4",
      },
    ];
  };

  // const systemsData = [
  //   {
  //     id: 1,
  //     title: "NEUTRONIC",
  //     video: "/video/neutronic.mp4",
  //   },
  //   {
  //     id: 2,
  //     title: "EVOLUTION",
  //     video: "/video/evolution.mp4",
  //   },
  //   {
  //     id: 3,
  //     title: "GENESIS",
  //     video: "/video/genesis.mp4",
  //   },
  // ];

  const systemsData = getSystemData();

  const handlePlayPause = async (slideIndex: any) => {
    // console.log("Play button clicked for index:", slideIndex); // Debug log
    // console.log("Play button clicked for index:", slideIndex);
    // console.log(
    //   "Available video refs:",
    //   videoRefs.current.map((ref, idx) => ({
    //     idx,
    //     hasRef: !!ref,
    //     src: ref?.src,
    //   }))
    // );

    const video = videoRefs.current[slideIndex];

    if (video) {
      // console.log("Video element found:", video); // Debug log

      try {
        if (playingVideo === slideIndex) {
          video.pause();
          setPlayingVideo(null);
          // console.log("Video paused"); // Debug log
        } else {
          // First pause all other videos
          videoRefs.current.forEach((otherVideo, index) => {
            if (otherVideo && index !== slideIndex) {
              otherVideo.pause();
            }
          });

          // Then play the selected video
          await video.play();
          setPlayingVideo(slideIndex);
          // console.log("Video playing"); // Debug log
        }
      } catch (error: any) {
        // console.error("Error playing video:", error);
        // If autoplay fails, try muting and playing again
        if (error.name === "NotAllowedError") {
          video.muted = true;
          try {
            await video.play();
            setPlayingVideo(slideIndex);
            // console.log("Video playing (muted)");
          } catch (mutedError) {
            // console.error("Failed to play even muted:", mutedError);
          }
        }
      }
    } else {
      // console.error("Video element not found for index:", slideIndex);
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <div
        // className={styles.ourSystemMainDiv}
        className={`${styles.ourSystemMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        {/* <div className={styles.ourSystemClipPathDiv}></div> */}
        <div className={styles.ourSystemContainer}>
          <div className={styles.ourSystemSubDiv}>
            <h3 className={styles.ourSystemHeading}>
              {/* Explore Our <span>Systems</span> */}
              {heading.main} <span>{heading.sub}</span>
            </h3>
            <div className={styles.ourSystemSliderMainDiv}>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                onSwiper={(swiper: any) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveSlide(swiper.activeIndex);
                  // Pause all videos when slide changes
                  videoRefs.current.forEach((video) => {
                    if (video) {
                      video.pause();
                    }
                  });
                  setPlayingVideo(null);
                }}
                className={styles.systemSwiper}
                onReachBeginning={() => setIsBeginning(true)}
                onReachEnd={() => setIsEnd(true)}
                onFromEdge={() => {
                  setIsBeginning(false);
                  setIsEnd(false);
                }}
              >
                {systemsData.map((system, index) => (
                  <SwiperSlide key={system.id} className={styles.systemSlide}>
                    <div className={styles.slideContent}>
                      <div className={styles.videoContainer}>
                        {/* <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={system.video}
                          className={styles.slideVideo}
                          preload="metadata"
                          onEnded={() => setPlayingVideo(null)}
                          onClick={() => handlePlayPause(index)}
                        /> */}
                        <video
                          key={`video-${system.id}-${index}`}
                          // ref={(el) => {
                          //   if (el) {
                          //     videoRefs.current[index] = el;
                          //     // console.log(
                          //     //   `Video ref set for index ${index}:`,
                          //     //   el
                          //     // ); // Debug log
                          //   }
                          // }}
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={system.video}
                          className={styles.slideVideo}
                          preload="metadata"
                          muted // Add this to avoid autoplay restrictions
                          playsInline // Add this for mobile compatibility
                          onEnded={() => setPlayingVideo(null)}
                          onClick={() => handlePlayPause(index)}
                          onError={(e) => console.error("Video error:", e)} // Debug video errors
                          // onLoadedData={() =>
                          //   console.log(`Video loaded for index ${index}`)
                          // } // Debug loading
                        />
                        {playingVideo !== index && (
                          <div
                            className={styles.playButton}
                            onClick={() => handlePlayPause(index)}
                          >
                            <img src="/icons/videoplay.svg" alt="videoplay" />
                          </div>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Move this div outside Swiper */}
              <div className={styles.sliderBelowDivMain}>
                <h4 className={styles.slideTitle}>
                  {systemsData[activeSlide]?.title}
                </h4>
                <div className={styles.navigationButtonsContainer}>
                  <button
                    className={`${styles.navButtonWrapperPrev} ${
                      isBeginning ? styles.disabled : ""
                    }`}
                    onClick={goToPrev}
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
                    onClick={goToNext}
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
      </div>
    </>
  );
};

export default OurSystems;
