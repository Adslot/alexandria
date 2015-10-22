'use strict';

import _ from 'lodash';
import React from 'react';

require('styles/alexandria/slicey/Arc.scss');

const ArcComponent = ({data}) => {
  if (!data) {
    return (
      <path className="arc-component"></path>
    );
  }

  const dataString = `M0,0 L${data.x1},${data.y1} A0.5,0.5 0 ${data.largeArcFlag},1 ${data.x2},${data.y2} z`;
  return <path className={`arc-component ${_.kebabCase(data.label)}`} d={dataString}></path>;
};

ArcComponent.displayName = 'SliceyArcComponent';

ArcComponent.propTypes = {
  data: React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    largeArcFlag: React.PropTypes.number.isRequired,
    x1: React.PropTypes.number.isRequired,
    y1: React.PropTypes.number.isRequired,
    x2: React.PropTypes.number.isRequired,
    y2: React.PropTypes.number.isRequired,
  }),
};

export default ArcComponent;
