import * as React from "react";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { Link } from "react-router-dom";

// import logo from './assets/';
const drawerWidth = 240;

const SideBar = () => {
  const drawerList = [
    {
      name: "Dashboard",
      route: "/",
      icon: DashboardIcon,
    },
    {
      name: "Task",
      route: "/task",
      icon: PlaylistAddCheckIcon,
    },
    {
      name: "Profile",
      route: "/profile",
      icon: PersonIcon,
    },
    {
      name: "Settings",
      route: "/settings",
      icon: SettingsIcon,
    },
  ];
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer
        sx={{
          m: 1,
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#EBEFF5",
            boxSizing: "border-box",
            mt: "150px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {drawerList.map((text) => (
            <ListItem component={Link} to={text.route} button key={text}>
              <ListItemIcon>
                <text.icon />
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
        {/* <List>
          {['Profile', 'Settings'].map((text, index) => (
                <ListItem component={Link} to='/Dashboard' button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <PersonIcon /> : <SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
          </List> */}
      </Drawer>
    </React.Fragment>
  );
};

// const useStyles = makeStyles({
//   root: { }
// });

export default SideBar;
