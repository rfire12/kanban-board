import { useContext, useEffect } from 'react';

import BoardContext from '../context/boardContext';

/**
 * Sets a passed state as True when the passed element is clicked, and sets it False when another element is clicked.
 * It keeps the state as True if one of its descendents is also clicked.
 *
 * This function is mainly used to display elements when the user clicks another element, and hide them when the user clicks something else.
 * @param {Ref} Ref - Ref object to the element
 * @param {SetStateAction} setState - State handler to be set when the element is clicked
 * @param {String} clickType - Type of click which triggers setState. Can be: left (default value), or right.
 */
const useSetStateOnClickElement = ({ current: targetItem }, setState, clickType = 'LEFT') => {
  const { lastClickedItem } = useContext(BoardContext);

  // Verifies if objects are not null in order to avoid errors accesing these objects properties
  const areItemsNotNull = targetItem !== null && lastClickedItem !== null;

  const isItemLastClicked = areItemsNotNull && targetItem.contains(lastClickedItem.item) && clickType === lastClickedItem.clickType;

  const clickedOutside = areItemsNotNull && !targetItem.contains(lastClickedItem.item);

  useEffect(() => {
    if (isItemLastClicked) {
      setState(true);
    } else if (clickedOutside) {
      setState(false);
    }
  }, [lastClickedItem]);
};

export default useSetStateOnClickElement;
