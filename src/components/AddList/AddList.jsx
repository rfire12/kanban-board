import React, { useRef, useState } from "react";
import useDisplayAddBox from "../../hooks/useDisplayAddBox";
import styles from "./AddList.scss";


const AddList = () => {
  const [isAdding, setIsAdding] = useState(false);

  const listTitleRef = useRef(null);

  useDisplayAddBox(listTitleRef, setIsAdding);

  return (
    <>
      <div className={`${styles.wrapper} ${isAdding ? styles.adding : ""}`} ref={listTitleRef}>
        {isAdding ? (
          <div data-testid="adding-list">
            <input
              type="text"
              className={styles.listNameInput}
              placeholder="Enter list title..."
              autoComplete="off"
              autoFocus
            />
            <button className={styles.addListButton}>Add List</button>
            <span className={styles.exitIcon} onClick={() => setIsAdding(false)}></span>
          </div>
        ) : (
          <a id="add-another-list-button" className={styles.addList} href="#">
            <span className={styles.addIcon}></span>
            Add another list
          </a>
        )}
      </div>
    </>
  );
};

export default AddList;
