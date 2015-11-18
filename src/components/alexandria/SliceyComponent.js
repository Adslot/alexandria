import _ from 'lodash';
import Arc from 'components/alexandria/slicey/ArcComponent';
import Donut from 'components/alexandria/slicey/DonutComponent';
import Marker from 'components/alexandria/slicey/MarkerComponent';
import React from 'react';
import {ROUND, HALF, QUARTER, getPointX, getPointY} from 'components/alexandria/slicey/DataProcessor';

require('styles/alexandria/Slicey.scss');

const SliceyComponent = ({dataset, diameter, donut, marker}) => {
  const filteredDataset = _.filter(dataset, (datum) => datum.value > 0);

  let donutEl;
  if (donut === true) {donutEl = <Donut />;}

  let markerEl;
  if (marker !== undefined) {markerEl = <Marker fraction={marker} />;}

  if (_.isEmpty(filteredDataset)) {
    return (
      <svg className="slicey-component" height={diameter} width={diameter} viewBox="-0.5 -0.5 1 1">
        <circle className="slicey-empty" r=".5" cx="0" cy="0" />
        {markerEl}
        {donutEl}
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

  // IE Can't draw a complete circle as an arc, so swap it to a circle element.
  let arcEls;
  if (filteredDataset.length > 1) {
    arcEls = getArcs(filteredDataset).map((arc) => {
      return <Arc key={arc.id} data={arc}/>;
    });
  } else {
    arcEls = <circle className={`arc-component ${_.kebabCase(filteredDataset[0].label)}`} r=".5" cx="0" cy="0" />;
  }

  return (
    <svg className="slicey-component" height={diameter} width={diameter} viewBox="-0.5 -0.5 1 1">
      <circle className="slicey-background" r=".49" cx="0" cy="0" />
      {arcEls}
      {markerEl}
      {donutEl}
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
  donut: React.PropTypes.bool,
  marker: React.PropTypes.number,
};

SliceyComponent.defaultProps = {
  diameter: 100,
};

module.exports = SliceyComponent;
