require('styles/App.scss');

import React from 'react';
import Slicey from 'components/alexandria/SliceyComponent';

class AppComponent extends React.Component {
  render() {
    const sliceyTestData = [
      {label: 'positive', value: 50},
      {label: 'negative', value: 25},
      {label: 'info', value: 35},
    ];
    return (
      <div className="index">
        <h1>Slicey</h1>
        <Slicey dataset={sliceyTestData} diameter={150} marker={0.2} donut />
      </div>
    );
  }
}

module.exports = AppComponent;
