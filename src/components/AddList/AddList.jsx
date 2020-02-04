import React, { useState, useRef, useEffect } from "react";
import styles from "./AddList.scss";
import PropTypes from "prop-types";

const AddList = () => {
  const [isAdding, setIsAdding] = useState(false);

  const listTitleRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", e => {
      if (listTitleRef.current.contains(e.target)) { // If clicked outside the addList box
        setIsAdding(true);
      }else{
        setIsAdding(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`${styles.wrapper} ${isAdding ? styles.adding : ""}`}
        ref={listTitleRef}
      >
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
