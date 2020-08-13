import React from 'react';
import InfoPanel from './InfoPanel/InfoPanel';
import CardPanel from './CardPanel/CardPanel';
import classnames from 'classnames';
import styles from './GameBoard.module.css';

function GameBoard({ tries, cards, grid, timer, onCardClick, fadeout }) {
  const gameScreenClass = classnames({
    [styles['game-screen']]: true,
    [styles['game-screen--fadeout']]: fadeout,
  });

  return (
    <div className={gameScreenClass}>
      <InfoPanel cards={cards} tries={tries} timer={timer}/>
      <CardPanel cards={cards} grid={grid} onCardClick={onCardClick}/>
    </div>
  );
}

export default GameBoard;
