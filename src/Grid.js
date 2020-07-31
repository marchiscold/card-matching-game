import React from 'react';
import classnames from 'classnames';
import styles from './GameStart.module.css';

function Grid({ grid, onGridChange }) {
  const gridType = grid.join("x");
  const grids = [
    { isActive: gridType === "2x4", type: "2x4" },
    { isActive: gridType === "4x4", type: "4x4" },
  ];

  const gridList = grids.map((grid, index) => {
    const gridClass = classnames(styles["grid-options__item"], {
      [styles["active"]]: grid.isActive,
    });
    return (
      <div key={index} className={gridClass} onClick={() => onGridChange(grid.type)}>
        {grid.type}
      </div>
    );
  });
  
  const gridStyle = [styles["start-screen__grid"], styles["grid-options"]].join(" ");
  return (
    <div className={ gridStyle }>{gridList}</div>
  )
}

export default Grid;
