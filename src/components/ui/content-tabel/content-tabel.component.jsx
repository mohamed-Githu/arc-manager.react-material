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

const ContentTable = ({ rows }) => {
  const classes = useStyles();

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
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={row[0] + i}>
                {row.map((cell, i) => (
                  <TableCell key={cell + i}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContentTable;
