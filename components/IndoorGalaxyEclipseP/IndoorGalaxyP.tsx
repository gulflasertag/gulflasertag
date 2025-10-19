import React, { useEffect, useRef, useState } from "react";
import styles from "./IndoorGalaxyP.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/router";

function IndoorGalaxyP() {
  const { locale } = useRouter();
  const prevRef: any = useRef(null);
  const nextRef: any = useRef(null);
  const [swiperInstance, setSwiperInstance]: any = useState(null);

  const features =
    locale === "ar"
      ? [
          {
            title: "الطول - 40 سم",
            // title: "الطول 15.7 بوصة",
            description: "مما يجعل اللعب مريح حتى للأطفال بدئًا من سن 5 سنوات",
            // description: "يجعل اللعبة مريحة حتى للأطفال من سن 5 سنوات.",
          },
          {
            title: "جهاز الاستشعار بسعة اليد",
            // title: "مستشعر يد سعوي",
            description:
              "مما يمنع اللاعبين من أرجحة المسدس أو إطلاق النار بيد واحدة",
            // description:
            //   "يمنع اللاعبين من التلويح بالبلاستر أو إطلاق النار بيد واحدة.",
          },
          {
            title: "محاكاة الارتداد",
            description:
              "الاهتزاز في مؤخرة البلاستر يجعل اللاعبين يشعرون بكل طلقة.",
          },
          {
            title: "تقنية هالو",
            // title: "تقنية HALO",
            description: "إضاءة مزدوجة للطلقة مصحوبة بلون الفريق",
            // description: "إضاءة مزدوجة للطلقة مصحوبة بلون الفريق.",
          },
          {
            title: "شاشة آي بي إس (IPS) ملونة",
            // title: "شاشة IPS ملونة",
            description: "تعرض بيانات المجموعة القياسية وإحصائيات اللعبة.",
            // description: "تعرض معلمات المجموعة وإحصائيات اللعبة.",
          },
        ]
      : [
          {
            title: "LENGTH 15.7in",
            description:
              "Makes the game comfortable even for children from 5 years old.",
          },
          {
            title: "CAPACITIVE HAND SENSOR",
            description:
              "Prevents players from swinging a blaster or shooting one-handed.",
          },
          {
            title: "RECOIL IMITATION",
            description:
              "Vibration in the buttstock blaster lets players feel every Shot.",
          },
          {
            title: "HALO TECHNOLOGY",
            description:
              "Double illumination of the shot accompanied by the team color.",
          },
          {
            title: "COLOR IPS SCREEN",
            description: "Displays kit parameters and game statistics.",
          },
        ];

  const powerItems =
    locale === "ar"
      ? [
          {
            title: "المعالج",
            description: "يسمح لك باستعادة الصحة لنفسك وجميع الحلفاء القريبين.",
            image: "/images/healer.webp",
            alt: "healer",
            styleClass: styles.healer,
          },
          {
            title: "نينجا",
            description:
              "تقوم قوة النينجا بإطفاء إضاءة سترتك، مما يسمح لك بالتسلل خلف ومداهمة خصومك.",
            // description: "يطفئ إضاءة السترة، مما يسمح لك بالتسلل إلى الخصوم.",
            image: "/images/ninja.webp",
            alt: "ninja",
            styleClass: styles.ninja,
          },
          {
            title: "درع القوة",
            // title: "درع الطاقة",
            description:
              "يجعل اللاعب غير معرض لأي خطر أو أي نوع من الضرر بشكل مؤقت.",
            // description:
            //   "يجعل اللاعب غير قابل للتدمير مؤقتًا لجميع أنواع الضرر.",
            image: "/images/shield.webp",
            alt: "shield",
            styleClass: styles.shield,
          },
          {
            title: "قاذف القنابل",
            // title: "بومبرمان",
            description:
              "تقضي هذه القوة على جميع الأعداء القريبين عبر انفجار حيث تقوم بإلغاء هؤلاء اللاعبين.",
            // description: "يعطل جميع الأعداء القريبين/ بانفجار.",
            image: "/images/bomberman.webp",
            alt: "bomberman",
            styleClass: styles.bomberman,
          },
          {
            title: "أقصى ضرر",
            // title: "الضرر الأقصى",
            description:
              "تزيد هذه القوة من الضرر الذي تسببه الأسلحة بما يصل إلى 100 وحدة.",
            // description: "يزيد من ضرر البلاستر حتى 100 وحدة",
            image: "/images/maxdamage.webp",
            alt: "maxdamage",
            styleClass: styles.maxdamage,
          },
        ]
      : [
          {
            title: "HEALER",
            description:
              "Allows you to restore health for yourself and all allies nearby.",
            image: "/images/healer.webp",
            alt: "healer",
            styleClass: styles.healer,
          },
          {
            title: "NINJA",
            description:
              "Turns off the vest illumination, allowing you to sneak up on opponents.",
            image: "/images/ninja.webp",
            alt: "ninja",
            styleClass: styles.ninja,
          },
          {
            title: "POWER SHIELD",
            description:
              "Temporarily makes a player invulnerable to all types of damage.",
            image: "/images/shield.webp",
            alt: "shield",
            styleClass: styles.shield,
          },
          {
            title: "BOMBER-MAN",
            description:
              "Deactivates all the enemies nearby with an explosion.",
            image: "/images/bomberman.webp",
            alt: "bomberman",
            styleClass: styles.bomberman,
          },
          {
            title: "MAX DAMAGE",
            description: "Increases blaster damage up to 100 units",
            image: "/images/maxdamage.webp",
            alt: "maxdamage",
            styleClass: styles.maxdamage,
          },
        ];

  const dynamicGameData = [
    {
      title: locale === "ar" ? "مالتي-ستايشن" : "MULTISTATION",
      image: "/images/dynamicgameimg1.webp",
      overlayClass: "dynamicgameOverlayOne",
      description:
        locale === "ar"
          ? "جهاز يجعل ألعاب الليزر تاغ أكثر إثارة ويعطي ساحة اللعب الشخصية المميزة والتعريف. شاشة LED بمقاس 27 سم تعرض الوضع المحدد للعبة الحالية بشكل صور متحركة."
          : "A device that gives visitors bonuses, and can also act as a domination box, bomb, or team base. The LED panel displays the selected mode in an animated manner, and loudspeakers will notify visitors about game events",
    },
    {
      title: locale === "ar" ? "سيريوس" : "SIRIUS",
      image: "/images/dynamicgameimg11.webp",
      overlayClass: "dynamicgameOverlayTwo",
      description:
        locale === "ar"
          ? "أكثر جهاز سيناريو شائع وأساسي في كل ساحة لعب. يتم وضع محطات SIRIUS في قاعدة كل فريق لإعادة إحياء اللاعبين، وفي أجزاء مختلفة من ساحة اللعب لإنشاء مناطق إشعاع منفصلة أو نقاط إعادة تعبئة الذخيرة."
          : "The most popular and essential scenario device on every playing field. SIRIUS stations are placed at each team's base for player respawn, and in various parts of the playing field to create separate radiation zones or ammo refill points.",
    },
    {
      title: locale === "ar" ? "صندوق السيطرة الذكي" : "SMART DOMINATION BOX",
      image: "/images/dynamicgameimg2.webp",
      overlayClass: "dynamicgameOverlayThree",
      description:
        locale === "ar"
          ? "صندوق السيطرة الذكي هو من بين أكثر أجهزة السيناريو شيوعًا في صناعة الليزر تاغ. يتم وضعه عادةً في وسط ساحة اللعب أو في مناطق النشاط المكثف للاعبين."
          : "Smart Domination Box is among the most popular scenario devices in the laser tag industry. It is usually placed in the playfield center or in other areas of high players’ activity.",
    },
  ];

  const gameModes = [
    {
      id: 1,
      image: "/images/warm-up.webp",
      title: "WARM-UP",
      title_ar: "سيناريو الاستعداد",
      description:
        "A simple game to familiarize yourself with the arena maze and game kit before more interesting scenarios.",
      description_ar:
        ":لعبة سهلة وبسيطة تساعدك أن تتعرف على متاهة الساحة وعلى مجموعة الألعاب قبل أن تخوض المزيد من السيناريوهات المشوقة.",
    },
    {
      id: 2,
      image: "/images/theviruselimination.webp",
      title: "THE VIRUS ELIMINATION",
      title_ar: "القضاء على الفيروسات",
      description:
        "Destroy all the virus sources faster than opponents by freezing their weapons with shots.",
      description_ar:
        "قم بتدمير جميع مصادر الفيروسات أسرع من الخصم المنافس عن طريق تجميد أسلحتهم بطلقات.",
    },
    {
      id: 3,
      image: "/images/baseassault.webp",
      title: "BASE ASSAULT",
      title_ar: "الهجوم على القاعدة",
      description:
        "Storm the base which is actively protected by the enemy team, while not forgetting about your own defense.",
      description_ar:
        "قم باقتحام القاعدة التي دائمًا تكون محمية من قبل فريق العدو، ولا تنسى جبهات الدفاع لديك.",
    },
    {
      id: 4,
      image: "/images/deathmatch.webp",
      title: "DEATHMATCH",
      title_ar: "مباراة الموت",
      description:
        "Combat with automatic respawn and a limited number of ammo magazines.",
      description_ar:
        "معركة الموت بخاصية العودة للحياة تلقائيًا حيث يتم القتال بعدد محدود من خزينة الذخائر.",
    },
    {
      id: 5,
      image: "/images/encounter.webp",
      title: "ENCOUNTER",
      title_ar: "المواجهة",
      description:
        "Team mode with simple rules for beginners and young players.",
      description_ar:
        "وضع جماعي باللعبة له قواعد بسيطة للمبتدئين واللاعبين الشباب.",
    },
    {
      id: 6,
      image: "/images/ultimateweapon.webp",
      title: "ULTIMATIVE WEAPON",
      title_ar: "السلاح المُطلق",
      description:
        "Your blaster becomes your ultimate weapon that fires single shots with high damage.",
      description_ar:
        "بندقيتك هب سلاحك المطلق فائق التأثير، حيث أن الطلقة الواحدة تتسبب في أضرار فادحة.",
    },
    {
      id: 7,
      image: "/images/arenaking.webp",
      title: "ARENA KING",
      title_ar: "ملك الساحة",
      description: "A battle in which the last player wins.",
      description_ar: "معركة يفوز فيها آخر لاعب على قيد الحياة.",
    },
    {
      id: 8,
      image: "/images/teamdeathmatch.webp",
      title: "TEAM DEATHMATCH",
      title_ar: "مباراة موت الفريق",
      description: "Team battle with automatic respawn.",
      description_ar: "معركة موت الفريق بخاصية العودة للحياة تلقائيًا.",
    },
    {
      id: 9,
      image: "/images/mindcontrol.webp",
      title: "MIND CONTROL",
      title_ar: "السيطرة على العقول",
      description:
        "You capture the minds of deactivated opponents and they become a part of your team.",
      description_ar:
        "تقوم بأسر عقول خصومك المهزومين بحيث يصبحون جزءًا من فريقك.",
    },
    {
      id: 10,
      image: "/images/exploration.webp",
      title: "EXPLORATION",
      title_ar: "سيناريو الاستكشاف",
      description: "Find ancient artifacts faster than the opposing team.",
      description_ar:
        "قم بالعثور على القطع الأثرية القديمة أسرع من الفريق المنافس.",
    },
    {
      id: 11,
      image: "/images/domination.webp",
      title: "DOMINATION",
      title_ar: "الهيمنة",
      description:
        "A game with a limited amount of ammo and the ability to replenish health and supplies only at the base.",
      description_ar:
        "لعبة بكمية محدودة من الذخيرة حيث يمكن استعادة الصحة وتجديد الإمدادات فقط في القاعدة.",
    },
    {
      id: 12,
      image: "/images/vampirefeud.webp",
      title: "VAMPIRE FEUD",
      title_ar: "عداء مصاصي الدماء",
      description:
        "Striking opponents, just like a vampire, you take away their health units and restore yours.",
      description_ar:
        "هاجم خصومك وكأنك مصاص دماء. استولى على وحداتهم الصحية وقم باستعادة وتجديد صحتك.",
    },
  ];

  useEffect(() => {
    if (!swiperInstance || !prevRef.current || !nextRef.current) return;

    const updateDisabledState = () => {
      const isBeginning = swiperInstance.isBeginning;
      const isEnd = swiperInstance.isEnd;

      prevRef.current.classList.toggle(styles.disabled, isBeginning);
      nextRef.current.classList.toggle(styles.disabled, isEnd);
    };

    updateDisabledState(); // On init

    swiperInstance.on("slideChange", updateDisabledState);
    swiperInstance.on("reachBeginning", updateDisabledState);
    swiperInstance.on("reachEnd", updateDisabledState);
    swiperInstance.on("fromEdge", updateDisabledState);

    return () => {
      swiperInstance.off("slideChange", updateDisabledState);
      swiperInstance.off("reachBeginning", updateDisabledState);
      swiperInstance.off("reachEnd", updateDisabledState);
      swiperInstance.off("fromEdge", updateDisabledState);
    };
  }, [swiperInstance]);

  return (
    <div
      className={`${styles.IndoorGalaxyMain} ${
        locale === "ar" ? styles.rtl : ""
      }`}
    >
      <div className={styles.IndoorGalaxyContainer}>
        <div className={styles.IndoorGalaxySub}>
          <div className={styles.headingDiv}>
            <p>
              {locale === "ar"
                ? "تصميم يتسم بالحماس ويشجع اللاعبين. لعبة آمنة لا مكان فيها للعدائية. طرق لعب فريدة تصنع أبطالًا خارقين."
                : // ? "تصميم طموح يلهم العمل. لعبة آمنة لا مكان فيها للعدوانية. أوضاع فريدة تجعل اللاعبين أبطالًا خارقين."
                  "An ambitious design that inspires action. A safe game in which there is no place for aggression. Unique modes that make players superheroes."}
            </p>
          </div>
        </div>
      </div>

      {/* Game Kit And Features */}
      <div className={styles.gameKitMain}>
        <div className={styles.gameKitTopStroke}></div>
        <div className={styles.gameKitContainer}>
          <div className={styles.gameKitSub}>
            {/* game kit */}

            <div className={styles.gameKitTop}>
              <div className={styles.gameKitContent}>
                <h3>{locale === "ar" ? "مجموعة الألعاب" : "Game Kit"}</h3>
                <p>
                  {locale === "ar"
                    ? "هي جيل جديد من مجموعات ألعاب الليزر-تاغ الداخلية، وتتميز بأجهزة استشعار ذكية للتحكم في الإضاءة والحركة وطرق اللعب الفريدة مما يمكن أي شخص من أن يكون بطلًا خارقًا."
                    : // ? "تعتبر مجموعة ألعاب Galaxy Eclipse مجموعة مبتكرة ومتطورة من معدات الليزر الداخلية التي تضيف مستوى جديدًا تمامًا من الإثارة إلى عالم ألعاب الليزر. تم تصميمها بتقنية متقدمة وميزات مبتكرة، تأخذ هذه المجموعة تجربة ألعاب الليزر التقليدية إلى بُعد جديد تمامًا."
                      "Galaxy Eclipse is an innovative and cutting-edge indoor laser tag game kit that brings a whole new level of excitement to the world of laser tag. Designed with advanced technology and features, this game kit takes the traditional laser tag experience to a whole new dimension."}
                </p>
              </div>
              <div className={styles.gameKitImg}>
                <img src="/images/gamekitimg.webp" alt="Game Kit" />
              </div>
            </div>

            {/* features */}
            <div className={styles.features}>
              <div className={styles.featureHeading}>
                <h3>{locale === "ar" ? "المميزات" : "Features"}</h3>
              </div>

              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featuresGridItem}>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* choose your superpower */}

      <div className={styles.powerMain}>
        <div className={styles.powerContainer}>
          <div className={styles.powerSub}>
            <div className={styles.powerHeading}>
              <h3>
                {locale === "ar"
                  ? "اختر قوتك الخارقة"
                  : "Choose Your Superpower"}
              </h3>
              <p>
                {locale === "ar"
                  ? "بإمكان اللاعب أن يضع يده على جهاز الاستشعار الموجود بمنطقة البطن على السترة لتنشيط إحدى القوى الخارقة لفترة محدودة من الوقت."
                  : // ? "من خلال وضع اليد على المستشعر الموجود في البطن، يمكن للاعب تفعيل إحدى القوى الخارقة لفترة محدودة."
                    "By placing a hand on the sensor on the stomach, the player can activate one of the superpowers for a limited time."}
              </p>
            </div>

            <div className={styles.powerGrid}>
              {powerItems.map((item, index) => (
                <div className={styles.powerGridItem} key={index}>
                  <div className={styles.powerImgBtn}>
                    <div className={styles.powerImgBase}>
                      <div
                        className={`${styles.powerImgMiddle} ${item.styleClass}`}
                      >
                        <img src={item.image} alt={item.alt} />
                      </div>
                    </div>
                  </div>

                  <div className={styles.powerGridItemContent}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="gamescenariodevices" className={styles.powerStroke}></div>
      </div>

      {/* Dynamic game scenario devices */}

      <div className={styles.dynamicgameMain}>
        <div className={styles.dynamicgameContainer}>
          <div className={styles.dynamicgameSub}>
            <div className={styles.dynamicgameHeading}>
              <h3>
                {locale === "ar" ? (
                  <>
                    أجهزة سيناريوهات <span>لعب ديناميكية</span>
                  </>
                ) : (
                  <>
                    Dynamic Game <span>Scenario Devices</span>
                  </>
                )}
              </h3>

              <p>
                {locale === "ar"
                  ? "أنشئ أوضاع لعب غامرة وتحديات باستخدام أجهزتنا المتنوعة للسيناريو.  تضيف أجهزتنا الواقعية والعمق الاستراتيجي، مما يجعل كل لعبة لا تُنسى حقًا."
                  : // ? "قم بإنشاء أوضاع ألعاب غامرة وتحديات باستخدام أجهزة السيناريو المتنوعة لدينا. من مولدات الدخان إلى الطائرات المسيرة التفاعلية، تضيف أجهزتنا الواقعية والعمق الاستراتيجي، مما يجعل كل لعبة لا تُنسى حقًا."
                    "Create immersive game modes and challenges with our versatile scenario devices. Our devices add realism and strategic depth, making each game truly unforgettable."}
              </p>
            </div>

            <div className={styles.dynamicgameGrid}>
              {dynamicGameData.map((item, index) => (
                <div key={index} className={styles.dynamicgameGridItem}>
                  <div className={styles[item.overlayClass]}></div>
                  <div className={styles.dynamicgameImg}>
                    <img src={item.image} alt="dynamic game scenario device" />
                  </div>
                  <div className={styles.dynamicgameContent}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ready-Made Scenarios */}

      <div className={styles.rmsMain}>
        <div className={styles.rmsContainer}>
          <div className={styles.rmsSub}>
            <div className={styles.rmsHeading}>
              <h3>
                {locale === "ar"
                  ? "استخدم سيناريوهات جاهزة أو أنشئ سيناريوهاتك الخاصة"
                  : "Use ready-made scenarios or create your own"}
              </h3>

              {/* <p>
                {locale === "ar"
                  ? "من خلال وضع اليد على المستشعر الموجود في البطن، يمكن للاعب تفعيل إحدى القوى الخارقة لفترة محدودة."
                  : "By placing a hand on the sensor on the stomach, the player can activate one of the superpowers for a limited time."}
              </p> */}
            </div>

            <div className={styles.rmsSlider}>
              <Swiper
                key={locale}
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                dir={locale === "ar" ? "rtl" : "ltr"}
                onSwiper={setSwiperInstance}
                pagination={{
                  clickable: true,
                  el: `.${styles.pagination}`,
                  bulletClass: styles.bullet,
                  bulletActiveClass: styles.bulletActive,
                  hideOnClick: false,
                  renderBullet: function (index, className) {
                    return `<span class="${className}" data-index="${index}"></span>`;
                  },
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1600: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                className={styles.swiper}
              >
                {gameModes.map((mode) => (
                  <SwiperSlide key={mode.id} className={styles.slide}>
                    <div className={styles.rmsSliderItem}>
                      <div className={styles.rmsSliderImg}>
                        <img
                          src={mode.image}
                          alt={mode.title.toLowerCase().replace(/\s+/g, "-")}
                        />
                      </div>
                      <div className={styles.rmsSliderContent}>
                        <h4>{locale === "ar" ? mode.title_ar : mode.title}</h4>
                        <p>
                          {locale === "ar"
                            ? mode.description_ar
                            : mode.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Controls Below Slider */}
              <div className={styles.navigationControls}>
                <button
                  ref={prevRef}
                  className={`${styles.navButton} ${styles.prevButton}`}
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
                </button>

                <div className={styles.pagination}>
                  {/* Pagination dots will be rendered here by Swiper */}
                </div>

                <button
                  ref={nextRef}
                  className={`${styles.navButton} ${styles.nextButton}`}
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndoorGalaxyP;
