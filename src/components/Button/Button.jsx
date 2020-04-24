import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.scss';

const Button = ({ title = '', className = '', style = {} }) => (
  <button type="button" className={`${styles.Button} ${className}`} style={style}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
