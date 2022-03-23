import { Badge, IconButton, Tab, Tabs } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import { Outlet, Route, Routes } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import SideBar from "./features/Drawer";
import Dashboard from "../components/features/Dashboard";
import Profile from "../components/features/Profile";
import Settings from "../components/features/Settings";
import Task from "../components/features/Task";

function Layout() {
  return (
    <Box>
      <CssBaseline />

      <AppBar
        position="fixed"
        elevation={0}
        sx={{ height: 150, bgcolor: "#EBEFF5" }}
      >
        <Toolbar>
          <IconButton
            sx={{ marginLeft: "auto", color: "#053858", size: "small" }}
          >
            <Badge>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Tabs>
            <Tab component={Link} to="/" label="Jason Blage" />
          </Tabs>
          <img src="logo" alt="Company Logo" />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ display: "flex" }}>
        <SideBar />

        <Box sx={{ width: "calc(100% - 240px)", mt: "100px" }}>
          {" "}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
