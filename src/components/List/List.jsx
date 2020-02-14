import React, { useState, useRef } from "react";
import styles from "./List.scss";
import addListStyles from "../AddList/AddList.scss";
import useDisplayAddBox from "../../hooks/useDisplayAddBox";

const List = () => {
  const [isAdding, setIsAdding] = useState(false);

  const addCardRef = useRef(null);

  useDisplayAddBox(addCardRef, setIsAdding);

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <h2 className={styles.listTitle}>General</h2>
        <h3 className={styles.numCards}>0 cards</h3>
      </section>
      {isAdding ? (
        <section>

        </section>
      ) : (
        <section ref={addCardRef}>
          <div className={styles.addCards}>
            <span className={`${addListStyles.addIcon} ${styles.addIcon}`}></span>
            Add a card
          </div>
          <span className={styles.archiveIcon}></span>
        </section>
      )}
    </div>
  );
};

export default List;
