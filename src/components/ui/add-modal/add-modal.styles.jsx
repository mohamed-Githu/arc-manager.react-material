import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    width: "60em",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 3, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "40em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      width: "100%",
      height: "100vh",
    },
  },
  service: {
    fontWeight: 400,
  },
  radiosContainer: {
    flexDirection: "column",
    marginTop: "5em",
  },
}));

export default useStyles;
