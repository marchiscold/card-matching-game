import React from 'react';
import classnames from 'classnames';
import styles from './EndScore.module.css';

function EndScore({grid, time, tries}) {
  return (
    <div className={styles['end__score']}>
      <div className={styles['score']}>
        <div className={styles['score__item']}>
          <div className={styles['end__desc']}>Mode:</div>
          <div className={styles['end__value']}>{grid.join('x')}</div>
        </div>
        <div className={styles['score__item']}>
          <div className={styles['end__desc']}>Tries:</div>
          <div className={styles['end__value']}>{tries}</div>
        </div>
        <div className={styles['score__item']}>
          <div className={styles['end__desc']}>Time:</div>
          <div className={styles['end__value']}>{time}s</div>
        </div>
      </div>
    </div>
  )
}

export default EndScore
