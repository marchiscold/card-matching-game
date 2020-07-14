import React from 'react'

function GameStart({ startGame }) {
  return (
    <div className='start-screen'>
      <button className='start-screen__button' onClick={startGame}>start</button>
    </div>
  )
}

export default GameStart
