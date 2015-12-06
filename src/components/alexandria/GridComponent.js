import React from 'react';

require('styles/alexandria/Grid.scss');

const GridComponent = ({ children }) => {
  return (
    <div className="grid-component">
      {children}
    </div>
  );
};

GridComponent.displayName = 'AlexandriaGridComponent';

export default GridComponent;
