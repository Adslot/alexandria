require('styles/App.scss');

import _ from 'lodash';
import Alert from 'components/alexandria/AlertComponent';
import Breadcrumb from 'components/alexandria/BreadcrumbComponent';
import Empty from 'components/alexandria/EmptyComponent';
import React from 'react';
import Search from 'components/alexandria/SearchComponent';
import Slicey from 'components/alexandria/SliceyComponent';
import TreePickerNode from 'components/alexandria/TreePickerNodeComponent';
import Grid from 'components/alexandria/GridComponent';
import GridHeader from 'components/alexandria/GridHeaderComponent';
import GridRow from 'components/alexandria/GridRowComponent';
import GridCell from 'components/alexandria/GridCellComponent';


const defaultBreadcrumbNodes = [
  { id: 'aaa-111', label: 'Australia' },
  { id: 'aaa-222', label: 'Victoria' },
  { id: 'aaa-333', label: 'Melbourne' },
];

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breadcrumbNodes: defaultBreadcrumbNodes,
    };
  }

  breadcrumbOnClick(newActiveId) {
    const { breadcrumbNodes } = this.state;
    this.setState({
      breadcrumbNodes: breadcrumbNodes.slice(0, 1 + _.findIndex(breadcrumbNodes, { id: newActiveId })),
    });
  }

  searchOnQuery(query) {
    console.log('Query:', query); /* eslint no-console: 0 */

    const breadcrumbNodes = (query === '') ? defaultBreadcrumbNodes : [];
    this.setState({ breadcrumbNodes });
  }

  render() {
    const sliceyTestData = [
      { label: 'positive', value: 50 },
      { label: 'negative', value: 25 },
      { label: 'info', value: 35 },
    ];

    return (
      <div className="index">

        <h1>TreePickerNode</h1>
        <div className="grid-component">
          <TreePickerNode
              node={{ id: 1, label: 'Melbourne', type: 'City', cost: 900, path: ['AU', 'VIC'] }}
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

        <h1>Grid</h1>
        <Grid>
          <GridHeader>
            <GridCell>
              Header
            </GridCell>
            <GridCell>
              Header
            </GridCell>
            <GridCell>
              Header
            </GridCell>
          </GridHeader>
          <GridRow verticalCellBorder>
            <GridCell>
              Content
            </GridCell>
            <GridCell>
              Content
            </GridCell>
            <GridCell>
              Content
            </GridCell>
          </GridRow>
          <GridRow>
            <GridCell>
              Content
            </GridCell>
            <GridCell>
              Content
            </GridCell>
            <GridCell>
              Content
            </GridCell>
          </GridRow>
          <GridRow>
            <GridCell>
              Content
            </GridCell>
            <GridCell>
              Content
            </GridCell>
            <GridCell>
              Content
            </GridCell>
          </GridRow>
        </Grid>
      </div>
    );
  }
}

export default AppComponent;
