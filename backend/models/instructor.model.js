const mongoose = require("mongoose");

const InstructorSchema = mongoose.Schema(
  {
    name: String,
    gender: String,
    dateOfBirth: Date,
    department: String,
    email: String,
    contactNumber: String,
  },
  { versionkey: false }
);

const InstructorModel = mongoose.model("instructor", InstructorSchema);

module.exports = {
  InstructorModel,
};
