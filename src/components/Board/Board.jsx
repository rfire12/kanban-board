import React, { Component } from "react";

import BoardHeader from "../BoardHeader/BoardHeader";
import Header from "../Header/Header";
import styles from "./Board.scss";

const Board = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.boardWrapper}>
        <BoardHeader />
      </div>
    </div>
  );
};

export default Board;
