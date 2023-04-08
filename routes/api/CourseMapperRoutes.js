let express = require("express");
let router = express.Router();
let coruseMapperModel = require("../../models/CourseMapper");
let userModel = require("../../models/User");

router.post("/coursemapping", (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).send({
      status: 400,
      data: {
        message: "request body is missing",
      },
    });
  }
  coruseMapperModel
    .findOne({ letctureId: req.body.letctureId })
    .then((response) => {
      if (response) {
        return res.send("course already added");
      } else if (!response) {
        let model = new coruseMapperModel(req.body);
        model
          .save()
          .then((doc) => {
            if (doc) {
              console.log(doc);
              return res.status(200).send({
                status: 200,
                data: {
                  message: "success",
                  data: doc,
                },
              });
            }
          })
          .catch((err) => {
            return res.status(400).send({
              status: 400,
              data: {
                message: "err",
                data: err,
              },
            });
          });
      }
    })
    .catch((err) => {
      res.send({
        status: 400,
        data: {
          message: "db error",
          err: err,
        },
      });
    });
});

router.put("/courmappingupdate", (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).send({
      status: 400,
      data: {
        message: "request body is missing",
      },
    });
  }

  const { letctureId, userId, completed, courseId } = req.body;

  coruseMapperModel
    .findOne({ letctureId: letctureId, userId: userId, courseId: courseId })
    .then((response) => {
      console.log(response, "==========================");
      if (response) {
        coruseMapperModel
          .findByIdAndUpdate(
            { _id: response._id },
            {
              completed: completed,
            },
            { new: true }
          )
          .then((data) => {
            if (data) {
              console.log(data, "==============================");
              return res.status(200).send({
                status: 200,
                data: {
                  message: "success",
                  data: data,
                },
              });
            }
          })
          .catch((err) => {
            return res.status(400).send({
              status: 400,
              data: {
                message: "err",
                data: err,
              },
            });
          });
      }
    })
    .catch((err) => {
      return res.status(400).send({
        status: 400,
        data: {
          message: "err",
          data: err,
        },
      });
    });
});
router.get("/getcoursemappingbyid", (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).send({
      status: 400,
      data: {
        message: "request body is missing",
      },
    });
  }
  const { userId, courseId } = req.body;
  coruseMapperModel
    .find({ userId: userId, courseId: courseId })
    .populate({ path: "courseId", model: "courses" })
    .populate({ path: "letctureId", model: "lectures" })
    .then((response) => {
      if (response) {
        return res.status(200).send({
          status: 200,
          data: {
            message: "success",
            data: response,
          },
        });
      }
    })
    .catch((err) => {
      return res.status(400).send({
        status: 400,
        data: {
          message: "err",
          data: err,
        },
      });
    });
});

router.post("/checkprevlec_status", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      status: 400,
      data: {
        message: "request body is missing",
      },
    });
  }
  const { userId, courseId, prevletctureId } = req.body;
  coruseMapperModel
    .find({ userId: userId, courseId: courseId, letctureId: prevletctureId })
    .then((response) => {
      if (response) {
        if (response[0].completed == true) {
          return res.status(200).send({
            status: 200,
            data: {
              status: true,
            },
          });
        } else {
          return res.status(400).send({
            status: 400,
            data: {
              status: false,
            },
          });
        }
      }
    })
    .catch((err) => {
      return res.status(400).send({
        status: 400,
        data: {
          message: "err",
          data: err,
        },
      });
    });
});

router.post("/printcertificate", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      status: 400,
      data: {
        message: "request body is missing",
      },
    });
  }
  const { userId, courseId } = req.body;
  coruseMapperModel
    .find({ userId: userId, courseId: courseId })
    .then((response) => {
      if (response) {
        userModel
          .findOne({ _id: userId })
          .then((response) => {
            return res.status(200).send({
              status: 200,
              data: {
                message: "you can print the certificate",
                userInfo: response,
              },
            });
          })
          .catch((err) => {
            console.log(`Err while getting the user ${err}`);
          });
      }
    })
    .catch((err) => {
      return res.status(400).send({
        status: 400,
        data: {
          message: "err",
          data: err,
        },
      });
    });
});

module.exports = router;
