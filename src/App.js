import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/features/Theme";
import { CssBaseline, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Layout from "./components/layout";
import DashboardRoutes from "./routes";


function App() {
  const firstName = "Victor";
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardRoutes />
    </ThemeProvider>
  );
}

export default App;
