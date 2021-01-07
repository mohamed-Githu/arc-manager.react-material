import React from "react";
import useStyles from "./header.styles";

import { useScrollTrigger } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { ReactComponent as Logo } from "../../../assets/logo.svg";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: false, // delay scrolling
    threshold: 0, // how far the user has to scroll before start listening
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = () => {
  const classes = useStyles();

  return (
    <header style={{ zIndex: 1302, position: "relative" }}>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button disableRipple style={{ textDecoration: "none" }}>
              <Logo className={classes.logo} />
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </header>
  );
};

export default Header;
