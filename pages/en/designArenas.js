import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '/components/en/layout'

export default function contact() {
    return (
        <Layout>
            <div class="language">
                <Link href="/designArenas">
                    <a>
                        <MdChat/>
                        العربيــة
                    </a>
                </Link>
            </div>
            <section class="heroBanner aboutHeroBanner"
                style={
                    {backgroundImage: "url('/img/img59.jpg')"}
            }>
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-0"></div>

                        <div class="col-md-8 col-sm-8 col-12">
                            <h2>
                                Designing of
                                <br/><strong>
                                    Arenas
                                </strong>
                            </h2>
                            <p class="secDescription"
                                style={
                                    {fontSize: "40px"}
                            }>
                                Coming Soon
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


        </Layout>
    )
}
