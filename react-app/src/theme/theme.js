import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#49bad2",
      contrast: "#e72e5a",
    },
    background: {
      main: "#121212",
      lighter: "#292929ff",
    },
    text: {
      main: "#FFFFFF",
      secondary: "#49bad2",
      lighter: "#8f8f8fff",
    },
  },
});

export default theme;
