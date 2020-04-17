import React, { useContext } from "react";

import AddList from "../AddList/AddList";
import BoardContext from "../../context/boardContext";
import BoardHeader from "../BoardHeader/BoardHeader";
import Card from "../Card/Card";
import Header from "../Header/Header";
import List from "../List/List";
import styles from "./Board.scss";

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
          <List >
            <Card />
          </List>
          <AddList />
        </div>
      </div>
    </div>
  );
};

export default Board;
