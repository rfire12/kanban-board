import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';
import styles from './Card.scss';
import useSetStateOnClickElement from '../../hooks/useSetStateOnClickElement';

const Card = ({ providedRef, draggableProps = {}, dragHandleProps = {}, title = '', isDragging = false, removeCardAnimation }) => {
  const cardRef = useRef(null);

  const titleTextareaRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);

  const [cardHeight, setCardHeight] = useState('');

  useSetStateOnClickElement(cardRef, setIsEditing, 'RIGHT');

  const [cardTitle, setCardTitle] = useState(title);

  useEffect(() => {
    setCardTitle(cardTitle.replace(/(\r\n|\n|\r)(  +)/gm, ' ')); // Removes line breaks and tabs

    if (titleTextareaRef.current !== null) {
      titleTextareaRef.current.select();
      setCardHeight(titleTextareaRef.current.scrollHeight - 3);
    }
  }, [isEditing]);

  return (
    <div
      ref={providedRef}
      {...draggableProps}
      {...dragHandleProps}
      onContextMenu={(e) => e.preventDefault()}
      style={removeCardAnimation()}
    >
      <div ref={cardRef} className={isDragging ? styles.dragging : ''}>
        {isEditing ? (
          <div className={styles.cardEditingWrapper}>
            <div className={styles.textareaWrapper}>
              <textarea className={styles.titleTextarea} defaultValue={cardTitle} ref={titleTextareaRef} style={{ height: cardHeight }} />
            </div>
            <Button title="Save" className={styles.saveButton} />
          </div>
        ) : (
          <a href="# " className={styles.link}>
            <div className={styles.cardLabelWrapper}>
              <p className={styles.title}>{cardTitle}</p>
              <div className={styles.editIcon} onClick={() => setIsEditing(true)} onKeyDown={() => setIsEditing(true)} role="button" tabIndex={0}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </div>
            </div>
          </a>
        )}
      </div>
      {/* The following renders a blur screen in order to highlight the card that's been editing
          It needs to be outside the card's container, because when somebody clicks on it, it should disappear.
      */}
      {isEditing && <div className={styles.blurScreen} />}
    </div>
  );
};

Card.propTypes = {
  providedRef: PropTypes.func.isRequired,
  draggableProps: PropTypes.object.isRequired,
  dragHandleProps: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  isDragging: PropTypes.bool,
};

export default Card;
