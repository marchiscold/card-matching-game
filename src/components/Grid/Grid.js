import React from 'react';
import classnames from 'classnames';
import styles from './Grid.module.css';

function Grid({ grid, onGridChange }) {
  const gridType = grid.join("x");
  const grids = [
    { isActive: gridType === "2x4", type: "2x4" },
    { isActive: gridType === "4x4", type: "4x4" },
  ];

  const gridList = grids.map((grid, index) => {
    const gridClass = classnames(styles['grid-options__item'], {
      [styles['active']]: grid.isActive,
    });
    return (
      <div key={index} className={gridClass} onClick={() => onGridChange(grid.type)}>
        {grid.type}
      </div>
    );
  });
  
  return (
    <div className={styles['grid-options']}>{gridList}</div>
  )
}

export default Grid;
