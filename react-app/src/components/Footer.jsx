import {
  Box,
  Typography,
  Divider,
  IconButton,
  Card,
  CardContent,
  Container,
} from "@mui/material";

function Footer() {
  return (
    <Box
      component="section"
      id="footer"
      sx={{
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" sx={{ color: "text.lighter" }}>
        William Andrews II ©2025
      </Typography>
    </Box>
  );
}

export default Footer;
