import Link from 'next/link'
import { MdChat } from "react-icons/md";
import Layout from '/components/en/layout'

export default function contact() {
    return (
        <Layout>
            <div class="language">
                <Link href="/designArenas">

                    <MdChat />العربيــة
                </Link>
            </div>
            <section class="heroBanner aboutHeroBanner"
                style={
                    { backgroundImage: "url('/img/img59.jpg')" }
                }>
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-0"></div>

                        <div class="col-md-8 col-sm-8 col-12">
                            <h2>
                                Designing of
                                <br /><strong>
                                    Arenas
                                </strong>
                            </h2>


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
            <section>
                <div class="container">
                    <div class="arena_img_box">
                        <img src="/img/arena/arena-1.jpg" />
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena/arena-2.jpg" />
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena/arena-3.jpg" />
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena/arena-4.jpg" />
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena/arena-5.jpg" />
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena/arena-6.jpg" />
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena/arena-7.jpg" />
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena/arena-8.jpg" />
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena/arena-9.jpg" />
                    </div>
                    {/*<div class="arena_img_box">
                        <img src="/img/arena2.jpeg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena3.jpeg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/arena4.jpeg"/>
                    </div> */}
                </div>
                <div class="video" id="video">
                    <h2>
                        Arenas VIDEO 1
                    </h2>
                    <video controls style={{ width: '500px', height: '500px' }}>
                        <source src="/img/video/VIDEO-1.mp4" />
                    </video>
                </div>
                <div class="video" id="video">
                    <h2>
                    Arenas VIDEO 2
                    </h2>
                    <video controls style={{ width: '500px', height: '500px' }}>
                        <source src="/img/video/VIDEO-2.mp4" />
                    </video>
                </div>
            </section>


        </Layout>
    );
}
