import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import styled from 'Card.module.css';

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: none;
`;

const CardFront = styled(CardFace)`
  background-color: #333;
`;

const CardBack = styled(CardFace)`
  background-color: ${({ card }) =>
    card.isMatched || card.isOpen ? card.color : ""};
  background-image: ${({ card }) =>
    card.isMatched || card.isOpen ? `url(${card.img})` : ""};

  transform: rotateY(180deg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

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
      <CardFront></CardFront>
      <CardBack card={card}></CardBack>
    </div>
  );
}

export default Card;
