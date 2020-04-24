import { useContext, useEffect } from 'react';

import BoardContext from '../context/boardContext';

/**
 * Sets a passed state as True when the passed element is clicked, and sets it False when another element is clicked.
 * @param {Ref} Ref - Ref object to the element
 * @param {SetStateAction} setState - State handler to be set when the element is clicked
 * @param {String} clickType - Type of click. Can be: left (default value), or right.
 */
const useSetStateOnClickElement = ({ current: targetItem }, setState, clickType = 'LEFT') => {
  const { lastClickedItem } = useContext(BoardContext);

  // Verifies if objects are not null in order to avoid errors accesing these objects properties
  const areItemsNotNull = targetItem !== null && lastClickedItem !== null;

  const isItemLastClicked =
    areItemsNotNull &&
    targetItem.contains(lastClickedItem.item) && // The contains method returns True if the HTML nodes are the same
    clickType === lastClickedItem.clickType;

  useEffect(() => {
    if (isItemLastClicked) {
      setState(true);
    } else {
      setState(false);
    }
  }, [lastClickedItem]);
};

export default useSetStateOnClickElement;
