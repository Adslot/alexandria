import React from 'react';

import classSuffixHelper from '../../helpers/classSuffixHelper';

require('styles/alexandria/GridCell.scss');

const GridCellComponent = ({ classSuffixes, stretch, children }) => {
  const componentClass = 'grid-component-cell';
  const classesList = classSuffixHelper({
    classSuffixes,
    suffixOptions: { stretch },
    componentClass,
  });

  return (
    <div className={`${componentClass}${classesList}`}>
      {children}
    </div>
  );
};

GridCellComponent.displayName = 'AlexandriaGridCellComponent';

GridCellComponent.propTypes = {
  classSuffixes: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  stretch: React.PropTypes.bool.isRequired,
};

GridCellComponent.defaultProps = {
  classSuffixes: [],
  stretch: false,
};

export default GridCellComponent;
