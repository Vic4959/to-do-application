import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
const tableStyling = {
  padding:'0px 0px'
};
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function Settings() {
  return (
    <div>
      <TableContainer 
      component={Paper}
      sx={{
        width:'max-content',
        padding:1,
        marginLeft:'auto',
        marginRight:'auto'
      }}
      >
        <Table fixedHeader= {false} sx={{tableLayout:'auto'}}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...tableStyling, width:100 }} >Dessert (100g servings)</TableCell>
              <TableCell sx={{ ...tableStyling, width:100 }} align="right">Calories</TableCell>
              <TableCell sx={{ ...tableStyling, width:100 }} align="right">Fat&nbsp;(g)</TableCell>
              <TableCell sx={{ ...tableStyling, width:100 }} align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell sx={{ ...tableStyling, width:100 }} align="right">Protein&nbsp;(g)</TableCell>
              <TableCell sx={{ ...tableStyling, width:100 }} align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
