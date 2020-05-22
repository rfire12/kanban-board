import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ChecklistItem.scss';
import Checkbox from '../../Checkbox/Checkbox';

const ChecklistItem = ({ title = '' }) => {
  const [strikeThrough, setStrikeThrough] = useState(false);

  const handleCheckClick = (e) => {
    if (e.currentTarget.checked) {
      setStrikeThrough(true);
    } else {
      setStrikeThrough(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Checkbox onCheckClick={handleCheckClick} />
      <span className={strikeThrough ? `${styles.title} ${styles.strikeThrough}` : `${styles.title}`}>{title}</span>
    </div>
  );
};

ChecklistItem.propTypes = {
  title: PropTypes.string,
};

export default ChecklistItem;
