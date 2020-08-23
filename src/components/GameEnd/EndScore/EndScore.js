import React from 'react';
import styles from './EndScore.module.css';

function EndScore({grid, time, tries}) {
  return (
    <div className={styles['score-wrapper']}>
      <div className={styles['score']}>
        <div className={styles['score__item']}>
          <div className={styles['score__desc']}>Mode:</div>
          <div className={styles['score__value']}>{grid.join('x')}</div>
        </div>
        <div className={styles['score__item']}>
          <div className={styles['score__desc']}>Tries:</div>
          <div className={styles['score__value']}>{tries}</div>
        </div>
        <div className={styles['score__item']}>
          <div className={styles['score__desc']}>Time:</div>
          <div className={styles['score__value']}>{time}s</div>
        </div>
      </div>
    </div>
  )
}

export default EndScore
