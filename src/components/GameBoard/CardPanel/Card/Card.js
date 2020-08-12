import React from 'react';
import classnames from 'classnames';
import styles from './Card.module.css';

function Card({ id, card, onClick }) {
  let cardClass = classnames({
    [styles['card']]: true,
    [styles['card--matched']]: card.isMatched,
    [styles['card--open']]: card.isOpen
  });

  let frontStyle = {};
  if (card.isMatched || card.isOpen) {
    frontStyle.backgroundColor = card.color;
    frontStyle.backgroundImage = `url(${card.img})`;
  }

  return (
    <div className={cardClass} onClick={() => onClick(id)}>
      <div className={styles['card__inner--front'] + ' ' + styles['card__inner']}></div>
      <div className={styles['card__inner--back'] + ' ' + styles['card__inner']} card={card} style={frontStyle}></div>
    </div>
  );
}

export default Card;
