import React from "react";

import BoardHeader from "../BoardHeader/BoardHeader";
import Header from "../Header/Header";
import styles from "./Board.scss";
import AddList from "../AddList/AddList";
import List from "../List/List";

const Board = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.boardWrapper}>
        <BoardHeader />
        <div className={styles.listsWrapper}>
          <List />
          <AddList />
        </div>
      </div>
    </div>
  );
};

export default Board;
