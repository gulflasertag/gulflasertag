import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const [islaserTagDDOpen, setIslaserTagDDOpen] = useState(false);
  const [islaserTagDDMobOpen, setIslaserTagDDMobOpen] = useState(false);
  const laserTagDDRef = useRef<HTMLDivElement>(null);
  const laserTagToggleRef = useRef<HTMLDivElement>(null);
  const [isresourceCenterDDOpen, setIsresourceCenterDDOpen] = useState(false);
  const [isresourceCenterDDMobOpen, setIsresourceCenterDDMobOpen] =
    useState(false);
  const resourceCenterDDRef = useRef<HTMLDivElement>(null);
  const resourceCenterToggleRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Language switching function
  const handleLanguageSwitch = () => {
    const newLocale = locale === "en" ? "ar" : "en";

    router.push(
      {
        pathname,
        query,
      },
      asPath,
      { locale: newLocale }
    );
  };

  // Get current language display text
  const getCurrentLanguageText = () => {
    return locale === "ar" ? "العربية" : "English";
  };

  // Get translate button text
  const getTranslateButtonText = () => {
    return locale === "ar" ? "English" : "عربي";
    // return locale === "ar" ? "ترجم" : "Translate";
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        islaserTagDDOpen &&
        laserTagDDRef.current &&
        !laserTagDDRef.current.contains(target) &&
        laserTagToggleRef.current &&
        !laserTagToggleRef.current.contains(target)
      ) {
        setIslaserTagDDOpen(false);
      }

      if (
        isresourceCenterDDOpen &&
        resourceCenterDDRef.current &&
        !resourceCenterDDRef.current.contains(target) &&
        resourceCenterToggleRef.current &&
        !resourceCenterToggleRef.current.contains(target)
      ) {
        setIsresourceCenterDDOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [islaserTagDDOpen, isresourceCenterDDOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [isSidebarOpen]);

  // Navigation items with translations
  const getNavItems = () => {
    if (locale === "ar") {
      return {
        home: "الرئيسية",
        laserTag: "ليزر تاغ",
        designingArenas: "تصميم الساحات",
        resourceCenter: "مركز الدعم ",
        // resourceCenter: "مركز الموارد",
        aboutUs: "معلومات عنا",
        contactUs: "اتصل بنا",
        netronic: "نيترونيك (خارجي)",
        galaxyEclipse: "جالاكسي إكليبس (داخلي)",
        vionVr: "فيون في آر",
        airBunker: "المخابئ الهوائية",
        // airBunker: "إير بانكر",
        catalogs: "دليل المنتاجات",
        // catalogs: "الكتالوجات",
        manuals: "إرشادات الاستخدام",
        // manuals: "الدلائل",
        videoManuals: "إرشادات الفيديو",
        // videoManuals: "دلائل الفيديو",
        software: "برامج",
        // software: "البرمجيات",
      };
    }

    return {
      home: "Home",
      laserTag: "Laser tag",
      designingArenas: "Designing of Arenas",
      resourceCenter: "Resource Center",
      aboutUs: "About us",
      contactUs: "Contact us",
      netronic: "Netronic (Outdoor)",
      galaxyEclipse: "Galaxy Eclipse (Indoor)",
      vionVr: "VION VR",
      airBunker: "Air Bunker",
      catalogs: "Catalogs",
      manuals: "Manuals",
      videoManuals: "Video Manuals",
      software: "Software",
    };
  };

  const navItems = getNavItems();

  return (
    <>
      <div
        className={`${styles.headerMain} ${locale === "ar" ? styles.rtl : ""}`}
      >
        <div className={styles.headerContainer}>
          <div className={styles.headerSub}>
            <Link href="/">
              <div className={styles.gulfLaserLogo}>
                <img src="/icons/headerlogo.svg" alt="Gulf Laser Logo" />
              </div>
            </Link>

            <ul className={styles.headerLinksDiv}>
              <Link href="/">
                <li>{navItems.home}</li>
              </Link>

              <div className={styles.dropdownWrapper}>
                <div
                  ref={laserTagToggleRef}
                  className={styles.dropdownLinks}
                  onClick={() => setIslaserTagDDOpen(!islaserTagDDOpen)}
                >
                  <li>{navItems.laserTag}</li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M12.75 7.904L8.99996 11.654L5.25 7.904"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {islaserTagDDOpen && (
                  <div ref={laserTagDDRef} className={styles.laserTagDD}>
                    <Link href="/netronic">
                      <div
                        className={`${styles.laserTagDDOption} ${styles.netronicBg}`}
                      >
                        <p>{navItems.netronic}</p>
                      </div>
                    </Link>

                    <Link href="/indoorgalaxyeclipse">
                      <div
                        className={`${styles.laserTagDDOption} ${styles.galaxyEclipseBg}`}
                      >
                        <p>{navItems.galaxyEclipse}</p>
                      </div>
                    </Link>

                    <Link href="/vionvr">
                      <div
                        className={`${styles.laserTagDDOption} ${styles.vionVrBg}`}
                      >
                        <p>{navItems.vionVr}</p>
                      </div>
                    </Link>
                    <Link href="/airbunker">
                      <div
                        className={`${styles.laserTagDDOption} ${styles.airBunkerBg}`}
                      >
                        <p>{navItems.airBunker}</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/designingofarenas">
                <li>{navItems.designingArenas}</li>
              </Link>

              <div
                ref={resourceCenterToggleRef}
                className={styles.dropdownWrapper}
                onClick={() =>
                  setIsresourceCenterDDOpen(!isresourceCenterDDOpen)
                }
              >
                <div className={styles.dropdownLinks}>
                  <li>{navItems.resourceCenter}</li>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M12.75 7.904L8.99996 11.654L5.25 7.904"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {isresourceCenterDDOpen && (
                  <div
                    className={styles.resourceCenterDD}
                    ref={resourceCenterDDRef}
                  >
                    <div className={`${styles.resourceCenterDDOption}`}>
                      <Link href="/catalogs">
                        <p>{navItems.catalogs}</p>
                      </Link>
                    </div>
                    <div className={`${styles.resourceCenterDDOption}`}>
                      <Link href="/manuals">
                        <p>{navItems.manuals}</p>
                      </Link>
                    </div>
                    <div className={`${styles.resourceCenterDDOption}`}>
                      <Link href="/videomanuals">
                        <p>{navItems.videoManuals}</p>
                      </Link>
                    </div>

                    <div className={`${styles.resourceCenterDDOption}`}>
                      <Link href="/softwares">
                        <p>{navItems.software}</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/aboutus">
                <li>{navItems.aboutUs}</li>
              </Link>
              <Link href="/contact">
                <li>{navItems.contactUs}</li>
              </Link>
              <div className={styles.translateBtnWrapper}>
                <button
                  className={styles.translateBtn}
                  onClick={handleLanguageSwitch}
                >
                  <div
                    className={styles.translateBtnContent}
                    data-button-type="translate"
                  >
                    <p>{getTranslateButtonText()}</p>
                    <svg
                      className={styles.translateIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M14.295 14.0025L12.69 10.8L11.085 14.0025"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3774 13.4325H14.0174"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6899 16.5C10.5899 16.5 8.87988 14.7975 8.87988 12.69C8.87988 10.59 10.5824 8.88 12.6899 8.88C14.7899 8.88 16.4999 10.5825 16.4999 12.69C16.4999 14.7975 14.7974 16.5 12.6899 16.5Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.765 1.5H6.705C8.2575 1.5 9.00751 2.25001 8.97001 3.76501V6.705C9.00751 8.2575 8.2575 9.00752 6.705 8.97002H3.765C2.25 9.00002 1.5 8.24999 1.5 6.69749V3.75751C1.5 2.25001 2.25 1.5 3.765 1.5Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.7574 4.38751H3.7124"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.22754 3.8775V4.3875"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.99258 4.38C5.99258 5.6925 4.96508 6.75749 3.70508 6.75749"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.75761 6.75751C6.21011 6.75751 5.71512 6.465 5.37012 6"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.5 11.25C1.5 14.1525 3.8475 16.5 6.75 16.5L5.9625 15.1875"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 6.75C16.5 3.8475 14.1525 1.5 11.25 1.5L12.0375 2.8125"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </ul>

            <div
              className={`${styles.hamburgerMenu} ${
                isSidebarOpen ? styles.open : ""
              }`}
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* responsive side bar */}
        <div
          className={`${styles.overlay} ${
            isSidebarOpen ? styles.overlayVisible : styles.overlayHidden
          }`}
        >
          <div
            ref={sidebarRef}
            className={`${styles.sidebarMain} ${
              isSidebarOpen ? styles.open : styles.closed
            }`}
          >
            <div className={styles.sidebarHeader}>
              <div
                className={styles.gulfLaserLogo}
                onClick={() => setSidebarOpen((prev) => !prev)}
              >
                <img src="/icons/headerlogo.svg" alt="Gulf Laser Logo" />
              </div>

              <div
                className={`${styles.siderbarClose}`}
                onClick={() => {
                  setSidebarOpen((prev) => !prev);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <ul
              className={`${styles.headerLinksDiv} ${styles.sidebarLinksDiv}`}
            >
              <Link href="/">
                <li>{navItems.home}</li>
              </Link>

              <div className={styles.dropdownWrapper}>
                <div
                  className={styles.dropdownLinks}
                  onClick={() => {
                    setIslaserTagDDMobOpen(!islaserTagDDMobOpen);
                    setIsresourceCenterDDMobOpen(false);
                  }}
                >
                  <li>{navItems.laserTag}</li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M12.75 7.904L8.99996 11.654L5.25 7.904"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {islaserTagDDMobOpen && (
                  <div className={styles.laserTagDD}>
                    <Link href="/netronic">
                      <div
                        className={`${styles.laserTagDDOption} ${styles.netronicBg}`}
                      >
                        <p>{navItems.netronic}</p>
                      </div>
                    </Link>

                    <Link href="/indoorgalaxyeclipse">
                      <div
                        className={`${styles.laserTagDDOption} ${styles.galaxyEclipseBg}`}
                      >
                        <p>{navItems.galaxyEclipse}</p>
                      </div>
                    </Link>

                    <Link href="/vionvr">
                      <div
                        className={`${styles.laserTagDDOption} ${styles.vionVrBg}`}
                      >
                        <p>{navItems.vionVr}</p>
                      </div>
                    </Link>
                    <Link href="/airbunker">
                      <div
                        className={`${styles.laserTagDDOption} ${styles.airBunkerBg}`}
                      >
                        <p>{navItems.airBunker}</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/designingofarenas">
                <li>{navItems.designingArenas}</li>
              </Link>

              <div
                className={styles.dropdownWrapper}
                onClick={() => {
                  setIsresourceCenterDDMobOpen(!isresourceCenterDDMobOpen);
                  setIslaserTagDDMobOpen(false);
                }}
              >
                <div className={styles.dropdownLinks}>
                  <li>{navItems.resourceCenter}</li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M12.75 7.904L8.99996 11.654L5.25 7.904"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {isresourceCenterDDMobOpen && (
                  <div className={styles.resourceCenterDD}>
                    <div className={`${styles.resourceCenterDDOption}`}>
                      <Link href="/catalogs">
                        <p>{navItems.catalogs}</p>
                      </Link>
                    </div>
                    <div className={`${styles.resourceCenterDDOption}`}>
                      <Link href="/manuals">
                        <p>{navItems.manuals}</p>
                      </Link>
                    </div>
                    <div className={`${styles.resourceCenterDDOption}`}>
                      <Link href="/videomanuals">
                        <p>{navItems.videoManuals}</p>
                      </Link>
                    </div>

                    <div className={`${styles.resourceCenterDDOption}`}>
                      <Link href="/softwares">
                        <p>{navItems.software}</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/aboutus">
                <li>{navItems.aboutUs}</li>
              </Link>
              <Link href="/contact">
                <li>{navItems.contactUs}</li>
              </Link>

              <div className={styles.translateBtnWrapper}>
                <button
                  className={styles.translateBtn}
                  onClick={handleLanguageSwitch}
                >
                  <div
                    className={styles.translateBtnContent}
                    data-button-type="translate"
                  >
                    <p>{getTranslateButtonText()}</p>
                    <svg
                      className={styles.translateIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M14.295 14.0025L12.69 10.8L11.085 14.0025"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3774 13.4325H14.0174"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6899 16.5C10.5899 16.5 8.87988 14.7975 8.87988 12.69C8.87988 10.59 10.5824 8.88 12.6899 8.88C14.7899 8.88 16.4999 10.5825 16.4999 12.69C16.4999 14.7975 14.7974 16.5 12.6899 16.5Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.765 1.5H6.705C8.2575 1.5 9.00751 2.25001 8.97001 3.76501V6.705C9.00751 8.2575 8.2575 9.00752 6.705 8.97002H3.765C2.25 9.00002 1.5 8.24999 1.5 6.69749V3.75751C1.5 2.25001 2.25 1.5 3.765 1.5Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.7574 4.38751H3.7124"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.22754 3.8775V4.3875"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.99258 4.38C5.99258 5.6925 4.96508 6.75749 3.70508 6.75749"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.75761 6.75751C6.21011 6.75751 5.71512 6.465 5.37012 6"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.5 11.25C1.5 14.1525 3.8475 16.5 6.75 16.5L5.9625 15.1875"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 6.75C16.5 3.8475 14.1525 1.5 11.25 1.5L12.0375 2.8125"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
