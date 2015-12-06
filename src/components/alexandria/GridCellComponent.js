import React from 'react';

require('styles/alexandria/GridCell.scss');

const GridCellComponent = ({ children }) => {
  return (
    <div className="grid-component-cell">
      {children}
    </div>
  );
};
GridCellComponent.displayName = 'AlexandriaGridCellComponent';

export default GridCellComponent;
