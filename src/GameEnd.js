import React from 'react'

function GameEnd({ onStartOver }) {
  return (
    <div className="end-screen">
      <button className="end-screen__button" onClick={onStartOver}>
        play again
      </button>
    </div>
  );
}

export default GameEnd
