import React from 'react'

function MatchedCards({ cards, total }) {
  let matchedAmount = cards.reduce((acc, card) => {
    return card.isMatched ? acc + 1 : acc;
  }, 0)

  return (
    <div>
      Matched: {matchedAmount}/{total}
    </div>
  )
}

export default MatchedCards;
