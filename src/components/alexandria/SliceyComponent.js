'use strict';

import _ from 'lodash';
import Arc from 'components/alexandria/slicey/ArcComponent';
import React from 'react';

require('styles/alexandria/Slicey.scss');

const SliceyComponent = ({dataset, diameter, donut, marker}) => {
  const QUARTER = Math.PI / 2;
  const HALF = Math.PI;
  const ROUND = Math.PI * 2;
  const RADIUS = 0.5;

  const getPointX = (angle) => RADIUS * Math.cos(angle);

  const getPointY = (angle) => RADIUS * Math.sin(angle);

  let donutNode;
  if (donut) {
    donutNode = <circle className="slicey-donut" r=".42" cx="0" cy="0"></circle>;
  }

  const getMarkerPoints = (markerValue) => {
    const pointOnCircle = (ROUND * markerValue) - QUARTER;
    return `${getPointX(pointOnCircle)},${getPointY(pointOnCircle)} 0,0`;
  };

  let markerNode;
  if (Boolean(marker)) {
    markerNode = <polyline className="slicey-marker" points={getMarkerPoints(marker)} />;
  }

  const filteredDataset = _.filter(dataset, (datum) => datum.value > 0);

  if (_.isEmpty(filteredDataset)) {
    return (
      <svg className="slicey-component" height={diameter} width={diameter}>
        <circle className="slicey-empty" r=".5" cx="0" cy="0"></circle>
        {markerNode}
        {donutNode}
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
      {markerNode}
      {donutNode}
    </svg>
  );
};

SliceyComponent.displayName = 'SliceyComponent';

SliceyComponent.propTypes = {
  dataset: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.number.isRequired,
    })
  ),
  diameter: React.PropTypes.number,
  donut: React.PropTypes.bool,
  marker: React.PropTypes.number,
};

SliceyComponent.defaultProps = {
  diameter: 100,
  donut: false,
  marker: 0,
};

export default SliceyComponent;
