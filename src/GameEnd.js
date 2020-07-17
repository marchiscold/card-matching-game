import React from 'react';
import classnames from 'classnames';
function GameEnd({ onStartOver, fadeout }) {
  const classname = classnames('end-screen', {'end-screen--fadeout': fadeout});
  return (
    <div className={classname}>
      <button className="end-screen__button" onClick={onStartOver}>
        play again
      </button>
    </div>
  );
}

export default GameEnd
