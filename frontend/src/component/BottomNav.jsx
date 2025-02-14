import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Bloodtype, LocalPhone, MailOutline, LocationOn } from "@mui/icons-material";

const BottomNav = () => {
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      mx={"2rem"}
      minHeight={"200px"}
      sx={{
        backgroundColor: theme.palette.background.alt,
        borderColor: theme.palette.text.primary,
        borderTop: 1,
      }}
    >
      <Grid container spacing={2} py={2}>
        <Grid item xs={3}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Bloodtype fontSize={"large"} />
            <Typography variant="h5" fontWeight={"bold"}>
              {import.meta.env.VITE_APP_NAME}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          {/* <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={1}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Quick Links
            </Typography>
            <Typography variant="h6">Home</Typography>
            <Typography variant="h6">Appointment</Typography>
            <Typography variant="h6">Service</Typography>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="h6">Contact Us</Typography>
          </Box> */}
        </Grid>
        <Grid item xs={3}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={1}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Hours
            </Typography>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Box width={'60%'} display={'flex'} justifyContent={'space-between'}>
                <Typography variant="h6" textAlign={'left'}>Monday</Typography>
                <Typography variant="h6">9.00-18.00</Typography>
              </Box>
              <Box width={'60%'} display={'flex'} justifyContent={'space-between'}>
                <Typography variant="h6">Tuesday</Typography>
                <Typography variant="h6">9.00-18.00</Typography>
              </Box>
              <Box width={'60%'} display={'flex'} justifyContent={'space-between'}>
                <Typography variant="h6">Wednesday</Typography>
                <Typography variant="h6">9.00-18.00</Typography>
              </Box>
              <Box width={'60%'} display={'flex'} justifyContent={'space-between'}>
                <Typography variant="h6">Thursday</Typography>
                <Typography variant="h6">9.00-18.00</Typography>
              </Box>
              <Box width={'60%'} display={'flex'} justifyContent={'space-between'}>
                <Typography variant="h6">Friday</Typography>
                <Typography variant="h6">9.00-18.00</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={1}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Contact
            </Typography>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Box width={'60%'} display={'flex'} justifyContent={'space-between'}>
                <LocalPhone fontSize={"medium"}/>
                <Typography variant="h6">+088-000-000-000</Typography>
              </Box>
              <Box width={'60%'} display={'flex'} justifyContent={'space-between'}>
                <MailOutline fontSize="medium"/>
                <Typography variant="h6">info@kuet.com</Typography>
              </Box>
              <Box width={'60%'} display={'flex'} justifyContent={'space-between'}>
                <LocationOn fontSize="medium" />
                <Typography variant="h6">Khulna</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BottomNav;
