import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Task() {
  return (
    <Stack spacing={3} direction="row">
      <Button 
        variant="outlined"
        sx={{ color: "#053858" }}
        component={Link} to="/"
      >
      Upcoming Tasks</Button>
      <Button 
        variant="contained"
        sx={{ bgcolor: "#053858" }}
        component={Link} to="/"
        >Past Tasks
      </Button>
    </Stack>
  );
}

export default Task;
