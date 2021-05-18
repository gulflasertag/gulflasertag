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
                    <a>
                        <MdChat/>
                        English

                    </a>
                </Link>
            </div>
            <section class="heroBanner">

                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            {/* <img src="img/hero-img.jpg" /> */} </div>
                        <div class="col-md-6 col-sm-6 col-12 rtl">
                            <h2>
                                <strong>الخليج
                                </strong>
                                &nbsp;علامة ليزر</h2>
                            <p class="secDescription"
                                style={
                                    {"margin-bottom": "15px"}
                            }>
                                شركة Gulf Laser Tag تسهل وتساعد أصحاب الأعمال في الحصول على أفضل وأحدث معدات الليزر في العالم
                            </p>
                            <p>
                                نحن نساعد أيضًا في تصميم الساحة وخطة العمل يمكن لأخصائيينا مساعدتك في اختيار الحزمة وتدريب الموظفين والتخليص الجمركي
                            </p>
                        </div>

                    </div>
                </div>
                <div class="shape shape-bottom" data-shape="triangle" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
            </section>
            <section class="outdoorSec rtl" data-aos="fade-up" data-aos-delay="50" data-aos-once="false">
                <div class="container">
                    <h4 class="subheading">اللعبة بدأت للتو</h4>
                    <h2 class="sectionHeading">نظام ألعاب الليزر تاغ الخارجي</h2>
                    <p class="secDescription">تصميم طموح يلهم العمل. لعبة آمنة لا مكان فيها للعدوان. أوضاع فريدة تجعل اللاعبين أبطالًا خارقين.
                    </p>
                    <div class="row">


                        <div class="col-md-4 col-sm-4 col-12">

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/softwares">
                                    <a>
                                        <div class="row">

                                            <div class="col-md-10">
                                                <h4>البرامج</h4>
                                                <p>راوتر واي فاي ، نظام مكرر ، أندرويد بوكس ​​، باور بانك ، برمجيات مجانية
                                                </p>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="icon"><GiAbstract092/></div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/#services">
                                    <a>
                                        <div class="row">

                                            <div class="col-md-10">
                                                <h4>تقديم خدمات
                                                </h4>
                                                <p>الدعم الفني ، المساعدة في تطوير الأعمال ، الدعم المعلوماتي ، المعدات المعتمدة ، شبكة مركز الخدمة ، المعدات المتقدمة
                                                </p>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="icon"><GiDiscussion/></div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/laser.png" alt="Outdoor Laser Tag System"/>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/taggers">
                                    <a>
                                        <div class="row">

                                            <div class="col-md-10">
                                                <h4>TAGGERS</h4>
                                                <p>الأساسية والقياسية والمتميزة والتكتيكية Pro Falcon F1 و F2 و Glock 19 و Colt M4 و Ak-47.
                                                </p>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="icon"><GiAk47U/></div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/additional-devices-with-taggers">
                                    <a>
                                        <div class="row">

                                            <div class="col-md-10">
                                                <h4>أجهزة إضافية مع TAGGERS
                                                </h4>
                                                <p>عقال Netronic Black / Pixel ، Vest Netronic Black / Pixel ، حزام الصدمات
                                                </p>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="icon"><GiAbstract002/></div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/game-scenario-devices">
                                    <a>
                                        <div class="row">

                                            <div class="col-md-10">
                                                <h4>أجهزة سيناريو اللعبة
                                                </h4>
                                                <p>Sirius ، Multistation ، SMART Domination Box ، قنبلة ليزر ، مشهد نقطة حمراء ، طرف واقي ، حقيبة شحن 6x ، شاحن «Vortex» ، وحدة تحكم عن بعد ذكية
                                                </p>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="icon"><GiAfterburn/></div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div class="text-center">
                        <Link href="/outdoor">
                            <a class="btn btn-primary btnMain">عرض المزيد
                            </a>
                        </Link>
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
                            <h2 class="sectionHeading">غالاكسي إكليبس</h2>
                            <p class="secDescription">الدعم الفني ، المساعدة في تطوير الأعمال ، الدعم المعلوماتي ، المعدات المعتمدة ، شبكة مركز الخدمة ، المعدات المتقدمة
                            </p>

                            <hr/>
                            <div class="indoorSec_item">
                                <Link href="/indoor/#video">
                                    <a>
                                        <div class="row">

                                            <div class="col-md-10">
                                                <h4>كيف ألعب</h4>
                                                <p>التعليمات: كيف تلعب بطاقة الليزر في الأماكن المغلقة؟ موجز فيديو بالليزر بدقة 4K</p>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="icon"><FaVideo/></div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div class="indoorSec_item">
                                <Link href="/indoor/game-scenario">
                                    <a>
                                        <div class="row">
                                            <div class="col-md-10">
                                                <h4>سيناريو اللعبة</h4>
                                                <p>سيريوس ، التعدد ، صندوق الهيمنة الذكي</p>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="icon"><FaGamepad/></div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <br/>
                            <br/>
                            <Link href="/indoor">
                                <a class="btn btn-primary btnMain btnMainWhite">عرض المزيد</a>
                            </Link>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="img/galaxy-kit.png" alt="Indoor Galaxy Eclipse"/>
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
                    <h2 class="sectionHeading">المخابئ الجوية</h2>
                    <p class="subheading">بينت بول ، ليزر تاج ، آرتشريتاج ونيرف درون ريسينغ.</p>
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

                    <Link href="/airbunker">
                        <a class="btn btn-primary btnMain">اقرأ أكثر</a>
                    </Link>
                </div>
            </section>

            <section class="preFooter rtl" id="services">
                {/* <div class="background-overlay"></div> */}
                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>

                <div class="container">
                    <p class="secDescription">تقديم خدمات</p>
                    <h2 class="sectionHeading">أكثر من مجرد معدات وسم الليزر</h2>

                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>دعم فني</h5>
                                <p>استشارة ومساعدة 7 أيام في الأسبوع</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>المساعدة في تطوير الأعمال</h5>
                                <p>مجموعة من الخدمات لبناء وتعزيز مراكز العلامات بالليزر</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>الدعم المعلوماتي</h5>
                                <p>مواد تدريبية ، تخطيطات بيانية ، استشارات</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>معدات معتمدة</h5>
                                <p>الاستخدام الآمن في رابطة الدول المستقلة والاتحاد الأوروبي</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>شبكة مركز الخدمة</h5>
                                <p>خدمة ما بعد الضمان. استبدال المعدات أثناء الإصلاح</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>معدات متطورة</h5>
                                <p>حلول هندسية وبرمجية حاصلة على براءة اختراع</p>
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
    )
}
