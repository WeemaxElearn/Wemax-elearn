import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class Contact extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Contact Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  content page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Contact section start*/}
          <div className="conact-section">
            <div className="container">
              <div className="row section-space--bottom--50">
                <div className="col">
                  <div className="contact-map">
                    <iframe
                      title="google-map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9590894285457!2d77.0142875!3d11.0416942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f444e4a1c1%3A0xb146bbcd03885ae8!2sWeemax!5e0!3m2!1sen!2sin!4v1681131452601!5m2!1sen!2sin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <center>
                <a href="http://wa.me/917904834579" className="w-25">
                  <button
                    style={{ fontSize: "22px" }}
                    className="btn btn-success rounded-pill   p-4 fs-6 font-weight-bolder  "
                  >
                    Whatsapp
                  </button>
                </a>
              </center>
              {/* <div className="row">
                        <div className="col-lg-4 col-12">
                        <div className="contact-information">
                            <h3>Contact Information</h3>
                            <ul>
                                <li>
                                    <span className="icon"><i className="ion-android-map" /></span>
                                    <span className="text"><span>Stock Building, 125 Main Street 1st Lane, San Francisco, USA</span></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:1234567890">(001) 24568 365 987</a><a href="tel:1234567890">(001) 65897 569 784</a></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-email-outline" /></span>
                                    <span className="text"><a href="mailto:info@example.com">info@example.com</a><a href="mailto:info@example.com">info@example.com</a></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-8 col-12">
                        <div className="contact-form">
                            <h3>Leave Your Message</h3>
                            <form id="contact-form">
                            <div className="row row-10">
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_name" type="text" placeholder="Your Name" /></div>
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_email" type="email" placeholder="Your Email" /></div>
                                <div className="col-12"><textarea name="con_message" placeholder="Your Message" defaultValue={""} /></div>
                                <div className="col-12"><button>Send Message</button></div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div> */}
            </div>
          </div>
          {/*Contact section end*/}
        </div>
        {/*====================  End of content page content  ====================*/}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Contact;
