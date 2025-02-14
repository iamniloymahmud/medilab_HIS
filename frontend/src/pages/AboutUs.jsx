import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import img from "../assets/pictures/About us page-bro.png";

const AboutUs = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
        mt: "6rem",
        alignItems: 'center'
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
            Our Mission
          </Typography>
          <Typography mt={"10px"} textAlign={'justify'} variant="h5" sx={{ px: "2rem" }}>
            At {import.meta.env.VITE_APP_NAME}, our mission is to provide the highest quality
            healthcare services to our patients, delivered with compassion and
            dedication. We are committed to improving the health and well-being
            of our community by offering a wide range of medical services that
            are both comprehensive and accessible.At {import.meta.env.VITE_APP_NAME}, we
            understand the trust our patients place in us, and we honor that
            trust by consistently delivering high-quality care that promotes
            health, healing, and hope. Our mission drives us to create a
            healthier, happier, and more vibrant community, one patient at a
            time.
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
            Our Vision
          </Typography>
          <Typography mt={"10px"} variant="h5" textAlign={'justify'} sx={{ px: "2rem",}}>
          {import.meta.env.VITE_APP_NAME} aspires to be the leading healthcare institution in
            our region, setting the standard for excellence in patient-centered
            care and medical innovation. We aim to be recognized for our
            exceptional clinical outcomes, state-of-the-art medical facilities,
            and a team of renowned healthcare professionals who continually push
            the boundaries of medical science. We envision a future where every
            patient receives compassionate, personalized care that considers
            their unique needs, values, and preferences. Our goal is to create
            an environment where patients feel heard, supported, and empowered
            in their healthcare journey. We are committed to being at the
            forefront of medical innovation, embracing the latest technology,
            treatments, and research. Our vision includes pioneering new
            approaches to healthcare that improve outcomes and enhance the
            patient experience.
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
            Core Values
          </Typography>
          <Typography mt={"10px"} textAlign={'justify'} variant="h5" sx={{ px: "2rem" }}>
            We treat every patient and their families with empathy, kindness,
            and respect. Compassion is at the heart of everything we do, and we
            understand that healthcare can be a vulnerable time for individuals.
            We are here to provide support and comfort. We are committed to
            excellence in all aspects of our work. From our highly trained
            medical professionals to our state-of-the-art technology, we never
            compromise on quality. We constantly strive to improve and provide
            the best possible care. We uphold the highest ethical standards in
            all our interactions. Trust is the foundation of our relationships
            with patients, their families, and the community. We are
            transparent, honest, and accountable in our actions and decisions.
            We embrace innovation and continuously seek new and better ways to
            deliver care. We are committed to staying at the forefront of
            medical advancements to provide the best possible outcomes for our
            patients. We encourage creativity and a culture of learning.Our
            patients are our priority. We actively involve patients in their
            healthcare decisions, respect their unique needs, and foster open
            communication to build trust and lasting relationships. We believe
            that healthcare should be personalized and responsive to individual
            needs. We believe in the power of teamwork and collaboration. We
            work closely with our colleagues, healthcare partners, and the
            community to provide comprehensive and coordinated care. Together,
            we can achieve better health outcomes for our patients. We are
            deeply committed to our community's well-being. Through health
            education programs, wellness initiatives, and outreach efforts, we
            aim to make a positive impact on the lives of the people we serve.
            We believe in giving back to the community that supports us. Patient
            safety is paramount. We maintain a culture of safety where all staff
            members are vigilant in ensuring the well-being of our patients. We
            adhere to strict protocols and best practices to minimize risks and
            ensure a safe healthcare environment. We celebrate diversity and
            inclusion in our hospital. We recognize that a diverse team brings a
            wealth of perspectives and experiences that enrich our care. We are
            committed to creating an inclusive and equitable environment for
            all. We are dedicated to ongoing improvement in all aspects of our
            hospital. We encourage feedback from patients and staff to identify
            areas for enhancement and strive for continuous growth and
            excellence. These core values guide our actions and decisions at
            {import.meta.env.VITE_APP_NAME}, shaping our culture and ensuring that we provide
            the highest quality healthcare services with integrity, compassion,
            and a commitment to excellence.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
