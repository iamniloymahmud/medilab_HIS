import React from "react";
import { useGetDoctorsAppointmentsQuery } from "../redux/Api/doctorApi";
import { Box, Button, Typography } from "@mui/material";
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
    field: "name",
    headerName: "Patient Name",
    width: 250,
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
      if (row.approved) {
        data = "Approved";
      }
      if (row.reject) {
        data = "Rejected";
      }
      if (!row.approved && !row.reject) {
        data = "Pending";
      }
      return (
        <Button variant="outlined" color="success">
          {data}
        </Button>
      );
    },
  },
  {
    field: "date",
    headerName: "Approved Date",
    width: 250,
    headerAlign: "center",
    align: "center",
    renderCell: (cellVal) => {
      const row = cellVal.row;
      let data = moment(cellVal.row.updateAt).format("DD MMMM, yy (hh:mm A)");
      return (
        <Button variant="outlined" color="success">
          {data}
        </Button>
      );
    },
  },
];

const Doctor = () => {
  const { data, isLoading, error, isError } = useGetDoctorsAppointmentsQuery();
  console.log(data, isLoading, error, isError);
  const finalDataList = data?.map((apoints, idx) => {
    return {
      ...apoints,
      id: idx + 1,
    };
  });
  return (
    <Box sx={{ width: "90%", mt: "4.5rem", display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
        <Box>
          {finalDataList?.length ? (
            <Typography variant="h2">Your Appointments Today</Typography>
          ) : (
            <Typography variant="h2">No Appointment Today</Typography>
          )}
        </Box>
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

export default Doctor;
