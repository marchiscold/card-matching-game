import React from 'react';
import classnames from 'classnames';

function Card({ id, card, onClick }) {
  let style = {};
  let classname = classnames({
    card: true,
    'card--matched': card.isMatched
  });

  if (card.isMatched || card.isOpen) {
    style.backgroundColor = card.color;
  }

  return (
    <div
      className={classname}
      style={style}
      onClick={() => onClick(id)}
    >
    </div>
  );
}

export default Card;
