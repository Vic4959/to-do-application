import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer  from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Link } from 'react-router-dom';
import { Badge, IconButton, makeStyles, Tab, Tabs } from '@mui/material';
// import logo from './assets/';
const drawerWidth = 240;

const Layout = () => {
  const drawerList = [
    {
      name: 'Dashboard',
      route:'/dashboard',
      icon: DashboardIcon,
    },
    {
      name: 'Task',
      route:'/task',
      icon: PlaylistAddCheckIcon,
    },
    {
      name: 'Profile',
      route:'/profile',
      icon: PersonIcon,
    },
    {
      name: 'Settings',
      route:'/settings',
      icon: SettingsIcon,
    }
  ];
  // const classes = useStyles();
  return(
    <React.Fragment>
      <Box sx={{ display: 'flex', height: 200, width: 10 }}>
        <CssBaseline />
        <AppBar
          position="fixed" elevation={0}
          sx={{ height:100, bgcolor:'#EBEFF5'}}
        >
          <Toolbar sx= {{height:90, }} >
            <IconButton sx={{ marginLeft: "auto", color: "#053858", size:"small" }}>
              <Badge>
                  <NotificationsIcon />
              </Badge>
            </IconButton>
            <Tabs>
              <Tab component={Link} to='/' label='Jason Blage' />
            </Tabs>
            <img src= "logo" alt='Company Logo' />
          </Toolbar>
        </AppBar>
        <Drawer sx={{
            m: 1,
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              bgcolor:'#EBEFF5',
              boxSizing: 'border-box',
              mt:"90px" ,
            },
          }}
          variant="permanent"
          anchor="left"
          >
          <List>
            {drawerList.map((text) => (
                <ListItem component={Link} to= {text.route} button key={text}>
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
      </Box>
    </React.Fragment>
  );
}

// const useStyles = makeStyles({
//   root: { }
// });


export default Layout;