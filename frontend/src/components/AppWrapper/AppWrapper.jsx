import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoardContext from '../../context/boardContext';

const AppWrapper = ({ children }) => {
  const context = useContext(BoardContext);
  const boardRef = useRef(null);

  const setLastClickedItem = (e) => {
    if (window.getSelection().toString() === '') {
      // If it's not selecting text
      context.setLastClickedItem(e.target, 'LEFT');
    }
  };

  useEffect(() => {
    context.setBoardRef(boardRef);
  }, []);

  return (
    <div
      ref={boardRef}
      role="button"
      onKeyDown={setLastClickedItem}
      onClick={setLastClickedItem}
      onContextMenu={(e) => context.setLastClickedItem(e.target, 'RIGHT')}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;
