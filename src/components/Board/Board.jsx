import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useContext } from "react";

import AddList from "../AddList/AddList";
import BoardContext from "../../context/boardContext";
import BoardHeader from "../BoardHeader/BoardHeader";
import Card from "../Card/Card";
import Header from "../Header/Header";
import List from "../List/List";
import { cloneDeep as copy } from "lodash";
import styles from "./Board.scss";
import { useState } from "react";

const Board = () => {
  const context = useContext(BoardContext);

  const cardsFromBackend1 = [
    {
      id: "card-1",
      title: `As a developer, I would like to create a template for an order to be placed, 
              in the administrator be able to select a supplier and several products that you want to order.`,
    },
    { id: "card-2", title: "Second card" },
  ];

  const cardsFromBackend2 = [
    {
      id: "card-3",
      title: "third card",
    },
    { id: "card-4", title: "fourth card" },
  ];

  const columnsFromBackend = {
    "column-1": {
      name: "Todo",
      cards: cardsFromBackend1,
    },
    "column-2": {
      name: "Todo",
      cards: cardsFromBackend2,
    },
  };

  const dropOnSameColumn = (result, columns, setColumns) => {
    const { source, destination } = result;
    const column = copy(columns[source.droppableId]);
    const [movedCard] = column.cards.splice(source.index, 1); // Removes the card from its position on the column
    column.cards.splice(destination.index, 0, movedCard); // Re-inserts the card to its new position on the same column
    setColumns({ ...columns, [source.droppableId]: column });
  };

  const dropOnDifferentColumn = (result, columns, setColumns) => {
    const { source, destination } = result;
    const sourceColumn = copy(columns[source.droppableId]);
    const destinationColumn = copy(columns[destination.droppableId]);
    const [movedCard] = sourceColumn.cards.splice(source.index, 1); // Removes the card from its position on the column
    destinationColumn.cards.splice(destination.index, 0, movedCard); // Inserts the card to its new position on the destination column
    setColumns({
      ...columns,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destinationColumn,
    });
  };

  const onDragEnd = (result, columns, setColumns) => {
    console.log(result);
    const { source, destination } = result;
    if (source.droppableId === destination.droppableId) {
      dropOnSameColumn(result, columns, setColumns);
    } else {
      dropOnDifferentColumn(result, columns, setColumns);
    }
  };

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
          <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
            {Object.entries(columns).map(([id, column]) => (
              <Droppable key={id} droppableId={id}>
                {(provided, snapshot) => (
                  <List providedRef={provided.innerRef} droppableProps={provided.droppableProps}>
                    {column.cards.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided, snapshot) => (
                          <Card
                            providedRef={provided.innerRef}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                            title={card.title}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
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
