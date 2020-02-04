import React, { Component } from "react";
import styles from "./BoardHeader.scss";
import BoardTitle from "../BoardTitle/BoardTitle";

const BoardHeader = () => {
  return (
    <>
      <div className={styles.BoardHeader}>
        <BoardTitle />
      </div>
    </>
  );
};

export default BoardHeader;
