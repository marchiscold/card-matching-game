import React from 'react'

function MatchedCards(props) {
  return (
    <div>
      Matched: {props.matched}/{props.total}
    </div>
  )
}

export default MatchedCards;
