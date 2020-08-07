import React from 'react';
import classnames from 'classnames';
import styles from './GameStart.module.css';
import Grid from '../Grid/Grid';
import Mode from '../Mode/Mode';

function GameStart({
  onGameStart,
  fadeout,
  fadein,
  mode,
  onModeChange,
  grid,
  onGridChange,
}) {
  const startClass = classnames(styles['start-screen'], {
    [styles['start-screen--fadeout']]: fadeout,
    [styles['start-screen--fadein']]: fadein,
  });

  return (
    <div className={startClass}>
      <h1 className={styles['start-screen__name']}>Pair Matcher</h1>
      <Mode activeMode={mode} onModeChange={onModeChange} />
      <Grid grid={grid} onGridChange={onGridChange} />
      <div className={styles['start-screen__button']} onClick={onGameStart}>
        play
      </div>
    </div>
  );
}

export default GameStart
