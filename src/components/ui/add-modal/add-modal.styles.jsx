import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: "center",
    position: "absolute",
    width: "60em",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 3, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "scroll",
    maxHeight: "100vh",
    "&::-webkit-scrollbar": {
      width: ".4rem",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 .05rem .1rem rgba(0, 0, 0, 0.2)",
      backgroundColor: "rgb(240, 240, 240)",
      borderRadius: 20,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "lightgrey",
      borderRadius: 20,
    },
    "&:focus": {
      outline: "none",
    },
    // [theme.breakpoints.down("md")]: {
    //   width: "40em",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "30em",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "row",
    //   justifyContent: "flex-end",
    //   alignItems: "flex-start",
    //   width: "100%",
    //   height: "100vh",
    // },
  },
  service: {
    fontWeight: 400,
  },
  radiosContainer: {
    flexDirection: "column",
    marginTop: "5em",
  },
  buttonsContainer: {
    marginTop: "3em",
    flexDirection: "column",
    alignItems: "center",
  },
  addButton: {
    ...theme.typography.estimate,
    margin: "1em 0",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  cancelButton: {
    color: theme.palette.primary.main,
    paddingBottom: 1,
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
