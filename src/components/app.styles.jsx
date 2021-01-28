import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  header: {
    paddingTop: "2em",
    paddingLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  input: {
    marginLeft: "5em",
    width: "35em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "25em",
    },
  },
  switchsContainer: {
    marginLeft: "5em",
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  addButton: {
    color: theme.palette.primary.main,
    fontSize: 30,
    cursor: "pointer",
  },
  tableContainer: {
    margin: "5em 0 15em 0",
    maxWidth: "100%",
  },
  switchesInnerContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    "& > *": {
      marginRight: "5em",
    },
    "& > *:last-child": {
      marginRight: 0,
    },
  },
}));

export default useStyles;
