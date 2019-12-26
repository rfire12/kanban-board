import React, { useState, useEffect, useRef } from "react";
import styles from "./Button.scss";

const Button = () => {
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

  const onPressEnterKey = e => {
    if (e.key === "Enter" || e.key === "Escape") {
      e.currentTarget.blur();
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
        onBlur={() => setEnableEditTitle(false)}
        onKeyDown={onPressEnterKey}
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

export default Button;
