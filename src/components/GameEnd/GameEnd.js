import React from 'react';
import classnames from 'classnames';
import styles from './GameEnd.module.css';

function GameEnd({ grid, time, tries, onStartOver, onMenuReturn, fadeout }) {
  const classname = classnames({
    [styles['end-screen']]: true,
    [styles['end']]: true, 
    [styles['end-screen--fadeout']]: fadeout});
  return (
    <div className={classname}>
      <div className={styles['end__score']}>
        <div className={styles['score']}>
          <div className={styles['score__item']}>
            <div className={styles['end__desc']}>Mode:</div>
            <div className={styles['end__value']}>{grid.join('x')}</div>
          </div>
          <div className={styles['score__item']}>
            <div className={styles['end__desc']}>Tries:</div>
            <div className={styles['end__value']}>{tries}</div>
          </div>
          <div className={styles['score__item']}>
            <div className={styles['end__desc']}>Time:</div>
            <div className={styles['end__value']}>{time}s</div>
          </div>
        </div>
      </div>
      <div className={styles['end__nav nav']}>
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
