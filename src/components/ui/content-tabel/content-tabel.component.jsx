import {
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableContainer,
  TableCell,
  Grid,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";

import useStyles from "./content-tabel.styles";

const ContentTable = ({ rows, searchValue }) => {
  const classes = useStyles();

  const newRows = rows.filter((row) => {
    for (const rowItem of Object.values(row)) {
      if (rowItem.toLowerCase().includes(searchValue.toLowerCase()))
        return true;
    }
    return false;
  });

  return (
    <>
      <Grid container justify="flex-end">
        <Grid item>
          <FilterListIcon color="secondary" className={classes.filterIcon} />
        </Grid>
      </Grid>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Features</TableCell>
              <TableCell>Complexity</TableCell>
              <TableCell>Platforms</TableCell>
              <TableCell>Users</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newRows.map((row, i) => (
              <TableRow key={row.name + i}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.service}</TableCell>
                <TableCell>{row.features}</TableCell>
                <TableCell>{row.complexity}</TableCell>
                <TableCell>{row.platforms}</TableCell>
                <TableCell>{row.users}</TableCell>
                <TableCell>$ {row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContentTable;
