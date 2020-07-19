import React from 'react';
import classnames from 'classnames';
import './GameStart.css';
import bugLogo from './images/bug_logo.jpg';
import fishLogo from './images/fish_logo.jpg';

function GameStart({ onGameStart, fadeout, fadein, mode, onModeChange }) {
  const classname = classnames('start-screen', {
    'start-screen--fadeout': fadeout,
    'start-screen--fadein': fadein,
  });

  const modes = [
    {
      id: 'bugs',
      isActive: mode === 'bugs',
      desc: 'bugs',
      logo: bugLogo
    },
    {
      id: 'aquatic',
      isActive: mode === 'aquatic',
      desc: 'aquatic',
      logo: fishLogo
    }
  ];

  const modeList = modes.map((mode) => {
    const modeClass = classnames('mode__item', {active: mode.isActive});
    return (
      <div
        key={mode.id}
        className={modeClass}
        style={{ backgroundImage: `url(${mode.logo})` }}
        onClick={() => onModeChange(mode.desc)}
      >
        <div className="mode__overlay"></div>
        <div className="mode__description">{mode.desc}</div>
      </div>
    );
  })

  return (
    <div className={classname}>
      <h1 className='start-screen__name'>Pair Matcher</h1>
      <div className='start-screen__mode mode'>
        {modeList}
      </div>
      <div className='start-screen__grid grid-options'>
        <div className='grid-options__item active'>2x4</div>
        <div className='grid-options__item'>4x4</div>
      </div>
      <button className='start-screen__button' onClick={onGameStart}>play</button>
    </div>
  )
}

export default GameStart
