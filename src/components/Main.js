require('styles/App.scss');

import React from 'react';
import Search from 'components/alexandria/SearchComponent';
import Slicey from 'components/alexandria/SliceyComponent';

class AppComponent extends React.Component {
  render() {
    const sliceyTestData = [
      {label: 'positive', value: 50},
      {label: 'negative', value: 25},
      {label: 'info', value: 35},
    ];
    const onQuery = (query) => console.log('Query:', query); /* eslint no-console: 0 */
    return (
      <div className="index">

        <h1>Slicey</h1>
        <Slicey dataset={sliceyTestData} diameter={150} marker={0.2} donut />

        <h1>Search</h1>
        <Search placeholder="your memories" onQuery={onQuery} throttleTime={200} />

      </div>
    );
  }
}

module.exports = AppComponent;
