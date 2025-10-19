import React from "react";
import styles from "./OurServices.module.scss";
import { useRouter } from "next/router";

const OurServices = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const getServiceData = () => {
    if (locale === "ar") {
      return [
        {
          id: 1,
          icon: "/icons/technicalsupport.svg",
          alt: "الدعم الفني",
          title: "الدعم الفني",
          description: "استشارات ومساعدة على مدار 7 أيام في الأسبوع",
        },
        {
          id: 2,
          icon: "/icons/businessdevelopment.svg",
          alt: "تطوير الأعمال",
          title: "تطوير الأعمال",
          description: "مجموعة من الخدمات لبناء وتعزيز مراكز الليزر تاغ",
        },
        {
          id: 3,
          icon: "/icons/informationalsupport.svg",
          alt: "الدعم المعلوماتي",
          title: "الدعم المعلوماتي",
          description:
            "الوصول إلى مواد التدريب والتخطيطات الرسومية والاستشارات لمساعدتك في إدارة وتسويق وتشغيل عملك",
        },
        {
          id: 4,
          icon: "/icons/certifiedequipment.svg",
          alt: "المعدات المعتمدة",
          title: "المعدات المعتمدة",
          description:
            "تفي أنظمتنا بأعلى المعايير من حيث السلامة والجودة. نضمن الاستخدام الآمن في دول الكومنولث والاتحاد الأوروبي.",
        },
        {
          id: 5,
          icon: "/icons/servicecenternetwork.svg",
          alt: "شبكة مراكز الخدمة",
          title: "شبكة مراكز الخدمة",
          description:
            "نقدم خدمات ما بعد الضمان واستبدال المعدات والإصلاحات في الوقت المناسب لضمان تشغيل الأنظمة بسلاسة.",
        },
        {
          id: 6,
          icon: "/icons/advancedequipment.svg",
          alt: "المعدات المتقدمة",
          title: "المعدات المتقدمة",
          description:
            "استفد من الهندسة الحاصلة على براءة اختراع وأحدث حلول البرمجيات لتحسين تجربة الليزر تاغ.",
        },
      ];
    }
    return [
      {
        id: 1,
        icon: "/icons/technicalsupport.svg",
        alt: "Technical Support",
        title: "TECHNICAL SUPPORT",
        description: "Consultation and assistance 7 days a week",
        //   isActive: false,
      },
      {
        id: 2,
        icon: "/icons/businessdevelopment.svg",
        alt: "Business Development",
        title: "BUSINESS DEVELOPMENT",
        description:
          "A range of services for the construction and promotion of laser tag centers",
        //   isActive: false,
      },
      {
        id: 3,
        icon: "/icons/informationalsupport.svg",
        alt: "Informational Support",
        title: "INFORMATIONAL SUPPORT",
        description:
          "Access training materials, graphic layouts, and consultations to help you manage, market, and operate your business",
        //   isActive: true,
      },
      {
        id: 4,
        icon: "/icons/certifiedequipment.svg",
        alt: "Certified Equipment",
        title: "CERTIFIED EQUIPMENT",
        description:
          "Our systems meet the highest standards for safety and quality. We ensure safe use in the CIS and the European Union.",
        //   isActive: false,
      },
      {
        id: 5,
        icon: "/icons/servicecenternetwork.svg",
        alt: "Service Center Network",
        title: "SERVICE CENTER NETWORK",
        description:
          "We offer post-warranty service, replacement equipment, and timely repairs so the systems operate smoothly.",
        //   isActive: false,
      },
      {
        id: 6,
        icon: "/icons/advancedequipment.svg",
        alt: "Advanced Equipment",
        title: "ADVANCED EQUIPMENT",
        description:
          "Benefit from patented engineering and the latest software solutions for an enhanced laser tag experience.",
        //   isActive: false,
      },
    ];
  };

  // const servicesData = [
  //   {
  //     id: 1,
  //     icon: "/icons/technicalsupport.svg",
  //     alt: "Technical Support",
  //     title: "TECHNICAL SUPPORT",
  //     description: "Consultation and assistance 7 days a week",
  //     //   isActive: false,
  //   },
  //   {
  //     id: 2,
  //     icon: "/icons/businessdevelopment.svg",
  //     alt: "Business Development",
  //     title: "BUSINESS DEVELOPMENT",
  //     description:
  //       "A range of services for the construction and promotion of laser tag centers",
  //     //   isActive: false,
  //   },
  //   {
  //     id: 3,
  //     icon: "/icons/informationalsupport.svg",
  //     alt: "Informational Support",
  //     title: "INFORMATIONAL SUPPORT",
  //     description:
  //       "Access training materials, graphic layouts, and consultations to help you manage, market, and operate your business",
  //     //   isActive: true,
  //   },
  //   {
  //     id: 4,
  //     icon: "/icons/certifiedequipment.svg",
  //     alt: "Certified Equipment",
  //     title: "CERTIFIED EQUIPMENT",
  //     description:
  //       "Our systems meet the highest standards for safety and quality. We ensure safe use in the CIS and the European Union.",
  //     //   isActive: false,
  //   },
  //   {
  //     id: 5,
  //     icon: "/icons/servicecenternetwork.svg",
  //     alt: "Service Center Network",
  //     title: "SERVICE CENTER NETWORK",
  //     description:
  //       "We offer post-warranty service, replacement equipment, and timely repairs so the systems operate smoothly.",
  //     //   isActive: false,
  //   },
  //   {
  //     id: 6,
  //     icon: "/icons/advancedequipment.svg",
  //     alt: "Advanced Equipment",
  //     title: "ADVANCED EQUIPMENT",
  //     description:
  //       "Benefit from patented engineering and the latest software solutions for an enhanced laser tag experience.",
  //     //   isActive: false,
  //   },
  // ];

  const servicesData = getServiceData();

  return (
    <>
      <div
        // className={styles.ourServicesMainDiv}
        className={`${styles.ourServicesMainDiv} ${
          locale === "ar" ? styles.rtl : ""
        }`}
      >
        <div className={styles.ourServicesContainer}>
          <div className={styles.ourServicesSubDiv}>
            <h3 className={styles.ourServicesHeading}>
              {locale === "ar" ? "مجموعة خدماتنا " : "Our Comprehensive "}{" "}
              <span>{locale === "ar" ? "المتكاملة" : "Services"}</span>
            </h3>
            <div className={styles.ourServicesCardMainDiv}>
              {servicesData.map((service) => (
                <div key={service.id} className={styles.serviceCardClipPath}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <img src={service.icon} alt={service.alt} />
                    </div>
                    <div className={styles.serviceTextDiv}>
                      <h4 className={styles.serviceTitle}>{service.title}</h4>
                      <p className={styles.serviceDescription}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
