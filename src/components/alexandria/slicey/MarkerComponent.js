import React from 'react';

import {ROUND, QUARTER, getPointX, getPointY} from './DataProcessor.js';

require('styles/alexandria/slicey/Marker.scss');

const MarkerComponent = ({fraction}) => {
  const getMarkerPoints = (markerValue) => {
    const pointOnCircle = (ROUND * markerValue) - QUARTER;
    return `${getPointX(pointOnCircle)},${getPointY(pointOnCircle)} 0,0`;
  };

  return (
    <polyline className="marker-component" points={getMarkerPoints(fraction)} />
  );
};

MarkerComponent.displayName = 'AlexandriaSliceyMarkerComponent';

MarkerComponent.propTypes = {
  fraction: React.PropTypes.number,
};
MarkerComponent.defaultProps = {
  fraction: 0,
};

export default MarkerComponent;
