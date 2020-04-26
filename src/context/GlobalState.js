import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import BoardContext from './boardContext';
import boardReducer from './boardReducer';

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, { lastClickedItem: null, boardRef: null });

  const setLastClickedItem = (clickedItem, clickType) => {
    const lastClickedItem = { item: clickedItem, clickType };

    dispatch({
      type: 'SET_LAST_CLICKED_ITEM',
      payload: lastClickedItem,
    });
  };

  const setBoardRef = (boardRef) => {
    dispatch({
      type: 'SET_BOARD_REF',
      payload: boardRef,
    });
  };

  const clickBoard = () => {
    setTimeout(() => {
      if (state.boardRef) {
        state.boardRef.current.click();
      }
    }, 0);
  };

  return (
    <BoardContext.Provider
      value={{
        lastClickedItem: state.lastClickedItem,
        setLastClickedItem,
        setBoardRef,
        clickBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.node,
};

export default GlobalState;
