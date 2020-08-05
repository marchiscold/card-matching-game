import React from 'react';
import classnames from 'classnames';
import styled from './Card.module.css';

function Card({ id, card, onClick }) {
  let cardClass = classnames({
    card: true,
    'card--matched': card.isMatched,
    'card--open': card.isOpen
  });

  let style = {};
  if (card.isMatched || card.isOpen) {
    style.backgroundColor = card.color;
    style.backgroundImage = `url(${card.img})`;
  }

  return (
    <div className={cardClass} onClick={() => onClick(id)}>
      <div className={styled['card--front']}></div>
      <div className={styled['card--back']} card={card} style={style}></div>
    </div>
  );
}

export default Card;
