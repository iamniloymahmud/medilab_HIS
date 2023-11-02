import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import img from "../assets/pictures/Hospital patient-pana.png";

const HomeHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        height: '90vh',
        alignItems: 'center'
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              m: "10px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                width: "70%",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Welcome to MediLab Hospital
            </Typography>
            <Typography
              mt={"10px"}
              sx={{
                width: "70%",
                textAlign: "left",
              }}
            >
              This is a full-service social media agency. We offer businesses
              innovative solutions that deliver the right type of audience to
              you in the most effective strategies possible. We strive to
              develop a community around your business, polishing your branding,
              and improving your public relations.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
            <Box component={"img"} src={img} width={"500px"} height={"500px"} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeHero;
