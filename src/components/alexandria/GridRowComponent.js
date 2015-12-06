import React from 'react';

require('styles/alexandria/GridRow.scss');

const GridRowComponent = ({ verticalCellBorder, children }) => {
  const verticalCellBorderClass = (verticalCellBorder) ? ' grid-component-row-vertical-border' : '';

  return (
    <div className={`grid-component-row grid-component-row-body${verticalCellBorderClass}`}>
      {children}
    </div>
  );
};
GridRowComponent.displayName = 'AlexandriaGridRowComponent';

GridRowComponent.propTypes = {
  verticalCellBorder: React.PropTypes.bool,
};

GridRowComponent.defaultProps = {
  verticalCellBorder: false,
};

export default GridRowComponent;
