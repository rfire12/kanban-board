import React from "react";
import styles from "./List.scss";
import addListStyles from "../AddList/AddList.scss";

const List = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <h2 className={styles.listTitle}>General</h2>
        <h3 className={styles.numCards}>0 cards</h3>
      </section>
      <section>
        <div className={styles.addCards}>
          <span className={`${addListStyles.addIcon} ${styles.addIcon}`}></span>
          Add another list
        </div>
        <span className={styles.archiveIcon}></span>
      </section>
    </div>
  );
};

export default List;
