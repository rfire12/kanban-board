import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.scss';

const Checkbox = ({ onCheckClick }) => (
  <>
    <input type="checkbox" className={styles.checkbox} onClick={onCheckClick} />
  </>
);

Checkbox.propTypes = {
  onCheckClick: PropTypes.func,
};

export default Checkbox;
