import React from 'react';
import { faUserCircle, faBookmark, faCheckSquare, faFolder } from '@fortawesome/free-regular-svg-icons';
import styles from './Sidebar.scss';
import ListOption from '../ListButton/ListButton';

const Sidebar = () => {
  return (
    <aside className={styles.wrapper}>
      <h2 className={styles.title}>Add to Card</h2>
      <ul className={styles.listOptions}>
        <ListOption icon={faUserCircle} title="Members" />
        <ListOption icon={faBookmark} title="Labels" />
        <ListOption icon={faCheckSquare} title="Checklist" />
        <ListOption icon={faFolder} title="Archive" />
      </ul>
    </aside>
  );
};

export default Sidebar;
