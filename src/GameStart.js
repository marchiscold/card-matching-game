import React from 'react';
import classnames from 'classnames';
import './GameStart.css';

function GameStart({ onGameStart, fadeout, fadein }) {
  const classname = classnames('start-screen', {
    'start-screen--fadeout': fadeout,
    'start-screen--fadein': fadein,
  });
  return (
    <div className={classname}>
      <h1 className='start-screen__name'>Match it</h1>
      <div className='start-screen__mode mode'>
        <div className='mode__item'>bugs</div>
        <div className='mode__item'>dinosaurs</div>
      </div>
      <div className='start-screen__grid grid-options'>
        <div className='grid-options__item'>2x4</div>
        <div className='grid-options__item'>4x4</div>
      </div>
      <button className='start-screen__button' onClick={onGameStart}>start</button>
    </div>
  )
}

export default GameStart
