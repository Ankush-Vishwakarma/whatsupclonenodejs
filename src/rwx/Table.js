import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const sample = [
  ['Document number 1', '5 Oct 2022'],
  ['Another related document', '5 Oct 2022'],
  ['Another related document', '5 Oct 2022'],
];

function createData(id, title, uploadedOn) {
  return { id, title, uploadedOn };
}

const columns = [
  {
    width: 500,
    label: 'TITLE',
    dataKey: 'title',
  },
  {
    width: 200,
    label: 'UPLOADED ON',
    dataKey: 'uploadedOn',
  },
  {
    width: 200,
    label: 'DOWNLOAD',
    dataKey: 'download',
  },
];

const rows = sample.map((row, index) => createData(index, ...row));

function fixedHeaderContent() {
  return (
    <TableHead>
      <TableRow style={{ backgroundColor: '#D3ECEA' }}>
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
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function rowContent(row, index) {
  const textPadding = {
    paddingLeft: '10px',
  };

  const backgroundColor = index % 2 === 0 ? 'white' : '#EAFDFC';

  return (
    <TableBody key={index}>
      <TableRow style={{ backgroundColor }}>
        {columns.map((column, columnIndex) => (
          <TableCell
            key={column.dataKey}
            align={column.dataKey === 'title' || column.dataKey === 'uploadedOn' ? 'left' : 'center'}
            style={{
              padding: '0px',
              margin: '0px',
              borderBottom: 'none',
            }}
          >
            {columnIndex === columns.length - 1 ? (
              <IconButton aria-label="more">
                <MoreVertIcon style={{ color: 'black' }} />
              </IconButton>
            ) : (
              <span style={column.dataKey === 'title' || column.dataKey === 'uploadedOn' ? textPadding : {}}>
                {row[column.dataKey]}
              </span>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  );
}

export default function ReactVirtualizedTable() {
  const paperStyle = {
    backgroundColor: 'initial',
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '4px',
    boxShadow: 'none',
  };

  const tableContainerStyle = {
    margin: '10px',
    height: '150px',
    overflowY: 'auto'
  };

  return (
    <Paper elevation={0} style={paperStyle}>
      <div style={tableContainerStyle}>
        <Table style={{ minWidth: 100 }}>
          {fixedHeaderContent()}
          {rows.map((row, index) => rowContent(row, index))}
        </Table>
      </div>
    </Paper>
  );
}
