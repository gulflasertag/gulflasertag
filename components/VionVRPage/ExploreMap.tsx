import React, { useState } from "react";
import styles from "./ExploreMap.module.scss";
import mapsData from "./mapData.json";
import arabicMapData from "./arabicMapData.json";
import { useRouter } from "next/router";

const ExploreMap = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const [activeMapId, setActiveMapId] = useState(
    locale === "ar" ? arabicMapData.maps[0].id : mapsData.maps[0].id
  );
  // const currentMap: any = mapsData.maps.find((map) => map.id === activeMapId);
  const currentMap: any =
    locale === "ar"
      ? arabicMapData.maps.find((map) => map.id === activeMapId)
      : mapsData.maps.find((map) => map.id === activeMapId);

  const mapsDataTab = locale === "ar" ? arabicMapData : mapsData;

  const heading = locale === "ar" ? "استكشاف جميع الخرائط" : "Explore all Maps";

  return (
    <>
      <div
        className={`${styles.exploreMapMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.exploreMapContainer}>
          <div className={styles.exploreMapSubDiv}>
            <h3 className={styles.exploreMapHeading}>{heading}</h3>
            <div className={styles.exploreMapBelowDiv}>
              <div className={styles.exploreMapLeftDiv}>
                {mapsDataTab.maps.map((map) => (
                  <div
                    key={map.id}
                    className={`${styles.readmoreBtnWrapper} ${
                      activeMapId === map.id ? styles.active : ""
                    }`}
                    onClick={() => setActiveMapId(map.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <button className={styles.tabButton}>
                      <p className={styles.tabText}>{map.name}</p>
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.exploreMapRightDiv}>
                {currentMap?.features && currentMap?.features.length > 0 && (
                  <div className={styles.exploreMapFacilitiesDiv}>
                    {currentMap.features
                      .filter((feature: any) => feature.access)
                      .map((feature: any) => (
                        <div
                          className={styles.facilitDivMain}
                          key={feature.name}
                        >
                          <img
                            className={styles.facilityAccessImg}
                            src="/icons/right.svg"
                            alt="Accessible"
                          />
                          <p className={styles.facilityName}>{feature.name}</p>
                        </div>
                      ))}
                  </div>
                )}

                <div className={styles.exploreMapFalconDivMain}>
                  <div className={styles.exploreMapFalcon1}>
                    <div className={styles.exploreMapFalconImgDiv}>
                      <img
                        className={styles.exploreMapFalconImg}
                        src={currentMap.image}
                        alt={currentMap.name}
                      />
                    </div>
                    <div className={styles.fContentSection}>
                      <h4 className={styles.fSectionHeading}>
                        {currentMap.description}
                      </h4>
                      {currentMap?.details &&
                        currentMap?.details.length > 0 && (
                          <div className={styles.fSectionDetailsDiv}>
                            {currentMap.details.map(
                              (detail: any, index: number) => (
                                <React.Fragment key={detail.title}>
                                  <div className={styles.featuresData}>
                                    <p className={styles.featureTitle}>
                                      {detail.title}
                                    </p>
                                    <span className={styles.featureDesc}>
                                      {detail.value}
                                    </span>
                                  </div>
                                  {index < currentMap.details.length - 1 && (
                                    <div
                                      className={styles.exploreMapLine}
                                    ></div>
                                  )}
                                </React.Fragment>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMap;
