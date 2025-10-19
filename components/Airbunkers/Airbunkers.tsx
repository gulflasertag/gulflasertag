import React from "react";
import styles from "./Airbunkers.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

function Airbunkers() {
  const { locale } = useRouter();

  const content = {
    en: {
      title: "Air",
      subtitle: "Bunkers",
      tagline: "Transform Your Arena with Dynamic Gameplay",
      // description: `Our Air Bunkers are the perfect addition to any outdoor laser
      //   tag or paintball setup. Designed for durability and flexibility,
      //   these inflatable bunkers provide both cover and strategy in
      //   various game modes like paintball, laser tag, archery tag, and
      //   nerf drone racing. Enhance the excitement and challenge of every
      //   match with these easy-to-deploy, high-quality structures.`,
      description:
        "Our inflatable air shelters are designed with high durability and flexibility to suit all types of outdoor laser tag arenas. They provide effective protection and strategic cover for players with an easy-to-deploy and install design that ensures practical and reliable use in all game modes.",
      button: "Read More",
    },
    ar: {
      title: "المخابئ",
      subtitle: "الهوائية",
      tagline: "حوّل ساحتك مع أسلوب لعب ديناميكي",
      description: `المخابئ الهوائية: مخابئ الهواء القابلة للنفخ لدينا مصممة بمتانة ومرونة عالية لتلائم جميع أنواع ساحات الليزر تاغ الخارجية. توفر هذه المخابئ حماية فعّالة وغطاء استراتيجي للاعبين، مع تصميم سهل النشر والتركيب يضمن استخداماً عملياً وموثوقاً في جميع أوضاع اللعب.`,

      button: "اقرأ المزيد",
    },
  };

  const t = locale === "ar" ? content.ar : content.en;

  return (
    <div
      className={`${styles.airBunkerMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.airBunkerContainer}>
        <div className={styles.airBunkerSub}>
          <div className={styles.airBunkerImgWrapper}>
            <div className={styles.airBunkerImg}>
              <img src="/images/airbunkermen.webp" alt="Airbunkers" />
            </div>
          </div>
          <div className={styles.airBunkerContent}>
            <div className={styles.airBunkerHeading}>
              <h3>
                {t.title} <span>{t.subtitle}</span>
              </h3>
              <p>{t.tagline}</p>
            </div>

            <div className={styles.airBunkerInfo}>
              <p>{t.description}</p>

              <div className={styles.readmoreBtnWrapper}>
                <Link href="/airbunker">
                  <button className={styles.readmoreBtn}>
                    <div
                      className={styles.readmoreBtnContent}
                      data-button-type="readmore"
                    >
                      <p>{t.button}</p>
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airbunkers;
