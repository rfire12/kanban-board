import PropTypes from 'prop-types';
import React from 'react';
import styles from './ExitIcon.scss';

const ExitIcon = ({ className, onClick = () => {}, dataTestId = '' }) => (
  <span
    className={`${className} ${styles.exitIcon}`}
    onClick={() => onClick()}
    onKeyDown={() => onClick()}
    role="button"
    aria-label="Exit"
    tabIndex={0}
    data-testid={dataTestId}
  />
);

export default ExitIcon;

ExitIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  dataTestId: PropTypes.string,
};
