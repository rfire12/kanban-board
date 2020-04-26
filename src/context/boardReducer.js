
export default (state, action) => {
  switch (action.type) {
    case 'SET_LAST_CLICKED_ITEM':
      return { ...state, lastClickedItem: action.payload };
    case 'SET_BOARD_REF':
      return { ...state, boardRef: action.payload };
    default:
      return state;
  }
};
