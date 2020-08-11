import React from 'react';
import styles from '../GameBoard.module.css';
import MatchedCards from '../../MatchedCards/MatchedCards';
import Tries from '../../Tries/Tries';
import Timer from '../../Timer/Timer';

function InfoPanel({ cards, tries, timer }) {
  return (
    <div className={styles["info"]}>
      <MatchedCards cards={cards} total={cards.length} />
      <Tries tries={tries} />
      <Timer time={timer} />
    </div>
  );
}

export default InfoPanel
