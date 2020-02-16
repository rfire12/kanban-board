import React, { useRef, useState } from "react";

import AddButton from "../AddButton/AddButton";
import ExitIcon from "../ExitIcon/ExitIcon";
import styles from "./AddList.scss";
import useDisplayAddBox from "../../hooks/useDisplayAddBox";

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
            <AddButton title={"Add List"} style={{margin:"0px 0px 4px 4px"}}/>
            <ExitIcon className={styles.exitIcon} onClick={() => setIsAdding(false)}/>
          
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
