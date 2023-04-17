const express = require('express');
const router = express.Router();
const coursemodel = require('../../models/Course.js');
// const fileUpload = require('express-fileupload');
//mongoose
const mongoose = require('mongoose');
let lecturemodel = require('../../models/Lecture.js');
const fs = require('fs');
const path = require('path');
var dir = './lecture-video';

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

/*Get videos*/
router.get('/lectures', function (req, res) {
	lecturemodel
		.find({
			course: req.query.id,
		})
		.populate({
			path: 'course',
			model: 'courses',
			select: 'courseDescription',
		})
		.then((doc) => {
			// res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
			//res.setHeader('Content-Range', 'users 0-5/5');
			res.json(doc);
			// console.log("populated doc:" + doc);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
	// res.send('this is get route upload');
	// res.render('index', {title: 'Upload file'});
});

/* POST videos*/
router.post('/lectures/addleacture', async function (req, res) {
	if (req.body.videoLink.length === 0) {
		var fileName = Date.now() + req.files.file.name.replace(' ', '_');
		fs.writeFile(
			'lecture-video/' + fileName,
			new Buffer.from(req.files.file.data),
			function (err) {
				if (err) return res.status(500).send(err);
			}
		);
		req.body.videoLink =
			'https://weemaxelearn.in/api/lectures/lecturevideo/' + fileName;
	}
	let model = new lecturemodel(req.body);
	model
		.save()
		.then((doc) => {
			if (!doc || doc.length === 0) {
				return res.status(500).send(doc);
			}
			res.status(200).send(doc);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/lectures/lecturevideo/:name', async function (req, res) {
	var filePath = __dirname.replace('routes\\api', '');
	try {
		res.sendFile(filePath + 'lecture-video/' + req.params.name);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

module.exports = router;
