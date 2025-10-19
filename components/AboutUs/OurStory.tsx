import React from "react";
import styles from "./OurStory.module.scss";
import { useRouter } from "next/router";

const OurStory = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const heading =
    locale === "ar"
      ? {
          // main: "نا",
          // sub: "تاريخ ورؤية",
          main: "تاريخنا",
          sub: "ورؤيتنا",
        }
      : {
          main: "Our",
          sub: "Story",
        };

  // const ourStoryDescription =
  //   locale === "ar"
  //     ? "تأسست جلف ليزرتاج على شغف الترفيه الغامر والتكنولوجيا المتطورة، وتهدف إلى تقديم أنظمة ليزر تاغ الأكثر تقدمًا في الإمارات والسعودية. بصفتها الممثل الرسمي لـ LaserTag.net، نقدم مجموعة كاملة من الحلول، بدءًا من المعدات وتصميم الساحات إلى تطوير الأعمال والدعم المستمر. تركيزنا هو على إنشاء شراكات دائمة وتقديم تجارب متفوقة للاعبين."
  //     : " Founded on a passion for immersive entertainment and cutting-edge technology, Gulf Laser Tag is committed to bringing the most advanced laser tag systems to venues in the UAE and Saudi Arabia. As the official representative of LaserTag.net, we provide a full range of solutions, from equipment and arena design to business development and ongoing support. Our focus is on creating lasting partnerships and delivering superior experiences to players.";

  const ourStoryDescription =
    locale === "ar" ? (
      <>
        <span>
          {/* تأسست GulfLaserTag.net على يد محمد يونس غالب، المؤسس والرئيس التنفيذي،
          برؤية جريئة لتحويل الترفيه إلى تجربة ذكية وتفاعلية وآمنة من خلال تقنية
          الليزر تاغ من الجيل القادم. */}
          تأسست GulfLaserTag.net على يد محمد يونس غالب، المؤسس والمدير التنفيذي،
          برؤية جريئة لتحويل الترفيه إلى تجربة ذكية وتفاعلية وآمنة من خلال
          تكنولوجيا LaserTag المتطورة.
        </span>
        {/* <br /> */}
        <span>
          {/* بدأت الرحلة بشغف عميق للتكنولوجيا وفضول لاستكشاف كيف تعمل الألعاب— ليس
          فقط من أجل المتعة، ولكن كأداة لبناء المهارات وتشجيع العمل الجماعي
          وتطوير التفكير الاستراتيجي. */}
          بدأت الرحلة بشغف عميق بالتكنولوجيا وفضول لاستكشاف كيفية عمل
          الألعاب—ليس فقط للمتعة، بل كأداة لبناء المهارات، وتعزيز العمل الجماعي،
          وتنمية التفكير الاستراتيجي.
        </span>
        {/* <br /> */}
        <span>
          {/* بعد بحث عالمي عبر أوروبا وآسيا والولايات المتحدة، اكتشف محمد إمكانيات
          أنظمة الليزر تاغ المتقدمة. لقد شارك مع Lasertag.net المشهورة عالمياً،
          ليصبح من أوائل من قدم هذه التجربة الاحترافية إلى الشرق الأوسط. */}
          بعد بحث عالمي شمل أوروبا وآسيا والولايات المتحدة، اكتشف محمد إمكانيات
          أنظمة LaserTag المتقدمة. وتعاون مع الشركة العالمية المشهورة
          Lasertag.net، ليصبح من أوائل من قدموا هذه التجربة الاحترافية إلى منطقة
          الشرق الأوسط.
        </span>
        {/* <br /> */}
        <span>
          <b>وهكذا وُلدت GulfLaserTag برؤية واضحة:</b>
        </span>
        {/* <span>هكذا وُلدت خليج ليزر تاغ برسالة واضحة:</span> */}
        <span>
          {/* تقديم تجربة ليزر تاغ مبتكرة تلبي المعايير العالمية وتمكن رجال الأعمال
          من إطلاق وتنمية أعمال الترفيه التفاعلي. */}
          تقديم تجربة LaserTag مبتكرة تلتزم بالمعايير العالمية، وتمكن رواد
          الأعمال من إطلاق وتطوير مشاريع ترفيهية غامرة
        </span>
        {/* <br /> */}
        <span>
          {/* بفضل هذا النهج والرؤية، ساعدت خليج ليزر تاغ في إطلاق مشاريع ليزر تاغ
          ناجحة عبر الخليج وتوسعت إلى أوروبا والولايات المتحدة. */}
          بفضل هذا النهج والرؤية، ساعدت GulfLaserTag في إطلاق مشاريع LaserTag
          ناجحة في جميع أنحاء الخليج، وتوسعت أيضًا إلى أوروبا والولايات المتحدة.
        </span>
        {/* <br /> */}
        <span>
          نحن لا نبيع المنتجات فقط — بل نبني شراكات، ونقدم تجارب، ونشكل مستقبل
          الترفيه التفاعلي.
        </span>
      </>
    ) : (
      <>
        <span>
          {/* “GulfLaserTag.net was founded by Mohammed Younis Ghalib, the Founder
          and CEO, with a bold vision: to transform entertainment into an
          intelligent, interactive, and safe experience through next-generation
          LaserTag technology. The journey began with a deep passion for
          technology and a curiosity to explore how games work — not just for
          fun, but as a tool to build skills, encourage teamwork, and develop
          strategic thinking. */}
          “GulfLaserTag.net was founded by Mohammed Younis Ghalib, the Founder
          and CEO, with a bold vision: to transform entertainment into an
          intelligent, interactive, and safe experience through next-generation
          LaserTag technology. The journey began with a deep passion for
          technology and a curiosity to explore how games work — not just for
          fun, but as a tool to build skills, encourage teamwork, and develop
          strategic thinking.
        </span>
        {/* <br /> */}
        {/* <span>
          The journey began with a deep passion for technology and a curiosity
          to explore how games work—not just for fun, but as a tool to build
          skills, encourage teamwork, and develop strategic thinking.
        </span> */}
        {/* <br /> */}
        <span>
          After a global search across Europe, Asia, and the U.S., Mohammed
          discovered the potential of advanced LaserTag systems. He partnered
          with the world-renowned Lasertag.net, becoming one of the first to
          introduce this professional-grade experience to the Middle East.
        </span>
        {/* <br /> */}
        <span>
          <b>This is how GulfLaserTag was born with a clear mission:</b>
        </span>
        <span>
          To deliver an innovative LaserTag experience that meets global
          standards and empowers entrepreneurs to launch and grow immersive
          entertainment businesses.
        </span>
        {/* <br /> */}
        <span>
          Thanks to this approach and vision, GulfLaserTag has helped launch
          successful LaserTag projects across the Gulf and expanded into Europe
          and the U.S.
        </span>
        {/* <br /> */}
        <span>
          We don’t just sell products — we build partnerships, deliver
          experiences, and shape the future of interactive entertainment
        </span>
      </>
    );

  const galleryImages = [
    "/images/os1.webp",
    "/images/os2.webp",
    "/images/os3.webp",
    "/images/os4.webp",
    "/images/os5.webp",
    "/images/os6.webp",
    "/images/os7.webp",
    "/images/os8.webp",
    "/images/os9.webp",
    "/images/os10.webp",
    "/images/os11.webp",
    "/images/os12.webp",
    "/images/os13.webp",
    "/images/os14.webp",
    "/images/os15.webp",
    "/images/os16.webp",
    "/images/os17.webp",
    "/images/os18.webp",
    "/images/os19.webp",
    "/images/os20.webp",
    "/images/os21.webp",
    "/images/os22.webp",
    "/images/os23.webp",
    "/images/os24.webp",
  ];

  // Create the repeating pattern with alternating padding
  // const createImagePattern = () => {
  //   const pattern = [];
  //   let imageIndex = 0;
  //   let columnSetIndex = 0; // Track column sets for alternating padding

  //   // Create enough images to fill the scroll area and ensure smooth loop
  //   const totalPatterns = 5; // Repeat the pattern 5 times for smooth infinite scroll

  //   for (let patternIndex = 0; patternIndex < totalPatterns; patternIndex++) {
  //     // Add 3 sets of 2-column images with alternating padding
  //     for (let i = 0; i < 3; i++) {
  //       const isEven = columnSetIndex % 2 === 0;
  //       const paddingClass = isEven
  //         ? styles.ourStoryColImg2Top
  //         : styles.ourStoryColImg2Bottom;

  //       pattern.push(
  //         <div
  //           key={`double-${patternIndex}-${i}`}
  //           className={`${styles.ourStoryColImg2} ${paddingClass}`}
  //         >
  //           <div className={styles.ourStoryImg2Div}>
  //             <img
  //               src={galleryImages[imageIndex % galleryImages.length]}
  //               alt={`gallery-${imageIndex}`}
  //             />
  //           </div>
  //           <div className={styles.ourStoryImg2Div}>
  //             <img
  //               src={galleryImages[(imageIndex + 1) % galleryImages.length]}
  //               alt={`gallery-${imageIndex + 1}`}
  //             />
  //           </div>
  //         </div>
  //       );
  //       imageIndex += 2;
  //       columnSetIndex++;
  //     }

  //     // Add 1 single image
  //     pattern.push(
  //       <div key={`single-${patternIndex}`} className={styles.ourStoryColImg1}>
  //         <img
  //           src={galleryImages[imageIndex % galleryImages.length]}
  //           alt={`gallery-${imageIndex}`}
  //         />
  //       </div>
  //     );
  //     imageIndex++;
  //   }

  //   return pattern;
  // };

  const createImagePattern = () => {
    const pattern = [];
    let imageIndex = 0;
    let globalColumnIndex = 0; // Track all columns (both double and single) for consistent alternating

    // Create enough images to fill the scroll area and ensure smooth loop
    const totalPatterns = 5; // Repeat the pattern 5 times for smooth infinite scroll

    for (let patternIndex = 0; patternIndex < totalPatterns; patternIndex++) {
      // Add 3 sets of 2-column images with alternating padding
      for (let i = 0; i < 3; i++) {
        const isEven = globalColumnIndex % 2 === 0;
        const paddingClass = isEven
          ? styles.ourStoryColImg2Top
          : styles.ourStoryColImg2Bottom;

        pattern.push(
          <div
            key={`double-${patternIndex}-${i}`}
            className={`${styles.ourStoryColImg2} ${paddingClass}`}
          >
            <div className={styles.ourStoryImg2Div}>
              <img
                src={galleryImages[imageIndex % galleryImages.length]}
                alt={`gallery-${imageIndex}`}
              />
            </div>
            <div className={styles.ourStoryImg2Div}>
              <img
                src={galleryImages[(imageIndex + 1) % galleryImages.length]}
                alt={`gallery-${imageIndex + 1}`}
              />
            </div>
          </div>
        );
        imageIndex += 2;
        globalColumnIndex++; // Increment for each column set
      }

      // Add 1 single image with alternating padding
      const isEven = globalColumnIndex % 2 === 0;
      const singleImageClass = isEven
        ? `${styles.ourStoryColImg1} ${styles.ourStoryColImg1Top}`
        : `${styles.ourStoryColImg1} ${styles.ourStoryColImg1Bottom}`;

      pattern.push(
        <div key={`single-${patternIndex}`} className={singleImageClass}>
          <img
            src={galleryImages[imageIndex % galleryImages.length]}
            alt={`gallery-${imageIndex}`}
          />
        </div>
      );
      imageIndex++;
      globalColumnIndex++; // Increment for single image column
    }

    return pattern;
  };

  return (
    <>
      <div
        className={`${styles.ourStoryMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.ourStoryContainer}>
          <div className={styles.ourStorySubDiv}>
            <div className={styles.ourStoryHeadMainDiv}>
              <h3 className={styles.ourStoryHeading}>
                {heading.main} <span>{heading.sub}</span>
              </h3>
              <p className={styles.ourStoryDesc}>{ourStoryDescription}</p>
            </div>
            <div className={styles.ourStorySliderMainDiv}>
              <div className={styles.ourStoryMarquee}>
                <div className={styles.ourStoryMarqueeContent}>
                  {createImagePattern()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.PageIntroStroke}></div>
      </div>
    </>
  );
};

export default OurStory;
