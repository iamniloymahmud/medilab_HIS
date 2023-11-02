import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import Header from "../Header";
import { useDoctorSingUpMutation } from "../../redux/Api/patientApi";

const AddDoctor = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(moment(new Date().toISOString()));
  const [doctorSingUp, {data, error,isSuccess, isLoading}] = useDoctorSingUpMutation();
  const handleSubmit = () => {
    doctorSingUp({
      name,
      email,
      mobile,
      gender,
      password,
      date,
    });
  };
  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
      setName("");
      setEmail("");
      setPassword("");
      setGender("male");
      setMobile("");
    }
  }, [isSuccess]);

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
      <Header title={`Patient Register to ${import.meta.env.VITE_APP_NAME}`} />
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          type="text"
          error={error?.data?.name}
          helperText={error?.data?.name ? error?.data?.name?.msg : "Full Name"}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          type="email"
          error={error?.data?.email}
          helperText={
            error?.data?.email ? error?.data?.email?.msg : "Email Address"
          }
          InputLabelProps={{
            style: {
              color: theme.palette.text.primary,
              fontSize: "17px",
              borderColor: theme.palette.text.primary,
            },
          }}
        />
        {/* Mobile */}
        <TextField
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          label="Mobile"
          type="text"
          error={error?.data?.mobile}
          helperText={
            error?.data?.mobile ? error?.data?.mobile?.msg : "Mobile Number"
          }
          InputLabelProps={{
            style: {
              color: theme.palette.text.primary,
              fontSize: "17px",
              borderColor: theme.palette.text.primary,
            },
          }}
        />
        {/* Date of Birth */}
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
          label="Date of Birth"
        />
        {/* Gender */}
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            label="Gender"
            fullWidth
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"male"} selected>
              Male
            </MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"others"}>Others</MenuItem>
          </Select>
        </FormControl>
        {/* Password */}
        <TextField
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type={show ? "text" : "password"}
          error={error?.data?.password}
          helperText={
            error?.data?.password ? error?.data?.password?.msg : "Password"
          }
          InputLabelProps={{
            style: {
              color: theme.palette.text.primary,
              fontSize: "17px",
              borderColor: theme.palette.text.primary,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShow((prev) => !prev)}
                >
                  {show ? (
                    <VisibilityOutlined fontSize="small" />
                  ) : (
                    <VisibilityOffOutlined fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* confirm password */}
        <Button color="success" variant="contained" onClick={() => handleSubmit()}>
          Register
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {data?.msg}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddDoctor;
