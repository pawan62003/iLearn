const express = require("express");
const InstructorRoute = express.Router();
const { InstructorModel } = require("../models/instructor.model");

InstructorRoute.get("/", async (req, res) => {
  try {
    const Instructor = await InstructorModel.find();
    res.send(Instructor);
  } catch (error) {
    res.send(error);
  }
});

InstructorRoute.post("/", async (req, res) => {
  try {
    const newInstructor = new InstructorModel(req.body);
    await newInstructor.save();
    res.send({ msg: "new Instrutor added successfully!" });
  } catch (error) {
    res.send(error);
  }
});

InstructorRoute.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const afterUpdation = await InstructorModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.send({ msg: "Instructor updated successfully!" });
  } catch (error) {
    res.send(error);
  }
});

InstructorRoute.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Instructor = await InstructorModel.findById(id);
    res.send(Instructor);
  } catch (error) {
    res.send(error);
  }
});

InstructorRoute.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const afterDeletion = await InstructorModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "Instruction deleted successfully!" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  InstructorRoute,
};
