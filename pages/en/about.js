import Link from 'next/link'
import {FaFacebookF, FaTwitter, FaYoutube} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri";
import {MdChat} from "react-icons/md";
import Layout from '/components/en/layout'


export default function about() {
    return (
        <Layout>
            <div class="language">
                <Link href="/about">
                    <a>
                        <MdChat/>
                        العربيــة
                    </a>
                </Link>
            </div>
            <section class="heroBanner aboutHeroBanner">
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-0"></div>

                        <div class="col-md-8 col-sm-8 col-12">
                            <h2>
                                <strong>About
                                </strong>
                                &nbsp;Us</h2>
                            <p class="secDescription">
                                “Gulf laser tag is the official representative of lasertag.net in United Arab Emirates and Kingdom of Saudi Arabia.


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


            <section class="airBunker">

                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="../img/airbunker2.png" alt="Airbunker"/>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <p class="subheading">
                                <p class="secDescription">Gulf laser tag facilitate and help business owners to get the best and latest laser tag equipment in the world.


                                </p>

                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section class="airBunker"
                style={
                    {paddingTop: 0}
            }>

                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <p class="subheading">
                                <p class="secDescription">We also help with design of the Arena and Business plan Our specialists can help you with package choice, staff training and custom clearance”

                                </p>
                            </p>

                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="../img/airbunker.jpeg" alt="Airbunker"/>
                        </div>
                    </div>

                </div>
            </section>

            <section class="preFooter"
                style={
                    {backgroundImage: "url('../img/sky.jpeg')"}
            }>

                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>

                <div class="container">
                    <h2 class="sectionHeading">Follow Us In Social Media</h2>
                    <p class="secDescription">We are ready to connect with you!</p>
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
