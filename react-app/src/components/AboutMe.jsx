import {
  Box,
  Typography,
  Grid,
  Divider,
  useTheme,
  // useMediaQuery,
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
  SiJest,
  SiGit,
  SiMui,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function AboutMe() {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const CustomDivider = styled(Divider)(({ theme }) => ({
    height: "4px",
    width: "100px",
    backgroundColor: theme.palette.primary.main,
  }));

  return (
    <>
      <Box
        component="section"
        id="aboutme"
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
            <Grid item xs={12} md={4}>
              <Typography variant="h3" gutterBottom component="h3">
                About Me
              </Typography>
              <CustomDivider />
            </Grid>

            {/* Right side about me */}
            <Grid item xs={12} md={8}>
              <List>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Code sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        I'm a software developer with over three years of
                        experience building web interfaces and interactive
                        applications. I earned my B.S. in Computer Science from
                        the University of Texas at Tyler in 2024 and have
                        continued to grow through both work and personal
                        projects.
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Code sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        I'm passionate about front-end development and crafting
                        clean, intuitive user experiences, while always staying
                        open to learning new technologies and approaches.
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Code sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        Outside of coding, I enjoy car culture, creative
                        projects, and staying connected with friends — a balance
                        that fuels both my work and personal growth.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Grid container>
            {/* Left side skills */}
            <Grid item xs={12} md={4} gutterBottom>
              <Typography variant="h3" gutterBottom component="h3">
                Skills
              </Typography>
              <CustomDivider />
            </Grid>

            {/* Right side skills */}
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  fontSize: "4rem",
                  justifyContent: {
                    xs: "space-around",
                    md: "initial",
                  },
                  pl: "40px",
                }}
              >
                <SiJavascript title="JavaScript" />
                <SiReact title="React JS" />
                <SiHtml5 title="HTML5" />
                <SiCss3 title="CSS3" />
                <FaJava title="Java" />
                <SiUnity title="Unity" />
                <SiVite title="Vite" />
                <SiJest title="Jest" />
                <SiGit title="Git" />
                <SiMui title="Material UI" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default AboutMe;
