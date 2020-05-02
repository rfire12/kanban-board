import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import styles from './CardEditor.scss';

const CardEditor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <FontAwesomeIcon icon={faWindowMaximize} className={styles.cardIcon} />
          <h3 className={styles.title}>
            As a developer, I would like to create a template for an order to be placed, in the administrator be able to select a supplier and several
            products that you want to order.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardEditor;
