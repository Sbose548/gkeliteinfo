'use client'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from 'react'

const Contact = () => {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000, // Adjust as needed
        });
    }, []);

    return (
        <div>
            <main>
                <div className="page-title accent-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Contact</h1>
                        {/* <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Contact</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
                <section id="contact" className="contact section">

                    <div className="mb-5">
                        <iframe style={{width: '100%', height: '400px',border:'0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.653576949324!2d78.45355192493571!3d17.4284049334658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b4e56c0001%3A0xc0cef170edf8dead!2sseqtospace!5e0!3m2!1sen!2sin!4v1731612493149!5m2!1sen!2sin" width="800" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="container" data-aos="fade">

                        <div className="row gy-5 gx-lg-5">

                            <div className="col-lg-4">

                                <div className="info">
                                    <h3>Get in touch</h3>
                                    <p>For any concerns, please contact us.</p>

                                    <div className="info-item d-flex">
                                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                                        <div>
                                            <h4>Location:</h4>
                                            <p>3rd Floor, Dominos pizza, Otis Building, 6-3-887, Raj Bhavan Rd, Durga Nagar Colony, Somajiguda, Hyderabad, Telangana 500082</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex">
                                        <i className="bi bi-envelope flex-shrink-0"></i>
                                        <div>
                                            <h4>Email:</h4>
                                            <p>gkeliteinfo@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex">
                                        <i className="bi bi-phone flex-shrink-0"></i>
                                        <div>
                                            <h4>Call:</h4>
                                            <p>+91 7093256562</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" placeholder="Message" required=""></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </div>
    )
}

export default Contact