import React, { Component, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import axios from "axios";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { jsPDF } from "jspdf";
import { connect } from "react-redux";
import moment from "moment";

class BlogDetailsLeftSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      user: JSON.parse(localStorage.getItem("userid")),
      userRole: JSON.parse(localStorage.getItem("userRole")),
      selectedVideo: null,
      enrolled: "ADD TO COURSE LIST",
      buttonclass: "btn btn-success",
      addcourse: false,
      course: {},
      approved: false,
    };

    this.onClick = this.onClick.bind(this);
    this.getCertificate = this.getCertificate.bind(this);
  }

  getCertificate() {
    const data = {
      userId: this.state.user,
      courseId: this.props.match.params.id,
      videoLength: this.state.videos.length,
    };
    var courseName;
    axios
      .get("http://localhost:5000/course?id=" + this.props.match.params.id)
      .then((result) => {
        console.log(result);
        courseName = result.data.courseName;
      });

    axios
      .post("http://localhost:5000/printcertificate", {
        userId: data.userId,
        courseId: data.courseId,
      })
      .then((response) => {
        if (response.data) {
          const { auth } = this.props;
          let firstName = null,
            lastName = null;
          if (auth) {
            const { first_name, last_name } = auth.users;
            firstName = first_name;
            lastName = last_name;
          } else {
            return;
          }
          const nowDate = new Date();
          const parsedDate = `${nowDate.getDate()}/${
            nowDate.getMonth() + 1
          }/${nowDate.getFullYear()}`;

          console.log(this.props.match.params.id);

          const htmlString = `<div
    id="certificate-print-contain"
    style="height: 793px; width: 1122px; padding: 40px; position: relative; top: 0; left: 0"
  >
    <div
      style="
        height: 100%;
        width: 100%;
        border: 4px solid #050a30;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 0 40px;
      "
    >
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <h1
          style="
            font-size: 70px;
            font-weight: 700;
            text-align: center;
            line-height: 80px;
            font-family: Arial, Helvetica, sans-serif;
          "
        >
          CERTIFICATE
        </h1>
        <span
          style="
            font-size: 25px;
            font-weight: 600;
            text-align: center;
            letter-spacing: 5px;
            font-family: Arial, Helvetica, sans-serif;
          "
        >
          OF COMPLETION
        </span>
      </div>

      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <h2
          style="
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            letter-spacing: 5px;
            font-family: Arial, Helvetica, sans-serif;
            margin-bottom: 30px;
          "
        >
          THE CERTIFICATE IS AWARDED TO
        </h2>
        <h1
          style="
            font-size: 60px;
            font-weight: 600;
            text-align: center;
            letter-spacing: 5px;
            font-family: 'Times New Roman', Times, serif;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 20px;
          "
        >
          ${firstName} ${lastName}
        </h1>
        <p
          style="
            text-align: center;
            font-size: 18px;
            font-weight: 500;
            font-family: Arial, Helvetica, sans-serif;
          "
        >
          For successfully completed "${courseName}" online
          course on date ${parsedDate}
        </p>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <img src="/assets/img/badge.png" style="height: 150px" />
        <img src="/assets/img/logo.jpg" style="height: 50px" alt="Weemax" />
      </div>
    </div>
    <div
      style="
        height: 100%;
        width: 100%;
        background: transparent;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
      "
    >
      <div
        style="
          height: 180px;
          width: 180px;
          background: #2e266d;
          transform: rotate(45deg);
          position: absolute;
          margin-top: -100px;
          margin-left: 27px;
          z-index: 9999;
        "
      ></div>
      <div
        style="
          height: 180px;
          width: 180px;
          background: #b1d4e0;
          transform: rotate(45deg);
          position: absolute;
          margin-top: -10px;
          margin-left: -130px;
        "
      ></div>
      <div
        style="
          height: 180px;
          width: 180px;
          background: #2e266d;
          transform: rotate(45deg);
          position: absolute;
          bottom: -90px;
          right: 40px;
          z-index: 9999;
        "
      ></div>
      <div
        style="
          height: 180px;
          width: 180px;
          background: #b1d4e0;
          transform: rotate(45deg);
          position: absolute;
          bottom: -10px;
          right: -110px;
        "
      ></div>
    </div>
  </div>`;
          const rootDiv = document.getElementById("root");

          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, "text/html");
          const domElement = doc.body.firstChild;

          document.getElementsByTagName("body")[0].appendChild(domElement);

          rootDiv.remove();

          const opt = {
            margin: 0,
            filename: "weemax-" + courseName + "-certificate.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: [297, 210], orientation: "landscape" },
          };

          // eslint-disable-next-line no-undef
          html2pdf().set(opt).from(domElement).save();
          setTimeout(() => {
            window.location.replace(window.location.href);
          }, 2000);
        } else {
          toast.warn("Something went wrong while printing the certificate");
          return;
        }
      })
      .catch(function (error) {
        toast.error("Please complete the course to get the certificate");
        return;
      });
  }
  onClick(e) {
    e.preventDefault(); //ensure that the default HTML form submit behaviour is prevented
    // this.setState({
    //     course: this.props.match.params.id,
    //     student: '5d3b601b4b04af228ab854a1',
    //     approved: true
    // });
    console.log(`Form submitted:`);

    console.log(`Todo studentid: ` + this.state.user);
    console.log(`Todo courseid: ` + this.props.match.params.id);
    //console.log(`Todo approved: `);

    const newTodo = {
      student: this.state.user,
      course: this.props.match.params.id,
    };
    if (this.state.buttonclass == "btn btn-success") {
      axios
        .post("http://localhost:5000/enrollbystudent/add", newTodo)
        .then((result) => {
          //this.props.history.push("/addtoplaylist/"+this.props.match.params.id)
          toast.success("Added successfully");
        })
        .catch((err) => {
          // then print response status
          toast.error("Course not added");
        });
    } else {
      console.log(this.state.buttonclass);
      toast.error("Course already added");
    }
    setTimeout(
      function () {
        window.location.reload();
      }.bind(this),
      1300
    );
  }
  async componentDidMount() {
    if (this.state.userRole == "student") {
      this.setState({
        addcourse: true,
      });
    }

    await axios
      .get("http://localhost:5000/course?id=" + this.props.match.params.id)
      .then((result) => {
        console.log(result);
        this.setState({ course: result.data });
      });

    await axios
      .get(
        "http://localhost:5000/checkenrollment?id=" +
          this.state.user +
          "&&courseid=" +
          this.props.match.params.id
      )
      .then(async (result) => {
        if (result.data != undefined) {
          if (result.data.approved === true) {
            const response = await axios.get(
              "http://localhost:5000/lectures?id=" + this.props.match.params.id
            );
            this.setState({
              enrolled: "ALREADY ENROLLED",
              buttonclass: "btn btn-danger",
              videos: response.data,
              selectedVideo: response.data[0],
              approved: true,
            });
          } else {
            this.setState({
              enrolled: "WAITING FOR APPROVED",
              buttonclass: "btn btn-info",
            });
          }
        } else {
          console.log(result.data);
        }
        //return result;
      });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

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
                  <h1>Course Details</h1>
                  <ul className="page-breadcrumb">
                    {/* <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="projects">Courses</a>
                    </li>
                    <li>Course Details</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  project details page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Projects section start*/}
          <div className="project-section">
            <div className="container">
              {/* <SearchBar onFormSubmit={this.onTextSubmit} /> */}
              <div className="row">
                <div className="col-12 section-space--bottom--40">
                  <div className="ui container">
                    <div className="ui grid">
                      <div className="ui row">
                        <div className="eleven wide column">
                          {this.state.approved === true && (
                            <VideoDetail
                              video={this.state.selectedVideo}
                              videos={this.state.videos}
                            />
                          )}
                          {this.state.approved === false && (
                            <div>
                              <img
                                src={this.state.course.courseImage}
                                width="500"
                              ></img>
                              <h1>{this.state.course.courseName}</h1>
                              <h4>{this.state.course.courseDescription}</h4>
                            </div>
                          )}
                        </div>

                        <div className="five wide column">
                          <VideoList
                            onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                  <div className="project-details">
                    <h2>
                      {" "}
                      {this.state.selectedVideo
                        ? this.state.selectedVideo.title
                        : this.state.status}
                    </h2>
                    <p>
                      {this.state.selectedVideo
                        ? this.state.selectedVideo.course.courseDescription
                        : this.state.status}
                    </p>
                  </div>
                  <br></br>
                  <br></br>
                  {this.state.userRole === "student" && (
                    <div>
                      {this.state.approved === true && (
                        <button
                          type="button"
                          onClick={this.getCertificate}
                          className={"btn btn-success"}
                        >
                          Print Certificate
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="col-lg-4">
                  <div>
                    <ToastContainer />
                    <button
                      type="button"
                      style={this.state.addcourse ? {} : { display: "none" }}
                      className={this.state.buttonclass}
                      onClick={this.onClick}
                    >
                      {this.state.enrolled}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Projects section end*/}
        </div>

        {/*====================  End of project details page content  ====================*/}

        {/* Brand logo */}
        <BrandLogoSlider background="grey-bg" />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

//map properties to proptypes
BlogDetailsLeftSidebar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(BlogDetailsLeftSidebar);
