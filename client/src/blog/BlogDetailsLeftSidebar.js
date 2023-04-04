import React, { Component, useRef } from "react";
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
import { connect } from 'react-redux';
import moment from 'moment';

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
    axios
      .post("http://localhost:5000/printcertificate", {
        userId: data.userId,
        courseId: data.courseId,
        videoLength: data.videoLength,
      })
      .then((response) => {
        if (response.data) {
          const { auth } = this.props;
          let firstName = null, lastName = null;
          if(auth){
            const {first_name, last_name} = auth.users;
            firstName = first_name;
            lastName = last_name;
          }
          var printWindow = window.open("", "", "height=400,width=800");
          printWindow.document.write("<html><head><title>DIV Contents</title>");
          printWindow.document.write("</head><body >");
          printWindow.document
            .write(`<div style="width:750px; height:550px; padding:20px; text-align:center; border: 5px solid #787878">
        <span style="font-size:50px; font-weight:bold">Certificate of Completion</span>
        <br><br>
        <span style="font-size:25px"><i>This is to certify that</i></span>
        <br><br>
        <span style="font-size:30px"><b>${
          firstName.toUpperCase() + " " + lastName.toUpperCase()
        }</b></span><br/><br/>
        <span style="font-size:25px"><i>has completed the ${this.props.match.params.courseName} course successfully</i></span> <br/><br/>
        <span style="font-size:25px"><i>dated: ${moment().format(
          "DD/MM/YYYY"
        )}</i></span><br>
 </div>`);
          printWindow.document.write("</body></html>");
          printWindow.document.close();
          printWindow.print();
        } else {
          toast.warn("Something went wrong while printing the certificate");
        }
      })
      .catch(function (error) {
        toast.error("Please complete the course to get the certificate");
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
      approved: true,
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
  }
  async componentDidMount() {
    if (this.state.userRole == "student") {
      this.setState({
        addcourse: true,
      });
    }
    
    const response = await axios
      .get("http://localhost:5000/lectures?id=" + this.props.match.params.id)
      .then((result) => {
        console.log(
          "http://localhost:5000/checkenrollment?id=" +
            this.state.user +
            "&&courseid=" +
            this.props.match.params.id
        );
        const responseEnrolled = axios
          .get(
            "http://localhost:5000/checkenrollment?id=" +
              this.state.user +
              "&&courseid=" +
              this.props.match.params.id
          )
          .then((result) => {
            if (result.data != undefined) {
              this.setState({
                enrolled: "ALREADY ENROLLED",
                buttonclass: "btn btn-danger",
              });
            } else {
              console.log(result.data);
            }
            //return result;
          });
        console.log(result.data[0]);
        return result;
      });

    this.setState({
      videos: response.data,
      selectedVideo: response.data[0],
      status: "loading",
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
                          <VideoDetail
                            video={this.state.selectedVideo}
                            videos={this.state.videos}
                          />
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
                      <button
                        type="button"
                        onClick={this.getCertificate}
                        className={"btn btn-success"}
                      >
                        Print Certificate
                      </button>
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
