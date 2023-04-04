const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseMapper = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "courses",
    },
    letctureId: {
      type: Schema.Types.ObjectId,
      ref: "lectures",
    },
    watched: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = Course = mongoose.model("CourseMapper", CourseMapper);
