import React from 'react';
import Card from './Card';
import MatchedCards from './MatchedCards';
import Timer from './Timer';
import classnames from 'classnames';
import Tries from './Tries';

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
    cardRows.push(<div key={row} className='board__row'>{cardRow}</div>);
  }

  const classname = classnames('game-screen', {'game-screen--fadeout': fadeout});
  return (
    <div className={classname}>
      <div className="info">
        <MatchedCards cards={cards} total={cards.length} />
        <Tries tries={tries} />
        <Timer time={timer} />
      </div>
      <div className="board">{cardRows}</div>
    </div>
  );
}

export default GameBoard;
