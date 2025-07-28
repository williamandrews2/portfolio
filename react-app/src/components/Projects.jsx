import { Box, Typography, Grid, Divider, Container, Card } from "@mui/material";
import battleship from "../assets/battleship-mockup.jpg";
import geoDash from "../assets/endless-runner-screenshot.png";
import pixelStrike from "../assets/FPS-screenshot.png";
import swiftask from "../assets/swiftask-mockup.png";
import topicLadder from "../assets/topicladder.webp";
import weatherly from "../assets/weatherly-mockup.png";

function Projects() {
  const projects = [];

  return (
    <Box component="section" id="projects" sx={{ pt: "60px", pb: "60px" }}>
      <Container>
        <Typography gutterBottom align="center" component="h3" variant="h3">
          Projects
        </Typography>
        <Divider
          variant="middle"
          sx={{ backgroundColor: "primary.main", height: "4px" }}
        />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={4}
              sx={{
                display: "flex",
                height: "100%",
                flexDirection: {
                  xs: "column",
                  lg: "row",
                },
              }}
            ></Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
