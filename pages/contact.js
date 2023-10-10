import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '../components/ar/layout'
//emailjs.send("service_tlvyh9c","template_u965sre");
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaLocationArrow
} from "react-icons/fa"

import {RiInstagramFill} from "react-icons/ri";

import emailjs from 'emailjs-com';


export default function contact() {


    function onSubmitForm(values) {
        values.preventDefault();
        //emailjs.sendForm('service_9unfc3q', 'template_5rikh2d', values.target, 'a-1OEpzmL8klM1UFh').then((result) => {
        emailjs.sendForm('service_9unfc3q', 'template_5rikh2d', values.target, 'a-1OEpzmL8klM1UFh').then((result) => {
            console.log(result.text);
            const currentDiv = document.getElementById("formMsg");
            currentDiv.innerHTML = "<p style='color:green'>Congraz ! Your Message has been sent Successfully</p>";

        }, (error) => {
            console.log(error.text);
            const currentDiv = document.getElementById("formMsg");
            currentDiv.innerHTML = "<p style='color:red'>Sorry! Your message was not sent. please try again later</p>";
        });
        values.target.reset();
    }

    return (
        <Layout>

            <div class="language rtl">
                <Link href="en/contact">

                    <MdChat/>English
                </Link>
            </div>
            <section class="heroBanner aboutHeroBanner rtl"
                style={
                    {backgroundImage: "url('/img/droneview.jpg')"}
            }>
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-0"></div>

                        <div class="col-md-8 col-sm-8 col-12">
                            <h2>
                                <strong>ابقى على تواصل
                                </strong>
                            </h2>
                            <p class="secDescription">
                                كل شيء يبدأ من مرحبا
                            </p>

                        </div>
                        <div class="col-md-2 col-sm-2 col-0"></div>


                    </div>
                </div>
                <div class="shape shape-bottom" data-shape="triangle" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
            </section>


            <section class="airBunker rtl">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-12">

                            <form class="contactForm" name="contactForm"
                                onSubmit={onSubmitForm}>


                                <div class="formGroup rtl">
                                    <label>الاسم بالكامل</label>
                                    <input required name="fullName" class="inputField form-control"/>
                                </div>

                                <div class="formGroup rtl">
                                    <label>
                                        بريدك الالكتروني
                                    </label>
                                    <input required type='email' name="email" class="inputField form-control"/>
                                </div>

                                <div class="formGroup rtl">
                                    <label>
                                        رقم الهاتف
                                    </label>
                                    <input required type='number' name="phone" class="inputField form-control"/>
                                </div>

                                <div class="formGroup rtl">
                                    <label>رسالتك</label>
                                    <textarea name="message" class="inputField form-control" required></textarea>
                                </div>
                                <input type='submit' class="btn btn-primary btnMain"/>
                            </form>
                            <div id="formMsg"></div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="contactInfo rtl">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="icon"><FaLocationArrow/></div>
                            <h3>موقع</h3>
                            <p>الإمارات العربية المتحدة</p>
                        </div>
                        <div class="col-md-4">
                            <div class="icon"><FaPhone/></div>
                            <h3>
                                اتصل بنا او الواتس اب
                            </h3>

                            <p>
                                <b>الإمارات العربية المتحدة:</b><br/>
                                +971558349291
                                <br/>
                                <br/>
                                <b>استونیا:</b>
                                <br/>+37258662265
                            </p>
                        </div>

                        <div class="col-md-4">
                            <div class="icon"><FaEnvelope/></div>
                            <h3>
                                لديك أي أسئلة؟ ​
                            </h3>
                            <p>
                                <b>مندوب مبيعات الخليج</b><br/>
                                محمد یوسف
                                <br/>Mohammedyussuf@gulflasertag.net
                            </p>
                            <br/>
                            <p>
                                <b>ممثل فریق تطوير الأعمال</b><br/>
                                بيهروز حاليم
                                <br/>behroz@lasertag.net</p>
                        </div>
                    </div>
                </div>
            </section>


            <section class="preFooter"
                style={
                    {backgroundImage: "url('img/sky.jpeg')"}
            }>

                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>

                <div class="container">
                    <h2 class="sectionHeading">تابعنا في وسائل التواصل الاجتماعي</h2>
                    <p class="secDescription">نحن على استعداد للتواصل معك!</p>
                    <ul class="socialIcons">
                        <li>
                            <a href="https://www.facebook.com/gulf.lasertag/" target="_blank"><FaFacebookF/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/gulflasertag/" target="_blank"><RiInstagramFill/></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCvKscjsK_AVhpQyiRZrezVg" target="_blank"><FaYoutube/></a>
                        </li>

                    </ul>


                </div>
                <div class="background-overlay"></div>

            </section>
        </Layout>
    );
}
