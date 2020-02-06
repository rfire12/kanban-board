import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "./AddList.scss";
import BoardContext from "../../context/boardContext";

const AddList = () => {
  const [isAdding, setIsAdding] = useState(false);

  const listTitleRef = useRef(null);

  const context = useContext(BoardContext);

  useEffect(() => {
    if (listTitleRef.current.contains(context.lastClickedItem)) { // If clicked outside the box
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  }, [context.lastClickedItem]);

  return (
    <>
      <div className={`${styles.wrapper} ${isAdding ? styles.adding : ""}`} ref={listTitleRef}>
        {isAdding ? (
          <div>
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
          <a className={styles.addList} href="#">
            <span className={styles.addIcon}></span>
            Add another list
          </a>
        )}
      </div>
    </>
  );
};

export default AddList;
