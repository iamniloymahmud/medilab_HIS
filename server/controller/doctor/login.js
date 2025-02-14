const { check, validationResult } = require("express-validator");
const { doctorModel } = require("../../models/doctor");
const bcrypt = require("bcrypt");
const { jwtCreator } = require("../../util/TokenCreator");
const { appointmentModel } = require("../../models/appointment");

const doctorSignInCheck = [
  check("email")
    .isEmail()
    .withMessage("Enter a valid Email")
    .custom(async (value) => {
      const user = await doctorModel.findOne({ email: value });
      if (!user) {
        throw Error("User Does not exist");
      }
      return true;
    }),
];

const doctorResult = (req, res, next) => {
  try {
    const errors = validationResult(req);
    const mappedError = errors.mapped();
    if (Object.keys(mappedError).length > 0) {
      res.status(400).json(mappedError);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const createJWT = async (req, res, next) => {
  try {
    const user = await doctorModel.findOne({ email: req.body.email });
    const isOk = await bcrypt.compare(req.body.password, user.password);
    if (isOk) {
      const admin = {
        email: req.body.email,
        role: "doctor",
        name: user.name,
        doctorId: user.doctorId,
      };
      const token = jwtCreator(admin);
      res.status(200).json({
        user: admin,
        token: token,
      });
    } else {
      res.status(400).json({
        password: {
          msg: "Password does not match",
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      password: {
        msg: "Password does not match",
      },
    });
  }
};

const getAppointments = async (req, res, next) => {
  try {
    // const appointments = await appointmentModel.find({
    //   doctorId: req.user.doctorId,
    //   approved: true,
    // });
    const appointments = await appointmentModel.aggregate([
      {
        $match: {
          doctorId: req.user.doctorId,
          approved: true,
        },
      },
      {
        $lookup: {
          from: "patients",
          localField: "email",
          foreignField: "email",
          as: "patient",
        },
      },
      {
        $set: {
          name: {
            $first: "$patient.name",
          }
        }
      },
      {
        $unset: ["patient"],
      }
    ]);
    res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  doctorSignInCheck,
  doctorResult,
  createJWT,
  getAppointments,
};
