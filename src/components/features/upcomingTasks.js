import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import PastTask from "./modalButton";
// import Dashboard from './components/features/Dashboard';

const fetchData = () =>
  new Promise((resolve) => {
    const items = [
      {
        id: 1,
        name: "14 Nov",
        created: "Play Chess with Messi Show the football GOAT with da boss",
        startTime: "12:51pm",
        endTime: "1:30pm",
        duration: "39 mins",
        other: "...",
      },
      {
        id: 2,
        name: "02 Dec",
        created: "Go Skydiving with Kal-el Who is more fly? Me! Thats who",
        startTime: "5:50pm",
        endTime: "6:00pm",
        duration: "10 mins",
        other: "...",
      },
      {
        id: 3,
        name: "08 Dec",
        created: "Visit mum Order flight tickets to California",
        startTime: "08:00am",
        endTime: "11:00pm",
        duration: "03: hrs",
        other: "...",
      },
      {
        id: 4,
        name: "25 Dec",
        created: "Christmas at Sues Prepare Christmas gifts and wrappers",
        startTime: "10:30am",
        endTime: "12:00pm",
        duration: "1hr 30mins",
        other: "...",
      },
    ];
    setTimeout(() => resolve(items), 1000);
  });

export default function UpcomingTasks() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData().then((items) => {
      setItems(items);
    });
  }, []);
  return (
    <Paper sx={{ m: 3 }}>
      <h1 sx={{ color: "#053858" }}>Here Are Your Upcoming Tasks </h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">End Time</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="center">{item.created}</TableCell>
                <TableCell align="center">{item.endTime}</TableCell>
                <TableCell align="center">{item.startTime}</TableCell>
                <TableCell align="center">{item.duration}</TableCell>
                <TableCell align="center">{item.other}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* <Button
      sx={{ borderRadius: 4,
        fontSize: '0.875rem',
        fontWeight: '700',
        position: 'absolute',
        marginTop: 50,
        right: '4%',
        bgcolor: '#053858', color: 'white' }}
      >Create a new todo</Button> */}
    </Paper>
  );
}
