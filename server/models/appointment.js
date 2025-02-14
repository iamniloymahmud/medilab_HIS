//External Imports
const mongoose = require("mongoose");

//Schema

const appointmentSchema = mongoose.Schema(
  {
    email: String,
    doctorId: Number,
    doctorName: String,
    approved: Boolean,
    pending: Boolean,
    reject: Boolean,
    attended: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//Model

const appointmentModel = mongoose.model("Appointment", appointmentSchema);

module.exports = {
  appointmentModel,
};
