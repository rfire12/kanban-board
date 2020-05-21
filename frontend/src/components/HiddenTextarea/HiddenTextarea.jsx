import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './HiddenTextarea.scss';
import useSetStateOnClickElement from '../../hooks/useSetStateOnClickElement';

const HiddenTextarea = ({ initialText = '', paragraphClassName = '', textareaClassName = '', isEditable = true, textareaStartsSelected }) => {
  const wrapperRef = useRef(null);

  const textareaRef = useRef(null);

  const [text, setText] = useState(initialText);

  const [displayTextarea, setDisplayTextarea] = useState(false);

  useSetStateOnClickElement(wrapperRef, setDisplayTextarea, 'LEFT');

  useEffect(() => {
    const { current: textarea } = textareaRef;

    if (textareaStartsSelected && textarea) {
      textarea.select();
    } else if (textarea) {
      textarea.focus();
    }
  }, [displayTextarea]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {isEditable && (
        <div className={!displayTextarea ? styles.hide : ''}>
          <TextareaAutosize
            value={text}
            className={`${styles.textarea} ${textareaClassName}`}
            onChange={(e) => setText(e.target.value)}
            inputRef={textareaRef}
          />
        </div>
      )}
      <div className={displayTextarea && isEditable ? styles.hide : ''}>
        <p className={`${styles.paragraph} ${paragraphClassName}`}>{text}</p>
      </div>
    </div>
  );
};

HiddenTextarea.propTypes = {
  initialText: PropTypes.string,
  paragraphClassName: PropTypes.string,
  textareaClassName: PropTypes.string,
  isEditable: PropTypes.bool,
  textareaStartsSelected: PropTypes.bool,
};

export default HiddenTextarea;
