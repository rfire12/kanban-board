import React, { useState } from "react";
import styles from "./AddList.scss";

const AddList = () => {

  const [isAdding, seIsAdding] = useState(false);

  return (
    <div className={styles.wrapper} onClick={seIsAdding(!isAdding)}>
      <a className={styles.addList} href="">
        <span className={styles.addIcon}></span>
        Add another list
      </a>
    </div>
  );
};

export default AddList;
