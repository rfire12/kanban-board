import React, { useState } from "react";
import styles from "./AddList.scss";
import PropTypes from "prop-types";

const AddList = () => {
  const [isAdding, setIsAdding] = useState(true);

  return (
    <>
      <div className={`${styles.wrapper}`} onClick={() => setIsAdding(false)}>
        {isAdding ? (
          <a className={styles.addList} href="#">
            <span className={styles.addIcon}></span>
            Add another list
          </a>
        ) : (
          <div>
            <input type="text" className={styles.listNameInput} placeholder="Enter list title..." autoComplete="off" autoFocus />
            <button className={styles.addListButton}>Add List</button>
          </div>
        )}
      </div>
    </>
  );
};

AddList.propTypes = {
  seIsAdding: PropTypes.func
};

export default AddList;
