require('styles/App.scss');

import _ from 'lodash';
import Alert from 'components/alexandria/AlertComponent';
import Breadcrumb from 'components/alexandria/BreadcrumbComponent';
import Empty from 'components/alexandria/EmptyComponent';
import React from 'react';
import Search from 'components/alexandria/SearchComponent';
import Slicey from 'components/alexandria/SliceyComponent';
import TreePickerNode from 'components/alexandria/TreePickerNodeComponent';

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

  breadcrumbOnClick(newActiveId) {
    const {breadcrumbNodes} = this.state;
    this.setState({
      breadcrumbNodes: breadcrumbNodes.slice(0, 1 + _.findIndex(breadcrumbNodes, {id: newActiveId})),
    });
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

        <h1>TreePickerNode</h1>
        <div className="grid-component">
          <TreePickerNode
              node={{id: 1, label: 'Melbourne', type: 'City', cost: 900, path: ['AU', 'VIC']}}
          />
        </div>

        <h1>Empty</h1>
        <Empty collection={[]} text="I'm hungry" icon="http://lorempixel.com/70/70/food/5"/>

        <h1>Alert</h1>
        <Alert type="success">You did it!</Alert>

        <h1>Breadcrumb</h1>
        <Breadcrumb nodes={this.state.breadcrumbNodes} onClick={this.breadcrumbOnClick.bind(this)} />

        <h1>Search</h1>
        <Search placeholder="your memories" onQuery={this.searchOnQuery.bind(this)} throttleTime={200} />

        <h1>Slicey</h1>
        <Slicey dataset={sliceyTestData} diameter={150} marker={0.2} donut />

      </div>
    );
  }
}

export default AppComponent;
