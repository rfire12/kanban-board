import { useContext, useEffect } from "react";
import BoardContext from "../context/boardContext";

const useDisplayAddBox = (targetElement, setIsAdding) => {
  const context = useContext(BoardContext);

  useEffect(() => {
    if (targetElement.current.contains(context.lastClickedItem)) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  }, [context.lastClickedItem]);
};

export default useDisplayAddBox;
