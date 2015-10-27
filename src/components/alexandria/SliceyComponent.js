import _ from 'lodash';
import Arc from 'components/alexandria/slicey/ArcComponent';
import React from 'react';

import {ROUND, HALF, QUARTER, getPointX, getPointY} from './slicey/DataProcessor.js';

require('styles/alexandria/Slicey.scss');

const SliceyComponent = ({dataset, diameter, children}) => {
  const filteredDataset = _.filter(dataset, (datum) => datum.value > 0);

  if (_.isEmpty(filteredDataset)) {
    return (
      <svg className="slicey-component" height={diameter} width={diameter}>
        <circle className="slicey-empty" r=".5" cx="0" cy="0"></circle>
        {children}
      </svg>
    );
  }

  const getArcs = (datasetForArcs) => {
    const total = _.sum(datasetForArcs, 'value');

    const arcs = new Array(datasetForArcs.length);
    let endAngle = -QUARTER;
    let startAngle = 0;

    return _.map(arcs, (undefinedArc, index) => {
      const datum = datasetForArcs[index];
      const angle = ROUND * datum.value / total;
      startAngle = endAngle;
      endAngle += angle;
      return {
        label: datum.label,
        id: index,
        largeArcFlag: angle > HALF ? 1 : 0,
        x1: getPointX(startAngle),
        y1: getPointY(startAngle),
        x2: getPointX(endAngle),
        y2: getPointY(endAngle),
      };
    });
  };

  return (
    <svg className="slicey-component" height={diameter} width={diameter} viewBox="-0.5 -0.5 1 1">
      <circle className="slicey-background" r=".49" cx="0" cy="0"></circle>
      {getArcs(filteredDataset).map((arc) => {
        return <Arc key={arc.id} data={arc}/>;
      })}
      {children}
    </svg>
  );
};

SliceyComponent.displayName = 'AlexandriaSliceyComponent';

SliceyComponent.propTypes = {
  dataset: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.number.isRequired,
    })
  ),
  diameter: React.PropTypes.number,
};

SliceyComponent.defaultProps = {
  diameter: 100,
};

export default SliceyComponent;
