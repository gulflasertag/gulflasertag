import React, { useState, useEffect } from "react";
import styles from "./ManualsDown.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

const ManualsDown = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const [activeTab, setActiveTab] = useState(
    locale === "ar" ? "داخلي" : "INDOOR"
  );
  const [selectedLanguage, setSelectedLanguage]: any = useState({});
  const [dropdownOpen, setDropdownOpen]: any = useState({});
  const [manuals, setManuals]: any = useState([]);

  const manualsDescription =
    locale === "ar" ? (
      <>
        {/* استكشف مجموعتنا الشاملة من أدلة ليزر تاج. سواء كنت تبحث عن تعليمات
        للأنظمة الداخلية أو الخارجية أو المخابئ الهوائية .نحن نوفر لك كل ما
        تحتاجه. احصل على أدلة سهلة الاستخدام مصممة لتزويدك بجميع المعلومات
        اللازمة لتجربة أفضل. */}
        اكتشف مجموعتنا الكاملة من أدلة ليزر تاغ! سواء كنت تبحث عن إرشادات
        استخدام للأنظمة الداخلية أو الخارجية أو المخابئ الهوائية، نحن نوفر لك كل
        ما تحتاجه. احصل على أدلة سهلة الاستخدام، مصممة لتزويدك بجميع المعلومات
        اللازمة لتجربة لعب مثالية.
      </>
    ) : (
      <>
        Explore our comprehensive range of Laser Tag Manuals. Whether
        you&apos;re looking for instructions for indoor, outdoor, or Airbunkers
        Laser Tag systems, we&apos;ve got you covered. Access user-friendly
        guides designed to provide all the information you need for an enhanced
        experience.
      </>
    );

  // const tabs =
  //   locale === "ar" ? ["داخلي", "المخابئ الهوائية"] : ["INDOOR", "AIRBUNKERS"];
  const tabs =
    locale === "ar"
      ? ["داخلي", "خارجي", "المخابئ الهوائية"]
      : ["INDOOR", "OUTDOOR", "AIRBUNKERS"];

  const getEnglishTabValue = (tabValue: any) => {
    const tabMapping: any = {
      داخلي: "indoor",
      خارجي: "outdoor",
      "المخابئ الهوائية": "airbunkers",
      "فيون في آر": "vionvr",
      INDOOR: "indoor",
      OUTDOOR: "outdoor",
      AIRBUNKERS: "airbunkers",
      VIONVR: "vionvr",
    };

    return tabMapping[tabValue] || tabValue.toLowerCase();
  };

  const fetchManuals = async () => {
    const englishTabValue = getEnglishTabValue(activeTab);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/manuals?type=${englishTabValue}`
      );

      setManuals(res.data.result || []);
      // console.log("manuals data:", res.data);
    } catch (error) {
      console.error("Error fetching manuals:", error);
    }
  };

  useEffect(() => {
    fetchManuals();
  }, [activeTab]);

  const toggleDropdown = (titleKey: any) => {
    setDropdownOpen((prev: any) => ({
      ...prev,
      [titleKey]: !prev[titleKey],
    }));
  };

  const getAvailableLanguages = (manuals: any) => {
    const languages = manuals.map((manual: any) => ({
      code: manual.language,
      name:
        manual.language === "ENG"
          ? "English"
          : manual.language === "ARA"
          ? "Arabic"
          : manual.language,
    }));
    return languages;
  };

  const getCurrentManual = (manuals: any, selectedLang: any) => {
    return (
      manuals.find((manual: any) => manual.language === selectedLang) ||
      manuals[0]
    );
  };

  const handleLanguageSelect = (titleKey: any, language: any) => {
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
    // Use the pdfURL from the manual object
    const downloadUrl = `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/${manual.pdfURL}`;

    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = manual.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // console.log(`Downloading: ${manual.title} (${manual.language})`);
  };

  const renderManualItem = (titleData: any, subCategory: any) => {
    // console.log(titleData, "titleData");

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
            {/* {subCategory} */}
            {locale === "ar"
              ? titleData.manuals[0].arabianSubCategory
              : titleData?.manuals[0].subCategory}
          </div>
          <div className={styles.manualsImgTextDiv}>
            <div className={styles.pdfIcon}>
              <img src="/icons/pdf.svg" alt="pdf" />
            </div>
            <div className={styles.manualTitle}>
              {locale === "ar"
                ? titleData.manuals[0].arabianTitle
                : titleData.title}
              {/* {titleData.arabianTitle} */}
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
                  (lang: any) => lang.code === currentLanguage
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
                  {availableLanguages.map((lang: any) => (
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
    <>
      <div
        // className={styles.manualsMain}
        className={`${styles.manualsMain} ${locale === "ar" ? styles.rtl : ""}`}
      >
        <div className={styles.manualsContainer}>
          <div className={styles.manualsSub}>
            <div className={styles.manualsDescription}>
              <p>
                {/* Explore our comprehensive range of Laser Tag Manuals. Whether
                you&apos;re looking for instructions for indoor, outdoor, or
                Airbunkers Laser Tag systems, we&apos;ve got you covered. Access
                user-friendly guides designed to provide all the information you
                need for an enhanced experience. */}
                {manualsDescription}
              </p>
            </div>

            <div className={styles.manualsPDFMainDiv}>
              {/* Tab Navigation */}
              <div className={styles.tabNavigation}>
                {/* {["INDOOR", "OUTDOOR", "AIRBUNKERS"].map((tab) => ( */}
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
                {manuals.length > 0 &&
                manuals[0].subCategoryWise?.length > 0 ? (
                  manuals[0].subCategoryWise.map((categoryData: any) => {
                    // console.log("{");
                    // console.log(categoryData, "<categoryData>");
                    // console.log("}");

                    return (
                      <div
                        key={categoryData.subCategory}
                        className={styles.manualSection}
                      >
                        <div className={styles.sectionHeader}>
                          <h3 className={styles.sectionTitle}>
                            {locale === "ar"
                              ? categoryData?.titleWise[0]?.manuals[0]
                                  ?.arabianSubCategory
                              : categoryData.subCategory}
                          </h3>
                          {/* <p className={styles.sectionSubtitle}>
                          Access comprehensive user guides for the GALAXY
                          ECLIPSE and other Laser Tag equipment.
                        </p> */}
                        </div>
                        <div className={styles.manualsList}>
                          {categoryData.titleWise?.length > 0 ? (
                            categoryData.titleWise.map((titleData: any) =>
                              renderManualItem(
                                titleData,
                                categoryData.subCategory
                              )
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
                    );
                  })
                ) : (
                  <div className={styles.noManualsMsg}>
                    {/* <img src="/icons/nomanuals.svg" alt="No Manuals" /> */}
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
    </>
  );
};

export default ManualsDown;
