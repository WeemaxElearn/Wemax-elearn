import React, { Component } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

const myStyles = {
  color: "white",
  backgroundColor: "green",
  padding: "10px",
  borderRadius: "5px",
  fontWeight: "600", // sets font weight to semibold
  fontSize: "16px", // sets font size to 10px
  textAlign: "center", // centers the text inside the element
  animation: "flash 5000ms ease infinite alternate",
  marginTop: "8px",
};

const ShowCourse = (props) => (
  <option key={props.todo.courseName} value={props.todo.courseName}>
    {props.todo.courseName}
  </option>
  // <button type="button" class="list-group-item list-group-item-action">{props.todo.courseName}</button>
);
export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      youtubelink: "",
      loaded: 0,
      Courses: [],
      course: "",
      title: "",
      progress: 0,
    };
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYouTubeLink = this.onChangeYouTubeLink.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.fileValidation = this.fileValidation.bind(this);
    // this.percentCompleted = this.percentCompleted.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/coursebyinstructor?id=" +
          this.props.match.params.id
      )
      .then((response) => {
        console.log(this.props.match.params.id);
        this.setState({ Courses: response.data });
        if (Array.isArray(response.data)) {
          this.setState({ course: response.data[0].courseName });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  CourseList() {
    return this.state.Courses.map(function (currentTodo, i) {
      //  console.log(currentTodo.categoryName)
      return <ShowCourse todo={currentTodo} key={i} />;
    });
  }

  onChangeCourse(e) {
    this.setState({
      course: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeYouTubeLink(e) {
    this.setState({
      youtubelink: e.target.value,
    });
  }

  async handleFileChange(e) {
    if (e.target.files) {
      this.fileValidation();

      await this.setState({
        selectedFile: e.target.files,
      });
      console.log(this.state.selectedFile);
    }
  }

  fileValidation() {
    const fileInput = document.getElementById("file");
    const filePath = fileInput.value;

    // Check the file type
    const allowedExtensions = /(\.mp4|\.mkv)$/i;

    if (!allowedExtensions.exec(filePath)) {
      alert("Invalid file type");
      fileInput.value = "";
      return;
    }
  }

  onClickHandler = async (event) => {
    toast.configure();

    event.preventDefault();

    const formData = new FormData();
    this.state.Courses.map((course) => {
      if (course.courseName === this.state.course) {
        formData.append("course", course._id);
      }
    });
    if (this.state.selectedFile) {
      formData.append("file", this.state.selectedFile[0]);
    }

    formData.append("title", this.state.title);
    formData.append("videoLink", this.state.youtubelink);
    console.log(`Todo course: ${this.state.course}`);
    console.log(`Todo title: ${this.state.title}`);

    axios
      .post("http://localhost:5000/lectures/addleacture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          this.setState({
            progress: percentCompleted,
          });
        },
      })
      .then((res) => {
        // then print response status
        toast.success("upload success");
        setTimeout(
          function () {
            window.location.reload();
          }.bind(this),
          1300
        );
      })
      .catch((err) => {
        // then print response status
        toast.error("upload fail");
      });
  };

  render() {
    var message2 = "you have selected " + this.state.course;
    return (
      <div>
        <NavBar />
        <div class="container">
          <div class="row" style={{ marginTop: "30px" }}>
            <div class="offset-md-3 col-md-6">
              <form
                action="lectures/localupload"
                method="POST"
                encType="multipart/form-data"
              >
                <h1 className="h3 mb-3 font-weight-normal">Upload Video</h1>
                <div class="form-group files">
                  <div className="form-group">
                    <label>Course Name </label>
                    <select
                      className="form-control"
                      name="course"
                      id="ada"
                      onChange={this.onChangeCourse}
                      value={this.state.course}
                    >
                      {this.CourseList()}
                    </select>
                    <p>{message2}</p>
                  </div>
                  <div className="form-group">
                    <label>Video Title </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Add YouTube Video URL </label>
                  <input
                    type="text"
                    placeholder="ex: https://www.youtube.com/embed/yO7Q3YWzY"
                    className="form-control"
                    value={this.state.youtubelink}
                    onChange={this.onChangeYouTubeLink}
                  />
                </div>
                <input type="file" id="file" onChange={this.handleFileChange} />
                {this.state.progress !== 0 ? (
                  <div style={myStyles}>
                    Uploading...({this.state.progress})
                  </div>
                ) : (
                  <button
                    style={{ marginTop: "8px" }}
                    type="button"
                    class="btn btn-success btn-block"
                    onClick={this.onClickHandler}
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
