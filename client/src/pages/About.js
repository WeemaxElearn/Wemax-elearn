import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ModalVideo from "react-modal-video";
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

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
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper" style={{ marginTop: "20px" }}>
          {/*About section start*/}

          {/*About section end*/}

          {/* Feature Icon */}

          {/* Team member */}
          {/* <TeamMemberGrid /> */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "80px 30px",
            }}
          >
            <p style={{ fontSize: "20px" }}>
              WEEMAX E-LEARN is an innovative online learning platform that
              offers a wide range of computer courses and soft skill courses to
              help learners enhance their professional and personal skills. Our
              courses are designed to provide learners with the knowledge and
              skills they need to excel in their careers and personal lives.
            </p>
            <p style={{ fontSize: "20px" }}>
              At WEEMAX E-LEARN, we are committed to delivering high-quality,
              affordable, and accessible online education to learners worldwide.
              We believe that everyone should have access to quality education,
              regardless of their location, background, or financial status.
            </p>
            <p style={{ fontSize: "20px" }}>
              Our team of experienced instructors and subject matter experts are
              dedicated to providing learners with the best possible learning
              experience. We use the latest technologies and teaching methods to
              create engaging and interactive courses that help learners achieve
              their goals.
            </p>
            <p style={{ fontSize: "20px" }}>
              Whether you are looking to improve your technical skills, learn a
              new programming language, or develop your communication and
              leadership skills, WEEMAX E-LEARN has a course for you. Our
              courses are designed to meet the needs of learners at all levels,
              from beginners to advanced learners.
            </p>
            <p style={{ fontSize: "20px" }}>
              At WEEMAX E-LEARN, we are committed to helping learners succeed.
              We provide learners with the support they need to achieve their
              goals, including access to our online community of learners and
              instructors, as well as personalized feedback and coaching.
            </p>
            <p style={{ fontSize: "20px" }}>
              Thank you for choosing WEEMAX E-LEARN for your online learning
              needs. We look forward to helping you achieve your goals and reach
              your full potential.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
