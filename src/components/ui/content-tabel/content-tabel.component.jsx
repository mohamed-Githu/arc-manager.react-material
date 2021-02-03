import React from "react";
import clsx from "clsx";

import { useToolbarStyles, useStyles } from "./content-table.styles";

import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";

import {
  MenuItem,
  Menu,
  TextField,
  InputAdornment,
  Chip,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
} from "@material-ui/core";

import {
  getComparator,
  getFilterdRows,
  descendingComparator,
  stableSort,
} from "./content-table.utils";

import headCells from "./content-table.data"

const EnhancedTableHead = (props) => {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const {
    numSelected,
    totalFilterIcon,
    setTotalFilterIcon,
    filterValue,
    setFilterValue,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (e) =>
    setAnchorEl(!Boolean(anchorEl) ? e.currentTarget : null);

  const handleTotalFilterIcon = () =>
    setTotalFilterIcon(
      totalFilterIcon === ">" ? "<" : totalFilterIcon === "<" ? "===" : ">"
    );

  const handlePriceFilter = ({ target: { value } }) => {
    setFilterValue(value);
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title}>{null}</Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={props.onDelete}>
            <DeleteIcon style={{ fontSize: 30 }} color="primary" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list" onClick={handleMenu}>
            <FilterListIcon color="secondary" style={{ fontSize: 50 }} />
          </IconButton>
        </Tooltip>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenu}
        elevation={0}
        keepMounted
      >
        <MenuItem disableTouchRipple classes={{ root: classes.menu }}>
          <TextField
            placeholder="Enter a price to filter"
            value={filterValue}
            onChange={handlePriceFilter}
            InputProps={{
              type: "number",
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleTotalFilterIcon}
                  style={{ cursor: "pointer" }}
                >
                  <IconButton className={classes.totalFilter}>
                    <span>{totalFilterIcon[0]}</span>
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <span className={classes.dolarSign}>$</span>
                </InputAdornment>
              ),
            }}
          />
        </MenuItem>
      </Menu>
    </Toolbar>
  );
};

const EnhancedTable = ({ rows, searchValue, handleDelete }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [evalSign, setEvalSign] = React.useState(">");
  const [totalFilterValue, setTotalFilterValue] = React.useState("");

  const filterdRows = getFilterdRows(searchValue, rows);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = filterdRows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const onDelete = () => {
    handleDelete(selected);
    setSelected([]);
  };

  const isFilterd = (total) =>
    totalFilterValue.length === 0 ||
    eval(`${total} ${evalSign} ${totalFilterValue}`);

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <EnhancedTableToolbar
          onDelete={onDelete}
          numSelected={selected.length}
          totalFilterIcon={evalSign}
          setTotalFilterIcon={setEvalSign}
          filterValue={totalFilterValue}
          setFilterValue={setTotalFilterValue}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={filterdRows.length}
            />
            <TableBody>
              {stableSort(filterdRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return isFilterd(row.total) ? (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        align="center"
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.service}</TableCell>
                      <TableCell style={{ width: "5em" }} align="center">
                        {row.features}
                      </TableCell>
                      <TableCell align="center">{row.complexity}</TableCell>
                      <TableCell align="center">{row.platforms}</TableCell>
                      <TableCell align="center">{row.users}</TableCell>
                      <TableCell align="center">{row.total}</TableCell>
                    </TableRow>
                  ) : null;
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filterdRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <Grid container justify="flex-end">
          <Grid item>
            {totalFilterValue && (
              <Chip
                onDelete={() => setTotalFilterValue("")}
                label={
                  (evalSign === ">"
                    ? "Greater than"
                    : evalSign === "<"
                    ? "Less than"
                    : "Equal to") + ` $${totalFilterValue}`
                }
                className={classes.chip}
              />
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default EnhancedTable;
