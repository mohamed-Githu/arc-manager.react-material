import { lighten, makeStyles } from "@material-ui/core/styles";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
  menu: {
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fff",
    },
  },
  totalFilter: {
    fontSize: "2em",
    color: theme.palette.secondary.main,
    fontWeight: 400,
    padding: 0,
  },
  dolarSign: {
    fontSize: "1.5em",
    color: theme.palette.secondary.main,
    fontWeight: 300,
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  chip: {
    marginRight: "2em",
    backgroundColor: theme.palette.common.blue,
    color: "#FFF",
  },
}));

export { useToolbarStyles, useStyles };
