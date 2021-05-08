import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaLocationArrow
} from "react-icons/fa"

import {RiInstagramFill} from "react-icons/ri";

import 'aos/dist/aos.css';
import {useForm} from "react-hook-form";
import axios from 'axios';
import emailjs from 'emailjs-com';


export default function contact() {


    function onSubmitForm(values) {

        console.log(values)
        values.preventDefault();


        emailjs.sendForm('service_xcjnfz9', 'template_2ym61o2', values.target, 'user_5YvxbkhSC6ysNKWIY2G3n').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        values.target.reset();

    }

    return (
        <>
            <section class="heroBanner aboutHeroBanner"
                style={
                    {backgroundImage: "url('/img/droneview.jpg')"}
            }>
                <div class="background-overlay"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-2 col-0"></div>

                        <div class="col-md-8 col-sm-8 col-12">
                            <h2>
                                <strong>Get in touch
                                </strong>
                            </h2>
                            <p class="secDescription">
                                Everything starts from a Hello
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
                        <div class="col-md-12 col-sm-12 col-12">

                            <form class="contactForm" name="contactForm"
                                onSubmit={onSubmitForm}>


                                <div class="formGroup">
                                    <label>Full Name</label>

                                    <input required name="fullName" class="inputField form-control"/>

                                </div>

                                <div class="formGroup">
                                    <label>
                                        Your Email
                                    </label>

                                    <input required type='email' name="email" class="inputField form-control"/>

                                </div>

                                <div class="formGroup">
                                    <label>Your Message</label>
                                    <textarea name="message" class="inputField form-control" required></textarea>

                                </div>
                                <input type='submit' class="btn btn-primary btnMain"/>
                            </form>

                        </div>
                    </div>
                </div>
            </section>


            <section class="contactInfo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="icon"><FaEnvelope/></div>
                            <h3>
                                Have Any Questions? ​
                            </h3>
                            <p>hi@abc.com<br/>
                            </p>
                        </div>
                        <div class="col-md-4">
                            <div class="icon"><FaPhone/></div>
                            <h3>
                                Call us
                            </h3>

                            <p>
                                +01 409 320 6305<br/>
                                Sales Department
                            </p>
                        </div>
                        <div class="col-md-4">
                            <div class="icon"><FaLocationArrow/></div>
                            <h3>Location</h3>
                            <p>NO.8 West Ru Rong Rd,
                                <br/>City, Country​</p>
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
                    <h2 class="sectionHeading">
                        Follow Us In Social Media
                    </h2>
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
