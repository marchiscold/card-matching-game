import React from 'react';
import classnames from 'classnames';

function Grid({ grid, onGridChange }) {
  const gridType = grid.join("x");
  const grids = [
    { isActive: gridType === "2x4", type: "2x4" },
    { isActive: gridType === "4x4", type: "4x4" },
  ];

  const gridList = grids.map((grid) => {
    const gridClass = classnames("grid-options__item", {
      active: grid.isActive,
    });
    return (
      <div className={gridClass} onClick={() => onGridChange(grid.type)}>
        {grid.type}
      </div>
    );
  });

  return (
    <div className="start-screen__grid grid-options">{gridList}</div>
  )
}

export default Grid;
