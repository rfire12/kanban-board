import React, { useContext, useEffect, useRef, useState } from "react";

import styles from "./BoardTitleInput.scss";
import boardContext from "../../context/boardContext";

const BoardTitleInput = props => {
  const [boardTitle, setBoardTitle] = useState("Store");

  const [enableEditTitle, setEnableEditTitle] = useState(false);

  const [titleWidth, setTitleWidth] = useState("");

  const titleSpanRef = useRef(null);

  const titleInputRef = useRef(null);

  const context = useContext(boardContext);

  useEffect(() => {
    setTitleWidth(`${titleSpanRef.current.offsetWidth - 30}px`);
  }, [boardTitle]);

  useEffect(() => {
    titleInputRef.current.focus();
  }, [enableEditTitle === true]);

  const saveBoardTitle = e => {
    if (e.key === "Enter" || e.key === "Escape" || e.nativeEvent.type === "blur") {
      context.changeBoardTitle(boardTitle);
      e.currentTarget.blur();
      setEnableEditTitle(false);
    }
  };

  return (
    <>
      <input
        type="text"
        name="board-title"
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
        className={styles.BoardTitle}
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

export default BoardTitleInput;
