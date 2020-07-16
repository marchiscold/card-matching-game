import React from 'react';
import Card from './Card';
import MatchedCards from './MatchedCards';
import Timer from './Timer';

function GameBoard({ cards, rows, timer, onCardClick }) {
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

  return (
    <div className="game-wrapper">
      <div className="info">
        <MatchedCards matched={matchedAmount} total={cards.length} />
        <Timer seconds={timer} />
      </div>
      <div className="board">{cardRows}</div>
    </div>
  );
}

export default GameBoard;
