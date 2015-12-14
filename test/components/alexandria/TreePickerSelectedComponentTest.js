/* eslint-env node, mocha */
/* global expect */

import _ from 'lodash';
import createComponent from 'helpers/shallowRenderHelper';
import TreePickerSelected from 'components/alexandria/TreePickerSelectedComponent';

describe('TreePickerSelectedComponent', () => {
  const rootTypes = [
    {
      label: 'Geography',
      id: 0,
      icon: 'http://placehold.it/16x16',
      emptyIcon: 'http://placehold.it/70x70',
      isRequired: true,
    },
    { label: 'Audiences', id: 1, icon: 'http://placehold.it/16x16', isRequired: false },
    { label: 'Segments', id: 2, icon: 'http://placehold.it/16x16', isRequired: true },
  ];

  const actNode =
    { id: 0, label: 'Australian Capital Territory', type: 'State', path: ['AU'], value: 1000, rootTypeId: 0 };

  const ntNode =
  { id: 1, label: 'Northern Territory', type: 'State', path: ['AU'], value: 500, rootTypeId: 0 };

  const selectedNodesByRootType = _.groupBy([actNode, ntNode], 'rootTypeId');

  const checkHeader = (component) => {
    const headerElement = component.props.children[0];
    expect(headerElement.type).to.equal('h1');
    expect(headerElement.props.className).to.equal('treepickerselected-component-header');
    expect(headerElement.props.children).to.equal('Selected');
  };

  it('should render with defaults', () => {
    const component = createComponent(TreePickerSelected);
    expect(component.props.className).to.equal('treepickerselected-component');

    checkHeader(component);

    const totalsElement = component.props.children[1];
    expect(totalsElement.type.name).to.equal('TotalsComponent');
    expect(totalsElement.props.toSum).to.deep.equal([
      { label: 'Base', value: 0 },
      { label: 'Selected', value: 0 },
    ]);
    expect(totalsElement.props.valueFormatter).to.be.a('function');

    const gridElements = component.props.children[2];
    expect((gridElements)).to.have.length(0);

    const emptyElement = component.props.children[3];
    expect(emptyElement.type.name).to.equal('EmptyComponent');
    expect(emptyElement.props.collection).to.have.length(0);
    expect(emptyElement.props.icon).to.equal('//placehold.it/70x70');
    expect(emptyElement.props.text).to.equal('Nothing Selected');

    const alertElement = component.props.children[4];
    expect(alertElement).to.be.a('null');
  });

  it('should render with props', () => {
    const component = createComponent(TreePickerSelected, {
      rootTypes,
      selectedNodesByRootType,
      emptyIcon: 'awesome-url',
      valueLabel: 'Galactic Credits',
    });
    expect(component.props.className).to.equal('treepickerselected-component');

    checkHeader(component);

    const totalsElement = component.props.children[1];
    expect(totalsElement.type.name).to.equal('TotalsComponent');
    expect(totalsElement.props.toSum).to.deep.equal([
      { label: 'Base', value: 0 },
      { label: 'Selected', value: 750 },
    ]);
    expect(totalsElement.props.valueFormatter).to.be.a('function');

    const gridElements = component.props.children[2];
    expect(gridElements).to.have.length(1);

    const gridElement = gridElements[0];
    expect(gridElement.type.name).to.equal('GridComponent');

    const headerRowElement = gridElement.props.children[0];
    expect(headerRowElement.type.name).to.equal('GridRowComponent');
    expect(headerRowElement.props.type).to.equal('header');

    const headerFirstCell = headerRowElement.props.children[0];
    expect(headerFirstCell.type.name).to.equal('GridCellComponent');
    expect(headerFirstCell.props.stretch).to.equal(true);
    expect(headerFirstCell.props.children).to.equal('Geography');

    const headerSecondCell = headerRowElement.props.children[1];
    expect(headerSecondCell.type.name).to.equal('GridCellComponent');
    expect(headerSecondCell.props.children).to.equal('Galactic Credits');

    const nodeElements = gridElement.props.children[1];
    expect(nodeElements).to.have.length(2);

    expect(nodeElements[0].props.buttonFirst).to.equal(true);
    expect(nodeElements[0].props.valueFormatter).to.be.a('function');
    expect(nodeElements[0].props.includeNode).to.be.a('function');
    expect(nodeElements[0].props.includeNode()).to.be.a('null');
    expect(nodeElements[0].props.node).to.deep.equal(actNode);
    expect(nodeElements[0].props.removeNode).to.be.a('function');
    expect(nodeElements[0].props.removeNode()).to.be.a('null');
    expect(nodeElements[0].props.selectedNodes).to.deep.equal(selectedNodesByRootType[0]);

    expect(nodeElements[1].props.node).to.deep.equal(ntNode);

    const subFooterRowElement = gridElement.props.children[2];
    expect(subFooterRowElement.type.name).to.equal('GridRowComponent');
    expect(subFooterRowElement.props.type).to.equal('subfooter');

    const subFooterFirstCell = subFooterRowElement.props.children[0];
    expect(subFooterFirstCell.type.name).to.equal('GridCellComponent');
    expect(subFooterFirstCell.props.stretch).to.equal(true);
    expect(subFooterFirstCell.props.children).to.be.an('undefined');

    const subFooterSecondCell = subFooterRowElement.props.children[1];
    expect(subFooterSecondCell.type.name).to.equal('GridCellComponent');
    expect(subFooterSecondCell.props.children).to.equal('Average');

    const subFooterThirdCell = subFooterRowElement.props.children[2];
    expect(subFooterThirdCell.type.name).to.equal('GridCellComponent');
    expect(subFooterThirdCell.props.children).to.equal(750);

    const emptyElement = component.props.children[3];
    expect(emptyElement.type.name).to.equal('EmptyComponent');
    expect(emptyElement.props.collection).to.deep.equal([[actNode, ntNode]]);
    expect(emptyElement.props.icon).to.equal('awesome-url');
    expect(emptyElement.props.text).to.equal('Nothing Selected');

    const alertElement = component.props.children[4];
    expect(alertElement.type.name).to.equal('AlertComponent');
    expect(alertElement.props.type).to.equal('danger');
    expect(alertElement.props.children).to.deep.equal(['Segments', ' are required.']);
  });

  it('should render alert as warning when warnOnRequired is true', () => {
    const component = createComponent(TreePickerSelected, {
      rootTypes,
      selectedNodesByRootType,
      warnOnRequired: true,
    });
    expect(component.props.className).to.equal('treepickerselected-component');

    const alertElement = component.props.children[4];
    expect(alertElement.type.name).to.equal('AlertComponent');
    expect(alertElement.props.type).to.equal('warning');
    expect(alertElement.props.children).to.deep.equal(['Segments', ' are required.']);
  });

  it('should error when there is a selectedNode with no corresponding rootType', () => {
    expect(() => {
      createComponent(TreePickerSelected, { selectedNodesByRootType });
    }).to.throw('TreePickerSelectedComponent requires a rootType for id 0');
  });
});
