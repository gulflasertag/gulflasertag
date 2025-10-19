import React, { useState } from "react";
import styles from "./VideoGuides.module.scss";
import { useRouter } from "next/router";

const VideoGuides = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const videoManualsDescription = locale === "ar" ? "" : "";

  // const getVideoManualsItems = () => {
  //   if (locale === "ar") {
  //     return [
  //       {
  //         id: "ImJRZS8pxn0",
  //         title: "كيفية إضافة لاعبين إلى فريق وبدء اللعبة",
  //       },
  //       {
  //         id: "JWFO0t-edW4",
  //         title: "كيفية إجراء تخصيص للفريق بأكمله",
  //       },
  //       { id: "31aa468LqfE", title: "كيفية عمل نص مخصص" },
  //       { id: "r_dSWRm7OIU", title: "كيفية تغيير بطاقة اللاعب" },
  //       { id: "ltJ-u89bCAM", title: "كيفية إنشاء إعداد مخصص" },
  //       {
  //         id: "m0ROCT1u6go",
  //         title: "كيفية إضافة وتخصيص Sirius إلى النص",
  //       },
  //       {
  //         id: "QTHjEyrLobA",
  //         title: "كيفية إضافة وتخصيص صندوق الهيمنة إلى النص",
  //       },
  //       {
  //         id: "MyifUl-dXmY",
  //         title: "كيفية إضافة وتخصيص SUPERNOVA إلى النص",
  //       },
  //       { id: "kkuKBzzww2E", title: "كيفية تخصيص اللعبة ومؤقت البدء" },
  //       { id: "Hrp_XPzvGpM", title: "كيفية تغيير السمة الفاتحة / الداكنة" },
  //       { id: "ahBFEMT7-Wo", title: "كيفية تعيين إعدادات اللاعب الفردية" },
  //       {
  //         id: "ahBFEMT7-Wo",
  //         title: "كيفية تعيين الشروط لنهاية الجولة",
  //       },
  //     ];
  //   }
  //   return [
  //     {
  //       id: "ImJRZS8pxn0",
  //       title: "How to add players to a team and start the game",
  //     },
  //     {
  //       id: "JWFO0t-edW4",
  //       title: "How to make customization for the whole team",
  //     },
  //     { id: "31aa468LqfE", title: "How to make a custom script" },
  //     { id: "r_dSWRm7OIU", title: "How to change a player card" },
  //     { id: "ltJ-u89bCAM", title: "How to create a custom preset" },
  //     {
  //       id: "m0ROCT1u6go",
  //       title: "How to add and customize Sirius to the script",
  //     },
  //     {
  //       id: "QTHjEyrLobA",
  //       title: "How to add and customize Domination box to the script",
  //     },
  //     {
  //       id: "MyifUl-dXmY",
  //       title: "How to add and customize SUPERNOVA to the script",
  //     },
  //     { id: "kkuKBzzww2E", title: "How to customize game and pre-start timer" },
  //     { id: "Hrp_XPzvGpM", title: "How to change the theme light/dark" },
  //     { id: "ahBFEMT7-Wo", title: "How to set Individual player settings" },
  //     {
  //       id: "ahBFEMT7-Wo",
  //       title: "How to set the conditions for the end of the round",
  //     },
  //   ];
  // };

  // Replace these with actual YouTube video IDs
  const videoManualsItems = [
    {
      id: "31aa468LqfE",
      title: "How to make a custom script",
      titleAr: "كيفية إنشاء سيناريو مخصص وإضافته إلى قائمة المفضلة",
    },
    {
      id: "JWFO0t-edW4",
      title: "How to make customization for the whole team",
      titleAr: "كيفية إجراء تخصيصات للفريق بالكامل",
    },
    {
      id: "ImJRZS8pxn0",
      title: "How to add players to a team and start the game",
      titleAr: "كيفية إضافة لاعبين إلى فريق وبدء اللعبة",
    },
    {
      id: "m0ROCT1u6go",
      title: "How to add and customize Sirius to the script",
      titleAr: "كيفية إضافة وتخصيص جهاز سيريوس داخل السيناريو",
    },
    {
      id: "ltJ-u89bCAM",
      title: "How to create a custom preset",
      titleAr: "كيفية إنشاء إعداد مسبق مخصص",
    },
    {
      id: "r_dSWRm7OIU",
      title: "How to change a player card",
      titleAr: "كيفية تغيير بطاقة اللاعب",
    },
    {
      id: "kkuKBzzww2E",
      title: "How to customize game and pre-start timer",
      titleAr: "كيفية تخصيص اللعبة وضبط المؤقت قبل البداية",
    },
    {
      id: "MyifUl-dXmY",
      title: "How to add and customize SUPERNOVA to the script",
      titleAr: "كيفية إضافة وتخصيص قنبلة سوبر نوفا داخل السيناريو",
    },
    {
      id: "QTHjEyrLobA",
      title: "How to add and customize Domination box to the script",
      titleAr: "كيفية إضافة وتخصيص صندوق الهيمنة الذكي داخل السيناريو",
    },
    {
      id: "f5_5Eb6YPhc",
      title: "How to set the conditions for the end of the round",
      titleAr: "كيفية تحديد شروط نهاية الجولة",
    },
    {
      id: "ahBFEMT7-Wo",
      title: "How to set Individual player settings",
      titleAr: "كيفية ضبط إعدادات اللاعب الفردية",
    },
    {
      id: "Hrp_XPzvGpM",
      title: "How to change the theme light/dark",
      titleAr: "كيفية تغييرالمظهر بين الوضع الفاتح والداكن",
    },
  ];

  // const videoManualsItems = getVideoManualsItems();

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleVideoClose = () => {
    setPlayingVideo(null);
  };

  return (
    <div
      className={`${styles.ourSystemMainDiv} ${
        locale === "ar" ? styles.rtl : ""
      }`}
    >
      <div className={styles.videoManualsContainer}>
        <div className={styles.videoManualsSub}>
          <div className={styles.videoManualsDescription}>
            {/* <p>Laser tag Tech Support Video Guides</p> */}
            {/* <p>{videoManualsDescription}</p> */}
          </div>

          <div className={styles.videoManualsGrid}>
            {videoManualsItems.map((video, index) => (
              <div className={styles.videoManualsGridItemWrapper} key={index}>
                <div className={styles.videoManualsGridItem}>
                  {playingVideo === video.id ? (
                    <div className={styles.videoPlayerWrapper}>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=1&showinfo=1&controls=1&modestbranding=0&fs=1&cc_load_policy=0&iv_load_policy=1&autohide=0`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.videoIframe}
                      ></iframe>
                      {/* <button
                        className={styles.closeButton}
                        onClick={handleVideoClose}
                      >
                        ×
                      </button> */}
                    </div>
                  ) : (
                    <div
                      className={styles.thumbnailWrapper}
                      onClick={() => handleVideoPlay(video.id)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className={styles.thumbnailImage}
                      />

                      {/* Profile and title overlay */}
                      <div className={styles.videoOverlay}>
                        <div className={styles.overlayContent}>
                          <img
                            src="/images/profile.svg"
                            alt="profile"
                            className={styles.overlayProfile}
                          />
                          <p className={styles.overlayTitle}>
                            {" "}
                            {locale === "ar" ? video.titleAr : video.title}
                          </p>
                        </div>
                      </div>

                      {/* Play button in center */}
                      {/* <button
                        className={styles.playButton}
                        onClick={() => handleVideoPlay(video.id)}
                      >
                        <svg viewBox="0 0 24 24" className={styles.playIcon}>
                          <path fill="currentColor" d="M8 5v14l11-7z" />
                        </svg>
                      </button> */}
                      <div
                        className={styles.playButton}
                        // onClick={() => handleVideoPlay(video.id)}
                      >
                        <svg
                          width="68"
                          height="48"
                          viewBox="0 0 68 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                            fill="#f00"
                          />
                          <path d="M45,24L27,14v20L45,24z" fill="#fff" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className={styles.PageIntroStroke}></div> */}
    </div>
  );
};

export default VideoGuides;
