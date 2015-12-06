import React from 'react';

require('styles/alexandria/GridHeader.scss');

const GridHeaderComponent = ({ verticalCellBorder, children }) => {
  const verticalCellBorderClass = (verticalCellBorder) ? ' grid-component-row-vertical-border' : '';

  return (
    <div className={`grid-component-row grid-component-row-header${verticalCellBorderClass}`}>
      {children}
    </div>
  );
};

GridHeaderComponent.displayName = 'AlexandriaGridHeaderComponent';

GridHeaderComponent.propTypes = {
  verticalCellBorder: React.PropTypes.bool,
};

GridHeaderComponent.defaultProps = {
  verticalCellBorder: false,
};

export default GridHeaderComponent;
