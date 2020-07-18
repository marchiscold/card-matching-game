import React from 'react';
import classnames from 'classnames';
import './GameStart.css';
import bugLogo from './images/bug_logo.jpg';
import fishLogo from './images/fish_logo.jpg';

function GameStart({ onGameStart, fadeout, fadein }) {
  const classname = classnames('start-screen', {
    'start-screen--fadeout': fadeout,
    'start-screen--fadein': fadein,
  });
  return (
    <div className={classname}>
      <h1 className='start-screen__name'>Match it</h1>
      <div className='start-screen__mode mode'>
        <div className='mode__item active' style={{backgroundImage: `url(${bugLogo})`}}>
          <div className='mode__overlay'></div>
          <div className='mode__description'>bugs</div>
        </div>
        <div className='mode__item' style={{backgroundImage: `url(${fishLogo})`}}>
          <div className='mode__overlay'></div>
          <div className='mode__description'>aquatic</div>
        </div>
      </div>
      <div className='start-screen__grid grid-options'>
        <div className='grid-options__item active'>2x4</div>
        <div className='grid-options__item'>4x4</div>
      </div>
      <button className='start-screen__button' onClick={onGameStart}>start</button>
    </div>
  )
}

export default GameStart
