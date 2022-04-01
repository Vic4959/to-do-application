import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(5, 56, 88, 1)",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
