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

// A list is a column

const Board = () => {
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

  const listsFromBackend = {
    "list-1": {
      name: "Todo",
      cards: cardsFromBackend1,
    },
    "list-2": {
      name: "Todo",
      cards: cardsFromBackend2,
    },
  };

  const context = useContext(BoardContext);
  const [lists, setLists] = useState(listsFromBackend);

  const dropOnSameList = (result, lists, setLists) => {
    const { source, destination } = result;
    const list = copy(lists[source.droppableId]);
    const [movedCard] = list.cards.splice(source.index, 1); // Removes the card from its position on the list
    list.cards.splice(destination.index, 0, movedCard); // Re-inserts the card to its new position on the same list
    setLists({ ...lists, [source.droppableId]: list });
  };

  const dropOnDifferentList = (result, lists, setLists) => {
    const { source, destination } = result;
    const sourceList = copy(lists[source.droppableId]);
    const destinationList = copy(lists[destination.droppableId]);
    const [movedCard] = sourceList.cards.splice(source.index, 1); // Removes the card from its position on the list
    destinationList.cards.splice(destination.index, 0, movedCard); // Inserts the card to its new position on the destination list
    setLists({
      ...lists,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    });
  };

  const onDragEnd = (result, lists, setLists) => {
    const { source, destination } = result;
    if (source.droppableId === destination.droppableId) {
      dropOnSameList(result, lists, setLists);
    } else {
      dropOnDifferentList(result, lists, setLists);
    }
  };

  const renderList = (listId = "", list = {}) => (
    <Droppable key={listId} droppableId={listId}>
      {(provided, snapshot) => (
        <List providedRef={provided.innerRef} droppableProps={provided.droppableProps}>
          {list.cards.map((card, index) => renderCard(index, card))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );

  const renderCard = (cardIndex, card = {}) => (
    <Draggable key={card.id} draggableId={card.id} index={cardIndex}>
      {(provided, snapshot) => (
        <Card
          providedRef={provided.innerRef}
          draggableProps={provided.draggableProps}
          dragHandleProps={provided.dragHandleProps}
          title={card.title}
        />
      )}
    </Draggable>
  );

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
          <DragDropContext onDragEnd={(result) => onDragEnd(result, lists, setLists)}>
            {Object.entries(lists).map(([listId, list]) => renderList(listId, list))}
            <AddList />
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Board;
