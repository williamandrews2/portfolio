import { Box, Typography, Grid, Divider, Container } from "@mui/material";

function Projects() {
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
      </Container>
    </Box>
  );
}

export default Projects;
