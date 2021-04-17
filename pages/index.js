import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import {
    GiAk47U,
    GiAbstract002,
    GiAfterburn,
    GiAbstract092,
    GiDiscussion
} from "react-icons/gi";
import {FaVideo, FaGamepad} from "react-icons/fa"

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';


export default function Home() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <>
            <section class="heroBanner">

                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            {/* <img src="img/hero-img.jpg" /> */} </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <h2>
                                <strong>Gulf
                                </strong>
                                &nbsp;LaserTag</h2>
                            <p class="secDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Praesent feugiat eleifend nisi quis scelerisque.
                            </p>
                            <a class="btn btn-primary btnMain">Click here</a>
                        </div>

                    </div>
                </div>
                <div class="shape shape-bottom" data-shape="triangle" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
            </section>
            <section class="outdoorSec" data-aos="fade-up" data-aos-delay="50" data-aos-once="false">
                <div class="container">
                    <h4 class="subheading">THE GAME IS JUST BEGINNING</h4>
                    <h2 class="sectionHeading">Outdoor Laser Tag System</h2>
                    <p class="secDescription">An ambitious design that inspires action. A safe game in which there is no place for aggression. Unique modes that make players superheroes.</p>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/taggers">
                                    <a>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="icon"><GiAk47U/></div>
                                            </div>
                                            <div class="col-md-10">
                                                <h4>TAGGERS</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/additional-devices-with-taggers">
                                    <a>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="icon"><GiAbstract002/></div>
                                            </div>
                                            <div class="col-md-10">
                                                <h4>ADDITIONAL DEVICES WITH TAGGERS</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/outdoor/game-scenario-devices">
                                    <a>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="icon"><GiAfterburn/></div>
                                            </div>
                                            <div class="col-md-10">
                                                <h4>GAME SCENARIO DEVICES</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
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
                                <Link href="/outdoor/softwares">
                                    <a>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="icon"><GiAbstract092/></div>
                                            </div>
                                            <div class="col-md-10">
                                                <h4>SOFTWARES</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div class="outdoorSec_item">
                                <Link href="/#services">
                                    <a>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="icon"><GiDiscussion/></div>
                                            </div>
                                            <div class="col-md-10">
                                                <h4>SERVICES PROVIDED</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div class="text-center">
                        <a href="#" class="btn btn-primary btnMain">See All Products</a>
                    </div>

                </div>

            </section>

            <section class="indoorSec">
                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>
                <div class="container">

                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <h2 class="sectionHeading">Indoor Galaxy Eclipse</h2>
                            <p class="secDescription">An ambitious design that inspires action. A safe game in which there is no place for aggression. 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Unique modes that make players superheroes.</p>
                            <hr/>
                            <div class="indoorSec_item">
                                <div class="row">
                                    <div class="col-md-2">
                                        <div class="icon"><FaVideo/></div>
                                    </div>
                                    <div class="col-md-10">
                                        <h4>How To Play</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="indoorSec_item">
                                <div class="row">
                                    <div class="col-md-2">
                                        <div class="icon"><FaGamepad/></div>
                                    </div>
                                    <div class="col-md-10">
                                        <h4>Game Scenario</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                                    </div>
                                </div>
                            </div>

                            <a href="#" class="btn btn-primary btnMain btnMainWhite">See All Products</a>
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

            <section class="airBunker">

                <div class="container">
                    <h2 class="sectionHeading">Air Bunkers</h2>
                    <p class="subheading">Paintball Laser tag Archeritag Nerf Drone racing</p>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/airbunker.jpeg" alt="Airbunker"/>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/airbunker.jpeg" alt="Airbunker"/>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <img src="img/airbunker.jpeg" alt="Airbunker"/>
                        </div>
                    </div>

                    <a href="#" class="btn btn-primary btnMain">See All Products</a>
                </div>
            </section>

            <section class="preFooter" id="services">
                {/* <div class="background-overlay"></div> */}
                <div class="shape shape-top" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                    </svg>
                </div>

                <div class="container">
                    <p class="secDescription">SERVICES PROVIDED</p>
                    <h2 class="sectionHeading">More than just laser tag equipment</h2>

                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>Technical support</h5>
                                <p>Consultation and assistance 7 days a week</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>Business Development Assistance</h5>
                                <p>A range of services for the construction and promotion of laser tag centers</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>Informational support</h5>
                                <p>Training materials, graphic layouts, consultations</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>Certified Equipment</h5>
                                <p>Safe use in the CIS and the European Union</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>Service Center Network</h5>
                                <p>Post warranty service. Replacement equipment during repair</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-12">
                            <div class="preFooterItem">
                                <h5>Advanced equipment</h5>
                                <p>Patented engineering and software solutions</p>
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
        </>
    )
}
