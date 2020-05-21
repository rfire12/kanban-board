import React from 'react';
import styles from './BoardHeader.scss';
import BoardTitle from '../BoardTitle/BoardTitle';

const BoardHeader = () => (
  <>
    <div className={styles.BoardHeader}>
      <BoardTitle />
    </div>
  </>
);

export default BoardHeader;
