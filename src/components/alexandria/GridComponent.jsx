import React, { PropTypes } from 'react';

require('styles/alexandria/Grid.scss');

const GridComponent = ({ children }) =>
  <div className="grid-component">
    {children}
  </div>;

GridComponent.displayName = 'AlexandriaGridComponent';
GridComponent.propTypes = {
  children: PropTypes.node,
};

export default GridComponent;
