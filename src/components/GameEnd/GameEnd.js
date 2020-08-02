import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import './GameEnd.css';

const NavButton = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 25px;
  letter-spacing: 2px;
  padding: 10px 15px;
  margin-bottom: 10px;
`;

function GameEnd({ grid, time, tries, onStartOver, onMenuReturn, fadeout }) {
  const classname = classnames('end-screen end', {'end-screen--fadeout': fadeout});
  return (
    <div className={classname}>
      <div className='end__score'>
        <div className='score'>
          <div className='score__item'>
            <div className='end__desc'>Mode:</div>
            <div className='end__value'>{grid.join('x')}</div>
          </div>
          <div className='score__item'>
            <div className='end__desc'>Tries:</div>
            <div className='end__value'>{tries}</div>
          </div>
          <div className='score__item'>
            <div className='end__desc'>Time:</div>
            <div className='end__value'>{time}s</div>
          </div>
        </div>
      </div>
      <div className='end__nav nav'>
        <NavButton onClick={onStartOver}>
          play again
        </NavButton>
        <NavButton onClick={onStartOver}>
          score
        </NavButton>
        <NavButton onClick={onMenuReturn}>
          main menu
        </NavButton>
      </div>
    </div>
  );
}

export default GameEnd
