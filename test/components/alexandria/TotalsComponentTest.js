/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import TotalsComponent from 'components/alexandria/TotalsComponent';

describe('TotalsComponent', () => {
  const toSumRowsIndex = 0;
  const totalsRowIndex = 1;

  it('should render with defaults', () => {
    const component = createComponent(TotalsComponent);
    expect(component.type.name).to.equal('GridComponent');
    expect(component.props.children).to.have.length(2);

    expect(component.props.children[toSumRowsIndex]).to.deep.equal([]);

    const totalRow = component.props.children[totalsRowIndex];
    expect(totalRow.type.name).to.equal('GridRowComponent');
    expect(totalRow.props.short).to.equal(true);
    expect(totalRow.props.horizontalBorder).to.equal(false);
    expect(totalRow.props.type).to.equal('footer');

    expect(totalRow.props.children[0].props.stretch).to.equal(true);
    expect(totalRow.props.children[0].props.children).to.equal('Total');

    expect(totalRow.props.children[1].props.children).to.equal(0);
  });

  it('should render with props', () => {
    const component = createComponent(TotalsComponent, {
      toSum: [
        { value: 100, isHidden: true },
        { label: 'Custom Paint for Yo Whip', value: 200000 },
        { label: 'Selected', value: 50000 },
      ],
      valueFormatter: (value) => `€${(value / 100).toFixed(2)}`,
    });
    expect(component.type.name).to.equal('GridComponent');
    expect(component.props.children).to.have.length(2);
    const rows = component.props.children[toSumRowsIndex];

    const firstRow = rows[0];
    expect(firstRow.type.name).to.equal('GridRowComponent');
    expect(firstRow.props.short).to.equal(true);
    expect(firstRow.props.horizontalBorder).to.equal(false);

    expect(firstRow.props.children[0].props.stretch).to.equal(true);
    expect(firstRow.props.children[0].props.children).to.equal('Custom Paint for Yo Whip');

    expect(firstRow.props.children[1].props.children).to.equal('€2000.00');

    const secondRow = rows[1];
    expect(secondRow.type.name).to.equal('GridRowComponent');
    expect(secondRow.props.short).to.equal(true);
    expect(secondRow.props.horizontalBorder).to.equal(false);

    expect(secondRow.props.children[0].props.stretch).to.equal(true);
    expect(secondRow.props.children[0].props.children).to.equal('Selected');

    expect(secondRow.props.children[1].props.children).to.equal('€500.00');

    const totalRow = component.props.children[totalsRowIndex];
    expect(totalRow.type.name).to.equal('GridRowComponent');
    expect(totalRow.props.short).to.equal(true);
    expect(totalRow.props.horizontalBorder).to.equal(false);
    expect(totalRow.props.type).to.equal('footer');

    expect(totalRow.props.children[0].props.stretch).to.equal(true);
    expect(totalRow.props.children[0].props.children).to.equal('Total');

    expect(totalRow.props.children[1].props.children).to.equal('€2501.00');
  });
});
