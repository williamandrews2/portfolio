import {
  Box,
  Typography,
  Grid,
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Code } from "@mui/icons-material";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiUnity,
  SiVite,
  SiWebpack,
  SiJest,
  SiGit,
  SiMui,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "motion/react";

function AboutMe() {
  const theme = useTheme();

  const about = [
    {
      text: "I'm a software developer with over three years of experience building web interfaces and interactive applications. I earned my B.S. in Computer Science from the University of Texas at Tyler in 2024 and have continued to grow through both work and personal projects.",
      id: 1,
    },
    {
      text: "I'm passionate about front-end development and crafting clean, intuitive user experiences, while always staying open to learning new technologies and approaches.",
      id: 2,
    },
    {
      text: "Outside of coding, I enjoy car culture, creative projects, and staying connected with friends — a balance that fuels both my work and personal growth.",
      id: 3,
    },
  ];

  const skills = [
    { icon: <SiJavascript title="JavaScript" />, name: "JavaScript" },
    { icon: <SiReact title="React JS" />, name: "React JS" },
    { icon: <SiHtml5 title="HTML5" />, name: "HTML5" },
    { icon: <SiCss3 title="CSS3" />, name: "CSS3" },
    { icon: <FaJava title="Java" />, name: "Java" },
    { icon: <SiUnity title="Unity" />, name: "Unity" },
    { icon: <SiVite title="Vite" />, name: "Vite" },
    { icon: <SiWebpack title="Webpack" />, name: "Webpack" },
    { icon: <SiJest title="Jest" />, name: "Jest" },
    { icon: <SiGit title="Git" />, name: "Git" },
    { icon: <SiMui title="Material UI" />, name: "Material UI" },
  ];

  const CustomDivider = styled(Divider)(({ theme }) => ({
    height: "4px",
    width: "100px",
    backgroundColor: theme.palette.primary.main,
  }));

  const MotionBox = motion.create(Box);

  return (
    <>
      <MotionBox
        component="section"
        id="aboutme"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        sx={{
          pb: 8,
          pt: 10,
          width: "100%",
          backgroundColor: "background.lighter",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            {/* Left side about me */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h3" gutterBottom component="h3">
                About Me
              </Typography>
              <CustomDivider />
            </Grid>

            {/* Right side about me */}
            <Grid size={{ xs: 12, md: 8 }}>
              <List>
                {about.map((about) => (
                  <ListItem key={about.id}>
                    <ListItemIcon>
                      <Code sx={{ color: theme.palette.primary.contrast }} />
                    </ListItemIcon>
                    <ListItemText primary={about.text} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Left side skills */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h3" gutterBottom component="h3">
                Skills
              </Typography>
              <CustomDivider />
            </Grid>

            {/* Right side skills (icons) */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  fontSize: "4rem",
                  justifyContent: {
                    xs: "space-around",
                    md: "initial",
                  },
                }}
              >
                {skills.map((skill) => (
                  <Box
                    key={skill.name}
                    sx={{
                      m: {
                        xs: "0 0.4rem",
                        md: "0 1.3rem 0 0",
                      },
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {skill.icon}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MotionBox>
    </>
  );
}

export default AboutMe;
