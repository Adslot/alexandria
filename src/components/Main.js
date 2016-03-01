require('styles/App.scss');

import _ from 'lodash';
import React from 'react';

import {
  Alert,
  Avatar,
  Breadcrumb,
  Empty,
  FlexSpacer,
  Grid,
  GridCell,
  GridRow,
  Search,
  Slicey,
  SvgSymbol,
  SvgSymbolCircle,
  Totals,
} from './distributionEntry';

const defaultBreadcrumbNodes = [
  { id: 'aaa-111', label: 'Australia' },
  { id: 'aaa-222', label: 'Victoria' },
  { id: 'aaa-333', label: 'Melbourne' },
];

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    for (const methodName of [
      'breadcrumbOnClick',
      'searchOnQuery',
      'searchOnChange',
      'searchOnClear',
    ]) {this[methodName] = this[methodName].bind(this);}

    this.state = {
      breadcrumbNodes: defaultBreadcrumbNodes,
      searchValue: '',
    };

    this.throttledSearchOnQuery = _.throttle(() => this.searchOnQuery(this.state.searchValue), 200);
  }

  breadcrumbOnClick(newActiveId) {
    const { breadcrumbNodes } = this.state;
    this.setState({
      breadcrumbNodes: breadcrumbNodes.slice(0, 1 + _.findIndex(breadcrumbNodes, { id: newActiveId })),
    });
  }

  searchOnChange(value) {
    this.setState({ searchValue: value }, this.throttledSearchOnQuery);
  }

  searchOnClear() {
    this.searchOnChange('');
  }

  searchOnQuery(query) {
    console.log('Query:', query); /* eslint no-console: 0 */

    const breadcrumbNodes = (query === '') ? defaultBreadcrumbNodes : [];
    this.setState({ breadcrumbNodes });
  }

  render() {
    const sliceyDataset = [
      { label: 'positive', value: 50 },
      { label: 'negative', value: 25 },
      { label: 'info', value: 35 },
    ];

    return (
      <div className="index">

        <h1>Alert</h1>
        <Alert type="success">You did it!</Alert>

        <h1>Avatar</h1>
        <Avatar givenName="John" surname="Smith" />
        <Avatar givenName="John" surname="Smith" color="blue" />
        <Avatar givenName="John" surname="Smith" color="green" />
        <Avatar givenName="John" surname="Smith" color="red" />
        <Avatar givenName="John" surname="Smith" color="orange" />
        <Avatar givenName="John" surname="Smith" color="cyan" />
        <Avatar givenName="John" surname="Smith" image="//lorempixel.com/35/35/people/7" />

        <h1>Breadcrumb</h1>
        <Breadcrumb nodes={this.state.breadcrumbNodes} onClick={this.breadcrumbOnClick} />

        <h1>Empty</h1>
        <Empty
          collection={[]}
          text="I'm hungry"
          svgSymbol={{ href: '/assets/svg-symbols.svg#checklist-incomplete' }}
        />

        <h1>FlexSpacer</h1>
        <small>Expands to fill leftover space in a <code>display: flex;</code> container:</small>
        <FlexSpacer />

        <h1>Grid</h1>
        <Grid>
          <GridRow type="header">
            <GridCell>
              Header
            </GridCell>
            <GridCell>
              Header
            </GridCell>
            <GridCell>
              Header
            </GridCell>
          </GridRow>
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
        </Grid>

        <h1>Search</h1>
        <Search
          onChange={this.searchOnChange}
          onClear={this.searchOnClear}
          placeholder="Cities"
          value={this.state.searchValue}
        />

        <h1>Slicey</h1>
        <Slicey dataset={sliceyDataset} diameter={150} marker={0.2} donut />

        <h1>Totals</h1>
        <Grid>
          <GridRow>
            <GridCell stretch>In the sum but not in the Totals Component</GridCell>
            <GridCell>10</GridCell>
          </GridRow>
        </Grid>
        <Totals
          toSum={[
            { value: 10, isHidden: true },
            { label: 'Movies Category - Medium Rectangle', value: 1000 },
            { label: 'Selected', value: 36.80 },
          ]}
        />

        <h1>SvgSymbol</h1>

        <SvgSymbol classSuffixes={['70']} />
        <SvgSymbol href="/assets/svg-symbols.svg#checklist-incomplete" />

        <h1>SvgSymbolCircle</h1>

        <SvgSymbolCircle classSuffixes={['70']} />
        <SvgSymbolCircle href="/assets/svg-symbols.svg#checklist-incomplete" />

      </div>
    );
  }
}

export default AppComponent;
