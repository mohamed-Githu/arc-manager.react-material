import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    paddingTop: "2em",
    paddingLeft: "5em",
  },
  input: {
    marginLeft: "5em",
    width: "35em",
  },
  switchsContainer: {
    marginLeft: "5em",
    marginTop: "2em",
  },
  addButton: {
    color: theme.palette.primary.main,
    fontSize: 30,
    cursor: "pointer",
  },
}));

export default useStyles;
