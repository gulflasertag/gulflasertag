import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/en/layout'

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
import {FaVideo, FaGamepad} from "react-icons/fa"
export default function Home() {

    return (
        <Layout>
            <div class="language">
                <Link href="/outdoor">

                    <MdChat/>العربيــة
                </Link>
            </div>
            <section class="outdoorBanner">
                <div class="outdoorBannerTop">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <img src="../img/netronicLogo.jpg" width="100px"/>
                                <h2 class="sectionHeading">Outdoor
                                    <br/>laser tag system</h2>
                                <h4 class="subheading">THE GAME IS JUST BEGINNING</h4>

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
                                    <h5>Advanced laser tag equipment</h5>
                                </div>
                                <div class="outdoorBannerBottomItem">
                                    <div class="icon"><GiCloudDownload/></div>
                                    <hr/>
                                    <h5>Free software</h5>
                                </div>
                                <div class="outdoorBannerBottomItem">
                                    <div class="icon"><GiFullFolder/></div>
                                    <hr/>
                                    <h5>Materials on starting and running a business</h5>
                                </div>
                                <div class="outdoorBannerBottomItem">
                                    <div class="icon"><AiOutlineSafety/></div>
                                    <hr/>
                                    <h5>A 2 year warranty</h5>
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

            <section class="outdoorSec">
                <div class="container">
                    <h4 class="subheading">THE GAME IS JUST BEGINNING</h4>
                    <h2 class="sectionHeading">Outdoor Laser Tag System</h2>
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">

                            <div class="outdoorSec_item">
                                <Link href="/en/outdoor/taggers">

                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="icon"><GiAk47U/></div>
                                        </div>
                                        <div class="col-md-10">
                                            <h4>TAGGERS</h4>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/en/outdoor/additional-devices-with-taggers">

                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="icon"><GiAbstract002/></div>
                                        </div>
                                        <div class="col-md-10">
                                            <h4>ADDITIONAL DEVICES WITH TAGGERS</h4>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/en/outdoor/game-scenario-devices">

                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="icon"><GiAfterburn/></div>
                                        </div>
                                        <div class="col-md-10">
                                            <h4>GAME SCENARIO DEVICES</h4>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                        </div>

                        <div class="col-md-6 col-sm-6 col-12">

                            <div class="outdoorSec_item">
                                <Link href="/en/outdoor/softwares">

                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="icon"><GiAbstract092/></div>
                                        </div>
                                        <div class="col-md-10">
                                            <h4>SOFTWARES</h4>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/en/#services">

                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="icon"><GiDiscussion/></div>
                                        </div>
                                        <div class="col-md-10">
                                            <h4>SERVICES PROVIDED</h4>
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
