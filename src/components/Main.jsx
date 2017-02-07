import _ from 'lodash';
import React from 'react';
import {
  Alert,
  Avatar,
  BorderedWell,
  Breadcrumb,
  Card,
  Empty,
  FlexibleSpacer,
  Grid,
  GridCell,
  GridRow,
  PageTitle,
  PrettyDiff,
  Search,
  Slicey,
  Spinner,
  Statistic,
  SvgSymbol,
  SvgSymbolCircle,
  Tag,
  Totals,
} from './distributionEntry';

require('styles/App.scss');

const defaultBreadcrumbNodes = [
  { id: 'aaa-111', label: 'Australia' },
  { id: 'aaa-222', label: 'Victoria' },
  { id: 'aaa-333', label: 'Melbourne' },
];

const diffStrings = [
  '<the\n quick fox>',
  '<the\n slow fox jumped>',
];

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    for (const methodName of [
      'breadcrumbOnClick',
      'searchOnQuery',
      'searchOnChange',
      'searchOnClear',
    ]) { this[methodName] = this[methodName].bind(this); }

    this.state = {
      breadcrumbNodes: defaultBreadcrumbNodes,
      searchValue: '',
    };

    this.throttledSearchOnQuery = _.throttle(() => this.searchOnQuery(this.state.searchValue), 200);
  }

  breadcrumbOnClick(newActiveId) {
    const { breadcrumbNodes } = this.state;
    this.setState({
      breadcrumbNodes: _.slice(breadcrumbNodes, 0, 1 + _.findIndex(breadcrumbNodes, { id: newActiveId })),
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

    const cellClicked = () => console.log('Cell clicked');

    return (
      <div className="index">

        <h1>Alert</h1>
        <Alert type="success">You did it!</Alert>
        <Alert type="info" dts="yay">Alert with DTS</Alert>

        <h1>Avatar</h1>
        <Avatar givenName="John" surname="Smith" />
        <Avatar givenName="John" surname="Smith" color="blue" />
        <Avatar givenName="John" surname="Smith" color="green" />
        <Avatar givenName="John" surname="Smith" color="red" />
        <Avatar givenName="John" surname="Smith" color="orange" />
        <Avatar givenName="John" surname="Smith" color="cyan" />
        <Avatar givenName="John" surname="Smith" image="//lorempixel.com/35/35/people/7" />

        <h1>BorderedWell</h1>
        <BorderedWell>
          <PageTitle title="PageTitle" />
          <Empty
            collection={[]}
            text="Empty"
            svgSymbol={{ href: '/assets/svg-symbols.svg#checklist-incomplete' }}
          />
          <PageTitle isFooter>
            <SvgSymbol />
          </PageTitle>

        </BorderedWell>

        <h1>Breadcrumb</h1>
        <Breadcrumb nodes={this.state.breadcrumbNodes} onClick={this.breadcrumbOnClick} />

        <h1>Cards</h1>
        <Card.Container>
          <Card.Content><small>I am Cardy McCardface.</small></Card.Content>
          <Card.Content><em>I am Cardy McCardface.</em></Card.Content>
          <Card.Content><strong>I am Cardy McCardface.</strong></Card.Content>
        </Card.Container>
        <div className="card-component-grid-container">
          <Card.Container accent="0">
            <Card.Content fill><PageTitle title="Card" /></Card.Content>
            <Card.Content>I am a card with an accent.</Card.Content>
            <Card.Content><Avatar givenName="Cardy" surname="McCardface" color="green" /></Card.Content>
          </Card.Container>
          <Card.Container>
            <Card.Content fill><PageTitle title="Card" /></Card.Content>
            <Card.Content>
              <Avatar givenName="Cardy" surname="McCardface" color="red" />
              <span>&nbsp;I am a card.</span>
            </Card.Content>
          </Card.Container>
          <Card.Container className="fixed-height-card">
            <Card.Content stretch><Alert type="info">I am a fixed height card.</Alert></Card.Content>
            <FlexibleSpacer />
            <Card.Content>I have <code>flex</code> spacing.</Card.Content>
          </Card.Container>
          <Card.Container>
            <Card.Content>I am a card with a sub-note.</Card.Content>
            <Card.Content append>
              <span>Append me.</span>
            </Card.Content>
          </Card.Container>
        </div>


        <h1>Empty</h1>
        <Empty
          collection={[]}
          text="I'm hungry"
          svgSymbol={{ href: '/assets/svg-symbols.svg#checklist-incomplete' }}
        />

        <Empty
          collection={[]}
          text="Don't show the icon"
          svgSymbol={{ href: '/assets/svg-symbols.svg#checklist-incomplete' }}
          hideIcon
        />

        <h1>FlexibleSpacer</h1>
        <small>Expands to fill leftover space in a <code>display: flex;</code> container:</small>
        <FlexibleSpacer />

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
            <GridCell stretch>
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
            <GridCell onClick={cellClicked}>
              This Cell logs clicks.
            </GridCell>
          </GridRow>
        </Grid>

        <h1>Spinner</h1>
        <Spinner />
        { /* Custom sizes and colour style */ }
        <Spinner size="medium" colourStyle="warning" />
        <Spinner size="small" />

        <h1>PageTitle</h1>
        <PageTitle title="Alexandria">
          <Avatar givenName="A" surname="D" />
        </PageTitle>

        <h1>Pretty Diff</h1>
        <PrettyDiff newText={diffStrings[1]} oldText={diffStrings[0]} />

        <h1>Search</h1>
        <Search
          onChange={this.searchOnChange}
          onClear={this.searchOnClear}
          placeholder="Cities"
          value={this.state.searchValue}
        />

        <h1>Slicey</h1>
        <Slicey dataset={sliceyDataset} diameter={150} marker={0.2} donut />

        <h1>Statistic</h1>
        <Statistic value="50 Million" label="Page Views" />
        <br />
        <Statistic value="1" label="Inline Statistic" inline />

        <h1>SvgSymbol</h1>
        <SvgSymbol href="/assets/svg-symbols.svg#checklist-incomplete" classSuffixes={['70']} />
        <SvgSymbol href="/assets/svg-symbols.svg#checklist-incomplete" />

        <h1>SvgSymbolCircle</h1>

        <SvgSymbolCircle href="/assets/svg-symbols.svg#checklist-incomplete" classSuffixes={['50']} />
        <SvgSymbolCircle href="/assets/svg-symbols.svg#checklist-incomplete" />
        <SvgSymbolCircle href="/assets/svg-symbols.svg#checklist-incomplete" classSuffixes={['70', 'inverse']} />

        <h1>Tag</h1>
        <Tag actionIconSvgHref="/assets/svg-symbols.svg#cancel">You are it!</Tag>
        <Tag actionIconSvgHref="/assets/svg-symbols.svg#cancel" inverse>Inverse</Tag>
        <Tag actionIconSvgHref="/assets/svg-symbols.svg#cancel" accent="2" inverse onAction={_.noop} id="foo">
          Inverse Clearable
        </Tag>
        <Tag actionIconSvgHref="/assets/svg-symbols.svg#cancel" accent="1">Custom Colour</Tag>
        <Tag actionIconSvgHref="/assets/svg-symbols.svg#cancel" inverse accent="1">Inverse Custom Colour</Tag>
        <Tag accent="2" onAction={_.noop} id="bar" actionIconSvgHref="/assets/svg-symbols.svg#cancel">Clearable</Tag>

        <p>
          <label className="accent-0">Example</label>
          <label className="accent-1"> accent </label>
          <label className="accent-2">sharing</label>
        </p>

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
      </div>
    );
  }
}

export default AppComponent;
