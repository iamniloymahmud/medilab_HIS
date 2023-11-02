import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { useLoginMutation } from "../redux/Api/loginApi";

const SignIn = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [login, {data,isSuccess,error, isError}] = useLoginMutation();
  const handleSubmit = () => {
    login({
      email,
      role,
      password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
      setEmail("");
      setPassword("");
      setRole("patient");
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
        <Header title={`Sign In to ${import.meta.env.VITE_APP_NAME}`} />
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
        {/* Password */}
        <TextField
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
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
        />
        {/* Role */}
        <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select value={role} label="Role" fullWidth onChange={(e) => setRole(e.target.value)}>
            <MenuItem value={"patient"} selected>Patient</MenuItem>
            <MenuItem value={"doctor"}>Doctor</MenuItem>
            <MenuItem value={"admin"}>Admin</MenuItem>
          </Select>
        </FormControl>
        <Button color="success" variant="contained" onClick={() => handleSubmit()}>
          Sign In
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

export default SignIn;
