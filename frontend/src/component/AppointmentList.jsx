import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetListQuery } from "../redux/Api/patientApi";
import AccpetAppoint from "./AccpetAppoint";

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
      return <AccpetAppoint id={cellVal} />;
    },
  },
];

const AppointmentList = () => {
  const { data: dataList, isLoading, error: listError } = useGetListQuery();
  const finalDataList = dataList?.map((apoints, idx) => {
    return {
      ...apoints,
      id: idx + 1,
    };
  });
  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <Box sx={{ height: 400 }}>
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
        ) : <Typography textAlign={'center'} variant="h3">No Pending Appointment</Typography>}
      </Box>
    </Box>
  );
};

export default AppointmentList;
