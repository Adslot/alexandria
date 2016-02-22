import React, { PropTypes } from 'react';

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
  children: PropTypes.node,
  classSuffixes: PropTypes.arrayOf(PropTypes.string).isRequired,
  stretch: PropTypes.bool.isRequired,
};

GridCellComponent.defaultProps = {
  classSuffixes: [],
  stretch: false,
};

export default GridCellComponent;
