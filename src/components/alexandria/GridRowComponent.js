import React from 'react';

import classSuffixHelper from '../../helpers/classSuffixHelper';

require('styles/alexandria/GridRow.scss');

const GridRowComponent = ({ horizontalBorder, short, type, verticalCellBorder, children }) => {
  const componentClass = 'grid-component-row';
  const classesList = classSuffixHelper({
    classSuffixes: [type],
    suffixOptions: { horizontalBorder, short, verticalCellBorder },
    componentClass,
  });

  return (
    <div className={`${componentClass}${classesList}`}>
      {children}
    </div>
  );
};

GridRowComponent.displayName = 'AlexandriaGridRowComponent';

GridRowComponent.propTypes = {
  horizontalBorder: React.PropTypes.bool.isRequired,
  short: React.PropTypes.bool.isRequired,
  type: React.PropTypes.oneOf(['body', 'header', 'subfooter', 'footer']).isRequired,
  verticalCellBorder: React.PropTypes.bool.isRequired,
};

GridRowComponent.defaultProps = {
  horizontalBorder: true,
  short: false,
  type: 'body',
  verticalCellBorder: false,
};

export default GridRowComponent;
