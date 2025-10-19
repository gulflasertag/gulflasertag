import React from "react";
import styles from "./AirBunker.module.scss";
import { useRouter } from "next/router";

const airBunkerData = [
  {
    tag: "/images/tag01.jpg",
    heading: {
      en: "the NXL 2021 field",
      ar: "ملعب NXL 2021",
    },
    description: {
      en: "Engineered for professional gameplay, the NXL 2021 Field delivers a dynamic and strategic arena setup perfect for tournaments and training sessions. Built with durable, high-visibility inflatable bunkers, this setup ensures fast-paced action while maintaining maximum safety and visibility for players of all skill levels.",
      ar: "مصمم للعب الاحترافي، يوفر ملعب NXL 2021 إعدادًا ديناميكيًا واستراتيجيًا مثاليًا للبطولات وجلسات التدريب. تم بناؤه باستخدام حواجز هوائية قابلة للنفخ ومتينة وعالية الرؤية، مما يضمن حركة سريعة مع الحفاظ على أقصى درجات الأمان والوضوح لجميع اللاعبين من جميع المستويات.",
    },
    image: "/images/airbunkergridimg1.webp",
  },
  {
    tag: "/images/tag02.jpg",
    heading: {
      en: "the “PSP / NXL” field",
      ar: "ملعب PSP / NXL",
    },
    description: {
      en: "Designed for competitive outdoor environments, the PSP/NXL field layout brings intensity and realism to every match. Its modular design allows for endless tactical combinations, giving teams the flexibility to create fresh scenarios that challenge players and enhance replay value.",
      ar: "مصمم للبيئات الخارجية التنافسية، يجلب تصميم ملعب PSP/NXL الإثارة والواقعية لكل مباراة. يسمح تصميمه المعياري بتركيبات تكتيكية لا نهائية، مما يمنح الفرق المرونة لإنشاء سيناريوهات جديدة تتحدى اللاعبين وتعزز قيمة إعادة اللعب.",
    },
    image: "/images/airbunkergridimg2.webp",
  },
  {
    tag: "/images/tag03.jpg",
    heading: {
      en: "training",
      ar: "التدريب",
    },
    description: {
      en: "Our bunkers are not just for play—they’re ideal for skill development and tactical drills. Whether you’re running a youth camp or a professional boot camp, the layout supports structured training, promoting teamwork, communication, and laser tag strategy in real-world scenarios.",
      ar: "حواجزنا ليست مخصصة للعب فقط — بل إنها مثالية لتطوير المهارات والتدريبات التكتيكية. سواء كنت تدير معسكرًا شبابيًا أو برنامجًا احترافيًا، يدعم التصميم التدريب المنظم، ويعزز العمل الجماعي، والتواصل، واستراتيجيات الليزر تاغ في سيناريوهات واقعية.",
    },
    image: "/images/airbunkergridimg3.webp",
  },
  {
    tag: "/images/tag04.jpg",
    heading: {
      en: "for Drone Racing",
      ar: "لسباقات الطائرات بدون طيار",
    },
    description: {
      en: "Elevate your battlefield with high-speed drone racing experiences. Our inflatable air bunkers create thrilling race routes that challenge precision flying and fast decision-making. Perfect for integrating into your arena or hosting stand-alone drone competitions, this setup adds a futuristic, action-packed element to your offerings.",
      ar: "ارتقِ بساحة المعركة الخاصة بك من خلال تجارب سباقات الطائرات بدون طيار عالية السرعة. تخلق حواجزنا الهوائية القابلة للنفخ مسارات سباق مثيرة تتحدى الطيران الدقيق واتخاذ القرارات السريعة. مثالية للدمج في ساحتك أو لاستضافة مسابقات طائرات بدون طيار مستقلة، يضيف هذا الإعداد عنصرًا مستقبليًا مليئًا بالإثارة إلى عروضك.",
    },
    image: "/images/airbunkergridimg4.webp",
  },
  {
    tag: "/images/tag05.jpg",
    heading: {
      en: "for away games and laser Tournaments",
      ar: "للألعاب الخارجية وبطولات الليزر",
    },
    description: {
      en: "Bring the thrill of laser tag anywhere with our portable bunker sets—engineered for quick setup and professional play in any location. Ideal for mobile arenas and competitive tournaments, these layouts offer flexibility, visual impact, and tactical variety, making every game feel like a championship match.",
      ar: "اجلب إثارة الليزر تاغ إلى أي مكان باستخدام مجموعات الحواجز المحمولة لدينا — مصممة للإعداد السريع واللعب الاحترافي في أي موقع. مثالية للساحات المتنقلة والبطولات التنافسية، توفر هذه التصاميم مرونة وتأثيرًا بصريًا وتنوعًا تكتيكيًا، مما يجعل كل لعبة تبدو وكأنها مباراة بطولة.",
    },
    image: "/images/airbunkergridimg5.webp",
  },
];

const tdItems = [
  {
    img: "/images/tdimg1.webp",
    title: { en: "Cylinder", ar: "أسطوانة" },
    size: {
      en: "2 × 1.2 M",
      ar: "2 × 1.2 م",
    },
    desc: {
      en: "Provides strong vertical cover for quick transitions and defensive positioning.",
      ar: "يوفر غطاءً عموديًا قويًا للانتقالات السريعة والتموضع الدفاعي.",
    },
  },
  {
    img: "/images/tdimg2.webp",
    title: { en: "Tree", ar: "شجرة" },
    size: {
      en: "1.5 × 1 M",
      ar: "1.5 × 1 م",
    },
    desc: {
      en: "Compact and lightweight, perfect for tight layouts and quick flanks.",
      ar: "مضغوط وخفيف الوزن، مثالي للتصاميم الضيقة والمناورات السريعة.",
    },
  },
  {
    img: "/images/tdimg4.webp",
    title: { en: "Dorito medium", ar: "دوريتو متوسط" },
    size: {
      en: "2.1 × 2.5 × 2.75 M",
      ar: "2.1 × 2.5 × 2.75 م",
    },
    desc: {
      en: "Offers angled cover for aggressive play and tactical positioning.",
      ar: "يوفر غطاءً مائلًا للعب الهجومي والتموضع التكتيكي.",
    },
  },
  {
    img: "/images/tdimg3.webp",
    title: { en: "Dorito small", ar: "دوريتو صغير" },
    size: {
      en: "1.7 × 1.7 × 1.7 M",
      ar: "1.7 × 1.7 × 1.7 م",
    },
    desc: {
      en: "Smaller size for close-quarters or quick dodges in larger arenas.",
      ar: "حجم أصغر للمساحات القريبة أو المناورات السريعة في الساحات الكبيرة.",
    },
  },
  {
    img: "/images/tdimg5.webp",
    title: { en: "Tall Cake", ar: "كيك طويل" },
    size: {
      en: "1.5 × 1 × 1 M",
      ar: "1.5 × 1 × 1 م",
    },
    desc: {
      en: "Tall and broad, this bunker offers vertical cover for defense and control over key areas of the field.",
      ar: "طويل وواسع، يوفر هذا الحاجز غطاءً عموديًا للدفاع والسيطرة على المناطق الرئيسية في الميدان.",
    },
  },
  {
    img: "/images/tdimg6.webp",
    title: { en: "Cake", ar: "كيك" },
    size: {
      en: "1 × 1 × 1 M",
      ar: "1 × 1 × 1 م",
    },
    desc: {
      en: "Wide and low-profile, ideal for quick hiding and covering ground in fast-paced games.",
      ar: "واسع ومنخفض، مثالي للاختباء السريع وتغطية الأرض في الألعاب السريعة.",
    },
  },
  {
    img: "/images/tdimg7.webp",
    title: { en: "Wing", ar: "جناح" },
    size: {
      en: "1.95 × 1.5 × 0.5 M",
      ar: "1.95 × 1.5 × 0.5 م",
    },
    desc: {
      en: "Angled shape providing cover with a clear line of sight for strategic flanking and defense.",
      ar: "شكل مائل يوفر غطاءً مع خط رؤية واضح للمناورة الاستراتيجية والدفاع.",
    },
  },
  {
    img: "/images/tdimg8.webp",
    title: { en: "Snake Beam", ar: "شعاع الثعبان" },
    size: {
      en: "0.75 × 0.5 × 3 M",
      ar: "0.75 × 0.5 × 3 م",
    },
    desc: {
      en: "Long horizontal cover, perfect for creating pathways and dividing the field for stealth and strategic plays.",
      ar: "غطاء أفقي طويل، مثالي لإنشاء مسارات وتقسيم الميدان للتخفي واللعب الاستراتيجي.",
    },
  },
];

function AirBunker() {
  const { locale } = useRouter();

  return (
    <div
      className={`${styles.airBunkerMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.airBunkerContainer}>
        <div className={styles.airBunkerSub}>
          <div className={styles.airBunkerGrid}>
            {airBunkerData.map((item, index) => (
              <div key={index} className={styles.airBunkerGridItem}>
                <div className={styles.gridItemContent}>
                  <div className={styles.numberBadge}>
                    <img src={item.tag} alt={`tag-${index + 1}`} />
                  </div>
                  <div className={styles.contentInfo}>
                    <div className={styles.contentHeading}>
                      {locale === "ar" ? item.heading.ar : item.heading.en}
                    </div>
                    <p className={styles.contentDescription}>
                      {locale === "ar"
                        ? item.description.ar
                        : item.description.en}
                    </p>
                  </div>
                </div>
                <div className={styles.gridItemImgWrapper}>
                  <div className={styles.gridItemImg}>
                    <img src={item.image} alt={`gridimg${index + 1}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* //bunkers types and dimensions */}

      <div className={styles.tdMain}>
        <div className={styles.tdTopStroke}></div>
        <div className={styles.tdContainer}>
          <div className={styles.tdSub}>
            <div className={styles.tdheadingDiv}>
              <h3>
                {locale === "ar"
                  ? "أنواع وأبعاد المخابئ"
                  : "Bunker Types and Dimensions"}
              </h3>
              <p>
                {locale === "ar"
                  ? "تم تصميم كل حاجز بعناية لتحقيق توازن بين الرؤية، والتغطية، وديناميكيات اللعب."
                  : "Each bunker is carefully designed to balance visibility, cover, and gameplay dynamics."}
              </p>
            </div>

            <div className={styles.tdGrid}>
              {tdItems.map((item, index) => (
                <div className={styles.tdGridItem} key={index}>
                  <div className={styles.tdGridItemImg}>
                    <img
                      src={item.img}
                      alt={locale === "ar" ? item.title.ar : item.title.en}
                    />
                  </div>
                  <div className={styles.tdGridItemContent}>
                    <h4>{locale === "ar" ? item.title.ar : item.title.en}</h4>
                    <span>{locale === "ar" ? item.size.ar : item.size.en}</span>
                    <p>{locale === "ar" ? item.desc.ar : item.desc.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.tdBottomStroke}></div>
      </div>

      {/* brand you airbunker */}

      <div className={styles.brandAirBunkerContainer}>
        <div className={styles.brandAirBunkerSub}>
          <div className={styles.brandABImgDiv}>
            <img src="/images/brandairbunkerimg.webp" alt="Brand AirBunker" />
          </div>

          <div className={styles.brandABContentDiv}>
            <div className={styles.brandABHeadingDiv}>
              <h4>
                {locale === "ar" ? (
                  <>
                    ضع علامتك التجارية على <span>الحاجز الهوائي.</span>
                  </>
                ) : (
                  <>
                    Brand Your <span>Air Bunker.</span>
                  </>
                )}
              </h4>
            </div>
            <ul className={styles.brandABInfo}>
              {locale === "ar" ? (
                <>
                  <li>الصيغ: cdr، ai، eps، svg</li>
                  <li>
                    صورة متجهة فقط (لا تُقبل الصور النقطية المتخفية كصور متجهة)
                  </li>
                  <li>
                    يجب دمج جميع الطبقات في طبقة واحدة (ليس مجموعة، بل مدمجة)
                  </li>
                  <li>يجب أن يكون الشعار بلون واحد صلب (اللون غير مهم)</li>
                  <li>يجب أن تكون الخطوط بسماكة لا تقل عن 1 مم</li>
                </>
              ) : (
                <>
                  <li>Formats: cdr, ai, eps, svg</li>
                  <li>
                    Vector image only (bitmap images disguised as vector format
                    are not accepted)
                  </li>
                  <li>
                    All layers must be merged into one (not grouped, but merged)
                  </li>
                  <li>
                    The logo must be of one solid color (the color is not
                    important)
                  </li>
                  <li>Lines must be at least 1mm thin</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirBunker;
