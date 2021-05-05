import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


import {FaFacebookF, FaTwitter, FaYoutube} from "react-icons/fa"

import 'aos/dist/aos.css';
import {useForm} from "react-hook-form";
import axios from 'axios'

export default function contact() {
    const {register, handleSubmit, errors, reset} = useForm();
    async function onSubmitForm(values) {
        console.log(values)
        console.log(values.name)

        let config = {
            method: 'post',
            url: '/api/contact',
            headers: {
                'Content-Type': 'application/json'
            },
            data: values
        };
        try {
            const response = await axios(config);
            console.log(response);
            console.log(response.data.status);
            if (response.data.status == 200) {
                console.log('suces');
            }
        } catch (err) {
            console.log(err)
        }
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
                        <div class="col-md-6 col-sm-6 col-12">
                            <div className={
                                styles.container
                            }>
                                <form class="contactForm" name="contactForm" method="POST"
                                    onSubmit={
                                        handleSubmit(onSubmitForm)
                                }>

                                    <formGroup>
                                        <label>Name</label>
                                        <input type='text' name='name' class="inputField form-control" {...register("name", { required: true, message: 'You must enter your name.' } ) }/>
                                    </formGroup>
                                    <formGroup>
                                        <label>Email</label>
                                        <input type='email' name='email' {...register("email", { required: true })} class="inputField form-control"/>
                                    </formGroup>
                                    <formGroup>
                                        <label>Message</label>
                                        <input type='text' name='message' {...register("message", { required: true })} class="inputField form-control"/>
                                    </formGroup>
                                    <input type='submit'/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="contactInfo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="icon"><FaFacebookF/></div>
                            <h3>Ask Presale Question</h3>
                            <p>Alaya Wu
                                <br/>
                                hi@abc.com<br/>
                                +01 409 320 6305<br/>
                                Sales Department</p>
                        </div>
                        <div class="col-md-4">
                            <div class="icon"><FaTwitter/></div>
                            <h3>Business Cooperation</h3>

                            <p>Alaya Wu
                                <br/>
                                hi@abc.com<br/>
                                +01 409 320 6305<br/>
                                Sales Department</p>
                        </div>
                        <div class="col-md-4">
                            <div class="icon"><FaYoutube/></div>
                            <h3>Business Cooperation</h3>
                            <p>Alaya Wu
                                <br/>
                                hi@abc.com<br/>
                                +01 409 320 6305<br/>
                                Sales Department</p>
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
                    <h2 class="sectionHeading">Share your flights</h2>
                    <p class="secDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                        <br/>luctus nec ullamcorper mattis, pulvinar dapibus leo. Praesent feugiat eleifend nisi quis scelerisque.</p>
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

                    </ul>
                </div>
                <div class="background-overlay"></div>
            </section>
        </>
    )
}
