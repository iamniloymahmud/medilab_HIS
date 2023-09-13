import React from "react";
import AppointHero from "../component/AppointHero";
import { Typography, Box, useTheme } from "@mui/material";
import AppointmentForm from "../component/Forms/AppointmentForm";

const Appointment = () => {
    const theme = useTheme();
  return (
    <>
      <AppointHero />
      <Box>
        <Typography variant="h4" sx={{color: theme.palette.text.primary, textAlign: 'center', fontWeight: 'bold'}}>Appointment</Typography>
        <AppointmentForm />
      </Box>
    </>
  );
};

export default Appointment;
