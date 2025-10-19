import React from "react";
import styles from "./GameScenarioDevices.module.scss";
import { useRouter } from "next/router";

function GameScenarioDevices() {
  const { locale } = useRouter();

  const modes = [
    {
      img: "/images/radiation.webp",
      alt: "radiation",
      en: "RADIATION",
      ar: "إشعاع",
    },
    {
      img: "/images/medikit.webp",
      alt: "medikit",
      en: "MEDKIT",
      ar: "عدة الإسعاف",
    },
    {
      img: "/images/ammo.webp",
      alt: "ammo",
      en: "AMMO",
      ar: "ذخيرة",
    },
    {
      img: "/images/respawn.webp",
      alt: "respawn",
      en: "RESPAWN",
      ar: "إعادة الإحياء",
    },
    {
      img: "/images/digitalflag.webp",
      alt: "digital flag",
      en: "DIGITAL FLAG",
      ar: "العلم الرقمي",
    },
    {
      img: "/images/random.webp",
      alt: "bomb",
      en: "BOMB",
      ar: "قنبلة",
    },
    {
      img: "/images/base.webp",
      alt: "base",
      en: "BASE",
      ar: "القاعدة",
    },
  ];

  return (
    <div className={`${styles.gsdMain} ${locale === "ar" ? styles.rtl : ""}`}>
      <div className={styles.gsdContainer}>
        <div className={styles.gsdSub}>
          <div className={styles.headingDiv}>
            <p>
              {locale === "ar"
                ? "ارتقِ بتجربة الليزر تاغ الخاصة بك مع أجهزة سيناريو اللعبة المبتكرة لدينا. تم تصميم هذه الأجهزة لإنشاء أسلوب لعب أكثر ديناميكية وتفاعلية، مما يضيف الإثارة والتنوع والعمق الاستراتيجي إلى الساحة الخاصة بك."
                : "Elevate your laser tag experience with our innovative game scenario devices. Designed to create more dynamic and interactive gameplay, these devices add excitement, variety, and strategic depth to your arena."}
            </p>
          </div>
        </div>
      </div>

      {/* Accessories */}

      <div className={styles.accessoriesMain}>
        <div className={styles.accessoriesMainHeading}>
          <h2>{locale === "ar" ? "ملحقات" : "Accessories"}</h2>
        </div>

        <div className={styles.accessoriesTopStroke}></div>

        {/* sirius */}

        <div
          className={`${styles.accessoriesContainer} ${styles.containerBorder}`}
        >
          <div className={styles.accessoriesSub}>
            <div className={styles.accessoriesItem}>
              <div className={styles.accessoriesContent}>
                <div className={styles.accessoriesHeading}>
                  <h3>
                    {locale === "ar" ? (
                      <>
                        جهاز سيناريو <span>محمول</span>
                      </>
                    ) : (
                      <>
                        Portable <span>scenario device</span>
                      </>
                    )}
                  </h3>
                </div>
                <div className={styles.accessoriesSpecification}>
                  <h4>{locale === "ar" ? "المواصفات" : "Specifications"}</h4>

                  <ul className={styles.specificationList}>
                    <div className={styles.specificationListItem}>
                      <div className={styles.specificationListItemLeft}>
                        <li>1</li>
                        <li>
                          {locale === "ar"
                            ? "عدد أوضاع اللعبة"
                            : "The number of game modes"}
                        </li>
                      </div>
                      <div className={styles.specificationListItemRight}>
                        <li>8</li>
                      </div>
                    </div>

                    <div className={styles.specificationListItem}>
                      <div className={styles.specificationListItemLeft}>
                        <li>2</li>
                        <li>
                          {locale === "ar"
                            ? "طريقة التفعيل"
                            : "Activation method"}
                        </li>
                      </div>
                      <div className={styles.specificationListItemRight}>
                        <li>
                          {locale === "ar"
                            ? "بإطلاق النار، باللمس"
                            : "by shot, by touch"}
                        </li>
                      </div>
                    </div>

                    <div className={styles.specificationListItem}>
                      <div className={styles.specificationListItemLeft}>
                        <li>3</li>
                        <li>
                          {locale === "ar"
                            ? "الإشارة الصوتية"
                            : "Sound indication"}
                        </li>
                      </div>
                      <div className={styles.specificationListItemRight}>
                        <li>{locale === "ar" ? "لا" : "no"}</li>
                      </div>
                    </div>

                    <div className={styles.specificationListItem}>
                      <div className={styles.specificationListItemLeft}>
                        <li>4</li>
                        <li>
                          {locale === "ar" ? "عمر البطارية" : "Battery life"}
                        </li>
                      </div>
                      <div className={styles.specificationListItemRight}>
                        <li>{locale === "ar" ? "حتى 24 ساعة" : "up to 24h"}</li>
                      </div>
                    </div>
                  </ul>

                  <div className={styles.specificationDesc}>
                    <p>
                      {locale === "ar"
                        ? "يتم دعم الاتصال بين مجموعات الألعاب والتطبيق عبر قناة Wi-Fi. تشغيل الألعاب من خلال التطبيق يمنحك الوصول إلى إعدادات متقدمة، التحكم التلقائي، بالإضافة إلى جمع وبث الإحصاءات في الوقت الفعلي. لتغطية ملعب قياسي بإشارة Wi-Fi، تحتاج إلى جهاز توجيه، بينما قد تتطلب الألعاب واسعة النطاق مكررًا للنظام."
                        : "The communication between the gaming kits and the application is supported via Wi-Fi channel. Running games through the application gives you access to advanced settings, automated control, as well as the collection and broadcasting of statistics in real time. To cover a standard playground with Wi-Fi signal, you need a router, while large-scale games may require a repeater system."}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.accessoriesImg}>
                <img src="/images/sirius.webp" alt="Game Kit" />
              </div>
            </div>

            <div className={styles.modesGridContainer}>
              <div className={styles.modesGridheading}>
                <h3>{locale === "ar" ? "٨ أوضاع" : "8 modes"}</h3>
              </div>
              <div className={styles.modesGrid}>
                <div className={styles.modesGridItem}>
                  <div className={styles.modesGridImg}>
                    <img src="/images/radiation.webp" alt="radiation" />
                  </div>
                  <p>{locale === "ar" ? "إشعاع" : "RADIATION"}</p>
                </div>

                <div className={styles.modesGridItem}>
                  <div className={styles.modesGridImg}>
                    <img src="/images/medikit.webp" alt="medikit" />
                  </div>
                  <p>{locale === "ar" ? "عدة إسعافات" : "MEDKIT"}</p>
                </div>

                <div className={styles.modesGridItem}>
                  <div className={styles.modesGridImg}>
                    <img src="/images/ammo.webp" alt="ammo" />
                  </div>
                  <p>{locale === "ar" ? "ذخيرة" : "AMMO"}</p>
                </div>

                <div className={styles.modesGridItem}>
                  <div className={styles.modesGridImg}>
                    <img src="/images/respawn.webp" alt="respawn" />
                  </div>
                  <p>{locale === "ar" ? "إعادة إحياء" : "RESPAWN"}</p>
                </div>

                <div className={styles.modesGridItem}>
                  <div className={styles.modesGridImg}>
                    <img src="/images/digitalflag.webp" alt="digitalflag" />
                  </div>
                  <p>{locale === "ar" ? "العلم الرقمي" : "DIGITAL FLAG"}</p>
                </div>

                <div className={styles.modesGridItem}>
                  <div className={styles.modesGridImg}>
                    <img src="/images/random.webp" alt="random" />
                  </div>
                  <p>{locale === "ar" ? "عشوائي" : "RANDOM"}</p>
                </div>

                <div className={styles.modesGridItem}>
                  <div className={styles.modesGridImg}>
                    <img src="/images/bonus.webp" alt="bonus" />
                  </div>
                  <p>{locale === "ar" ? "مكافأة" : "BONUS"}</p>
                </div>

                <div className={styles.modesGridItem}>
                  <div className={styles.modesGridImg}>
                    <img src="/images/base.webp" alt="base" />
                  </div>
                  <p>{locale === "ar" ? "القاعدة" : "BASE"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* multistation */}
        <div className={styles.accessoriesContainer}>
          <div className={styles.accessoriesSub}>
            <div
              className={`${styles.accessoriesItem} ${styles.accessoriesItemTwo}`}
            >
              <div className={styles.accessoriesImg}>
                <img src="/images/multistation.webp" alt="Game Kit" />
              </div>

              <div className={styles.accessoriesContent}>
                <div className={styles.accessoriesHeading}>
                  <h3>
                    {locale === "ar" ? (
                      <>
                        جهاز <span>سيناريو الساحة</span>
                      </>
                    ) : (
                      <>
                        Arena <span>scenario device</span>
                      </>
                    )}
                  </h3>
                </div>
                <div className={styles.accessoriesSpecification}>
                  <h4>{locale === "ar" ? "المواصفات" : "Specifications"}</h4>

                  <ul className={styles.specificationList}>
                    <div className={styles.specificationListItem}>
                      <div className={styles.specificationListItemLeft}>
                        <li>1</li>
                        <li>
                          {locale === "ar"
                            ? "عدد أوضاع اللعبة"
                            : "The number of game modes"}
                        </li>
                      </div>
                      <div className={styles.specificationListItemRight}>
                        <li>7</li>
                      </div>
                    </div>

                    <div className={styles.specificationListItem}>
                      <div className={styles.specificationListItemLeft}>
                        <li>2</li>
                        <li>
                          {locale === "ar"
                            ? "طريقة التفعيل"
                            : "Activation method"}
                        </li>
                      </div>
                      <div className={styles.specificationListItemRight}>
                        <li>{locale === "ar" ? "إطلاق النار" : "shot"}</li>
                      </div>
                    </div>

                    <div className={styles.specificationListItem}>
                      <div className={styles.specificationListItemLeft}>
                        <li>3</li>
                        <li>
                          {locale === "ar"
                            ? "الإشارة الصوتية"
                            : "Sound indication"}
                        </li>
                      </div>
                      <div className={styles.specificationListItemRight}>
                        <li>{locale === "ar" ? "نعم" : "Yes"}</li>
                      </div>
                    </div>

                    <div className={styles.specificationListItem}>
                      <div className={styles.specificationListItemLeft}>
                        <li>4</li>
                        <li>
                          {locale === "ar" ? "عمر البطارية" : "Battery life"}
                        </li>
                      </div>
                      <div className={styles.specificationListItemRight}>
                        <li>
                          {locale === "ar"
                            ? "الطاقة الكهربائية"
                            : "Mains Power"}
                        </li>
                      </div>
                    </div>
                  </ul>

                  <div className={styles.specificationDesc}>
                    <p>
                      {locale === "ar"
                        ? "جهاز يجعل لعبة الليزر أكثر إثارة، ويمنح الساحة شخصية وتميزًا. تعرض لوحة LED مقاس 27 سم الوضع المختار للعبة بشكل متحرك. يسمح الحجم الكبير للوحة بعرض رسوم متحركة عالية الجودة يمكن تمييزها من مسافة بعيدة حتى مع الديناميكيات العالية للعبة. ستلعب السيناريوهات بألوان جديدة!"
                        : "A device that makes laser tag even more interesting, and also gives the arena personality and recognition. A 27 cm LED panel animatedly displays the selected game mode. A large size of the panel allows you to display high-quality detailed animations, distinguishable from a large distance even with high game dynamics. Scenarios will play out with fresh colors!"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.modesGridContainer}>
              <div className={styles.modesGridheading}>
                <h3>{locale === "ar" ? "٨ أوضاع" : "8 modes"}</h3>
              </div>

              <div className={styles.modesGridTwo}>
                {modes.map((mode, index) => (
                  <div key={index} className={styles.modesGridItem}>
                    <div className={styles.modesGridImg}>
                      <img src={mode.img} alt={mode.alt} />
                    </div>
                    <p>{locale === "ar" ? mode.ar : mode.en}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.accessoriesBottomStroke}></div>

        {/* smart domination Box */}

        <div className={styles.sdmContainer}>
          <div className={styles.accessoriesSub}>
            <div
              className={`${styles.accessoriesItem} ${styles.accessoriesItemTwo}`}
            >
              <div className={styles.sdmImg}>
                <img src="/images/dominationbox.webp" alt="dominationbox" />
              </div>

              <div className={styles.accessoriesContent}>
                <div
                  className={`${styles.accessoriesHeading} ${styles.sdmHeading}`}
                >
                  <h3>
                    {locale === "ar"
                      ? "صندوق السيطرة الذكي"
                      : "Smart Domination Box"}
                  </h3>
                </div>
                <div
                  className={`${styles.accessoriesSpecification} ${styles.sdmSpecification}`}
                >
                  <h4>{locale === "ar" ? "المواصفات" : "Specifications"}</h4>

                  <ul
                    className={`${styles.specificationList} ${styles.sdmSpecificationList}`}
                  >
                    <div className={styles.specificationListItem}>
                      <div
                        className={`${styles.specificationListItemLeft} ${styles.sdmSpecificationListItemLeft}`}
                      >
                        <li>1</li>
                        <li>
                          {locale === "ar"
                            ? "عدد أوضاع اللعب"
                            : "The number of game modes"}
                        </li>
                      </div>
                      <div
                        className={`${styles.specificationListItemRight} ${styles.sdmSpecificationListItemRight}`}
                      >
                        <li>5</li>
                      </div>
                    </div>

                    <div className={styles.specificationListItem}>
                      <div
                        className={`${styles.specificationListItemLeft} ${styles.sdmSpecificationListItemLeft}`}
                      >
                        <li>2</li>
                        <li>
                          {locale === "ar"
                            ? "طريقة التفعيل"
                            : "Activation method"}
                        </li>
                      </div>
                      <div
                        className={`${styles.specificationListItemRight} ${styles.sdmSpecificationListItemRight}`}
                      >
                        <li>{locale === "ar" ? "إطلاق" : "shot"}</li>
                      </div>
                    </div>

                    <div className={styles.specificationListItem}>
                      <div
                        className={`${styles.specificationListItemLeft} ${styles.sdmSpecificationListItemLeft}`}
                      >
                        <li>3</li>
                        <li>{locale === "ar" ? "التحكم" : "Control"}</li>
                      </div>
                      <div
                        className={`${styles.specificationListItemRight} ${styles.sdmSpecificationListItemRight}`}
                      >
                        <li>
                          {locale === "ar" ? "إشارة صوتية" : "Sound indication"}
                        </li>
                      </div>
                    </div>

                    <div className={styles.specificationListItem}>
                      <div
                        className={`${styles.specificationListItemLeft} ${styles.sdmSpecificationListItemLeft}`}
                      >
                        <li>4</li>
                        <li>
                          {locale === "ar" ? "عمر البطارية" : "Battery life"}
                        </li>
                      </div>
                      <div
                        className={`${styles.specificationListItemRight} ${styles.sdmSpecificationListItemRight}`}
                      >
                        <li>
                          {locale === "ar" ? "حتى 24 ساعة" : "up to 24 hours"}
                        </li>
                      </div>
                    </div>
                  </ul>

                  <div
                    className={`${styles.specificationDesc} ${styles.sdmSpecificationDesc}`}
                  >
                    <p>
                      {locale === "ar"
                        ? "يُعدّ الاستيلاء على صندوق السيطرة أحد أكثر الآليات شيوعًا في ألعاب الليزر تاغ. يقدّم صندوق السيطرة الذكي للمشاركين مستوى جديدًا من ديناميكية الأحداث."
                        : "Domination box capture is one of the most popular game mechanics in laser tag. Smart Domination box offers participants a new level of gaming event dynamics."}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "يتم وضع جهاز السيناريو في وسط الساحة باعتباره المكان الأكثر نشاطًا."
                        : "The scenario device is set in the center of the arena, as the place of greatest activity"}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "يحتوي الجهاز على 5 أوضاع، يمكن من خلالها إنشاء سيناريوهات مثيرة أو تعديل السيناريوهات الحالية. يتم عرض مستوى السيطرة على 3 مؤشرات ديناميكية، مما يسمح للاعبين بمتابعة تقدم فريقهم والتفكير في الإجراءات التكتيكية."
                        : "The device has 5 modes, based on which you can create exciting scenarios or modify existing ones. Indication of the degree of capture is shown on 3 dynamic scales, which allows players to observe the progress of their team and think through tactical actions."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sdmGridContainer}>
              <div className={styles.modesGridThree}>
                <div
                  className={`${styles.modesGridItem} ${styles.sdmGridItem}`}
                >
                  <div className={styles.sdmGridImg}>
                    <img
                      src="/images/capturebytime.webp"
                      alt="capture by time"
                    />
                  </div>
                  <p>
                    {locale === "ar"
                      ? "الاستيلاء حسب الوقت"
                      : "CAPTURE BY TIME"}
                  </p>
                </div>

                <div
                  className={`${styles.modesGridItem} ${styles.sdmGridItem}`}
                >
                  <div className={styles.sdmGridImg}>
                    <img src="/images/tugofwar.webp" alt="TUG-OF-WAR" />
                  </div>
                  <p>{locale === "ar" ? "شد الحبل" : "TUG-OF-WAR"}</p>
                </div>

                <div
                  className={`${styles.modesGridItem} ${styles.sdmGridItem}`}
                >
                  <div className={styles.sdmGridImg}>
                    <img
                      src="/images/capturebyshots.webp"
                      alt="CAPTURE BY SHOTS"
                    />
                  </div>
                  <p>
                    {locale === "ar"
                      ? "الاستيلاء حسب الطلقات"
                      : "CAPTURE BY SHOTS"}
                  </p>
                </div>

                <div
                  className={`${styles.modesGridItem} ${styles.sdmGridItem}`}
                >
                  <div className={styles.sdmGridImg}>
                    <img src="/images/raisebyflags.webp" alt="RAISE THE FLAG" />
                  </div>
                  <p>{locale === "ar" ? "رفع العلم" : "RAISE THE FLAG"}</p>
                </div>

                <div
                  className={`${styles.modesGridItem} ${styles.sdmGridItem}`}
                >
                  <div className={styles.sdmGridImg}>
                    <img
                      src="/images/triplecapture.webp"
                      alt="TRIPLE CAPTURE"
                    />
                  </div>
                  <p>
                    {locale === "ar" ? "الاستيلاء الثلاثي" : "TRIPLE CAPTURE"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gears and remote */}

      <div className={styles.grMain}>
        <div className={styles.grTopStroke}></div>
        {/* gears and attachments */}
        <div className={styles.gaContainer}>
          <div className={styles.gaSub}>
            <div className={styles.grGrid}>
              {/* Laser Tag Grenade */}
              <div className={styles.grGridItem}>
                <div className={styles.grGridImg}>
                  <img
                    src="/images/lasertaggrenade.webp"
                    alt="Laser tag Grenade"
                  />
                </div>
                <div className={styles.grGridContent}>
                  <div className={styles.grGridHeading}>
                    <h4>
                      {locale === "ar"
                        ? "قنبلة الليزر تاج"
                        : "Laser tag Grenade"}
                    </h4>
                  </div>
                  <div className={styles.grGridDesc}>
                    <p>
                      {locale === "ar"
                        ? "جسم قنبلة الليزر تاج مصنوع من مواد بوليمرية مقاومة للصدمات، ويخفف مصدّان مطاطيان من السقوط والصدمات. لتفعيل القنبلة، تحتاج إلى الضغط على الزر وعند الاستعداد، أطلقها برمي القنبلة نحو العدو."
                        : "The body of the laser tag grenade is made of impact-resistant polymer materials, two rubber bumpers soften drops and bumps. To activate the grenade, you need to hold the button and, when ready, release it by throwing the grenade towards the enemy."}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "الجهاز مزود بمُرسل أشعة تحت الحمراء، وبعد 4 ثوانٍ تضرب القنبلة جميع الأعداء ضمن نصف قطر 5 أمتار. يصاحب “انفجار” قنبلة الليزر تاج إشارات صوتية وضوئية."
                        : "The device is equipped with an infrared emitter, and after 4 seconds the grenade strikes all the enemies within a radius of 5 meters. The “explosion” of the laser tag grenade is accompanied by sound and light indication."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Red Dot Sight */}
              <div className={styles.grGridItem}>
                <div className={styles.grGridImg}>
                  <img src="/images/reddotsight.webp" alt="Red dot sight" />
                </div>
                <div className={styles.grGridContent}>
                  <div className={styles.grGridHeading}>
                    <h4>
                      {locale === "ar"
                        ? "منظار النقطة الحمراء"
                        : "Red dot sight"}
                    </h4>
                  </div>
                  <div className={styles.grGridDesc}>
                    <p>
                      {locale === "ar"
                        ? "يبسط منظار النقطة الحمراء عملية التصويب ويجعلها أكثر دقة، مما يضيف واقعية أكبر للعبة."
                        : "The red dot sight simplifies the aiming process and makes it more accurate. Adds realism to the game."}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "يتم ضبط التصحيحات الأفقية والعمودية عن طريق النقرات."
                        : "Horizontal and vertical adjustment of corrections are done by clicks."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Protective Tip */}
              <div className={styles.grGridItem}>
                <div className={styles.grGridImg}>
                  <img src="/images/protectivetip.webp" alt="Protective tip" />
                </div>
                <div className={styles.grGridContent}>
                  <div className={styles.grGridHeading}>
                    <h4>{locale === "ar" ? "طرف واقٍ" : "Protective tip"}</h4>
                  </div>
                  <div className={styles.grGridDesc}>
                    <p>
                      {locale === "ar"
                        ? "يحمي الطرف المطاطي الواقي لمجموعة ألعاب فالكون اللاعبين من الإصابات ويمنع تلف النظام البصري. كما أنه يجعل بنادق الليزر تاج جذابة للغاية ويمكن استخدامه أيضًا لتمييز الفرق."
                        : "Protective rubber tip for the Falcon game kit protects players from injuries and prevents damage to the optical system. It makes laser tag rifles look really attractive and can also be used to mark teams."}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "سمكه 8 مم ويغطي الجزء الأمامي من فالكون بمقدار 10 مم."
                        : "It’s 8-mm thick and covers the front part of the Falcon for 10 mm."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* smart remote control */}
        <div className={styles.srcContainer}>
          <div className={styles.srcSub}>
            <div className={styles.srcContent}>
              <div className={styles.srcHeading}>
                <h3>
                  {locale === "ar"
                    ? "جهاز التحكم الذكي عن بُعد"
                    : "Smart Remote Control"}
                </h3>
              </div>
              <div className={styles.srcDesc}>
                <p>
                  {locale === "ar"
                    ? "هذا الجهاز مخصص لإعداد مجموعات الألعاب والتحكم في الأجهزة الإضافية. باستخدام جهاز التحكم عن بُعد، يمكنك اختيار لون الفريق، وضع اللعبة، وكذلك ضبط معلمات اللاعبين."
                    : "This device is for setting up and controlling game sets and additional devices. With the help of the remote control you can choose the team color, game mode, as well as set the players’ parameters."}
                </p>
                <p>
                  {locale === "ar"
                    ? "تم تقسيم الأزرار التكتيكية الثمانية عشر حسب الغرض منها، مما يتيح لك إرسال الأوامر على الفور. باستخدام مشبك عملي، يمكنك تثبيت جهاز التحكم عن بُعد على حزامك."
                    : "The 18 tactical buttons are grouped according to their purpose, which allows you to instantly send commands. Using a handy clip, you can fix the remote control on your belt."}
                </p>
                <p>
                  {locale === "ar"
                    ? "كل زر قابل للبرمجة لأي أمر (من إيقاف مجموعة الألعاب إلى تغيير الإعداد المسبق) ويمكنك، إذا لزم الأمر، العودة بسرعة إلى إعدادات المصنع."
                    : "Each button is programmable for any command (from turning off the gaming kit to changing a preset) and, if necessary, you can quickly return to the factory settings."}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.srcOverlay}></div>
          <div className={styles.srcImg}>
            <img
              src="/images/smartremotecontrol.webp"
              alt="Smart Remote Control"
            />
          </div>
        </div>

        <div className={styles.grBottomStroke}></div>

        {/* Storage and Power Accessories */}

        <div className={styles.spaContainer}>
          <div className={styles.spaSub}>
            <div className={styles.spaGrid}>
              {/* Shipping Bag 6x */}
              <div className={styles.spaGridItem}>
                <div className={styles.spaGridImg}>
                  <img src="/images/shippingbag.webp" alt="shipping bag" />
                </div>
                <div className={styles.spaGridContent}>
                  <div className={styles.spaGridHeading}>
                    <h3>
                      {locale === "ar" ? "حقيبة شحن 6x" : "Shipping bag 6x"}
                    </h3>
                  </div>
                  <div className={styles.spaGridDesc}>
                    <p>
                      {locale === "ar"
                        ? "تهدف الحقيبة إلى نقل معدات الليزر تاغ وتتسع لـ 6 مجموعات لعب، كما تحتوي على جيوب خاصة للشواحن وأجهزة التحكم."
                        : "The bag is aimed at transportation of the laser tag equipment and is meant for 6 game kits and there are also special pockets for the chargers and remotes."}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "الحقيبة مصنوعة من قماش كوردورا سميك باللون الأسود، متين ومقاوم للأوساخ والتبلل."
                        : "The bag is made of thick Cordura cloth of black color, durable and resistant to dirt and soaking."}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "توفر الجدران الخارجية السميكة واللينة في نفس الوقت والفواصل الداخلية نقلًا آمنًا للمعدات."
                        : "Thick and at the same time soft outer walls and inner divisions of the bag provide the secure equipment transportation."}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "تم تنظيم المساحة الداخلية بحيث يمكنك تغيير ترتيب الفواصل وفقًا لاحتياجاتك. الفواصل قابلة للإزالة وتثبت باستخدام الفيلكرو."
                        : "The interior space is organized so that you can change the arrangement of the partitions according to your needs. The partitions are removable and fixed with Velcro."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vortex Charger */}
              <div className={styles.spaGridItem}>
                <div className={styles.spaGridImg}>
                  <img src="/images/vortexcharger.webp" alt="vortex charger" />
                </div>
                <div className={styles.spaGridContent}>
                  <div className={styles.spaGridHeading}>
                    <h3>
                      {locale === "ar" ? "شاحن «Vortex»" : "«Vortex» charger"}
                    </h3>
                  </div>
                  <div className={styles.spaGridDesc}>
                    <p>
                      {locale === "ar"
                        ? "يجعل شاحن «Vortex» شحن مجموعات اللعب أسهل وأسرع."
                        : "The «Vortex» Charger makes charging your game sets much easier and faster."}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "إذا كان لديك 6 مجموعات ألعاب ليزر تاغ أو أكثر في ناديك، فهذا الجهاز مثالي لك!"
                        : "If you have 6 or more laser tag gaming kits in your club, this device is just what you need!"}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "يمكن للجهاز شحن 10 مجموعات ألعاب (20 جهازًا) في نفس الوقت. هذا يلغي الحاجة للشحن بالتناوب أو استخدام عدة وصلات كهربائية، وهو أمر غير مريح وأحيانًا غير آمن."
                        : "The device can simultaneously charge 10 game sets (20 devices). This eliminates the need for alternate charging or the use of multiple surge protectors and tees, which is extremely inconvenient and sometimes unsafe."}
                    </p>
                    <p>
                      {locale === "ar"
                        ? "يتميز شاحن «Vortex» بقدرة 2 أمبير، وهيكل مقاوم للصدمات، وكابلات طويلة (3-6 أمتار)."
                        : "The «Vortex» charger has 2A power, a drop-resistant shockproof case, and long cables (3-6 m)."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameScenarioDevices;
