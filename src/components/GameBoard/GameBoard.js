import React from 'react';
import Card from '../Card/Card';
import MatchedCards from '../MatchedCards/MatchedCards';
import Timer from '../Timer/Timer';
import classnames from 'classnames';
import Tries from '../Tries/Tries';
import styles from './GameBoard.module.css';

function GameBoard({ tries, cards, grid, timer, onCardClick, fadeout }) {
  const rows = grid[0];
  const cardList = cards.map((card, index) => {
    return <Card key={index} 
                 id={index} 
                 card={card}
                 onClick={onCardClick}/>;
  });

  const cardsPerRow = cards.length/rows;
  const cardRows = [];
  for (let row = 0; row < rows; row++) {
    const cardRow = [];
    for (let i = 0; i < cardsPerRow; i++) {
      cardRow.push(cardList[cardsPerRow*row + i]);
    }
    cardRows.push(<div key={row} className={styles['board__row']}>{cardRow}</div>);
  }

  const gameScreenClass = classnames({
    [styles['game-screen']]: true,
    [styles['game-screen--fadeout']]: fadeout,
  });
  return (
    <div className={gameScreenClass}>
      <div className={styles['info']}>
        <MatchedCards cards={cards} total={cards.length} />
        <Tries tries={tries} />
        <Timer time={timer} />
      </div>
      <div className={styles['board']}>{cardRows}</div>
    </div>
  );
}

export default GameBoard;
