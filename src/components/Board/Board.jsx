import React, { useContext } from "react";

import AddList from "../AddList/AddList";
import BoardContext from "../../context/boardContext";
import BoardHeader from "../BoardHeader/BoardHeader";
import Card from "../Card/Card";
import Header from "../Header/Header";
import List from "../List/List";
import styles from "./Board.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const Board = () => {
  const context = useContext(BoardContext);

  const cardsFromBackend = [
    { id: "card-1", content: "First task" },
    { id: "card-2", content: "Second task" },
  ];

  const columnsFromBackend = [
    {
      id: "column-1",
      name: "Todo",
      cards: cardsFromBackend,
    },
  ];

  const onDragEnd = () => {};

  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div
      className={styles.wrapper}
      onClick={(e) => {
        context.setLastClickedItem(e.target);
      }}
    >
      <Header />
      <div className={styles.boardWrapper}>
        <BoardHeader />
        <div className={styles.listsWrapper}>
          <DragDropContext onDropEnd={(result) => console.log(result)}>
            {columns.map((column, index) => (
              <Droppable key={column.id} droppableId={column.id}>
                {(provided, snapshot) => (
                  <List providedRef={provided.innerRef} droppableProps={provided.droppableProps}>
                    {column.cards.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided, snapshot) => (
                          <Card
                            providedRef={provided.innerRef}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    ))}
                  </List>
                )}
              </Droppable>
            ))}

            <AddList />
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Board;
