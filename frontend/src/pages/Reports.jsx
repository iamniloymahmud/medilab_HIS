import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Link, Typography } from "@mui/material";
import { useGetReprtsMutation } from "../redux/Api/patientApi";
import { useSelector } from "react-redux";
import Header from "../component/Header";
import photo from "../assets/pictures/DICOM.png";
import moment from "moment";

const Reports = () => {
  const { type } = useParams();
  const user = useSelector((state) => state.global.user);
  const [getReprts, { data, error, isLoading, isSuccess }] =
    useGetReprtsMutation();
  useEffect(() => {
    getReprts({
      user,
      type: type,
    });
  }, []);

  return (
    <Box mt={"4.5rem"} width={"100%"} px={"20px"}>
      <Box display={"flex"} gap={"10px"} mb={"10px"}>
        <Header title={`${type} files`} />
        <Button variant="outlined">
          <Link
            href={import.meta.env.VITE_APP_DICOM}
            underline="none"
          >
            Analyze Your Report
          </Link>
        </Button>
      </Box>
      <Box display={"flex"}>
        {data?.length ? (
          data.map((t, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box component={"img"} src={photo} width={"100px"} />
                <Typography>
                  {moment(t.createdAt).format("DD MMMM, yy (hh:mm A)")}
                </Typography>
                <Button variant="outlined">
                  <Link underline="none" href={`http://localhost:5000/${t.path}`}>
                    Download
                  </Link>
                </Button>
              </Box>
            );
          })
        ) : (
          <Typography variant="h3" textAlign={"center"} width={"100%"}>
            No files to show
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Reports;
