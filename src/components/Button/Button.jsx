import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.scss";

const Button = ({ title = "", style = {} }) => {
  return <button className={styles.Button} style={style}>{title}</button>;
};

Button.propTypes = {
    title: PropTypes.string,
    styles: PropTypes.object
  }

export default Button;
