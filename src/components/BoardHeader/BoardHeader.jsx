import React, { Component } from "react";
import styles from "./BoardHeader.scss";
import BoardTitleInput from "../BoardTitleInput/BoardTitleInput";

const BoardHeader = () => {
  return (
    <>
      <div className={styles.BoardHeader}>
        <BoardTitleInput />
      </div>
    </>
  );
};

export default BoardHeader;
