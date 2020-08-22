import React from 'react';
import classnames from 'classnames';
import styles from './GameEnd.module.css';
import EndScore from './EndScore/EndScore';
import EndNavigation from './EndNavigation/EndNavigation';

function GameEnd({ grid, time, tries, onStartOver, onMenuReturn, fadeout }) {
  const classname = classnames({
    [styles['end-screen']]: true,
    [styles['end']]: true, 
    [styles['end-screen--fadeout']]: fadeout});

  return (
    <div className={classname}>
      <EndScore grid={grid} time={time} tries={tries}/>
      <EndNavigation onStartOver={onStartOver} onMenuReturn={onMenuReturn} />
    </div>
  );
}

export default GameEnd
