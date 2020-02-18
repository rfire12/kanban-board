import { useContext, useEffect } from "react";

import BoardContext from "../context/boardContext";

const useDisplayElementOnClick = (targetElement, setState) => {
  const context = useContext(BoardContext);

  useEffect(() => {
    if (targetElement.current !== null && targetElement.current.contains(context.lastClickedItem)) {
      setState(true);
    } else {
      setState(false);
    }
  }, [context.lastClickedItem]);
};

export default useDisplayElementOnClick;
