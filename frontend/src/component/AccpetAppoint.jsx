import React from "react";
import {Box,Button} from '@mui/material';
import { useSetAppointmentMutation } from "../redux/Api/patientApi";

const AccpetAppoint = ({id}) => {
    const [setAppointment, {data, isLoading, isSuccess, error}] = useSetAppointmentMutation();
    const handlesubmit = (e) => {
        setAppointment({
            id: id.row._id,
            prop: e,
        })
        window.location.reload(false);
    }
  return (
    <Box gap={2} display={"flex"}>
      <Button variant="outlined" color="success" onClick={() => handlesubmit('approved')}>
        Accpet
      </Button>
      <Button variant="outlined" color="error" onClick={() => handlesubmit('reject')}>
        Reject
      </Button>
    </Box>
  );
};

export default AccpetAppoint;
