import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.scss';

const ProgressBar = ({ percentage = 0 }) => (
  <div className={styles.wrapper}>
    <div style={{ width: `${percentage}%` }} className={styles.filler} />
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

export default ProgressBar;
