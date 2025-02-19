const { check, validationResult } = require("express-validator");
const { PatientModel } = require("../../models/PatientMode");
const { unlink } = require("fs");
const path = require("path");
const { fileModel } = require("../../models/file");

const adminFileCheck = [
  check("patient").custom(async (value) => {
    try {
      const user = await PatientModel.find({ email: value });
      if (user.length == 0) {
        throw Error("Patient Does not exist");
      }
      return true;
    } catch (error) {
      throw Error("Give a valid Patient ID");
    }
  }),
];

const adminFileResult = (req, res, next) => {
  try {
    const errors = validationResult(req);
    const mappedError = errors.mapped();
    console.log(mappedError);
    if (Object.keys(mappedError).length > 0) {
      if (req.files.length > 0) {
        unlink(
          path.join(__dirname, `../../public/${req.files[0].filename}`),
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
      res.status(400).json(mappedError);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const fileUpload = async (req, res) => {
  try {
    const user = await PatientModel.findOne({
      email: req.body.patient,
    });
    const newReport = new fileModel({
      patientId: user.patientId,
      path: req.files[0].filename,
      type: req.body.type,
    });
    await newReport.save();
    res.status(201).json({
      msg: "File Uploaded",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  adminFileResult,
  adminFileCheck,
  fileUpload,
};
