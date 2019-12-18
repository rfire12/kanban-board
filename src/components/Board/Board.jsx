import React, { Component } from "react";
import Colunm from "./Colunm/Colunm";
import Header from "./Header/Header";
import styles from "./Board.scss";
import BoardHeader from "./BoardHeader/BoardHeader";

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
