import Link from 'next/link'
import {FaFacebookF, FaTwitter, FaYoutube} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri";
import {MdChat} from "react-icons/md";
import Layout from '../components/ar/layout'

import 'aos/dist/aos.css';


export default function about() {
    return (
        <Layout>
            <div class="language rtl">
                <Link href="en/about">
                    <a>
                        <MdChat/>
                        English
                    </a>
                </Link>
            </div>
            <section class="heroBanner aboutHeroBanner rtl">
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-0"></div>

                        <div class="col-md-8 col-sm-8 col-12">
                            <h2>
                                <strong>حول
                                </strong>
                                &nbsp;نحن</h2>
                            <p class="secDescription">
                                “جلف ليزر تاغ هو الممثل الرسمي لموقع lasertag.net في الإمارات العربية المتحدة والمملكة العربية السعودية.
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

                        <div class="col-md-6 col-sm-6 col-12">
                            <p class="subheading">
                                <h2 class="sectionHeading"></h2>
                                <p class="secDescription">شركة Gulf Laser Tag تسهل وتساعد أصحاب الأعمال في الحصول على أفضل وأحدث معدات الليزر في العالم
                                </p>
                            </p>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="img/about1.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>


            <section class="airBunker rtl"
                style={
                    {paddingTop: 0}
            }>

                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="img/about2.jpg" alt=""/>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <p class="subheading">
                                <h2 class="sectionHeading"></h2>
                                <p class="secDescription">نحن نساعد أيضًا في تصميم الحلبة وخطة العمل يمكن لأخصائيينا مساعدتك في اختيار الحزمة وتدريب الموظفين والتخليص الجمركي "
                                </p>
                            </p>
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
    )
}
