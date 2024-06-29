import {
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

const Resources = () => {
  // useState

  // useffect

  return (
    <div className="home-container">
      <h1>ALL RESOUCE</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-head">Dessert (100g serving)</TableCell>
            <TableCell className="table-head" align="right">Calories</TableCell>
            <TableCell className="table-head" align="right">Fat&nbsp;(g)</TableCell>
            <TableCell className="table-head" align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell className="table-head" align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            onClick={() => {
              console.log("item");
              // 
            }}
          >
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Resources;
