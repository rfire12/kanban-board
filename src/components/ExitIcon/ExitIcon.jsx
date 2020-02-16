import PropTypes from "prop-types";
import React from "react";
import styles from "./ExitIcon.scss";

const ExitIcon = ({className, ...parameters }) => <span className={`${className} ${styles.exitIcon}`} {...parameters}></span>;

export default ExitIcon;

ExitIcon.propTypes = {
    className: PropTypes.string,
    parameters: PropTypes.object
}