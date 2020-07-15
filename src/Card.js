import React from 'react';

function Card({ id, card, onClick }) {

  if (card.isOpen || card.isMatched) {
    return (
      <div className="card"
            style={{backgroundColor: card.color}}
            onClick={() => onClick(id)}>
      open card
      </div>
    )
  }

  return (
    <div className="card"
          onClick={() => onClick(id)}>
      closed card
    </div>
  )
}

export default Card;
