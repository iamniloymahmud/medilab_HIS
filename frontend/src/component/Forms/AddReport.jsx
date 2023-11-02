import React, { useEffect, useState } from "react";
import Header from "../Header";
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  useTheme,
  Typography
} from "@mui/material";
import { useUploaderMutation } from "../../redux/Api/patientApi";

const AddReport = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [patient, setPatient] = useState("");
  const [type, setType] = useState("xray");
  const [file, setFile] = useState("");
  const [uploader, {data, error, isError, isLoading, isSuccess}] = useUploaderMutation();
  
  const handleSubmit = () => {
    const form = new FormData();
    form.append("patient", patient);
    form.append("file", file);
    form.append("type", type);
    uploader(form);
  };
  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
      setPatient("");
      setFile("");
      setType("x-ray");
    }
  }, [isSuccess]);
  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 10,
      }}
    >
      <Header title={"Add a Patient Report"} />
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
        {/* Patient ID */}
        <TextField
          required
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          label="Patient ID"
          type="text"
          error={error?.data?.patient}
          helperText={
            error?.data?.patient ? error?.data?.patient?.msg : "Patient ID"
          }
          InputLabelProps={{
            style: {
              color: theme.palette.text.primary,
              fontSize: "17px",
              borderColor: theme.palette.text.primary,
            },
          }}
        />
        {/* Report Type */}
        <FormControl fullWidth>
          <InputLabel>Test Type</InputLabel>
          <Select label="Role" fullWidth value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value={"xray"} selected>X-Ray</MenuItem>
            <MenuItem value={"ultrasound"}>Ultrasound</MenuItem>
            <MenuItem value={"mri"}>MRI</MenuItem>
            <MenuItem value={"ctscan"}>CT Scan</MenuItem>
          </Select>
        </FormControl>
        <Box width={"320px"}>
          <Button
            sx={{
              width: "100%",
              borderColor: error?.data?.file
                ? "red"
                : theme.palette.text.primary,
            }}
            variant="outlined"
            component="label"
          >
            <Typography
              color={error?.data?.file ? "red" : theme.palette.text.primary}
            >
              Upload Report File
            </Typography>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="*/*"
              hidden
            />
          </Button>
          {file && <Typography textAlign={"right"}>{file?.name}</Typography>}
          {error?.data?.file && (
            <Typography textAlign={"left"} color={"red"}>
              {error?.data?.file?.msg}
            </Typography>
          )}
        </Box>
        <Button color="success" variant="contained" onClick={() => handleSubmit()}>
          Submit
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
    </Box>
  );
};

export default AddReport;
