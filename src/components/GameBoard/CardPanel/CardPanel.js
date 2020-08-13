import React from 'react';
import Card from './Card/Card';
import styles from '../GameBoard.module.css';

function CardPanel({ cards, grid, onCardClick }) {
  const cardList = cards.map((card, index) => {
    return <Card key={index} 
                 id={index} 
                 card={card}
                 onClick={onCardClick}/>;
  });
  
  const rows = grid[0];
  const cardsPerRow = cards.length/rows;
  const cardRows = [];
  for (let row = 0; row < rows; row++) {
    const cardRow = [];
    for (let i = 0; i < cardsPerRow; i++) {
      cardRow.push(cardList[cardsPerRow*row + i]);
    }
    cardRows.push(<div key={row} className={styles['board__row']}>{cardRow}</div>);
  }

  return (
    <div className={styles['board']}>{cardRows}</div>
  )
}

export default CardPanel
