import React from 'react';
import classnames from 'classnames';
import './GameStart.css';
import Grid from './Grid';
import Mode from './Mode';

function GameStart({
  onGameStart,
  fadeout,
  fadein,
  mode,
  onModeChange,
  grid,
  onGridChange,
}) {
  const startClass = classnames("start-screen", {
    "start-screen--fadeout": fadeout,
    "start-screen--fadein": fadein,
  });

  return (
    <div className={startClass}>
      <h1 className="start-screen__name">Pair Matcher</h1>
      <Mode activeMode={mode} onModeChange={onModeChange} />
      <Grid grid={grid} onGridChange={onGridChange} />
      <button className="start-screen__button" onClick={onGameStart}>
        play
      </button>
    </div>
  );
}

export default GameStart
