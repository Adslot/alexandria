require('styles/App.scss');

import _ from 'lodash';
import Breadcrumb from 'components/alexandria/BreadcrumbComponent';
import React from 'react';
import Search from 'components/alexandria/SearchComponent';
import Slicey from 'components/alexandria/SliceyComponent';

const defaultBreadcrumbNodes = [
  {id: 'aaa-111', label: 'Australia'},
  {id: 'aaa-222', label: 'Victoria'},
  {id: 'aaa-333', label: 'Melbourne'},
];

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breadcrumbNodes: defaultBreadcrumbNodes,
    };
  }

  breadcrumbOnClick(idToRemove) {
    const {breadcrumbNodes} = this.state;
    this.setState({breadcrumbNodes: breadcrumbNodes.slice(0, 1 + _.findIndex(breadcrumbNodes, {id: idToRemove}))});
  }

  searchOnQuery(query) {
    console.log('Query:', query); /* eslint no-console: 0 */

    const breadcrumbNodes = (query === '') ? defaultBreadcrumbNodes : [];
    this.setState({breadcrumbNodes});
  }

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

        <h1>Search</h1>
        <Search placeholder="your memories" onQuery={this.searchOnQuery.bind(this)} throttleTime={200} />

        <h1>Breadcrumb</h1>
        <Breadcrumb nodes={this.state.breadcrumbNodes} onClick={this.breadcrumbOnClick.bind(this)} />

      </div>
    );
  }
}

module.exports = AppComponent;
