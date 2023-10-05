import Link from 'next/link'

import {AiOutlineSafety} from "react-icons/ai"
import {
    GiAerialSignal,
    GiCloudDownload,
    GiFullFolder,
    GiAk47U,
    GiAbstract002,
    GiAfterburn,
    GiAbstract092,
    GiDiscussion
} from "react-icons/gi";
import {MdChat} from "react-icons/md";
import Layout from '../components/ar/layout'

export default function Home() {

    return (
        <Layout>
            <div class="language rtl">
                <Link href="/en/outdoor">

                    <MdChat/>English
                </Link>
            </div>
            <section class="outdoorBanner rtl">
                <div class="outdoorBannerTop">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <img src="img/netronicLogo.jpg" width="100px" class="nortlimg"/>
                                <h2 class="sectionHeading">نظام ألعاب الليزر تاغ الخارجي</h2>
                                <h4 class="subheading">اللعبة بدأت للتو</h4>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="outdoorBannerBottom">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-sm-9 col-12">
                                {/* <img src="img/hero-img.jpg" /> */} </div>
                            <div class="col-md-3 col-sm-3 col-12">
                                <div class="outdoorBannerBottomItem">
                                    <div class="icon"><GiAerialSignal/></div>
                                    <hr/>
                                    <h5>معدات ألعاب ليزر تاغ متقدمة
                                    </h5>
                                </div>
                                <div class="outdoorBannerBottomItem">
                                    <div class="icon"><GiCloudDownload/></div>
                                    <hr/>
                                    <h5>نظام سوفت-وير مجاني</h5>
                                </div>
                                <div class="outdoorBannerBottomItem">
                                    <div class="icon"><GiFullFolder/></div>
                                    <hr/>
                                    <h5>مواد إرشادية عن كيفية بدء وإدارة الأعمال</h5>
                                </div>
                                <div class="outdoorBannerBottomItem">
                                    <div class="icon"><AiOutlineSafety/></div>
                                    <hr/>
                                    <h5>ضمان لمدة سنتين</h5>
                                </div>

                            </div>
                        </div>
                        <div class="shape shape-bottom" data-shape="triangle" data-negative="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section class="outdoorSec rtl">
                <div class="container">
                    <h2 class="sectionHeading">نظام ألعاب الليزر تاغ الخارجي</h2>
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">

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
                        <div class="col-md-6 col-sm-6 col-12">

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


                </div>

            </section>

        </Layout>
    );
}
