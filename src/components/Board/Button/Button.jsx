import React, { Component, useState, useEffect, useRef } from "react";
import styles from "./Button.scss";

const Button = () => {
  const [boardTitle, setBoardTitle] = useState("Store");

  const [enableEditTitle, setEnableEditTitle] = useState(false);

  const [titleWidth, setTitleWidth] = useState("10px");

  const titleRef = useRef(null);

  const setTitle = (e) => {
    setBoardTitle(e.currentTarget.value);
    setTitleWidth(`${titleRef.current.offsetWidth-5}px`);
  }

  const onPressEnterKey = e => {
    if (e.key === "Enter" || e.key === "Escape") {
      e.currentTarget.blur();
    }
  };

  return (
    <>
      <input
        id="te"
        autoFocus
        type="text"
        name="board-title"
        value={boardTitle}
        autoComplete="off"
        onChange={setTitle}
        onKeyDown={onPressEnterKey}
        onBlur={() => setEnableEditTitle(false)}
        style={{width: titleWidth}}
      />

      <span
        className={styles.BoardTitle}
        onClick={() => setEnableEditTitle(true)}
        ref={titleRef}
      >
        {boardTitle}
      </span>
    </>
  );
};

export default Button;
