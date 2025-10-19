import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./GetInTouch.module.scss";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";

// Validation schema
// const validationSchema = Yup.object({
//   firstName: Yup.string()
//     .min(2, "First name must be at least 2 characters")
//     .max(50, "First name must be less than 50 characters")
//     .required("First name is required"),
//   lastName: Yup.string()
//     .min(2, "Last name must be at least 2 characters")
//     .max(50, "Last name must be less than 50 characters")
//     .required("Last name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   phoneNumber: Yup.string()
//     .matches(/^\d+$/, "Phone number must contain only digits")
//     .min(10, "Phone number must be at least 10 digits")
//     .required("Phone number is required"),
//   message: Yup.string()
//     .max(800, "Message must be less than 800 characters")
//     .required("Message is required"),
// });

// function AboutGetInTouch() {
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   };

//   const handleSubmit = async (
//     values: any,
//     { setSubmitting, resetForm }: any
//   ) => {
//     let payload = {
//       firstName: values.firstName,
//       lastName: values.lastName,
//       email: values.email,
//       phoneNumber: values.phoneNumber,
//       message: values.message,
//     };

//     // try {
//     //   const response: any = await axios.post(
//     //     `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/contactus`,
//     //     payload
//     //   );

//     //   if (response) {
//     //     toast.success("Form submitted successfully!", {
//     //       duration: 4000,
//     //     });

//     //     resetForm();
//     //   }
//     // } catch (error) {
//     //   toast.error("Failed to submit the form.");
//     // } finally {
//     //   setSubmitting(false);
//     // }

//     toast.success("Form submitted successfully!", {
//       duration: 4000,
//     });

//     resetForm();
//   };

//   return (
//     <div className={styles.getInTouchMain}>
//       <div className={styles.getInTouchContainer}>
//         <div className={styles.getInTouchSub}>
//           <div className={styles.getInTouchContent}>
//             <div className={styles.headingDiv}>
//               <h3>
//                 get in touch <span>with us</span>
//               </h3>

//               <p>
//                 Have questions or want to get in touch? Our team is here to help
//                 you with anything you need. Fill out the form below, and we'll
//                 get back to you as soon as possible!
//               </p>
//             </div>
//             <div className={styles.contactInfo}>
//               <div className={styles.contactItem}>
//                 <div className={styles.contactIcon}>
//                   <img src="/icons/location.svg" alt="location" />
//                 </div>
//                 <div className={styles.contactDetails}>
//                   <p>United Arab Emirates</p>
//                 </div>
//               </div>

//               <div className={styles.contactItem}>
//                 <div className={styles.contactIcon}>
//                   <img src="/icons/call.svg" alt="location" />
//                 </div>
//                 <div className={styles.contactDetails}>
//                   <p>United Arab Emirates: +971588349291</p>
//                   <p>Estonia: +37258662265</p>
//                 </div>
//               </div>

//               <div className={styles.contactItem}>
//                 <div className={styles.contactIcon}>
//                   <img src="/icons/mail.svg" alt="mail" />
//                 </div>
//                 <div className={styles.contactDetails}>
//                   <p>Mohammed Yussuf : Mohammedyussuf@gulflasertag.net</p>
//                   <p>Halim Behroz: behroz@lasertag.net</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={styles.form}>
//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ isSubmitting, touched, errors }) => (
//                 <Form className={styles.contactForm}>
//                   <div className={styles.formRow}>
//                     <div className={styles.formGroup}>
//                       <label htmlFor="firstName" className={styles.formLabel}>
//                         First Name
//                       </label>
//                       <div className={styles.formInputWrapper}>
//                         <Field
//                           type="text"
//                           id="firstName"
//                           name="firstName"
//                           placeholder="Enter your first name"
//                           className={`${styles.formInput} ${
//                             touched.firstName && errors.firstName
//                               ? styles.error
//                               : ""
//                           }`}
//                         />
//                       </div>
//                       <ErrorMessage
//                         name="firstName"
//                         component="div"
//                         className={styles.errorMessage}
//                       />
//                     </div>

//                     <div className={styles.formGroup}>
//                       <label htmlFor="lastName" className={styles.formLabel}>
//                         Last Name
//                       </label>
//                       <div className={styles.formInputWrapper}>
//                         <Field
//                           type="text"
//                           id="lastName"
//                           name="lastName"
//                           placeholder="Enter your last name"
//                           className={`${styles.formInput} ${
//                             touched.lastName && errors.lastName
//                               ? styles.error
//                               : ""
//                           }`}
//                         />
//                       </div>
//                       <ErrorMessage
//                         name="lastName"
//                         component="div"
//                         className={styles.errorMessage}
//                       />
//                     </div>
//                   </div>

//                   <div className={styles.formRow}>
//                     <div className={styles.formGroup}>
//                       <label htmlFor="email" className={styles.formLabel}>
//                         Email
//                       </label>
//                       <div className={styles.formInputWrapper}>
//                         <Field
//                           type="email"
//                           id="email"
//                           name="email"
//                           placeholder="Enter your email"
//                           className={`${styles.formInput} ${
//                             touched.email && errors.email ? styles.error : ""
//                           }`}
//                         />
//                       </div>
//                       <ErrorMessage
//                         name="email"
//                         component="div"
//                         className={styles.errorMessage}
//                       />
//                     </div>

//                     <div className={styles.formGroup}>
//                       <label htmlFor="phoneNumber" className={styles.formLabel}>
//                         Phone Number
//                       </label>
//                       <div className={styles.formInputWrapper}>
//                         <Field name="phoneNumber">
//                           {({ field, form }: any) => (
//                             <input
//                               type="tel"
//                               id="phoneNumber"
//                               placeholder="Enter your number"
//                               className={`${styles.formInput} ${
//                                 form.touched.phoneNumber &&
//                                 form.errors.phoneNumber
//                                   ? styles.error
//                                   : ""
//                               }`}
//                               value={field.value || ""}
//                               onChange={(e) => {
//                                 // Only set value if it contains only digits
//                                 const value = e.target.value.replace(/\D/g, "");
//                                 form.setFieldValue("phoneNumber", value);
//                               }}
//                               onBlur={field.onBlur}
//                             />
//                           )}
//                         </Field>
//                       </div>
//                       <ErrorMessage
//                         name="phoneNumber"
//                         component="div"
//                         className={styles.errorMessage}
//                       />
//                     </div>
//                   </div>

//                   <div className={styles.formGroup}>
//                     <label htmlFor="message" className={styles.formLabel}>
//                       Message
//                     </label>
//                     <div className={styles.textareaWrapper}>
//                       <Field
//                         as="textarea"
//                         id="message"
//                         name="message"
//                         placeholder="Type your message here..."
//                         className={`${styles.formTextarea}`}
//                       />
//                     </div>

//                     <ErrorMessage
//                       name="message"
//                       component="div"
//                       className={styles.errorMessage}
//                     />
//                   </div>

//                   <div className={styles.readmoreBtnWrapper}>
//                     <button
//                       className={styles.readmoreBtn}
//                       type="submit"
//                       disabled={isSubmitting}
//                     >
//                       <div
//                         className={styles.readmoreBtnContent}
//                         data-button-type="readmore"
//                       >
//                         <p>Submit</p>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="19"
//                           height="19"
//                           viewBox="0 0 19 19"
//                           fill="none"
//                         >
//                           <path
//                             d="M11.3223 4.94751L15.8748 9.50001L11.3223 14.0525"
//                             stroke="white"
//                             stroke-miterlimit="10"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                           />
//                           <path
//                             d="M3.125 9.5H15.7475"
//                             stroke="white"
//                             stroke-miterlimit="10"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                           />
//                         </svg>
//                       </div>
//                     </button>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//       {/* <div className={styles.PageIntroStroke}></div> */}
//     </div>
//   );
// }
function AboutGetInTouch() {
  const { locale } = useRouter();

  // Translations
  const t = {
    en: {
      heading: "get in touch",
      subHeading: "with us",
      description:
        "Have questions or want to get in touch? Our team is here to help you with anything you need. Fill out the form below, and we'll get back to you as soon as possible!",
      location: "United Arab Emirates",
      callUAE: "United Arab Emirates: +971588349291",
      callEstonia: "Estonia: +37258662265",
      email1: "Mohammed Yussuf : Mohammedyussuf@gulflasertag.net",
      email2: "Halim Behroz: behroz@lasertag.net",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phoneNumber: "Phone Number",
      message: "Message",
      submit: "Submit",
    },
    ar: {
      heading: "تواصل",
      subHeading: "معنا",
      description:
        "هل لديك أسئلة أو ترغب في التواصل؟ فريقنا هنا لمساعدتك في كل ما تحتاجه. املأ النموذج أدناه وسنعود إليك في أقرب وقت ممكن!",
      location: "الإمارات العربية المتحدة",
      callUAE: "الإمارات العربية المتحدة: +971588349291",
      callEstonia: "إستونيا: +37258662265",
      email1: "محمد يوسف : Mohammedyussuf@gulflasertag.net",
      email2: "حليم بهروز: behroz@lasertag.net",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phoneNumber: "رقم الهاتف",
      message: "رسالة",
      submit: "إرسال",
    },
  };

  const text = locale === "ar" ? t.ar : t.en;

  // Validation schema (kept same for both languages)
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
      className={`${styles.getInTouchMain} ${
        locale === "ar" ? styles.rtl : ""
      }`}
    >
      <div className={styles.getInTouchContainer}>
        <div className={styles.getInTouchSub}>
          <div className={styles.getInTouchContent}>
            <div className={styles.headingDiv}>
              <h3>
                {text.heading} <span>{text.subHeading}</span>
              </h3>
              <p>{text.description}</p>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <img src="/icons/location.svg" alt="location" />
                </div>
                <div className={styles.contactDetails}>
                  <p>{text.location}</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <img src="/icons/call.svg" alt="call" />
                </div>
                <div className={styles.contactDetails}>
                  <p>{text.callUAE}</p>
                  <p>{text.callEstonia}</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <img src="/icons/mail.svg" alt="mail" />
                </div>
                <div className={styles.contactDetails}>
                  <p>{text.email1}</p>
                  <p>{text.email2}</p>
                </div>
              </div>
            </div>
          </div>

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
                        {text.firstName}
                      </label>
                      <div className={styles.formInputWrapper}>
                        <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder={text.firstName}
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
                        {text.lastName}
                      </label>
                      <div className={styles.formInputWrapper}>
                        <Field
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder={text.lastName}
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
                        {text.email}
                      </label>
                      <div className={styles.formInputWrapper}>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder={text.email}
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
                      <label htmlFor="phoneNumber" className={styles.formLabel}>
                        {text.phoneNumber}
                      </label>
                      <div className={styles.formInputWrapper}>
                        <Field name="phoneNumber">
                          {({ field, form }: any) => (
                            <input
                              type="tel"
                              id="phoneNumber"
                              placeholder={text.phoneNumber}
                              className={`${styles.formInput} ${
                                form.touched.phoneNumber &&
                                form.errors.phoneNumber
                                  ? styles.error
                                  : ""
                              }`}
                              value={field.value || ""}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "");
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
                      {text.message}
                    </label>
                    <div className={styles.textareaWrapper}>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder={text.message}
                        className={styles.formTextarea}
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
                        <p>{text.submit}</p>
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
                      </div>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutGetInTouch;
