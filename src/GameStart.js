import React from 'react'
import classnames from 'classnames'

function GameStart({ onGameStart, fadeout, fadein }) {
  const classname = classnames("start-screen", {
    "start-screen--fadeout": fadeout,
    "start-screen--fadein": fadein,
  });
  return (
    <div className={classname}>
      <button className='start-screen__button' onClick={onGameStart}>start</button>
    </div>
  )
}

export default GameStart
