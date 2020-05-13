import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import React, { useContext, useState, useRef, useEffect } from 'react';

import { cloneDeep as copy } from 'lodash';
import AddList from '../AddList/AddList';
import BoardContext from '../../context/boardContext';
import BoardHeader from '../BoardHeader/BoardHeader';
import Card from '../Card/Card';
import Header from '../Header/Header';
import List from '../List/List';
import styles from './Board.scss';
import CardEditor from '../CardEditor/CardEditor';

// A list is a column

const Board = () => {
  const cardsFromBackend1 = [
    {
      id: 'card-1',
      title: `As a developer, I would like to create a template for an order to be placed, 
              in the administrator be able to select a supplier and several products that you want to order.`,
    },
    { id: 'card-2', title: 'Second card' },
  ];

  const cardsFromBackend2 = [
    {
      id: 'card-3',
      title: 'third card',
    },
    { id: 'card-4', title: 'fourth card' },
  ];

  const listsFromBackend = [
    {
      id: 'list-1',
      name: 'Todo',
      cards: cardsFromBackend1,
    },
    {
      id: 'list-2',
      name: 'Todo',
      cards: cardsFromBackend2,
    },
  ];

  const context = useContext(BoardContext);
  const [lists, setLists] = useState(listsFromBackend);
  const boardRef = useRef(null);

  useEffect(() => {
    context.setBoardRef(boardRef);
  }, []);

  const dropOnSameList = (source, destination) => {
    const listsCopy = copy(lists);

    const listIndex = listsCopy.findIndex((list) => list.id === source.droppableId);
    const list = listsCopy[listIndex];

    const [movedCard] = list.cards.splice(source.index, 1); // Removes the card from its position on the list
    list.cards.splice(destination.index, 0, movedCard); // Re-inserts the card into its new position on the same list
    setLists(listsCopy);
  };

  const dropOnDifferentList = (source, destination) => {
    const listsCopy = copy(lists);

    const sourceListIndex = lists.findIndex((list) => list.id === source.droppableId);
    const sourceList = listsCopy[sourceListIndex];
    const destinationListIndex = lists.findIndex((list) => list.id === destination.droppableId);
    const destinationList = listsCopy[destinationListIndex];

    const [movedCard] = sourceList.cards.splice(source.index, 1); // Removes the card from its position on the list
    destinationList.cards.splice(destination.index, 0, movedCard); // Inserts the card into its new position on the destination list
    setLists(listsCopy);
  };

  const dropColumn = (source, destination) => {
    const listsCopy = copy(lists);
    const [movedList] = listsCopy.splice(source.index, 1);
    listsCopy.splice(destination.index, 0, movedList);
    setLists(listsCopy);
  };

  const onDragEnd = (result) => {
    const { source, destination, type } = result;

    if (type === 'list') {
      dropColumn(source, destination);
    } else if (source.droppableId === destination.droppableId) {
      dropOnSameList(source, destination);
    } else {
      dropOnDifferentList(source, destination);
    }
  };

  const removeCardAnimation = (style, snapshot) => {
    if (!snapshot.isDropAnimating) {
      return style;
    }
    return {
      ...style,
      transitionDuration: '0.001s',
    };
  };

  const renderCard = (cardIndex, card = {}) => (
    <Draggable key={card.id} draggableId={card.id} index={cardIndex}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} style={removeCardAnimation(provided.draggableProps.style, snapshot)}>
          <Card title={card.title} dragHandleProps={provided.dragHandleProps} isDragging={snapshot.isDragging} />
        </div>
      )}
    </Draggable>
  );

  const renderList = (list = {}, draggableIndex) => (
    <Draggable key={`draggable-${list.id}`} draggableId={list.id} index={draggableIndex}>
      {(draggableProvided) => (
        <div className={styles.listWrapper}>
          <div ref={draggableProvided.innerRef} {...draggableProvided.draggableProps}>
            <Droppable key={`droppable-${list.id}`} droppableId={list.id}>
              {(droppableProvided) => (
                <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                  <List dragHandleProps={draggableProvided.dragHandleProps}>
                    {list.cards.map((card, index) => renderCard(index, card))}
                    {droppableProvided.placeholder}
                  </List>
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );

  const setLastClickedItem = (e) => {
    if (window.getSelection().toString() === '') {
      // If it's not selecting text
      context.setLastClickedItem(e.target, 'LEFT');
    }
  };

  return (
    <div
      ref={boardRef}
      role="button"
      className={styles.wrapper}
      onKeyDown={setLastClickedItem}
      onClick={setLastClickedItem}
      onContextMenu={(e) => context.setLastClickedItem(e.target, 'RIGHT')}
      tabIndex={0}
    >
      <Header />
      <div className={styles.boardWrapper}>
        <BoardHeader />
        <div className={styles.listsWrapper}>
          <DragDropContext onDragEnd={(result) => result.destination && onDragEnd(result)}>
            <Droppable droppableId="droppable-board" direction="horizontal" type="list">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className={styles.flexContainer}>
                  {lists.map((list, index) => renderList(list, index))}
                  {provided.placeholder}
                  <AddList />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
       
      </div>
    </div>
  );
};

export default Board;
