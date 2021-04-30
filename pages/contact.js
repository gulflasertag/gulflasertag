import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


import {FaFacebookF, FaTwitter, FaYoutube} from "react-icons/fa"

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState} from 'react'


export default function contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => {

        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        fetch('/api/contactApi', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            }
        })
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
                                <form className={
                                    styles.main
                                }>

                                    <formGroup className={
                                        styles.inputGroup
                                    }>
                                        <label htmlFor='name'>Name</label>
                                        <input type='text'
                                            onChange={
                                                (e) => {
                                                    setName(e.target.value)
                                                }
                                            }
                                            name='name'
                                            class="inputField form-control"/>

                                    </formGroup>
                                <formGroup className={
                                    styles.inputGroup
                                }>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name='email'
                                        onChange={
                                            (e) => {
                                                setEmail(e.target.value)
                                            }
                                        }
                                        class="inputField form-control"/>
                                </formGroup>
                            <formGroup className={
                                styles.inputGroup
                            }>
                                <label htmlFor='message'>Message</label>
                                <input type='text' name='message'
                                    onChange={
                                        (e) => {
                                            setMessage(e.target.value)
                                        }
                                    }
                                    class="inputField form-control"/>
                            </formGroup>
                        <input type='submit'
                            onClick={
                                (e) => {
                                    handleSubmit(e)
                                }
                            }/>
                    </form>
            </div>
        </div>
    </div>
</div></section><section class="preFooter"
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
<div class="background-overlay"></div></section></>
    )
}
