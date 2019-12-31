import { ADD_TITLE } from "./types";

const addTitle = (title, state) => {
  return { ...state, boardTitle: title };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return addTitle(action.payload, state);
    default:
      return state;
  }
};
