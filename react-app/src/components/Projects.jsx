import { Box, Typography, Grid, Divider, Container, Card } from "@mui/material";
import battleship from "../assets/battleship-mockup.jpg";
import geoDash from "../assets/endless-runner-screenshot.png";
import pixelStrike from "../assets/FPS-screenshot.png";
import swiftask from "../assets/swiftask-mockup.png";
import topicLadder from "../assets/topicladder.webp";
import weatherly from "../assets/weatherly-mockup.png";
import { WidthFull } from "@mui/icons-material";

function Projects() {
  const projects = [
    {
      imageSrc: battleship,
      title: "Battleship",
      description:
        "A classic game of Battleship built with vanilla JavaScript, using Webpack, Test-Driven Development (TDD) with Jest, and modular ES6 architecture. Players can place ships, attack opponents, and watch explosions as they battle to sink each other's fleets.",
    },
  ];

  return (
    <Box component="section" id="projects" sx={{ pt: "60px", pb: "60px" }}>
      <Container>
        <Typography gutterBottom align="center" component="h3" variant="h3">
          Projects
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

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.title}>
              <Card
                elevation={4}
                sx={{
                  display: "flex",
                  height: "100%",
                  flexDirection: {
                    xs: "column",
                    lg: "row",
                    backgroundColor: "background.lighter",
                  },
                }}
              >
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  style={{ width: "100%" }}
                />

                <Typography component="h3" variant="h3">
                  {project.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
