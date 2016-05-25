import React, { PropTypes } from 'react';

require('styles/alexandria/Statistic.scss');

const StatisticComponent = ({ label, value }) => (
  <div className="statistic-component">
    <div className="statistic-component-value">{value}</div>
    <label className="statistic-component-label">{label}</label>
  </div>
);

StatisticComponent.displayName = 'AlexandriaStatisticComponent';

StatisticComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StatisticComponent;
