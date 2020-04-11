const setLastClickedItem = (lastClickedItem, state) => {
  return { ...state, lastClickedItem: lastClickedItem };
};

export default (state, action) => {
  switch (action.type) {
    case "SET_LAST_CLICKED_ITEM":
      return setLastClickedItem(action.payload, state);
    default:
      return state;
  }
};
