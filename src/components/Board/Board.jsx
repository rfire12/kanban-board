import React, { useState, useContext } from "react";

import BoardHeader from "../BoardHeader/BoardHeader";
import Header from "../Header/Header";
import styles from "./Board.scss";
import AddList from "../AddList/AddList";
import List from "../List/List";
import BoardContext from "../../context/boardContext";

const Board = () => {
  const context = useContext(BoardContext);

  return (
    <div
      className={styles.wrapper}
      onClick={e => {
        context.setLastClickedItem(e.target);
      }}
    >
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
