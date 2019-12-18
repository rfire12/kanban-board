import React, { Component } from "react";
import styles from "./BoardHeader.scss";

const BoardHeader = () => {
  return (
    <>
      <div className={styles.BoardHeader}>
        <input
          type="text"
          name="board-title"
          value="Store"
          className={styles.BoardTitle}
        />
      </div>
    </>
  );
};

export default BoardHeader;
