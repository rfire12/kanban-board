import React, { useReducer } from 'react';

import BoardContext from './boardContext';
import boardReducer from './boardReducer';

const GlobalState = (props) => {
  const [state, dispatch] = useReducer(boardReducer, { lastClickedItem: null });

  const setLastClickedItem = (clickedItem, clickType) => {
    const lastClickedItem = { item: clickedItem, clickType };

    dispatch({
      type: 'SET_LAST_CLICKED_ITEM',
      payload: lastClickedItem,
    });
  };

  return (
    <BoardContext.Provider
      value={{
        lastClickedItem: state.lastClickedItem,
        setLastClickedItem,
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default GlobalState;
