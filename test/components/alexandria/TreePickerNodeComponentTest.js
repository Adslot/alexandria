/* eslint-env node, mocha */
/* global expect */

import _ from 'lodash';
import createComponent from 'helpers/shallowRenderHelper';
import TreePickerNodeComponent from 'components/alexandria/TreePickerNodeComponent';

describe('TreePickerNodeComponent', () => {
  const newYorkNode = {
    id: 1,
    label: 'New York',
    type: 'City',
    cost: 200,
    path: ['USA', 'NY'],
  };

  it('should render a node with defaults', () => {
    const component = createComponent(TreePickerNodeComponent, { node: newYorkNode });
    expect(component.props.className).to.equal('treepickernode-component');
    expect(component.type).to.equal('span');

    const rowElement = component.props.children;
    expect(rowElement.props.className).to.equal('grid-component-row');

    const buttonFirstCellElement = rowElement.props.children[0];
    expect(buttonFirstCellElement).to.be.a('null');

    const labelWrapperCellElement = rowElement.props.children[1];
    expect(labelWrapperCellElement.props.children).to.have.length(2);

    const labelElement = labelWrapperCellElement.props.children[0];
    expect(labelElement.props.children).to.equal('New York');

    const metaDataElement = labelWrapperCellElement.props.children[1];
    expect(metaDataElement.props.className).to.equal('treepickernode-component-metadata');
    expect(metaDataElement.props.children).to.have.length(5);
    expect(metaDataElement.props.children[0]).to.equal(' (');
    expect(metaDataElement.props.children[1]).to.equal('City');
    expect(metaDataElement.props.children[2]).to.equal(' in ');
    const pathElement = metaDataElement.props.children[3];
    expect(pathElement.props.className).to.equal('treepickernode-component-path');
    expect(pathElement.props.children).to.equal('NY, USA');
    expect(metaDataElement.props.children[4]).to.equal(')');

    const costCellElement = rowElement.props.children[2];
    expect(costCellElement.props.className).to.equal('grid-component-cell');
    expect(costCellElement.props.children).to.equal(200);

    const buttonLastCellElement = rowElement.props.children[3];
    expect(buttonLastCellElement.props.className).to.equal('grid-component-cell grid-component-cell-button');
    const buttonElement = buttonLastCellElement.props.children;
    expect(buttonElement.type).to.equal('button');
    expect(buttonElement.props.onClick).to.be.a('function');
    expect(buttonElement.props.children).to.equal('Include');
  });

  it('should render the button first when buttonFirst is true', () => {
    const component = createComponent(TreePickerNodeComponent, { node: newYorkNode, buttonFirst: true });
    const rowElement = component.props.children;

    const buttonFirstCellElement = rowElement.props.children[0];
    expect(buttonFirstCellElement.props.className).to.equal('grid-component-cell grid-component-cell-button');
    const buttonElement = buttonFirstCellElement.props.children;
    expect(buttonElement.type).to.equal('button');
    expect(buttonElement.props.onClick).to.be.a('function');
    expect(buttonElement.props.children).to.equal('Include');

    const buttonLastCellElement = rowElement.props.children[3];
    expect(buttonLastCellElement).to.be.a('null');
  });

  it('should filter cost when provided', () => {
    const currencyFilter = (value) => `€${value / 100}`;
    const component = createComponent(TreePickerNodeComponent, { node: newYorkNode, currencyFilter });
    const rowElement = component.props.children;

    const costCellElement = rowElement.props.children[2];
    expect(costCellElement.props.className).to.equal('grid-component-cell');
    expect(costCellElement.props.children).to.equal('€2');
  });

  it('should fire includeNode when clicking on the `include` button', () => {
    const nodes = [];
    const includeNode = (node) => nodes.push(node);
    const component = createComponent(TreePickerNodeComponent, { node: newYorkNode, includeNode });
    const rowElement = component.props.children;

    const buttonLastCellElement = rowElement.props.children[3];
    const buttonElement = buttonLastCellElement.props.children;
    buttonElement.props.onClick();
    expect(nodes).to.deep.equal([newYorkNode]);
  });

  it('should error on click of `include` button without includeNode handler', () => {
    const component = createComponent(TreePickerNodeComponent, { node: newYorkNode });
    const rowElement = component.props.children;

    const buttonLastCellElement = rowElement.props.children[3];
    const buttonElement = buttonLastCellElement.props.children;
    expect(() => {
      buttonElement.props.onClick();
    }).to.throw('Alexandria TreePickerNode needs an includeNode handler');
  });

  it('should render a provided node with an empty breadcrumb array', () => {
    const node = {
      id: 3,
      label: 'Cameroon',
      type: 'Country',
      cost: 400,
      path: [],
    };
    const component = createComponent(TreePickerNodeComponent, { node });
    const rowElement = component.props.children;

    const labelWrapperCellElement = rowElement.props.children[1];
    expect(labelWrapperCellElement.props.children).to.have.length(2);

    const labelElement = labelWrapperCellElement.props.children[0];
    expect(labelElement.props.children).to.equal('Cameroon');

    const metaDataElement = labelWrapperCellElement.props.children[1];
    expect(metaDataElement.props.className).to.equal('treepickernode-component-metadata');
    expect(metaDataElement.props.children).to.have.length(5);
    expect(metaDataElement.props.children[0]).to.equal(' (');
    expect(metaDataElement.props.children[1]).to.equal('Country');
    expect(metaDataElement.props.children[2]).to.equal(' in ');
    const pathElement = metaDataElement.props.children[3];
    expect(pathElement).to.be.a('null');

    const costCellElement = rowElement.props.children[2];
    expect(costCellElement.props.className).to.equal('grid-component-cell');
    expect(costCellElement.props.children).to.equal(400);
  });

  it('should fire removeNode when clicking on the `remove` button', () => {
    const nodes = [newYorkNode];
    const removeNode = (node) => _.remove(nodes, { id: node.id });
    const component = createComponent(TreePickerNodeComponent, {
      node: newYorkNode,
      removeNode,
      selectedNodes: [newYorkNode],
    });
    const rowElement = component.props.children;

    const buttonLastCellElement = rowElement.props.children[3];
    const buttonElement = buttonLastCellElement.props.children;
    expect(buttonElement.props.children).to.equal('Remove');

    expect(nodes).to.deep.equal([newYorkNode]);
    buttonElement.props.onClick();
    expect(nodes).to.deep.equal([]);
  });

  it('should error on click of `remove` button without removeNode handler', () => {
    const component = createComponent(TreePickerNodeComponent, { node: newYorkNode, selectedNodes: [newYorkNode] });
    const rowElement = component.props.children;

    const buttonLastCellElement = rowElement.props.children[3];
    const buttonElement = buttonLastCellElement.props.children;
    expect(buttonElement.props.children).to.equal('Remove');
    expect(() => {
      buttonElement.props.onClick();
    }).to.throw('Alexandria TreePickerNode needs a removeNode handler');
  });
});
