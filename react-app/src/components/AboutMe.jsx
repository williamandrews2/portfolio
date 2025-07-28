import {
  Box,
  Typography,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Code } from "@mui/icons-material";

function AboutMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          // width: "100%",
          backgroundColor: "background.lighter",
        }}
      >
        <Container>
          <Grid container spacing={4} sx={{ outline: "2px solid blue" }}>
            {/* Left side about me */}
            <Grid item xs={12} md={4} sx={{ outline: "2px solid blue" }}>
              <Typography variant="h3" gutterBottom component="h3">
                About Me
              </Typography>
              <CustomDivider />
            </Grid>

            {/* Right side about me */}

            <Grid item xs={12} md={8} sx={{ outline: "2px solid blue" }}>
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
            <Grid item xs={12} md={4} sx={{ outline: "2px solid blue" }}>
              <Typography variant="h3" gutterBottom component="h3">
                Skills
              </Typography>
              <CustomDivider />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* new testing version */}
      <Box sx={{ backgroundColor: "#868282ff", py: 8 }}>
        <Grid container spacing={2}>
          {/* Left column (4 columns on md+, full width on small screens) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ border: "2px solid red", backgroundColor: "#ffffff" }}
          >
            <Typography variant="h4">About Me</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h4">Skills</Typography>
          </Grid>

          {/* Right column (8 columns on md+) */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              border: "2px solid blue",
              backgroundColor: "#eef",
              wordWrap: "break-word",
            }}
          >
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{
                        whiteSpace: "normal", // allow wrapping
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      I'm a software developer with over three years of
                      experience building web interfaces and interactive
                      applications. I earned my B.S. in Computer Science from
                      the University of Texas at Tyler in 2024 and have
                      continued to grow through both work and personal projects.
                      This sentence is long enough to prove that wrapping works
                      as intended.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AboutMe;
