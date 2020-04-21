import React, { useRef, useState } from "react";

import Button from "../Button/Button";
import ExitIcon from "../ExitIcon/ExitIcon";
import styles from "./AddList.scss";
import useSetStateOnClickElement from "../../hooks/useSetStateOnClickElement";

const AddList = () => {
  const [isAdding, setIsAdding] = useState(false);

  const listTitleRef = useRef(null);

  useSetStateOnClickElement(listTitleRef, setIsAdding);

  return (
    <>
      <div
        className={`${styles.wrapper} ${isAdding ? styles.adding : ""}`}
        ref={listTitleRef}
        data-testid="add-list"
      >
        {isAdding ? (
          <div data-testid="adding-list">
            <input
              type="text"
              className={styles.listNameInput}
              placeholder="Enter list title..."
              autoComplete="off"
              autoFocus
            />
            <Button title={"Add List"} style={{ margin: "0px 0px 4px 4px" }} />
            <ExitIcon className={styles.exitIcon} onClick={() => setIsAdding(false)} />
          </div>
        ) : (
          <a
            className={styles.addList}
            href="#"
            data-testid="add-another-list-button"
          >
            <span className={styles.addIcon}></span>
            Add another list
          </a>
        )}
      </div>
    </>
  );
};

export default AddList;
