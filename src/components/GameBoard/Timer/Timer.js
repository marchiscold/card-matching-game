import React, { useState, useEffect } from 'react'

function formatTime (time) {
  let seconds = time;
  let minutes = Math.floor(seconds / 60);
  let min = pad(minutes <= 59 ? minutes : 59);
  let sec = pad(seconds % 60);

  if (seconds > 3599) {
    sec = 59;
  }

  function pad(num) {
    return num < 10 ? "0" + num : "" + num;
  }

  return [min, sec];
}

function Timer({ time }) {
  const [min, sec] = formatTime(time);

  return (
    	<div>
    	  Time: {min}:{sec}
    	</div>
  );
}

export default Timer;
