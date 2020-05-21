import React, { useEffect, useRef, useState } from 'react';

import styles from './BoardTitle.scss';

const BoardTitle = () => {
  const [boardTitle, setBoardTitle] = useState('Store');

  const [enableEditTitle, setEnableEditTitle] = useState(false);

  const [titleWidth, setTitleWidth] = useState('');

  const titleSpanRef = useRef(null);

  const titleInputRef = useRef(null);

  useEffect(() => {
    setTitleWidth(`${titleSpanRef.current.offsetWidth - 30}px`);
  }, [boardTitle]);

  useEffect(() => {
    titleInputRef.current.focus();
  }, [enableEditTitle === true]);

  const saveBoardTitle = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape' || e.nativeEvent.type === 'blur') {
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
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        onChange={(e) => setBoardTitle(e.currentTarget.value)}
        onBlur={saveBoardTitle}
        onKeyDown={saveBoardTitle}
        style={{
          width: titleWidth,
          display: enableEditTitle ? 'inline-block' : 'none',
        }}
      />

      <span
        className={styles.BoardTitleSpan}
        ref={titleSpanRef}
        onClick={() => {
          setEnableEditTitle(true);
        }}
        onKeyDown={() => {
          setEnableEditTitle(true);
        }}
        style={{
          visibility: enableEditTitle ? 'hidden' : 'visible',
        }}
        role="button"
        tabIndex={0}
      >
        {boardTitle}
      </span>
    </>
  );
};

export default BoardTitle;
