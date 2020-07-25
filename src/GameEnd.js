import React from 'react';
import classnames from 'classnames';
import './GameEnd.css';

function GameEnd({ grid, time, tries, onStartOver, fadeout }) {
  const classname = classnames('end-screen end', {'end-screen--fadeout': fadeout});
  return (
    <div className={classname}>
      <div className='end__score'>
        <div className='score'>
          <div className='score__item'>
            <div className='end__desc'>Mode:</div>
            <div className='end__value'>{grid.join('x')}</div>
          </div>
          <div className='score__item'>
            <div className='end__desc'>Tries:</div>
            <div className='end__value'>{tries}</div>
          </div>
          <div className='score__item'>
            <div className='end__desc'>Time:</div>
            <div className='end__value'>{time}s</div>
          </div>
        </div>
      </div>
      <div className='end__nav nav'>
        <button className="nav__button end-screen__button" onClick={onStartOver}>
          play again
        </button>
        <button className="nav__button end-screen__button" onClick={onStartOver}>
          score
        </button>
        <button className="nav__button end-screen__button" onClick={onStartOver}>
          main menu
        </button>
      </div>
    </div>
  );
}

export default GameEnd
