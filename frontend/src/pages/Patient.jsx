import React, { useEffect } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import photo from "../assets/pictures/camera-icon.png";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import { useGetPatientListMutation } from "../redux/Api/patientApi";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

const cols = [
  {
    field: "id",
    headerName: "SL",
    width: 90,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "Patient Email",
    type: "number",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "doctorName",
    headerName: "Requested Doctor",
    type: "text",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "_id",
    headerName: "Approval",
    width: 200,
    headerAlign: "center",
    align: "center",
    renderCell: (cellVal) => {
      const row = cellVal.row;
      let data;
      if(row.approved){
        data = 'Approved'
      }
      if(row.reject){
        data = 'Rejected'
      }
      if(!row.approved && !row.reject){
        data = 'Pending'
      }
      return <Button variant="outlined" color="success">{data}</Button>;
    },
  },
  {
    field: "date",
    headerName: "Your Date (if approved)",
    width: 250,
    headerAlign: "center",
    align: "center",
    renderCell: (cellVal) => {
      const row = cellVal.row;
      let data = moment(cellVal.row.updateAt).format("DD MMMM, yy (hh:mm A)")
      return <Button variant="outlined" color="success">{data}</Button>;
    },
  },
];

const Patient = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.global.user);
  const [getPatientList, { data, isLoading, error, isError }] =
    useGetPatientListMutation();
  const finalDataList = data?.map((apoints, idx) => {
    return {
      ...apoints,
      id: idx + 1,
    };
  });
  useEffect(() => {
    if (user) {
      getPatientList({
        email: user.email,
      });
    }
  }, []);
  return (
    <Box sx={{ width: "100%", mt: "4.5rem" }}>
      <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Header title={"Report Files"} />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={"15px"}>
          <Box
            component={"div"}
            onClick={() => navigate("/patient/xray")}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "320px",
              cursor: "pointer",
            }}
          >
            <Box
              component={"img"}
              src={photo}
              height={"200px"}
              width={"200px"}
            />
            <Typography variant="h2">X-ray</Typography>
          </Box>
          <Box
            component={"div"}
            onClick={() => navigate("/patient/mri")}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "320px",
              cursor: "pointer",
            }}
          >
            <Box
              component={"img"}
              src={photo}
              height={"200px"}
              width={"200px"}
            />
            <Typography variant="h2">MRI</Typography>
          </Box>
          <Box
            component={"div"}
            onClick={() => navigate("/patient/ultrasound")}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "320px",
              cursor: "pointer",
            }}
          >
            <Box
              component={"img"}
              src={photo}
              height={"200px"}
              width={"200px"}
            />
            <Typography variant="h2">Ultrasound</Typography>
          </Box>
          <Box
            component={"div"}
            onClick={() => navigate("/patient/ctscan")}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "320px",
              cursor: "pointer",
            }}
          >
            <Box
              component={"img"}
              src={photo}
              height={"200px"}
              width={"200px"}
            />
            <Typography variant="h2">CT Scan</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        pt={5}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={'column'}
      >
        {finalDataList?.length ? <Typography variant="h2">Your Appointment History</Typography> : null}
        <Box sx={{ height: 400, pt: 5 }}>
          {finalDataList?.length ? (
            <DataGrid
              rows={finalDataList}
              columns={cols}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection={false}
              disableRowSelectionOnClick
            />
          ) : (
            <Typography textAlign={"center"} variant="h3">
              No Appointment History
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Patient;
