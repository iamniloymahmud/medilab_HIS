import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    useTheme,
    Alert,
    Snackbar
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { DatePicker } from "@mui/x-date-pickers";
  import moment from "moment";
  
  const AppointmentForm = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState('');
    const [name,setName] = useState('');
    const [roll, setRoll] = useState('');
    const [caption, setCaption] = useState('');
    const [description, setDescription] = useState('');
    const [place, setPlace] = useState('');
    const [date,setDate] = useState(moment(new Date().toISOString()));
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append('name', name);
      form.append('file', file);
      form.append('roll', roll);
      form.append('caption', caption);
      form.append('description', description);
      form.append('place', place);
      form.append('date', date.toISOString());
      // console.log(file,name,roll,caption,description,place,date);
    }  
  
    // useEffect(() => {
    //   if(isSuccess){
    //     setOpen(true);
    //     setName('');
    //     setFile('');
    //     setRoll('');
    //     setCaption('');
    //     setDescription('');
    //     setPlace('');
    //   }
    // }, [isSuccess])
    const error = {};
    const data = {};
    return (
      <Container
        mx={"auto"}
        sx={{
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
          my: "4.5rem",
          py: "2rem",
        }}
      >
        <Box
          component="form"
          onSubmit={(e) => handleSubmit(e)}
          sx={{
            "& .MuiTextField-root": { width: "320px" },
            display: "flex",
            flexDirection: "column",
            borderRadius: "0.55rem",
            pt: 2,
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
          gap={1.75}
        >
          {/* Name */}
          <TextField
            required
            label="Full Name"
            error={error?.data?.name}
            helperText={error?.data?.name ? error?.data?.name?.msg :"Certificate Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{
              style: {
                color: theme.palette.text.primary,
                fontSize: "17px",
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          {/* Email */}
          <TextField
            required
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            label="Email"
            type="email"
            error={error?.data?.roll}
            helperText={error?.data?.roll ? error?.data?.roll?.msg :"Email Address"}
            InputLabelProps={{
              style: {
                color: theme.palette.text.primary,
                fontSize: "17px",
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          {/* Doctor Name */}
          <TextField
            required
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            label="Doctor Name"
            error={error?.data?.caption}
            helperText={error?.data?.caption ? error?.data?.caption?.msg :"Enter the Doctor Name"}
            InputLabelProps={{
              style: {
                color: theme.palette.text.primary,
                fontSize: "17px",
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          {/* Address */}
          <TextField
            label="Address"
            value={description}
            multiline
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
            error={error?.data?.description}
            helperText={error?.data?.description ? error?.data?.description?.msg :"Your Address"}
            InputLabelProps={{
              style: {
                color: theme.palette.text.primary,
                fontSize: "17px",
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          {/* Gender */}
          <TextField
            label="Gender"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            error={error?.data?.place}
            helperText={error?.data?.place ? error?.data?.place?.msg :"Gender"}
            required
            InputLabelProps={{
              style: {
                color: theme.palette.text.primary,
                fontSize: "17px",
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          {/* Date Picker */}
          <DatePicker
            value={date}
            onChange={(newValue) => setDate(newValue)}  
            sx={{
              label: {
                color: theme.palette.text.primary,
                fontSize: "17px",
                borderColor: theme.palette.text.primary,
              },
              svg: {
                color: "#ff1a1a",
              },
            }}
            label="Appointment Date"
          />
          <Button  color="success" variant="contained" >
            Submit
          </Button>
        </Box>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            {data?.msg}
          </Alert>
        </Snackbar>
      </Container>
    );
  };
  
  export default AppointmentForm;