import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
			youtubelink: '',
			loaded: 0,
			Courses: [],
			course: '',
			title: '',
		};
		this.onChangeCourse = this.onChangeCourse.bind(this);
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeYouTubeLink = this.onChangeYouTubeLink.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
		this.fileValidation = this.fileValidation.bind(this);
	}

	componentDidMount() {
		axios
			.get(
				'https://weemaxelearn.in/api/coursebyinstructor?id=' +
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

	// checkMimeType = (event) => {
	//   //getting file object
	//   let files = event.target.files;
	//   //define message container
	//   let err = [];
	//   // list allow mime type
	//   const types = ["video/mp4", "video/mkv"];
	//   // loop access array
	//   for (var x = 0; x < files.length; x++) {
	//     // compare file type find doesn't matach
	//     if (types.every((type) => files[x].type !== type)) {
	//       // create error message and assign to container
	//       err[x] = files[x].type + " is not a supported format\n";
	//     }
	//   }
	//   for (var z = 0; z < err.length; z++) {
	//     // if message not same old that mean has error
	//     // discard selected file
	//     toast.error(err[z]);
	//     event.target.value = null;
	//   }
	//   return true;
	// };
	// maxSelectFile = (event) => {
	//   let files = event.target.files;
	//   if (files.length > 1) {
	//     const msg = "Only 3 images can be uploaded at a time";
	//     event.target.value = null;
	//     toast.warn(msg);
	//     return false;
	//   }
	//   return true;
	// };

	fileValidation() {
		var fileInput = document.getElementById('file');

		var filePath = fileInput.value;

		// Allowing file type
		var allowedExtensions = /(\.mp4|\.mkv)$/i;

		if (!allowedExtensions.exec(filePath)) {
			alert('Invalid file type');
			fileInput.value = '';
			return;
		}
	}

	onClickHandler = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		this.state.Courses.map((course) => {
			if (course.courseName === this.state.course) {
				formData.append('course', course._id);
			}
		});
		if (this.state.selectedFile) {
			formData.append('file', this.state.selectedFile[0]);
		}

		formData.append('title', this.state.title);
		formData.append('videoLink', this.state.youtubelink);
		console.log(`Todo course: ${this.state.course}`);
		console.log(`Todo title: ${this.state.title}`);

		axios
			.post(
				'https://weemaxelearn.in/api/lectures/addleacture',

				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			.then((res) => {
				// then print response status
				toast.success('upload success');
			})
			.catch((err) => {
				// then print response status
				toast.error('upload fail');
			});
		// setTimeout(
		//   function () {
		//     window.location.reload();
		//   }.bind(this),
		//   1300
		// );
	};

	render() {
		var message2 = 'you have selected ' + this.state.course;
		return (
			<div>
				<NavBar />
				<div class="container">
					<div class="row" style={{ marginTop: '30px' }}>
						<div class="offset-md-3 col-md-6">
							<form
								action="lectures/localupload"
								method="POST"
								encType="multipart/form-data"
							>
								<h1 className="h3 mb-3 font-weight-normal">
									Upload Video
								</h1>
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
								<input
									type="file"
									id="file"
									onChange={this.handleFileChange}
								/>

								<button
									type="button"
									class="btn btn-success btn-block"
									onClick={this.onClickHandler}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
