import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ListButton.scss';

const ListButton = ({ icon, title = '' }) => {
  return (
    <li>
      <button type="button" className={styles.button}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        <span className={styles.title}>{title}</span>
      </button>
    </li>
  );
};

ListButton.propTypes = {
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    icon: PropTypes.array,
  }),
  title: PropTypes.string,
};

export default ListButton;
