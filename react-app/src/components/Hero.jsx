import pfp from "../assets/profilepicture.webp";
import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        padding: 4,
        backgroundColor: "background.main",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        direction={isMobile ? "column-reverse" : "row"}
      >
        {/* Left column (text) will take up all 12 columns on small screen and half on medium. */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Typography variant="h5" color="text.main" gutterBottom>
              <Box sx={{ color: "primary.main", display: "inline" }}>
                HELLO,
              </Box>{" "}
              I'm William Andrews II
            </Typography>

            <Typography variant="h2" fontWeight="light" gutterBottom>
              Software Engineer
            </Typography>

            <Typography
              variant="h6"
              color="text.lighter"
              fontWeight="light"
              marginBottom={3}
            >
              Passionate about technology, finance, and cars.
            </Typography>

            <Button
              variant="contained"
              href="#projects"
              sx={{
                marginRight: 3,
              }}
            >
              SEE MY WORK
            </Button>
            <Button variant="outlined" href="#contact">
              CONTACT ME
            </Button>
          </Box>
        </Grid>

        {/* Right column (picture) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
            }}
          >
            <Box
              component="img"
              src={pfp}
              alt="profile_picture"
              sx={{
                width: "80%",
                maxWidth: 300,
                borderRadius: "50%",
                boxShadow: 3,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
