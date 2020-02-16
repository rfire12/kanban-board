import React, { useRef, useState } from "react";

import AddButton from "../AddButton/AddButton";
import ExitIcon from "../ExitIcon/ExitIcon";
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
            <textarea
              className={styles.cardTitle}
              placeholder="Enter a title for this card"
              autoFocus
            ></textarea>
            <AddButton
              style={{ padding: "9px 14px 8px 14px", margin: "5px 0px 0px 0px" }}
              title="Add card"
            />
            <ExitIcon className={styles.exitIcon} onClick={() => setIsAdding(false)} />
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
