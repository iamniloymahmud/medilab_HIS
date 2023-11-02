import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import AppointmentList from "../component/AppointmentList";
import AddReport from "../component/Forms/AddReport";
import AddDoctor from "../component/Forms/AddDoctor";

const Admin = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: "4.5rem" }}>
      <Box width={"100%"}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          variant="fullWidth"
        >
          <Tab value="one" label="Appointment List" />
          <Tab value="two" label="Add a Report" />
          <Tab value="three" label="Add a Doctor" />
        </Tabs>
      </Box>
      {value == "one" && <AppointmentList />}
      {value == "two" && <AddReport />}
      {value == "three" && <AddDoctor />}
    </Box>
  );
};

export default Admin;
