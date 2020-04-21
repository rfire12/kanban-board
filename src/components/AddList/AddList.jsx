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
        data-testid="add-list-wrapper"
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
            <Button title={"Add List"} style={{ margin: "0px 0px 4px 4px" }} />
            <ExitIcon className={styles.exitIcon} onClick={() => setIsAdding(false)} />
          </div>
        ) : (
          <a
            id="add-another-list-button"
            data-testid="add-another-list-button"
            className={styles.addList}
            href="#"
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
