import React from 'react';
import Card from './Card';
import MatchedCards from './MatchedCards';
import Timer from './Timer';
import classnames from 'classnames';

function GameBoard({ cards, rows, timer, onCardClick, fadeout }) {
  let matchedAmount = cards.reduce((acc, card) => {
    return card.isMatched ? acc + 1 : acc;
  }, 0)

  let cardList = cards.map((card, index) => {
    return <Card key={index} 
                 id={index} 
                 card={card}
                 onClick={onCardClick}/>;
  });

  const cardsPerRow = cards.length/rows;
  let cardRows = [];
  for (let row = 0; row < rows; row++) {
    let cardRow = [];
    for (let i = 0; i < cardsPerRow; i++) {
      cardRow.push(cardList[cardsPerRow*row + i]);
    }
    cardRows.push(<div key={row} className='board__row'>{cardRow}</div>);
  }

  const classname = classnames('game-screen', {'game-screen--fadeout': fadeout});
  return (
    <div className={classname}>
      <div className="info">
        <MatchedCards matched={matchedAmount} total={cards.length} />
        <Timer time={timer} />
      </div>
      <div className="board">{cardRows}</div>
    </div>
  );
}

export default GameBoard;
