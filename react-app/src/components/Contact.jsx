import {
  Box,
  Typography,
  Divider,
  IconButton,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "motion/react";

function Contact() {
  const iconStyle = {
    color: "primary.main",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      color: "primary.contrast", // MUI blue
    },
  };
  const MotionContainer = motion.create(Container);

  return (
    <Box
      component="section"
      id="contact"
      width="100%"
      sx={{
        textAlign: "center",
        pb: 10,
        pt: 5,
        backgroundColor: "background.lighter",
      }}
    >
      <MotionContainer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h3" gutterBottom>
          Contact
        </Typography>
        <Divider
          variant="middle"
          sx={{
            backgroundColor: "primary.main",
            height: "4px",
            width: "100px",
            mb: "30px",
            mx: "auto",
          }}
        />

        <Container>
          <Card
            sx={{
              backgroundColor: "background.main",
              color: "text.main",
              maxWidth: 400,
              minWidth: "50%",
              margin: "auto",
              borderRadius: 3,
              boxShadow: 4,
              textAlign: "center",
              p: 2,
            }}
          >
            <CardContent>
              <Typography variant="body1">
                Let's connect! Click one of the links below to contact me via
                LinkedIn or Email, or feel free to checkout my GitHub.
              </Typography>

              <Divider
                variant="middle"
                sx={{
                  backgroundColor: "text.lighter",
                  height: "1px",
                  width: "90%",
                  mt: "20px",
                  mb: "20px",
                  mx: "auto",
                }}
              />

              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <IconButton
                  component="a"
                  href="https://github.com/williamandrews2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  sx={iconStyle}
                >
                  <FaGithub size={72} />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/william-cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={iconStyle}
                >
                  <FaLinkedin size={72} />
                </IconButton>

                <IconButton
                  component="a"
                  href="mailto:william@williamandrews.net"
                  aria-label="Email"
                  sx={iconStyle}
                >
                  <FaEnvelope size={72} />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </MotionContainer>
    </Box>
  );
}

export default Contact;
