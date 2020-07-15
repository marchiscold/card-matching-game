import React from 'react';
import Card from './Card';
import MatchedCards from './MatchedCards';
import Timer from './Timer';

function GameBoard({ cards, timer, onCardClick }) {
  let matchedAmount = cards.reduce((acc, card) => {
    return card.isMatched ? acc + 1 : acc;
  }, 0)

  let cardList = cards.map((card, index) => {
    return <Card key={index} 
                 id={index} 
                 isOpen={card.isOpen} 
                 isMatched={card.isMatched}
                 color={card.color}
                 card={card}
                 onClick={onCardClick}/>;
  });

  return (
    <div className="game-wrapper">
      <div className="info">
        <MatchedCards
          matched={matchedAmount}
          total={cards.length}
        />
        <Timer seconds={timer} />
      </div>
      <div className="board">{cardList}</div>
    </div>
  );
}

export default GameBoard;
