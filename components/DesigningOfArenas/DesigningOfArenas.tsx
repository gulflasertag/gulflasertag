import React, { useRef, useState } from "react";
import styles from "./DesigningOfArenas.module.scss";
import { useRouter } from "next/router";

function DesigningOfArenas() {
  const { locale } = useRouter();

  const doaItems = Array.from(
    { length: 8 },
    (_, i) => `/images/doa${i + 1}.webp`
  );

  const videoList = [
    { src: "/video/aim1.mp4", id: 1 },
    { src: "/video/aim2.mp4", id: 2 },
  ];

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const [currentlyPlaying, setCurrentlyPlaying]: any = useState<string | null>(
    null
  );

  const handleVideoToggle = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      Object.keys(videoRefs.current).forEach((key) => {
        if (key !== id && videoRefs.current[key]) {
          videoRefs.current[key]?.pause();
        }
      });

      video.play();
      setCurrentlyPlaying(id);
    } else {
      video.pause();
      setCurrentlyPlaying(null);
    }
  };

  return (
    <div className={`${styles.doaMain} ${locale === "ar" ? styles.rtl : ""}`}>
      <div className={styles.doaContainer}>
        <div className={styles.doaSub}>
          <div className={styles.doaDescription}>
            <p>
              {locale === "ar"
                ? "يمكن لفريق التصميم المحترف لدينا إنشاء تصميم مخصص للحلبة بناءً على تفضيلاتك وحجم الحلبة، مع توصيات ومتطلبات مخصصة، يتم تسليمها بتنسيق PDF."
                : "Our professional design team can create a custom arena layout based on your preferences and arena size, complete with tailored recommendations and requirements, delivered in PDF format."}
            </p>
          </div>

          <div className={styles.doaGrid}>
            {doaItems.map((src, index) => (
              <div className={styles.doaGridItemWrapper} key={index}>
                <div className={styles.doaGridItem}>
                  <img src={src} alt={`doa${index + 1}`} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.doaAIM}>
            <div className={styles.doaAIMHeading}>
              <h3>
                {locale === "ar" ? (
                  <>
                    الساحة في حركة: <span>من المخطط إلى الواقع</span>
                  </>
                ) : (
                  <>
                    Arena in Motion: <span>From Blueprint to Reality</span>
                  </>
                )}
              </h3>
            </div>

            <div className={styles.doaAIMGrid}>
              {videoList.map((video: any) => (
                <div
                  key={video.id}
                  className={styles.doaAIMGridItem}
                  onClick={() => handleVideoToggle(video.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                    }}
                    loop
                    playsInline
                    style={{ cursor: "pointer" }}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {currentlyPlaying !== video.id && (
                    <div className={styles.videoPause}>
                      <img src="/icons/videopause.svg" alt="videopause" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesigningOfArenas;
