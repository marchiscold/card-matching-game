import React from 'react';
import styles from './EndNavigation.module.css';

function EndNavigation({ onStartOver, onMenuReturn }) {
  return (
    <div className={styles["nav"]}>
      <div className={styles["nav__button"]} onClick={onStartOver}>
        play again
      </div>
      <div className={styles["nav__button"]} onClick={onStartOver}>
        score
      </div>
      <div className={styles["nav__button"]} onClick={onMenuReturn}>
        main menu
      </div>
    </div>
  );
}

export default EndNavigation
