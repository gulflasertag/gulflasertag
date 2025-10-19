import React, { useState, useRef } from "react";
import styles from "./WhyVionVR.module.scss";
import { useRouter } from "next/router";

const WhyVionVR = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const [showPause, setShowPause] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heading =
    locale === "ar"
      ? {
          main: "لماذا تختار",
          sub: "فيون في آر؟",
        }
      : {
          main: "Why Choose",
          sub: "VION VR?",
        };

  const getWhyVionVRData = () => {
    if (locale === "ar") {
      return [
        {
          title: "الجاذبية التي يرغب بها اللاعبون",
          description:
            "تنافس ضد لاعبين حقيقيين (لاعب ضد لاعب) أو تحدى خصومًا يتحكم بهم الكمبيوتر (لاعب ضد البيئة).",
          image: "/icons/attraction.svg",
        },
        {
          title: "اللعبة لمجموعة كبيرة",
          description:
            "تدعم الموقع ما يصل إلى 10 لاعبين في وقت واحد، مثالي لفعاليات الشركات الكبيرة.",
          image: "/icons/group.svg",
        },
        {
          title: "ترفيه فريد",
          description: "تميز عن المنافسين وقدم للزوار مشاعر لا تُنسى.",
          image: "/icons/unique.svg",
        },
        {
          title: "تجربة غير مقيدة",
          description:
            "استمتع بحرية الحركة الكاملة داخل منطقة اللعبة دون أي أسلاك.",
          image: "/icons/unrestricted.svg",
        },
        {
          title: "خدمة بلا حدود",
          description:
            "يعمل دعمنا الفني على مدار 7 أيام في الأسبوع، ومدير مخصص دائمًا متاح لمساعدتك.",
          image: "/icons/borderless.svg",
        },
      ];
    }
    return [
      {
        title: "The attraction players desire",
        description:
          "Compete against real players (PvP) or challenge computer-controlled opponents (PvE).",
        image: "/icons/attraction.svg",
      },
      {
        title: "Game for a large group",
        description:
          "The Location supports up to 10 players simultaneously, perfect for big company events.",
        image: "/icons/group.svg",
      },
      {
        title: "Unique Entertainment",
        description:
          "Stand out from competitors and provide visitors with unforgettable emotions.",
        image: "/icons/unique.svg",
      },
      {
        title: "Unrestricted Experience",
        description:
          "Enjoy full freedom of movement within the game zone without any wires.",
        image: "/icons/unrestricted.svg",
      },
      {
        title: "Borderless Service",
        description:
          "Our technical support operates 7 days a week, and a dedicated manager is always available to assist you.",
        image: "/icons/borderless.svg",
      },
    ];
  };

  const whyVionVRData = getWhyVionVRData();

  const handleVideoContainerClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setShowPause(false);
      } else {
        videoRef.current.pause();
        setShowPause(true);
      }
    }
  };

  return (
    <>
      <div
        className={`${styles.whyVionvrTitleMain} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.whyVionvrTitleContainer}>
          <div className={styles.whyVionvrTitleSub}>
            <div className={styles.headingDiv}>
              <h3>
                {heading.main} <span>{heading.sub}</span>
              </h3>
            </div>
            <div className={styles.whyVionvrGridDiv}>
              {whyVionVRData.map((item, index) => (
                <div className={styles.whyVionvrGridItem} key={index}>
                  <div className={styles.whyVionvrGridItemImg}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className={styles.whyVionvrGridItemContent}>
                    <h4 className={styles.gridItemTitle}>{item.title}</h4>
                    <p className={styles.gridItemDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.PageIntroStroke}></div>
        <div className={styles.videoMainDiv}>
          <div
            className={styles.videoContainer}
            onClick={handleVideoContainerClick}
            style={{ cursor: showPause ? "pointer" : "pointer" }}
          >
            {/* <video
              ref={videoRef}
              src="/video/vionvrpage.mp4"
              title="VION VR Overview"
              // autoPlay
              className={styles.videoPlayer}
            /> */}

            <video
              ref={videoRef}
              src="/video/vionvrpage.mp4"
              title="VION VR Overview"
              className={styles.videoPlayer}
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
            />

            {showPause && (
              <div className={styles.videoPause}>
                <img src="/icons/videopause.svg" alt="videopause" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyVionVR;
