import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/*====================  footer area ====================*/}
        <div className="footer-area dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-content-wrapper section-space--inner--100">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12">
                      {/* footer intro wrapper */}
                      <div className="footer-intro-wrapper">
                        <div className="footer-logo">
                          <a href={`${process.env.PUBLIC_URL}/home-two`}>
                            <div className="logoHead">
                              <img
                                src="/assets/img/logo/weemax-logo.jpg"
                                alt=""
                                className="sticky-logo img-fluid"
                              />
                              <h3>WeeMax</h3>
                            </div>
                          </a>
                        </div>
                        <div className="footer-desc">
                          Vision : "Our vision at WEEMAX is to revolutionize the
                          fashion industry by providing high-quality, trendy
                          clothing and accessories while also offering top-notch
                          e-learning resources to empower our customers with
                          knowledge and skills to pursue their passions and
                          achieve their goals." Mission : "At WEEMAX, our
                          mission is to create an immersive online shopping
                          experience that seamlessly blends fashion and
                          education. We are committed to sourcing and curating
                          the latest and greatest fashion trends, while also
                          providing expertly crafted e-learning content to
                          empower our customers to learn and grow. We strive to
                          create a community of passionate learners and fashion
                          enthusiasts, who share a common goal of personal
                          growth and self-improvement."
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">USEFUL LINKS</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/home-two`}>
                              Home
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/about-us`}>
                              About Us
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/login/student`}>
                              Login
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/contact-us`}>
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div
                      className="col-xl-2 offset-xl-1 col-lg-3 col-md-4 "
                      style={{ visibility: "hidden" }}
                    >
                     
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">USEFUL LINKS</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Our Services
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Showcase</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Affliates</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Disclaimer
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Privacy Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget mb-0">
                        <h4 className="footer-widget__title">CONTACT US</h4>
                        <div className="footer-widget__content">
                          <p className="address">
                            220/8, Lakshmi Venkatesh Nagar, Hotel Rithanns
                            backside, Karumathampatti, Coimbatore - 641659.
                          </p>
                          <ul className="contact-details">
                            <li>
                              <span>P:</span>7904834579
                            </li>
                            <li>
                              <span>E:</span>weemaxelearn@gmail.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-wrapper">
            <div className="footer-copyright text-center">
              WeeMax Copyright © 2023. All right reserved
            </div>
          </div>
        </div>
        {/*====================  End of footer area  ====================*/}
        {/*====================  scroll top ====================*/}
        <button className="scroll-top" id="scroll-top">
          <i className="ion-android-arrow-up" />
        </button>
        {/*====================  End of scroll top  ====================*/}
      </div>
    );
  }
}

export default Footer;
