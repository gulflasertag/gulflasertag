import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import {FaFacebookF, FaTwitter, FaYoutube} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri";
import {MdChat} from "react-icons/md";


import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';


export default function about() {
    return (
        <>
            <div class="language">
                <Link href="#">
                    <a>
                        <MdChat/>
                        English
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Praesent feugiat eleifend nisi quis scelerisque.
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
                            <img src="img/airbunker2.png" alt="Airbunker"/>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <p class="subheading">
                                <h2 class="sectionHeading">Our Passion</h2>
                                <p class="secDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Praesent feugiat eleifend nisi quis scelerisque. Ut elit tellus, luctus nec ullamcorper mattis.
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
                                <h2 class="sectionHeading">Make It Different</h2>
                                <p class="secDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Praesent feugiat eleifend nisi quis scelerisque. Ut elit tellus, luctus nec ullamcorper mattis.
                                </p>
                            </p>

                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <img src="img/airbunker.jpeg" alt="Airbunker"/>
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
                    <h2 class="sectionHeading">Follow Us In Social Media</h2>
                    <p class="secDescription">We are ready to connect with you!</p>
                    <ul class="socialIcons">
                        <li>
                            <a href="#" target="_blank"><FaFacebookF/></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><FaTwitter/></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><FaYoutube/></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><RiInstagramFill/></a>
                        </li>

                    </ul>


                </div>
                <div class="background-overlay"></div>

            </section>
        </>
    )
}
