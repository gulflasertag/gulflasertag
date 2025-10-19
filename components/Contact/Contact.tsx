import React from "react";
import styles from "./Contact.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";

// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .max(800, "Message must be less than 800 characters")
    .required("Message is required"),
});

function Contact() {
  const { locale } = useRouter();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    let payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      message: values.message,
    };

    try {
      const response: any = await axios.post(
        `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/contactus`,
        payload
      );

      if (response) {
        toast.success("Form submitted successfully!", {
          duration: 4000,
        });

        resetForm();
      }
    } catch (error) {
      toast.error("Failed to submit the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`${styles.contactMain} ${locale === "ar" ? styles.rtl : ""}`}
    >
      <div className={styles.contactContainer}>
        <div className={styles.contactSub}>
          <div className={styles.headingDiv}>
            <h3>{locale === "ar" ? "نموذج الاتصال" : "Contact Form"}</h3>
            <p>
              {locale === "ar"
                ? "املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن."
                : "Fill out the form below, and we will get back to you as soon as possible."}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.formTopStroke}></div>
      <div className={styles.formMain}>
        <div className={styles.formContainer}>
          {/* <div className={styles.formOverlay}></div> */}

          <div className={styles.fornSub}>
            <div className={styles.form}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, touched, errors }) => (
                  <Form className={styles.contactForm}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.formLabel}>
                          {locale === "ar" ? "الاسم الأول" : "First Name"}
                        </label>

                        <div className={styles.formInputWrapper}>
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder={
                              locale === "ar"
                                ? "أدخل اسمك الأول"
                                : "Enter your first name"
                            }
                            className={`${styles.formInput} ${
                              touched.firstName && errors.firstName
                                ? styles.error
                                : ""
                            }`}
                          />
                        </div>
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.formLabel}>
                          {locale === "ar" ? "الاسم الأخير" : "Last Name"}
                        </label>
                        <div className={styles.formInputWrapper}>
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder={
                              locale === "ar"
                                ? "أدخل اسم عائلتك"
                                : "Enter your last name"
                            }
                            className={`${styles.formInput} ${
                              touched.lastName && errors.lastName
                                ? styles.error
                                : ""
                            }`}
                          />
                        </div>
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                          {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                        </label>
                        <div className={styles.formInputWrapper}>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder={
                              locale === "ar"
                                ? "أدخل بريدك الإلكتروني"
                                : "Enter your email"
                            }
                            className={`${styles.formInput} ${
                              touched.email && errors.email ? styles.error : ""
                            }`}
                          />
                        </div>
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label
                          htmlFor="phoneNumber"
                          className={styles.formLabel}
                        >
                          {locale === "ar" ? "رقم الهاتف" : "Phone Number"}
                        </label>
                        <div className={styles.formInputWrapper}>
                          <Field name="phoneNumber">
                            {({ field, form }: any) => (
                              <input
                                type="tel"
                                id="phoneNumber"
                                placeholder={
                                  locale === "ar"
                                    ? "أدخل رقم هاتفك"
                                    : "Enter your phone number"
                                }
                                className={`${styles.formInput} ${
                                  form.touched.phoneNumber &&
                                  form.errors.phoneNumber
                                    ? styles.error
                                    : ""
                                }`}
                                value={field.value || ""}
                                onChange={(e) => {
                                  // Only set value if it contains only digits
                                  const value = e.target.value.replace(
                                    /\D/g,
                                    ""
                                  );
                                  form.setFieldValue("phoneNumber", value);
                                }}
                                onBlur={field.onBlur}
                              />
                            )}
                          </Field>
                        </div>
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className={styles.errorMessage}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.formLabel}>
                        {locale === "ar" ? "الرسالة" : "Message"}
                      </label>
                      <div className={styles.textareaWrapper}>
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          placeholder={
                            locale === "ar"
                              ? "اكتب رسالتك هنا..."
                              : "Type your message here..."
                          }
                          className={`${styles.formTextarea}`}
                        />
                      </div>

                      <ErrorMessage
                        name="message"
                        component="div"
                        className={styles.errorMessage}
                      />
                    </div>

                    <div className={styles.readmoreBtnWrapper}>
                      <button
                        className={styles.readmoreBtn}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        <div
                          className={styles.readmoreBtnContent}
                          data-button-type="readmore"
                        >
                          <p>{locale === "ar" ? "إرسال" : "Submit"}</p>
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
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3.125 9.5H15.7475"
                              stroke="white"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          <div className={styles.gridItemImgWrapper}>
            <div className={styles.gridItemImg}>
              <img src="/images/contactus.webp" alt="contactus" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formBottomStroke}></div>

      <div className={styles.contctDetails}>
        <div className={styles.contactDetailsGrid}>
          <div className={styles.contactDetailsGridItem}>
            <div className={styles.gridItemsDetails}>
              <div className={styles.contactDetailHeading}>
                <h4>
                  {locale === "ar"
                    ? "تابعنا على وسائل التواصل الاجتماعي"
                    : "Follow Us in Social Media"}
                </h4>
              </div>
              <p className={styles.contactPara}>
                {locale === "ar"
                  ? "نحن مستعدون للتواصل معك!"
                  : "We are ready to connect with you!"}
              </p>

              <div className={styles.socials}>
                <div className={styles.socialIcon}>
                  <img src="/icons/contactyoutube.svg" alt="social" />
                </div>

                <div className={styles.socialIcon}>
                  <img src="/icons/contactfacebook.svg" alt="social" />
                </div>

                <div className={styles.socialIcon}>
                  <img src="/icons/contactinstagram.svg" alt="social" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactDetailsGridItem}>
            <div className={styles.headingIcon}>
              <img src="/icons/contactmail.svg" alt="contacticons" />
            </div>
            <div className={styles.gridItemsDetails}>
              <div className={styles.contactDetailHeading}>
                <h4>
                  {locale === "ar"
                    ? "هل لديك أي أسئلة؟"
                    : "Have Any Questions?"}
                </h4>
              </div>

              <p className={styles.contactPara}>
                <span>
                  {locale === "ar"
                    ? "ممثل مبيعات الخليج"
                    : "Gulf Sales Representative"}
                </span>
                <span>Mohammed Yussuf</span>
                <span>Mohammedyussuf@gulflasertag.net</span>
              </p>

              <p className={styles.contactPara}>
                <span>
                  {locale === "ar"
                    ? "ممثل تطوير الأعمال"
                    : "Business Development Representative"}
                </span>
                <span>Halim Behroz</span>
                <span>behroz@lasertag.net</span>
              </p>
            </div>
          </div>

          <div className={styles.contactDetailsGridItem}>
            <div className={styles.headingIcon}>
              <img src="/icons/contactcall.svg" alt="contacticons" />
            </div>
            <div className={styles.gridItemsDetails}>
              <div className={styles.contactDetailHeading}>
                <h4>
                  {locale === "ar"
                    ? "اتصل بنا أو أرسل رسالة عبر واتساب"
                    : "Call us or WhatsApp"}
                </h4>
              </div>

              <p className={styles.contactPara}>
                <span>
                  {locale === "ar"
                    ? "الإمارات العربية المتحدة:"
                    : "United Arab Emirates:"}
                </span>
                <span>+971588349291</span>
              </p>

              <p className={styles.contactPara}>
                <span>{locale === "ar" ? "إستونيا:" : "Estonia:"}</span>
                <span>+37258662265</span>
              </p>
            </div>
          </div>

          <div className={styles.contactDetailsGridItem}>
            <div className={styles.headingIcon}>
              <img src="/icons/contactlocation.svg" alt="contacticons" />
            </div>

            <div className={styles.gridItemsDetails}>
              <div className={styles.contactDetailHeading}>
                <h4>{locale === "ar" ? "الموقع" : "Location"}</h4>
              </div>

              <p className={styles.contactPara}>
                {locale === "ar"
                  ? "الإمارات العربية المتحدة"
                  : "United Arab Emirates"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
