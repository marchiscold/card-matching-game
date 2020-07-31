import React from 'react';
import classnames from 'classnames';
import styles from './GameStart.module.css';
import styled from 'styled-components';
import Grid from './Grid';
import Mode from './Mode';

const StartButton = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 25px;
  letter-spacing: 2px;
  padding: 10px 15px;
  margin-bottom: 50px;
  margin-top: 15px;
`;

function GameStart({
  onGameStart,
  fadeout,
  fadein,
  mode,
  onModeChange,
  grid,
  onGridChange,
}) {
  const startClass = classnames(styles["start-screen"], {
    [styles["start-screen--fadeout"]]: fadeout,
    [styles["start-screen--fadein"]]: fadein,
  });

  return (
    <div className={startClass}>
      <h1 className={styles["start-screen__name"]}>Pair Matcher</h1>
      <Mode activeMode={mode} onModeChange={onModeChange} />
      <Grid grid={grid} onGridChange={onGridChange} />
      <StartButton onClick={onGameStart}>
        play
      </StartButton>
    </div>
  );
}

export default GameStart
