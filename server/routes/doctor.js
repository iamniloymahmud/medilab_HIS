const express = require("express");
const router = express.Router();

const {
  doctorSignInCheck,
  doctorResult,
  createJWT,
  getAppointments,
} = require("../controller/doctor/login");
const { jwtAuthenticator } = require("../util/jwtAuthenticator");

router.post("/login", doctorSignInCheck, doctorResult, createJWT);
router.get("/appointments", jwtAuthenticator, getAppointments);

module.exports = {
  doctorRouter: router,
};
