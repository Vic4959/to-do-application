import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/features/Theme";
import { CssBaseline, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Layout from "./components/layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
