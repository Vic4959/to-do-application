import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2, 0),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  width: "100%",
  "& .MuiFilledInput-root": {
    fontWeight: 600,
    color: theme.palette.primary.main,
    overflow: "hidden",
    padding: 0,
    borderRadius: 4,
    backgroundColor: "rgba(247, 248, 251, 1)",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:hover": {
      backgroundColor: "rgba(247, 248, 251, 1)",
    },
    "&.Mui-focused": {
      backgroundColor: "rgba(247, 248, 251, 1)",

      borderColor: theme.palette.primary.main,
    },
    "& .MuiFilledInput-input": {
      padding: "8px 0",
    },
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{ m: 0, py: 1, px: 5, bgcolor: "primary.main", color: "white" }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 15,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function PastTask(props) {
  console.log(props);
  const { items, setItems } = props;

  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [values, setValues] = useState({
    taskTitle: "",
    startTime: "",
    endTime: "",
    taskDescription: "",
    subTask: "",
    subTaskDuration: "",
  });
  console.log(values);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    event.persist();
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const tempoaryItems = [...items];
    console.log(tempoaryItems);
    const newItem = {
      id: 5,
      name: "04 Apr",
      created: values.taskTitle,
      startTime: values.startTime,
      endTime: values.endTime,
      duration: "1hr",
      other: "...",
    };
    tempoaryItems.push(newItem);
    console.log(tempoaryItems);
    setItems(tempoaryItems);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          borderRadius: 4,
          fontSize: "0.875rem",
          fontWeight: "700",
          position: "absolute",
          marginTop: 10,
          right: "4%",
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        Create a new todo
      </Button>
      <BootstrapDialog
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 5,
            px: 0,
            bgcolor: "rgba(235, 239, 245, 1)",
          },
          "& .MuiDialogActions-root>:not(:first-of-type)": {
            marginLeft: 0,
          },
        }}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Create New Task
        </BootstrapDialogTitle>
        <Formik initialValues={{ values: "" }}>
        <DialogContent dividers sx={{ p: 0 }}>
          <Grid container spacing={4} sx={{ px: 5 }}>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: "primary.main", mb: 1 }}>
                Task Title
              </Typography>
              <RedditTextField
                size="small"
                id="custom-css-outlined-input"
                variant="filled"
                name="taskTitle"
                value={values.taskTitle}
                placeholder="Task Title"
                onChange={handleChange}
                color="primary"
                sx={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" sx={{ color: "primary.main", mb: 1 }}>
                Start Time
              </Typography>
              <RedditTextField
                size="small"
                id="custom-css-outlined-input"
                name="startTime"
                value={values.startTime}
                placeholder="Start Time"
                onChange={handleChange}
                variant="filled"
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" sx={{ color: "primary.main", mb: 1 }}>
                End Time
              </Typography>
              <RedditTextField
                size="small"
                id="custom-css-outlined-input"
                name="endTime"
                value={values.endTime}
                placeholder="End Time"
                onChange={handleChange}
                variant="filled"
              />
            </Grid>
          </Grid>
          <Grid container sx={{ px: 5, mt: 4 }}>
            <Typography variant="body2" sx={{ color: "primary.main", mb: 1 }}>
              Task Description
            </Typography>
            <RedditTextField
              multiline
              rows={4}
              id="custom-css-outlined-input"
              name="taskDescription"
              value={values.taskDescription}
              placeholder="Task Description"
              onChange={handleChange}
              variant="filled"
            />
          </Grid>
          <Grid container sx={{ mt: 4, bgcolor: "white", p: 5 }} spacing={2}>
            <Grid item xs={7}>
              <Typography variant="body2" sx={{ color: "primary.main", mb: 1 }}>
                Sub-task
              </Typography>
              <RedditTextField
                sx={{ backgroundColor: "rgba(247, 248, 251, 1)" }}
                size="small"
                id="custom-css-outlined-input"
                name="subTask"
                value={values.subTask}
                placeholder="Sub Task"
                onChange={handleChange}
                variant="filled"
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" sx={{ color: "primary.main", mb: 1 }}>
                Sub-task Duration
              </Typography>
              <RedditTextField
                sx={{ backgroundColor: "rgba(247, 248, 251, 1)" }}
                size="small"
                id="custom-css-outlined-input"
                name="subTaskDuration"
                value={values.subTaskDuration}
                placeholder="Sub Task Duration"
                onChange={handleChange}
                variant="filled"
              />
            </Grid>
          </Grid>
        </DialogContent>
        </Formik>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
