import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';

const sample = [
  ['Document ', '5 Oct 2022', 'Download Link 1', 'Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', ],
  ['Another ', '5 Oct 2022', 'Download Link 2', 'Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', ],
  ['Another re', '5 Oct 2022', 'Download Link 3', 'Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', ],
  ['Document 4', '5 Oct 2022', 'Download Link 4', 'Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', ],
  ['Another ', '5 Oct 2022', 'Download Link 5', 'Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', ],
];

function createData(id, title, uploadedOn, download, ...additionalData) {
  return { id, title, uploadedOn, download, additionalData };
}

const columns = [
  {
    width: 150,
    label: 'TITLE',
    dataKey: 'title',
  },
  {
    width: 150,
    label: 'UPLOADED ON',
    dataKey: 'uploadedOn',
  },
  {
    width: 150,
    label: 'DOWNLOAD',
    dataKey: 'download',
  },
  // Additional columns
  {
    width: 150,
    label: 'Data 1',
    dataKey: 'additionalData',
  },
  {
    width: 150,
    label: 'Data 2',
    dataKey: 'additionalData',
  },
  {
    width: 150,
    label: 'Data 3',
    dataKey: 'additionalData',
  },
  {
    width: 150,
    label: 'Data 4',
    dataKey: 'additionalData',
  },
  {
    width: 150,
    label: 'Data 5',
    dataKey: 'additionalData',
  },
  {
    width: 150,
    label: 'Data 6',
    dataKey: 'additionalData',
  },
  {
    width: 150,
    label: 'Data 7',
    dataKey: 'additionalData',
  },
  {
    width: 150,
    label: 'Data 8',
    dataKey: 'additionalData',
  },
  {
    width: 150,
    label: 'Data 9',
    dataKey: 'additionalData',
  },
];

const rows = sample.map((row, index) => createData(index, ...row));

function ReactVirtualizedTable() {
  const paperStyle = {
    backgroundColor: 'initial',
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '4px',
    boxShadow: 'none',
   
  };
  const boxStyle = {
    width: "100%",
    border: "2px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  };
  
  const tableContainerStyle = {
    // margin: '10px',
    width:"100%",
    overflowX: 'scroll',
    height: '500px', 
    overflowY: 'scroll' ,

   
  };

  return (
    <Paper elevation={0} style={paperStyle}>
   
     <Box sx={boxStyle}>
     <div style={tableContainerStyle}>
        <Table style={{ minWidth: '1600px' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#D3ECEA' }}>
              <TableCell style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Checkbox checked={false} disabled />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.dataKey}
                  align={column.dataKey === 'title' || column.dataKey === 'uploadedOn' ? 'left' : 'center'}
                  style={{
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '10px',
                    width: column.width,
                    borderBottom: 'none',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    backgroundColor: '#D3ECEA',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => <RowContent key={index} row={row} rowIndex={index} />)}
          </TableBody>
        </Table>
      </div>
     </Box>
    
    </Paper>
  );
}

function RowContent({ row, rowIndex }) {
  const textPadding = {
    paddingLeft: '10px',
  };

  const backgroundColor = rowIndex % 2 === 0 ? 'white' : '#EAFDFC';

  return (
    <TableRow style={{ backgroundColor }}>
      <TableCell>
        <Checkbox checked={false} disabled />
      </TableCell>
      {columns.map((column, columnIndex) => (
        <TableCell
          key={column.dataKey + rowIndex}
          align={column.dataKey === 'title' || column.dataKey === 'uploadedOn' ? 'left' : 'center'}
          style={{
            padding: '0px',
            margin: '0px',
            borderBottom: 'none',
          }}
        >
          {columnIndex === columns.length - 1 ? (
            <IconButton aria-label="more">
              {/* <MoreVertIcon style={{ color: 'black' }} /> */}
            </IconButton>
          ) : (
            <span style={column.dataKey === 'title' || column.dataKey === 'uploadedOn' ? textPadding : {}}>
              {column.dataKey === 'additionalData' ? row.additionalData[columnIndex - 3] : row[column.dataKey]}
            </span>
          )}
          {columnIndex === 10 && <MoreVertIcon />}
          {columnIndex === 11 && <ChevronRightRoundedIcon />}
        </TableCell>
      ))}
    </TableRow>
  );
}

export default ReactVirtualizedTable;
