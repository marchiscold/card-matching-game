import React from 'react';
import classnames from 'classnames';
import styled from './Card.module.css';

function Card({ id, card, onClick }) {
  let cardClass = classnames({
    [styled['card']]: true,
    [styled['card--matched']]: card.isMatched,
    [styled['card--open']]: card.isOpen
  });

  let frontStyle = {};
  if (card.isMatched || card.isOpen) {
    frontStyle.backgroundColor = card.color;
    frontStyle.backgroundImage = `url(${card.img})`;
  }

  return (
    <div className={cardClass} onClick={() => onClick(id)}>
      <div className={styled['card__inner--front'] + ' ' + styled['card__inner']}></div>
      <div className={styled['card__inner--back'] + ' ' + styled['card__inner']} card={card} style={frontStyle}></div>
    </div>
  );
}

export default Card;
