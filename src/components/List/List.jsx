import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import ExitIcon from '../ExitIcon/ExitIcon';
import addListStyles from '../AddList/AddList.scss';
import BoardContext from '../../context/boardContext';

import styles from './List.scss';
import useSetStateOnClickElement from '../../hooks/useSetStateOnClickElement';

const List = ({ children, dragHandleProps }) => {
  const [isAdding, setIsAdding] = useState(false);

  const addCardRef = useRef(null);

  const context = useContext(BoardContext);

  useSetStateOnClickElement(addCardRef, setIsAdding);

  return (
    <div className={styles.wrapper}>
      <section className={styles.header} {...dragHandleProps}>
        <h2 className={styles.listTitle}>General</h2>
        <h3 className={styles.numCards}>0 cards</h3>
      </section>
      {children}
      <section className={styles.addSection} ref={addCardRef}>
        {isAdding ? (
          <>
            <textarea className={styles.cardTitle} placeholder="Enter a title for this card" autoFocus />
            <Button style={{ padding: '9px 14px 8px 14px', margin: '5px 0px 0px 0px' }} title="Add card" />
            <ExitIcon className={styles.exitIcon} onClick={() => context.clickBoard()} />
          </>
        ) : (
          <>
            <div className={styles.addCards}>
              <span className={`${addListStyles.addIcon} ${styles.addIcon}`} />
              Add a card
            </div>
            <span className={styles.archiveIcon} />
          </>
        )}
      </section>
    </div>
  );
};

List.propTypes = {
  children: PropTypes.node,
  dragHandleProps: PropTypes.shape({
    'aria-describedby': PropTypes.string,
    'data-rbd-drag-handle-context-id': PropTypes.string,
    'data-rbd-drag-handle-draggable-id': PropTypes.string,
    draggable: PropTypes.bool,
    onDragStart: PropTypes.func,
    role: PropTypes.string,
    tabIndex: PropTypes.number,
  }),
};

export default List;
