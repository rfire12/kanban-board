import React, { useRef, useState } from "react";

import addListStyles from "../AddList/AddList.scss";
import styles from "./List.scss";
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
      <section ref={addCardRef} className={styles.addSection}>
        {isAdding ? (
          <div>
            <textarea className={styles.cardTitle}></textarea>
          </div>
        ) : (
          <div>
            <div className={styles.addCards}>
              <span className={`${addListStyles.addIcon} ${styles.addIcon}`}></span>
              Add a card
            </div>
            <span className={styles.archiveIcon}></span>
          </div>
        )}
      </section>
    </div>
  );
};

export default List;
