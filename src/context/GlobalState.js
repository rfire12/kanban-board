import React, { useState, useReducer, useEffect } from "react";

import BoardContext from "./boardContext";
import boardReducer from "./boardReducer";
import { ADD_TITLE } from "./types";

const GlobalState = props => {
  const [state, dispatch] = useReducer(boardReducer, {});

  const changeBoardTitle = (boardTitle) => {
    dispatch({
      type: ADD_TITLE,
      payload: boardTitle
    })};

  return (
    <BoardContext.Provider
      value={{
        boardTitle: state.title,
        changeBoardTitle: changeBoardTitle
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default GlobalState;
