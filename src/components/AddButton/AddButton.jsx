import PropTypes from "prop-types";
import React from "react";
import styles from "./AddButton.scss";

const AddButton = ({ title = "", style = {} }) => {
  return <button className={styles.addButton} style={style}>{title}</button>;
};

AddButton.propTypes = {
    title: PropTypes.string,
    styles: PropTypes.object
  }

export default AddButton;
