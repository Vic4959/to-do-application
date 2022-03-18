import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/features/Drawer';
import Dashboard from './components/features/Dashboard';
import Profile from './components/features/Profile'
import Settings from './components/features/Settings'
import Task from './components/features/Task'
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/features/Theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Layout />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </ThemeProvider>
  )
}

export default App

