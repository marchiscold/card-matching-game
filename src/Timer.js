import React from 'react'

function Timer(props) {
  let seconds = props.seconds;
  let minutes = Math.floor(seconds/60);
  let min = pad(minutes <= 59 ? minutes : 59); 
  let sec = pad(seconds % 60);

  function pad (num) {
    return num < 10 ? '0' + num : '' + num;
  }

  return (
    <div>
      Time: {min}:{sec}
    </div>
  )
}

export default Timer;
