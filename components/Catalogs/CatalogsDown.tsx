// import React, { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import styles from "./CatalogsDown.module.scss";
import { useRouter } from "next/router";

const staticManuals: any = {
  INDOOR: {
    subCategoryWise: [
      {
        subCategory: "Catalog",
        arabianSubCategory: "داخلي",
        titleWise: [
          {
            title: "Indoor Galaxy Eclipse",
            arabianTitle: "الدليل الداخلي لنظام جالاكسي إكليبس",
            manuals: [
              {
                language: "ENG",
                pdfURL:
                  "pdf/1758953427513_68d77fd31b108b9182789b8a_Indoor Galaxy Eclipse (1).pdf",
              },
              {
                language: "ARA",
                pdfURL:
                  "pdf/1758953615818_68d7808f1b108b9182789b96_Indoor galaxy eclipse.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  OUTDOOR: {
    subCategoryWise: [
      {
        subCategory: "Catalog",
        arabianSubCategory: "خارجي",
        titleWise: [
          {
            title: "Netronic Outdoor Lasertag",
            arabianTitle: "الدليل الخارجي لنظام نيترونيك",
            manuals: [
              {
                language: "ENG",
                pdfURL:
                  "pdf/1758953576640_68d780681b108b9182789b90_Netronic Outdoor Lasertag (1).pdf",
              },
              {
                language: "ARA",
                pdfURL:
                  "pdf/1758953664918_68d780c01b108b9182789b9c_Netronic Outdoor lasertag.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  VIONVR: {
    subCategoryWise: [
      {
        subCategory: "Catalog",
        arabianSubCategory: "فيون في آر",
        titleWise: [
          {
            title: "VION VR",
            arabianTitle: "دليل  فيون في آر",
            manuals: [
              {
                language: "ENG",
                pdfURL:
                  "pdf/1758952798959_68d77d5ec3a9687acdcbdbdd_VION VR (1).pdf",
              },
              {
                language: "ARA",
                pdfURL:
                  "pdf/1758953690550_68d780da1b108b9182789ba2_Vion VR.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
};

const CatalogsDown = () => {
  const router = useRouter();
  const { locale } = router;
  const [activeTab, setActiveTab] = useState(
    locale === "ar" ? "داخلي" : "INDOOR"
  );
  const [selectedLanguage, setSelectedLanguage] = useState<any>({});
  const [dropdownOpen, setDropdownOpen] = useState<any>({});
  const [manuals, setManuals] = useState({ subCategoryWise: [] });

  const manualsDescription =
    locale === "ar" ? (
      <>
        اكتشف مجموعتنا الكاملة من الكتالوجات! سواء كنت تبحث عن إرشادات للاستخدام
        للأنظمة الداخلية أو الخارجية أو أنظمة فيون في آر ، نحن نوفر لك كل ما
        تحتاجه. احصل على أدلة سهلة الاستخدام، مصممة خصيصًا لتزويدك بجميع
        المعلومات اللازمة لتجربة لعب أكثر سلاسة واحترافية.
      </>
    ) : (
      <>
        Explore our complete catalog collection! Whether you&apos;re looking for
        user guides for indoor systems, outdoor setups, or VION VR systems,
        we&apos;ve got you covered. Get easy-to-use manuals, specially designed
        to provide all the information you need for a smoother, more
        professional gaming experience.
      </>
    );

  const tabs =
    locale === "ar"
      ? ["داخلي", "خارجي", "دليل  فيون في آر"]
      : ["INDOOR", "OUTDOOR", "VION VR"];

  const getEnglishTabValue = (tabValue: string) => {
    const tabMapping: { [key: string]: string } = {
      داخلي: "indoor",
      خارجي: "outdoor",
      "المخابئ الهوائية": "airbunkers",
      "دليل  فيون في آر": "vionvr",
      INDOOR: "indoor",
      OUTDOOR: "outdoor",
      AIRBUNKERS: "airbunkers",
      VIONVR: "vionvr",
      "VION VR": "vionvr",
    };
    return tabMapping[tabValue] || tabValue.toLowerCase();
  };

  useEffect(() => {
    const tabKey = getEnglishTabValue(activeTab).toUpperCase();
    setManuals(staticManuals[tabKey] || { subCategoryWise: [] });
  }, [activeTab]);

  const toggleDropdown = (titleKey: string) => {
    setDropdownOpen((prev: any) => ({
      ...prev,
      [titleKey]: !prev[titleKey],
    }));
  };

  const getAvailableLanguages = (manuals: any) => {
    if (!manuals || !Array.isArray(manuals)) return [];
    return manuals.map((manual) => ({
      code: manual.language,
      name:
        manual.language === "ENG"
          ? "English"
          : manual.language === "ARA"
          ? "Arabic"
          : manual.language,
    }));
  };

  const getCurrentManual = (manuals: any, selectedLang: string) => {
    if (!manuals || !Array.isArray(manuals)) return manuals[0];
    return (
      manuals.find((manual) => manual.language === selectedLang) || manuals[0]
    );
  };

  const handleLanguageSelect = (titleKey: string, language: string) => {
    setSelectedLanguage((prev: any) => ({
      ...prev,
      [titleKey]: language,
    }));
    setDropdownOpen((prev: any) => ({
      ...prev,
      [titleKey]: false,
    }));
  };

  const handleDownload = (manual: any) => {
    const link = document.createElement("a");
    link.href = manual.pdfURL;
    link.download = locale === "ar" ? manual.title : manual.title || "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderManualItem = (titleData: any, subCategory: any) => {
    const titleKey = `${subCategory}-${titleData.title}`;
    const availableLanguages = getAvailableLanguages(titleData.manuals);
    const currentLanguage =
      selectedLanguage[titleKey] || availableLanguages[0]?.code || "ENG";
    const currentManual = getCurrentManual(titleData.manuals, currentLanguage);
    const showDropdown = availableLanguages.length > 1;

    return (
      <div key={titleKey} className={styles.manualItem}>
        <div className={styles.manualLeft}>
          <div className={styles.categoryBadge}>
            {locale === "ar" ? "دليل المنتجات" : "Catalog"}
          </div>

          <div className={styles.manualsImgTextDiv}>
            <div className={styles.pdfIcon}>
              <img src="/icons/pdf.svg" alt="pdf" />
            </div>
            <div className={styles.manualTitle}>
              {locale === "ar" ? titleData.arabianTitle : titleData.title}
            </div>
          </div>
        </div>
        <div className={styles.manualRight}>
          {showDropdown ? (
            <div className={styles.languageDropdown}>
              <button
                className={styles.dropdownButton}
                onClick={() => toggleDropdown(titleKey)}
              >
                {availableLanguages.find(
                  (lang) => lang.code === currentLanguage
                )?.name || currentLanguage}
                <div className={styles.verticleLine}></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={dropdownOpen[titleKey] ? styles.rotated : ""}
                >
                  <path
                    d="M14.9386 6.71252L10.0486 11.6025C9.47109 12.18 8.52609 12.18 7.94859 11.6025L3.05859 6.71252"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {dropdownOpen[titleKey] && (
                <div className={styles.dropdownMenu}>
                  {availableLanguages.map((lang) => (
                    <div
                      key={lang.code}
                      className={styles.dropdownItem}
                      onClick={() => handleLanguageSelect(titleKey, lang.code)}
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className={styles.dropdownButton}>
              {availableLanguages[0]?.name || currentLanguage}
            </div>
          )}
          <a
            href={`${process.env.NEXT_PUBLIC_REACT_APP_IMAGE_URL}/${currentManual.pdfURL}`}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button
              className={styles.downloadButton}
              // onClick={() => handleDownload(currentManual)}
            >
              <img src={"/icons/download.svg"} alt="download" />
            </button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${styles.manualsMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.manualsContainer}>
        <div className={styles.manualsSub}>
          <div className={styles.manualsDescription}>
            <p>{manualsDescription}</p>
          </div>
          <div className={styles.manualsPDFMainDiv}>
            {/* Tab Navigation */}
            <div className={styles.tabNavigation}>
              {tabs.map((tab) => (
                <div
                  className={`${styles.readmoreBtnWrapper} ${
                    activeTab === tab ? styles.active : ""
                  }`}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                >
                  <button className={styles.tabButton}>
                    <p className={styles.tabText}>{tab}</p>
                  </button>
                </div>
              ))}
            </div>
            {/* Manual Sections */}
            <div className={styles.manualsContent}>
              {manuals.subCategoryWise?.length > 0 ? (
                manuals.subCategoryWise.map((categoryData: any) => (
                  <div
                    key={categoryData.subCategory}
                    className={styles.manualSection}
                  >
                    {/* <div className={styles.sectionHeader}>
                      <h3 className={styles.sectionTitle}>
                        {locale === "ar"
                          ? categoryData.arabianSubCategory
                          : categoryData.subCategory}
                      </h3>
                    </div> */}
                    <div className={styles.manualsList}>
                      {categoryData.titleWise?.length > 0 ? (
                        categoryData.titleWise.map((titleData: any) =>
                          renderManualItem(titleData, categoryData.subCategory)
                        )
                      ) : (
                        <div className={styles.noManualsMsg}>
                          {locale === "ar"
                            ? `لا توجد كتيبات لـ ${categoryData.subCategory}`
                            : `No manuals for ${categoryData.subCategory}`}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.noManualsMsg}>
                  {locale === "ar"
                    ? `لا توجد كتيبات لـ ${activeTab}`
                    : `No manuals for ${activeTab}`}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogsDown;
