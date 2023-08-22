import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="main">
                <section className="newsletter p-30 mt-30 text-white wow fadeIn animated">
                    
                  
                </section>
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="widget-about font-md mb-md-5 mb-lg-0">
                                    <div className="logo logo-width-1 wow fadeIn animated">
                                        <Link href="/"><a>
                                            <img
                                                src="/assets/imgs/theme/logo.svg"
                                                alt="logo"
                                            />
                                        </a>
                                        </Link>
                                    </div>
                                    <h5 className="mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated">
                                        Contact
                                    </h5>
                                    <p className="wow fadeIn animated">
                                        <strong>Address: </strong>Urban Estate, 555, Golf Course Rd, Sector 43, Gurugram, Haryana 122001
                                    </p>
                                    <p className="wow fadeIn animated">
                                        <strong>Phone: </strong>+(+91) 70 1125 8995
                                        /(+91) 01 2345 6789
                                    </p>
                                    <p className="wow fadeIn animated">
                                        <strong>Hours: </strong>10:00 - 18:00,
                                        Mon - Sat
                                    </p>
                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <h5 className="widget-title wow fadeIn animated">
                                    Quick Links
                                </h5>
                                <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                  
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                  
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3">
                            <h5 className="mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated">
                                        Follow Us
                                    </h5>
                                    
                            <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0">
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-facebook.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-twitter.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-instagram.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-youtube.svg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <div className="container pb-20 wow fadeIn animated">
                    <div className="row">
                        <div className="col-12 mb-20">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-lg-6">
                            <p className="float-md-left font-sm text-muted mb-0">
                                &copy; {new Date().getFullYear()},
                                <strong className="text-brand"> AV</strong> - Example
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-lg-end text-start font-sm text-muted mb-0">
                                Designed by 
                                <a href="https://crm.coderxpoint.com/login" target="_blank"> CoderXpoint</a>
                                . All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
