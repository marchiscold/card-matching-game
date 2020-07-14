import React from 'react';
import Card from './Card';
import MatchedCards from './MatchedCards';
import Timer from './Timer';

function GameBoard({ matched, cards, timer, onCardClick }) {
  let cardList = cards.map((card, index) => {
    return <Card key={index} 
                 id={index} 
                 open={card.isOpen} 
                 color={card.color}
                 onClick={onCardClick}/>;
  });

  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <div className="info">
          <MatchedCards
            matched={matched}
            total={cards.length}
          />
          <Timer seconds={timer} />
        </div>
        <div className="board">{cardList}</div>
      </div>
    </div>
  );
}

export default GameBoard;
