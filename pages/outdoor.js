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
                    <a>
                        <MdChat/>
                        English
                    </a>
                </Link>
            </div>
            <section class="outdoorBanner rtl">
                <div class="outdoorBannerTop">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <img src="img/netronicLogo.jpg" width="100px"/>
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
                    <p class="secDescription">تصميم طموح يلهم العمل. لعبة آمنة لا مكان فيها للعدوان. أوضاع فريدة تجعل اللاعبين أبطالًا خارقين.
                    </p>
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/softwares">
                                    <a>
                                        <div class="row">

                                            <div class="col-md-10">
                                                <h4>البرمجيات</h4>
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
                                                <h4>تقديم خدمات</h4>
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
                        <div class="col-md-6 col-sm-6 col-12">

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/taggers">
                                    <a>
                                        <div class="row">

                                            <div class="col-md-10">
                                                <h4>تاجرز</h4>
                                                <p>الأساسية والقياسية والمتميزة والتكتيكية برو فالكون F1 و F2 و Glock 19 و Colt M4 و Ak-47.</p>
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
                                                <h4>
                                                    إضافية مع تاجرز أجهزة</h4>
                                                <p>عقال نيترونيك أسود / بكسل, سترة نترونيك أسود / بكسل, صدمة الفرقة
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
                                                <h4>أجهزة سيناريو اللعبة</h4>
                                                <p>Sirius ، تعدد ، صندوق الهيمنة SMART ، قنبلة ليزر ، مشهد نقطة حمراء ، طرف واقي ، حقيبة شحن 6x ، شاحن «Vortex» ، وحدة تحكم عن بعد ذكية</p>
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


                </div>

            </section>

        </Layout>
    )
}
