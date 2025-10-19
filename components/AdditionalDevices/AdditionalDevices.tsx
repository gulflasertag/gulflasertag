import React, { useState } from "react";
import styles from "./AdditionalDevices.module.scss";
import { useRouter } from "next/router";

function AdditionalDevices() {
  const { locale } = useRouter();

  const headbandFeatures = [
    {
      icon: "/icons/weight.svg",
      alt: { en: "weight", ar: "الوزن" },
      title: { en: "Weight", ar: "الوزن" },
      description: {
        en: "The NETRONIC headband’s weight is reduced by 25%. Now it weighs only 150 grams, and is not felt on the head, so the player does not feel discomfort even during a long game.",
        ar: "تم تقليل وزن أربطة الرأس نيترونيك بنسبة 25٪، فالآن وزنها 150 جرام فقط ولن يشعر اللاعب حتى بوجودها على رأسه، ذلك لكي لا يشعر اللاعب بأي عدم إرتياح حتى أثناء اللعب لفترة طويلة.",
        // ar: "تم تقليل وزن عصابة الرأس NETRONIC بنسبة 25٪. الآن وزنها 150 جرامًا فقط، ولا تُشعر اللاعب بالثقل على الرأس، لذا لا يشعر اللاعب بعدم الراحة حتى خلال لعبة طويلة.",
      },
    },
    {
      icon: "/icons/impactresistantmaterials.svg",
      alt: { en: "impact resistant materials", ar: "مواد مقاومة للصدمات" },
      title: { en: "Impact resistant materials", ar: "مواد مقاومة للصدمات" },
      description: {
        en: "The polycarbonate sensor body protects the internal electronics from damage, moisture, and dust, and a special bumper prevents the sensors from wearing out.",
        ar: "يحمي هيكل المستشعر المصنوع من البولي كربونات الإلكترونيات الداخلية من التلف والرطوبة والغبار، كما يمنع حاجز خاص المستشعرات من التآكل.",
      },
    },
    {
      icon: "/icons/practicalityandautomation.svg",
      alt: { en: "practicality and automation", ar: "العملية والأتمتة" },
      title: { en: "Practicality and automation", ar: "العملية والأتمتة" },
      description: {
        en: "The new generation headband is made of CORDURA MAXI material. The density of this fabric is 50% higher than that of analogues and is 1200g / m.sq. The superbright inversion light indication for games on the street and indoors in any lighting. Auto power off after 10 minutes of inactivity reduces power consumption. For quick access to electronics, the headband is equipped with a moisture-proof zipper.",
        ar: "أربطة الرأس من الجيل الجديد مصنوعة من مادة كوردورا ماكسي، وكثافة هذا النسيج أعلى بنسبة 50٪ من نظائرها وهي 1200 جم لكل متر مربع. أربطة الرأس أيضًا مزودة بمؤشر ضوئي عاكس وفائق السطوع للعب في الشارع وفي الداخل تحت أي إضاءة. إيقاف تلقائي للتشغيل بعد 10 دقائق من عدم الاستخدام مما يساهم بتقليل استهلاك الطاقة. للوصول السريع إلى الإلكترونيات، تم تزويد أربطة الرأس بسحّاب مقاوم للرطوبة.",
        // ar: "تم صنع عصابة الرأس من الجيل الجديد من مادة CORDURA MAXI. كثافة هذه القماش أعلى بنسبة 50٪ من نظائرها وتبلغ 1200 جرام / متر مربع. الإشارة الضوئية العكسية الساطعة للغاية للألعاب في الهواء الطلق والداخلية في أي إضاءة. إيقاف التشغيل التلقائي بعد 10 دقائق من عدم النشاط يقلل من استهلاك الطاقة. للوصول السريع إلى الإلكترونيات، تم تجهيز عصابة الرأس بسحاب مقاوم للرطوبة.",
      },
    },
    {
      icon: "/icons/immersioninthegame.svg",
      alt: { en: "immersion in the game", ar: "الاندماج في اللعبة" },
      title: { en: "Immersion in the game", ar: "الاندماج في اللعبة" },
      description: {
        en: "The NETRONIC headband implements a zonal vibration indication of a hit. Now the player will understand from which side he was hit. Each hit sensor is equipped with an infrared emitter, due to which interactive functions are available: “exit wound”, “regeneration”, “bleeding”. The NETRONIC headband can work autonomously without a blaster in the modes: Zombie Walker, Medic, Hostage. Now there is no need to buy a separate device for these roles.",
        ar: `أربطة الرأس نيترونيك تعطي إشارة للإصابة عبارة عن اهتزاز نطاقي، مما يعني أن اللاعب سوف يعرف الجانب المحدد الذي قد أصيب منه. تم تجهيز كل جهاز استشعار إصابة بجهاز باعث للأشعة تحت الحمراء، والذي بفضله تتوفر الوظائف التفاعلية، مثل: "جرح الخروج" و "التعافي" و "النزيف". أربطة الرأس نيترونيك يمكن أن تعمل بشكل مستقل دون استخدام بندقية في الأوضاع: زومبي ووكر (مشي الأموات) و ميديك (الطبيب) و هوستيج (الرهينة). ليست هناك حاجة الآن لشراء جهاز منفصل لأي من هذه الأدوار.`,
        // ar: "تطبق عصابة الرأس NETRONIC مؤشر الاهتزاز المنطقي للضربة. الآن سيفهم اللاعب من أي جانب تعرض للضربة. كل مستشعر ضربة مزود بمصدر إشعاع الأشعة تحت الحمراء، مما يتيح وظائف تفاعلية: “خروج الجرح”، “التجديد”، “النزيف”. يمكن لعصابة الرأس NETRONIC العمل بشكل مستقل دون الحاجة إلى مسدس ليزر في أوضاع: زومبي ووكر، طبيب، رهينة. الآن لا حاجة لشراء جهاز منفصل لهذه الأدوار.",
      },
    },
  ];

  const shockBandSpecifications = [
    {
      number: "1",
      label: { en: "Number of Modes", ar: "عدد الأوضاع" },
      value: { en: "5", ar: "٥" },
    },
    {
      number: "2",
      label: { en: "Control", ar: "التحكم" },
      value: { en: "Manual", ar: "يدوي" },
    },
    {
      number: "3",
      label: { en: "Method of data transfer", ar: "طريقة نقل البيانات" },
      value: { en: "radio channel", ar: "عبر قناة الراديو" },
      // value: { en: "radio channel", ar: "قناة راديو" },
    },
    {
      number: "4",
      label: { en: "Battery life", ar: "عمر البطارية" },
      value: { en: "12 hours", ar: "١٢ ساعة" },
    },
  ];

  const shockBandDescription = [
    {
      en: "The bracelet captures the hit, after which it sends an electric impulse of adjustable power to the player’s body.",
      ar: "السوار يلتقط ويسجل الضربة، ثم يرسل نبضة صعق كهربائي قابلة للضبط إلى جسم اللاعب",
      // ar: "يلتقط السوار الإصابة، وبعد ذلك يرسل نبضة كهربائية بقوة قابلة للتعديل إلى جسم اللاعب.",
    },
    {
      en: "An electrical impulse causes a short-term contraction of the muscles, due to which a pain effect is achieved.",
      ar: "يتسبب الصعق الكهربائي في تقلص العضلات على لفترة وجيزة، مما يؤدي إلى حدوث إحساس بالألمال",
      // ar: "تسبب النبضة الكهربائية انقباضًا قصير المدى في العضلات، مما يؤدي إلى إحساس بالألم.",
    },
    {
      en: "The bracelet attracts a more adult audience of players seeking for more realism in laser tag.",
      ar: "سوار يجذب جمهورًا أكثر من اللاعبين البالغين الذين يسعون إلى ألعاب الليزر تاغ شديدة الواقعية.",
      // ar: "يجذب السوار جمهورًا أكثر نضجًا من اللاعبين الباحثين عن المزيد من الواقعية في لعبة الليزر تاغ.",
    },
    {
      en: "The bracelet is certified and its use is absolutely safe for the player*.",
      ar: "السوار معتمد تمامًا واستخدامه آمن بشكل كامل للاعب.",
      // ar: "السوار معتمد واستخدامه آمن تمامًا للاعب*.",
    },
  ];

  return (
    <div
      className={`${styles.additionalDevicesMain} ${
        locale === "ar" ? styles.rtl : ""
      }`}
    >
      <div className={styles.additionalDevicesContainer}>
        <div className={styles.additionalDevicesSub}>
          <div className={styles.headingDiv}>
            <p>
              {locale === "ar"
                ? "عزز إثارة لعبة الليزر تاغ الخاصة بك باستخدام ملحقاتنا عالية التقنية. من ربطة الرأس إلى السترات وأشرطة الصدمات، نقدم معدات متخصصة مصممة لجعل ألعابك أكثر غمرًا وواقعية."
                : // ? "عزز إثارة لعبة الليزر تاج الخاصة بك باستخدام ملحقاتنا عالية التقنية. من عصابات الرأس إلى السترات وأشرطة الصدمات، نقدم معدات متخصصة مصممة لجعل ألعابك أكثر غمرًا وواقعية."
                  "Enhance the excitement of your laser tag gameplay with our high-tech accessories. From headbands to vests and shock bands, we offer specialized equipment designed to make your games more immersive and realistic."}
            </p>
          </div>
        </div>
      </div>

      {/* netronic headband */}

      <div className={styles.headbandMain}>
        <div className={styles.headbandTopStroke}></div>
        <div className={styles.headbandContainer}>
          <div className={styles.headbandSub}>
            <div className={styles.headbandImg}>
              <img
                src="/images/netronicheadband.webp"
                alt="Netronic Headband"
              />
            </div>

            <div className={styles.headbandContent}>
              <div className={styles.headbandHeading}>
                <h3>
                  {locale === "ar"
                    ? "أربطة رأس نيترونيك سوداء/بشكل مبكسل"
                    : "Headband Netronic Black / Pixel"}
                </h3>
                <p>
                  {locale === "ar"
                    ? "مجموعة أربطة الرأس تتضمن عصاباتي عرق مصنوعتان من مادة شبكة الهواء المسامية."
                    : "The headband kit includes 2 sweatbands made of breathable Air Mesh material."}
                </p>
              </div>
              <div className={styles.headbandFeatures}>
                <h4>{locale === "ar" ? "الميزات" : "Features"}</h4>

                <div className={styles.headbandGrid}>
                  {headbandFeatures.map((feature, index) => (
                    <div key={index} className={styles.headbandGridItem}>
                      <div className={styles.headbandGridItemIcon}>
                        <img
                          src={feature.icon}
                          alt={
                            locale === "ar" ? feature.alt.ar : feature.alt.en
                          }
                        />
                      </div>
                      <div className={styles.headbandGridItemContent}>
                        <h5>
                          {locale === "ar"
                            ? feature.title.ar
                            : feature.title.en}
                        </h5>
                        <p>
                          {locale === "ar"
                            ? feature.description.ar
                            : feature.description.en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.headbandBottomStroke}></div>
      </div>

      {/* netronic vest */}

      <div className={styles.vestContainer}>
        <div className={styles.vestSub}>
          <div className={styles.vestHeading}>
            <h3>
              {locale === "ar" ? (
                <>
                  سترة نتروينك <span>أسود / بيكسل</span>
                </>
              ) : (
                <>
                  Vest Netronic <span>Black / Pixel</span>
                </>
              )}
            </h3>
          </div>
          <div className={styles.vestContent}>
            <div className={styles.vestLeftContent}>
              <h4>
                {locale === "ar" ? `سوداء و لون مبكسل` : "“Black” & “Pixel”"}
              </h4>

              <p>
                {locale === "ar"
                  ? `تعتبر سترات الليزر تاغ بالألوان "الأسود" و "المبكسل" بديلاً عن عصابة الرأس نيترونيك. يمكن أيضًا استخدام السترة وعصابة الرأس معًا. استخدام كلاهما يؤدي إلى زيادة المساحة المتاحة للضرب بشكل كبير، مما يجعل اللعبة مميزة أكثر. يمكن لسترة نيترونيك وكذلك عصابة الرأس العمل بشكل مستقل بدون مسدس ليزر تاغ.. أجهزة استشعار الضرب يتم تثبيتها على الصدر والكتفين والظهر. الأحزمة تسمح بتعديل حجم السترة، بينما يسمح القماش المقاوم للماء باستخدام نشط ومريح في أي وقت من السنة`
                  : "The laser tag vests “Black” and “Pixel” are an alternative to the NETRONIC headband. A vest and headband can also be used together. Using both of them significantly increases the area for a hit, making the game special. The NETRONIC vest, as well as the headband, can work autonomously, without a laser tag gun. Hit sensors are installed on the chest, shoulders, and back. The straps allow adjusting the vest size, while the water-resistant fabric allows active and comfortable usage at any time of the year."}
              </p>
            </div>
            <div className={styles.vestImg}>
              <img src="/images/netronicvest.webp" alt="Netronic Vest" />
            </div>
            <div className={styles.vestRightContent}>
              {/* <h4>{locale === "ar" ? "" : "Game realism"}</h4> */}
              <h4>{locale === "ar" ? "واقعية اللعبة" : "Game realism"}</h4>
              <p>
                {locale === "ar"
                  ? "تتميز سترة نيترونيك بوظيفة الإصابة التفاضلية، حيث يتيح لك البرنامج ضبط إعدادات تأثير مختلفة لأربع مناطق محددة: الرأس، الصدر، الظهر، والكتفين. وبفضل تقنية الاهتزاز الموضعي عند الإصابة، يستطيع اللاعب إدراك الجهة التي جاء منها إطلاق النار. كما تتضمن السترة وظائف تفاعلية مبتكرة مثل: جرح الخروج، التجديد، والنزيف"
                  : // ""
                    "The NETRONIC vest has a differential damage function. The software allows you to set different damage settings for 4 sectors of damage: head, chest, back, shoulders. Due to the technology of zonal vibro-indication of a hit, the player understands where the shot was fired from. New interactive functions are implemented in the vest: “exit wound”, “regeneration”, “bleeding”"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* scorpian shock band */}

      <div className={styles.shockBandContainer}>
        <div className={styles.shockBandSub}>
          <div className={styles.shockBandImg}>
            <img src="/images/shockband.webp" alt="shipping bag" />
          </div>
          <div className={styles.shockBandContent}>
            <div className={styles.shockBandHeading}>
              {locale === "ar" ? (
                <h4>سوار صدمات سكوربيون</h4>
              ) : (
                <>
                  <div className={styles.scorpianIcon}>
                    <img src="/images/scorpianicon.webp" alt="Scorpian Icon" />
                  </div>
                  <h4> "Shock-band"</h4>
                </>
              )}
            </div>

            <div className={styles.shockBandSpecifications}>
              <h5>{locale === "ar" ? "المواصفات" : "Specifications"}</h5>
              <ul className={styles.shockBandSpecificationsList}>
                {shockBandSpecifications.map((item, index) => (
                  <div key={index} className={styles.specificationsListItem}>
                    <div className={styles.specificationsListItemLeft}>
                      <span>{item.number}</span>
                      <p>{locale === "ar" ? item.label.ar : item.label.en}</p>
                    </div>
                    <div className={styles.specificationsListItemRight}>
                      <p>{locale === "ar" ? item.value.ar : item.value.en}</p>
                    </div>
                  </div>
                ))}
              </ul>

              <div className={styles.shockBandSpecificationsDesc}>
                {shockBandDescription.map((item, index) => (
                  <p key={index}>{locale === "ar" ? item.ar : item.en}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* scorpianVideo */}
        <div className={styles.scorpianVideoWrapper}>
          <div className={styles.scorpianVideo}>
            <div className={styles.scorpianVideoPlayer}>
              <iframe
                src="https://www.youtube.com/embed/a8suUqcuc5A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className={styles.videoIframe}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalDevices;
