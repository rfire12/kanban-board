import React, { useState, useReducer, useEffect } from "react";

import BoardContext from "./boardContext";
import boardReducer from "./boardReducer";

const GlobalState = props => {
  const [state, dispatch] = useReducer(boardReducer, {lastClickedItem: null});

  const setLastClickedItem = (lastClickedItem) => {
    dispatch({
      type: 'SET_LAST_CLICKED_ITEM',
      payload: lastClickedItem
    })};
    
  return (
    <BoardContext.Provider
      value={{
        lastClickedItem: state.lastClickedItem,
        setLastClickedItem: setLastClickedItem
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default GlobalState;
