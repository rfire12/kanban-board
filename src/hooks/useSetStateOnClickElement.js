import { useContext, useEffect } from "react";

import BoardContext from "../context/boardContext";


/**
 * Sets a passed state as True when the passed element is clicked, and sets it False when another element is clicked.
 * @param {Ref} targetElement - Reference to the element 
 * @param {SetStateAction} setState - State handler to be set when the element is clicked
 */
const useSetStateOnClickElement = (targetElement, setState) => {
  const context = useContext(BoardContext);

  useEffect(() => {
    if (targetElement.current !== null && targetElement.current.contains(context.lastClickedItem)) {
      setState(true);
    } else {
      setState(false);
    }
  }, [context.lastClickedItem]);
};

export default useSetStateOnClickElement;
