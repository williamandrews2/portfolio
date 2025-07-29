import {
  Box,
  Typography,
  Grid,
  Divider,
  Container,
  Card,
  CardMedia,
  CardContent,
  useTheme,
} from "@mui/material";
import { Code } from "@mui/icons-material";

import battleship from "../assets/battleship.webp";
import geoDash from "../assets/geodash.webp";
import pixelStrike from "../assets/pixelstrike.webp";
import swiftask from "../assets/swiftask.webp";
import topicLadder from "../assets/topicladder.webp";
import weatherly from "../assets/weatherly.webp";
import paypenguin from "../assets/paypenguin.webp";

function Projects() {
  const projects = [
    {
      imageSrc: paypenguin,
      title: "PayPenguin",
      description:
        "PayPenguin is a simple and sleek web app created for users to keep track of their monthly bills. The app is built in React JS, and utilizes localStorage to keep the user's persistent data. You can add, edit, or delete bills, and sort them by date, amount, or paid status. You can use the Reset Status button to reset the paid status of all bills at the end of the month. This is a project I am currently working on, and will soon become a full stack app that can also store your data in order to be accessed from any device.",
    },

    {
      imageSrc: battleship,
      title: "Battleship",
      description:
        "A classic game of Battleship built with vanilla JavaScript, using Webpack, Test-Driven Development (TDD) with Jest, and modular ES6 architecture. Players can place ships, attack opponents, and watch explosions as they battle to sink each other's fleets.",
    },

    {
      imageSrc: weatherly,
      title: "Weatherly",
      description:
        "Weatherly is a responsive weather app built with vanilla JavaScript, HTML, and CSS, and modularized using Webpack. Created as part of The Odin Project curriculum, it showcases practical JavaScript skills such as API integration, modular code structure, form handling, and responsive UI design. Weatherly fetches real-time data from the Visual Crossing API and features theme toggling, persistent settings, city search, and mobile-friendly layouts—delivering a smooth and modern user experience.",
    },

    {
      imageSrc: swiftask,
      title: "SwifTask",
      description:
        "SwifTask is a minimalist task management app built from scratch using vanilla JavaScript, HTML, and CSS, with a modular architecture powered by Webpack. Developed as part of The Odin Project, it emphasizes clean code structure, dynamic UI rendering, and local storage for data persistence. Users can create tasks with due dates and priorities, organize them by project, and mark them as complete—all within a responsive and intuitive interface.",
    },

    {
      imageSrc: pixelStrike,
      title: "PixelStrike",
      description:
        "PixelStrike is a fast-paced multiplayer FPS game built in Unity/C#, featuring real-time networking powered by Photon Unity Networking (PUN). Designed with a modular architecture and responsive UI, the game includes essential multiplayer mechanics such as player health systems, a live leaderboard, and a dynamic lobby system. Players can join matches, take damage, track scores, and personalize their experience with persistent player names saved via PlayerPrefs.",
    },

    {
      imageSrc: geoDash,
      title: "GeoDash",
      description:
        "GeoDash is a dynamic 3D game developed in Unity that challenges players to run endlessly through a procedurally generated path while collecting coins and avoiding obstacles. Featuring smooth, responsive controls and immersive background music, the game offers a continuous, engaging experience designed to test reflexes and encourage high-score competition. The game speed progressively increases over time, adding to the challenge. Key features include a coin collection system, dynamic obstacle spawning, real-time score tracking, and an intuitive user interface.",
    },

    {
      imageSrc: topicLadder,
      title: "TopicLadder (Capstone)",
      description:
        "The Poll Creation and Voting App delivers a smooth and immersive user experience for those looking to engage in polls without the need for user authentication. I was responsible for designing and implementing the UI using custom CSS, ensuring a clean, intuitive, and responsive interface. This app offers a strong, real-time, and user-centric platform for both creating and participating in polls, making it accessible to a broad audience.",
    },
  ];

  const theme = useTheme();

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
            <Grid size={{ lg: 12, sm: 6, xs: 12 }} key={project.title}>
              <Card
                elevation={5}
                sx={{
                  display: "flex",
                  height: "100%",
                  backgroundColor: "background.lighter",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    lg: "row",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    width="100%"
                    image={project.imageSrc}
                    alt={project.title}
                    sx={{
                      width: { lg: 400, sm: "100%" },
                      height: { lg: 300, sm: "100%" },
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography
                    component="h4"
                    variant="h4"
                    gutterBottom
                    sx={{ color: "primary.main" }}
                  >
                    {project.title}
                  </Typography>

                  <Grid container>
                    <Grid size={{ sm: 1 }}>
                      <Code sx={{ color: theme.palette.primary.contrast }} />
                    </Grid>

                    <Grid size={{ sm: 11 }}>
                      <Typography variant="body1" sx={{ color: "text.main" }}>
                        {project.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
