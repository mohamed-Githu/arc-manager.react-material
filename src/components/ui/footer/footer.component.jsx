import React from "react";
import useStyles from "./footer.styles";

import footerAdornment from "../../../assets/Footer Adornment.svg";

const Footer = () => {
  const classes = useStyles();
  const { footer, adornment } = classes;

  return (
    <footer className={footer}>
      <img
        src={footerAdornment}
        alt="Footer Adornment Slash"
        className={adornment}
      />
    </footer>
  );
};

export default Footer;
