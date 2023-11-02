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
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { usePatientSingUpMutation } from "../redux/Api/patientApi";

const SignUp = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(moment(new Date().toISOString()));

  const [patientSingUp, { data, error, isLoading, isSuccess }] =
    usePatientSingUpMutation();

  const handleSubmit = () => {
    patientSingUp({
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
          helperText={
            error?.data?.name ? error?.data?.name?.msg : "Enter Your Name"
          }
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
        <Box>
          <DatePicker
            value={date}
            onChange={(newValue) => setDate(newValue)}
            sx={{
              label: {
                color: error?.data?.date ? theme.palette.error.main : theme.palette.text.primary,
                fontSize: "17px",
                borderColor: error?.data?.date ? theme.palette.error.main : theme.palette.text.primary,
              },
              svg: {
                color: "#ff1a1a",
              },
            }}
            label="Date of Birth"
          />
          {error?.data?.date && <Typography fontSize={'12px'} color={theme.palette.error.main}>{error?.data?.date ? error?.data?.date?.msg : "Date of Birth"}</Typography>}
        </Box>
        {/* Gender */}
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            value={gender}
            label="Gender"
            fullWidth
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
            error?.data?.password
              ? error?.data?.password?.msg
              : "Enter Your Password"
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
        <Button
          onClick={() => handleSubmit()}
          color="success"
          variant="contained"
        >
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

export default SignUp;
