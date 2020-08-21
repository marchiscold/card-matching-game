import React from 'react';
import classnames from 'classnames';
import styles from './GameEnd.module.css';
import EndScore from './EndScore/EndScore';

function GameEnd({ grid, time, tries, onStartOver, onMenuReturn, fadeout }) {
  const classname = classnames({
    [styles['end-screen']]: true,
    [styles['end']]: true, 
    [styles['end-screen--fadeout']]: fadeout});

  return (
    <div className={classname}>
      <EndScore grid={grid} time={time} tries={tries}/>
      <div className={styles['end__nav'] + ' ' + styles['nav']}>
        <div className={styles['nav__button']} onClick={onStartOver}>
          play again
        </div>
        <div className={styles['nav__button']} onClick={onStartOver}>
          score
        </div>
        <div className={styles['nav__button']} onClick={onMenuReturn}>
          main menu
        </div>
      </div>
    </div>
  );
}

export default GameEnd
