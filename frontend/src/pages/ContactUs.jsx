import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { FacebookOutlined, Instagram, LinkedIn } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
        mt: "6rem",
        alignItems: "center",
      }}
    >
      <Box width={"90%"}>
        <Box pb={"2rem"} display={"flex"} flexDirection={"column"}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            mt={"10px"}
            textAlign={"justify"}
            variant="h5"
            sx={{ px: "2rem" }}
          >
            Welcome to Medilab Hospital's Contact Us page! We are dedicated to
            providing exceptional healthcare services and ensuring that your
            inquiries, concerns, and feedback are addressed promptly. Please
            feel free to reach out to us through the following channels:
          </Typography>
          <Typography
            textAlign={"justify"}
            fontWeight={"bold"}
            variant="h4"
            sx={{ px: "2rem" }}
          >
            Hospital Address:
          </Typography>
          <Typography
            mt={"10px"}
            textAlign={"justify"}
            variant="h5"
            sx={{ px: "2rem" }}
          >
            Munshipara, Khulna - 9000
          </Typography>
        </Box>
        <Box pb={"2rem"} display={"flex"} flexDirection={"column"}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Connect with Us Online
          </Typography>
          <Typography
            mt={"10px"}
            variant="h5"
            textAlign={"justify"}
            sx={{ px: "2rem" }}
          >
            Your feedback is crucial in helping us improve our services. We
            welcome any suggestions or comments you might have. Please use our
            contact details or visit our hospital to speak with our customer
            service representatives. Stay updated with our latest news, health tips, and events by
            following us on our social media platforms. At Medilab Hospital, we
            prioritize your well-being and are committed to providing top-notch
            healthcare services. Thank you for choosing us. We look forward to
            serving you and meeting your healthcare needs. Find us at:
          </Typography>
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <IconButton>
              <FacebookOutlined fontSize="large" />
            </IconButton>
            <IconButton>
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton>
              <Instagram fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
