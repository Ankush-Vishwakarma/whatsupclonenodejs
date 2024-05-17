import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createData(
  TYPE: string,
  DESCRIPTION: string,
  COMPLETIONDATE: string,
  ACTION: React.ReactNode
) {
  return { TYPE, DESCRIPTION, COMPLETIONDATE, ACTION };
}

const buttonStyle = { width: "100%" };

const rows = [
  createData(
    "Migration to IP Solutions+",
    "Migrating your IP data to the new portal",
    "12th July 2024",
    <Button
      variant="contained"
      size="small"
      sx={{ ...buttonStyle, backgroundColor: "#D1D5DB" }}
    >
      VERIFY
    </Button>
  ),
  createData(
    "Renewal Payment",
    "Payment for Patent #12345",
    "12th December 2024",
    <Button
      variant="contained"
      size="small"
      sx={{ ...buttonStyle, backgroundColor: "#00A89F" }}
    >
      VIEW
    </Button>
  ),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", backgroundColor: "#D3ECEA" }}>
              TYPE
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", backgroundColor: "#D3ECEA" }}
            >
              DESCRIPTION
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", backgroundColor: "#D3ECEA" }}
            >
              COMPLETION DATE
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", backgroundColor: "#D3ECEA" }}
            >
              ACTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.TYPE}
              </TableCell>
              <TableCell align="left">{row.DESCRIPTION}</TableCell>
              <TableCell align="left">{row.COMPLETIONDATE}</TableCell>
              <TableCell align="left">{row.ACTION}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}