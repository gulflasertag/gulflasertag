import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/ar/layout'

import {
    GiAk47U,
    GiAbstract002,
    GiAfterburn,
    GiAbstract092,
    GiDiscussion
} from "react-icons/gi";
import {FaVideo, FaGamepad} from "react-icons/fa"
import {MdChat} from "react-icons/md";


import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';


export default function Home() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <Layout>
            <div class="language rtl">
                <Link href="/en/">

                    <MdChat/>English
                </Link>
            </div>
            <section class="heroBanner"
                style={
                    {
                        "background": "URL('/img/banner-original-flip.jpg')",
                        "backgroundPosition": "center"
                    }
            }>

                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-sm-6 col-12 rtl">
                            <h2>
                                <strong>ليزر تاج الخليج
                                </strong>
                            </h2>
                            <p class="secDescription"
                                style={
                                    {"margin-bottom": "15px"}
                            }>
                                “مبتكرو ليزر تاج يوفر دعمًا لأعمالكم على المدى الطويل في كل المراحل بدءًا من الاستشارات بشأن اختيار مجموعات الألعاب إلى فتح مراكز الالعاب.”
                            </p>
                            <br/></div>
                        <div class="col-md-6 col-sm-6 col-12">
                            {/* <img src="img/hero-img.jpg" /> */} </div>

                    </div>
                </div>
                <div class="shape shape-bottom" data-shape="triangle" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
            </section>
            <section class="outdoorSec rtl">
                <div class="container">
                    <h2 class="sectionHeading">نظام ألعاب الليزر تاغ الخارجي</h2>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/softwares">

                                    <div class="row">

                                        <div class="col-md-10">
                                            <h4>البرمجيات</h4>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="icon"><GiAbstract092/></div>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/#services">

                                    <div class="row">

                                        <div class="col-md-10">
                                            <h4>تقديم خدمات</h4>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="icon"><GiDiscussion/></div>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="/img/laser.png" alt="Outdoor Laser Tag System"/>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/taggers">

                                    <div class="row">

                                        <div class="col-md-10">
                                            <h4>البنادق</h4>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="icon"><GiAk47U/></div>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/additional-devices-with-taggers">

                                    <div class="row">

                                        <div class="col-md-10">
                                            <h4>
                                                أجهزة إضافية مع البنادق</h4>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="icon"><GiAbstract002/></div>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/game-scenario-devices">

                                    <div class="row">

                                        <div class="col-md-10">
                                            <h4>أجهزة سيناريو اللعبة</h4>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="icon"><GiAfterburn/></div>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                        </div>
                    </div>
                    <div class="text-center">
                        <a class="btn btn-primary btnMain" href="/outdoor">عرض المزيد</a>
                    </div>
                </div>
            </section>

            <section class="indoorSec rtl">
                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
                <div class="container">

                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="img/galaxy-kit.png" alt="Indoor Galaxy Eclipse"
                                style={
                                    {"transform": "none"}
                                }/>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <h2 class="sectionHeading">
                                غالاكسي إكليبس الداخلي</h2>
                            <p class="secDescription">تصميم يتسم بالحماس ويشجع اللاعبين. 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                لعبة آمنة لا مكان فيها للعدائية.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                طرق لعب فريدة تصنع أبطالًا خارقين.
                            </p>

                            <hr/>
                            <div class="indoorSec_item">
                                <Link href="/indoor/#video">

                                    <div class="row">

                                        <div class="col-md-10">
                                            <h4>“كيف ألعب؟</h4>
                                            <p>التعليمات: كيف تلعب ليزر تاج الداخلي؟”</p>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="icon"><FaVideo/></div>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                            <div class="indoorSec_item">
                                <Link href="/indoor/game-scenario">

                                    <div class="row">
                                        <div class="col-md-10">
                                            <h4>سيناريو اللعبة</h4>
                                            <p>سيريوس ,ملتي-ستایشن ,صندوق الهيمنة الذكي</p>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="icon"><FaGamepad/></div>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                            <br/>
                            <br/>
                            <Link href="/indoor" class="btn btn-primary btnMain btnMainWhite">
                                عرض المزيد
                            </Link>
                        </div>

                    </div>
                </div>
                <div class="shape shape-bottom" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
            </section>

            <section class="airBunker rtl">

                <div class="container">
                    <h2 class="sectionHeading">المخابئ الهوائية</h2>
                    <p class="subheading">بينتبول، ليزر تاج، ألعاب الرماية،
                        <br/>مسدسات نيرف، سباق الطائرات الآلية</p>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/airbunker6.png" alt="Airbunker"/>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/airbunker2.png" alt="Airbunker"/>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/airbunker.jpeg" alt="Airbunker"/>
                        </div>
                    </div>

                    <Link href="/airbunker" class="btn btn-primary btnMain">
                        اقرأ أكثر
                    </Link>
                </div>
            </section>
            <section class="indoorSec rtl">
                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
                <div class="container">

                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="/img/logo-mars.png" class="nortlimg"/>
                        </div>

                        <div class="col-md-6 col-sm-6 col-12">
                            {/* <img src="/img/logo-mars.png" class="nortlimg"
                                style={
                                    {maxWidth: "100px"}
                            }></img> */}
                            <br/>
                            <br/>
                            <h2 class="mars_section_title">
                                <span class="mars_color">واقع افتراضى</span>&nbsp; جذاب يتخطى الحدود</h2>
                            <p class="secDescription"
                                style={
                                    {fontSize: "25px"}
                            }>
                                كل ما تحتاج ‏إليه ‏بندقية و سماعة الراس
                            </p>


                            <br/>
                            <br/>
                            <br/>
                            <Link href="/mars" class="btn btn-primary btnMain btnMainWhite">
                                اقرأ أكثر
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div class="shape shape-bottom" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div> */} </section>

            <section class="preFooter rtl" id="services">
                {/* <div class="background-overlay"></div> */}


                <div class="container">
                    <p class="secDescription">تقديم خدمات</p>

                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>دعم المعلومات</h5>
                                <p>نوفر مواد تدريبية وتصاميم رسومية واستشارات
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>فرص مساعدة تطوير الأعمال</h5>
                                <p>نقدم مجموعة من الخدمات لمساعدة بناء وتعزيز مراكز ألعاب الليزر تاغ
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>الدعم الفني</h5>
                                <p>نوفر فرص للاستشارة ونقدم المساعدة 7 أيام في الأسبوع
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>معدات متطورة</h5>
                                <p>مبنية على حلول هندسية وبرامج مبتكرة ومسجلة</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>شبكة مركز الخدمة
                                </h5>
                                <p>نوفر خدمات ما بعد الضمان. ونقوم باستبدال المعدات أثناء الصيانة
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>معداتنا معتمدة</h5>
                                <p>يمكن استخدام معداتنا بشكل آمن وفقًا لرابطة الدول المستقلة والاتحاد الأوروبي
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="shape shape-bottom" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
            </section>
        </Layout>
    );
}
