import React from 'react';
import classnames from 'classnames';

function Card({ id, card, onClick }) {
  let classname = classnames({
    card: true,
    'card--matched': card.isMatched,
    'card--open': card.isOpen
  });
  
  let style = {};
  if (card.isMatched || card.isOpen) {
    style.backgroundColor = card.color;
  }

  return (
    <div className={classname} onClick={() => onClick(id)}>
      <div className="card__front"></div>
      <div className="card__back" style={style}></div>
    </div>
  );
}

export default Card;
