import React, { useContext, useEffect, useRef, useState } from "react";

import boardContext from "../../context/boardContext";
import styles from "./BoardTitle.scss";

const BoardTitle = props => {
  const [boardTitle, setBoardTitle] = useState("Store");

  const [enableEditTitle, setEnableEditTitle] = useState(false);

  const [titleWidth, setTitleWidth] = useState("");

  const titleSpanRef = useRef(null);

  const titleInputRef = useRef(null);


  useEffect(() => {
    setTitleWidth(`${titleSpanRef.current.offsetWidth - 30}px`);
  }, [boardTitle]);
  

  useEffect(() => {
    titleInputRef.current.focus();
  }, [enableEditTitle === true]);

  const saveBoardTitle = e => {
    if (e.key === "Enter" || e.key === "Escape" || e.nativeEvent.type === "blur") {
      e.currentTarget.blur();
      setEnableEditTitle(false);
    }
  };

  return (
    <>
      <input
        type="text"
        name="board-title"
        className={styles.BoardTitleInput}
        ref={titleInputRef}
        value={boardTitle}
        autoComplete="off"
        spellCheck={false}
        autoFocus
        onChange={e => setBoardTitle(e.currentTarget.value)}
        onBlur={saveBoardTitle}
        onKeyDown={saveBoardTitle}
        style={{
          width: titleWidth,
          display: enableEditTitle ? "inline-block" : "none"
        }}
      />

      <span
        className={styles.BoardTitleSpan}
        ref={titleSpanRef}
        onClick={() => {
          setEnableEditTitle(true);
        }}
        style={{
          visibility: enableEditTitle ? "hidden" : "visible"
        }}
      >
        {boardTitle}
      </span>
    </>
  );
};

export default BoardTitle;
