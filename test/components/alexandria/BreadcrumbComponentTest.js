/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import BreadcrumbComponent from 'components/alexandria/BreadcrumbComponent';

describe('BreadcrumbComponent', () => {
  let nodes;

  beforeEach(() => {
    nodes = [
      {id: 'a', label: 'Canada'},
      {id: 'b', label: 'British Columbia'},
      {id: 'c', label: 'Victoria'},
    ];
  });

  it('should render empty with the component className when no nodes', () => {
    const component = createComponent(BreadcrumbComponent);
    expect(component.props.className).to.equal('breadcrumb-component');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should render nodes', () => {
    const component = createComponent(BreadcrumbComponent, {nodes});
    expect(component.props.className).to.equal('breadcrumb-component');
    expect(component.props.children).to.have.length(2);

    const allLink = component.props.children[0];
    expect(allLink.props.className).to.equal('breadcrumb-component-link');

    const nodeWrapperElements = component.props.children[1];
    expect(nodeWrapperElements).to.have.length(nodes.length);
    nodeWrapperElements.forEach((nodeWrapperElement, index) => {
      expect(nodeWrapperElement.type).to.equal('span');
      expect(nodeWrapperElement.key).to.equal(nodes[index].id);

      const dividerElement = nodeWrapperElement.props.children[0];
      expect(dividerElement.props.children).to.equal(' > ');

      const nodeElement = nodeWrapperElement.props.children[1];
      expect(nodeElement.props.children).to.equal(nodes[index].label);

      let expectedClass;
      let expectedType;
      if (index === nodes.length - 1) {
        expectedClass = 'breadcrumb-component-last';
        expectedType = 'undefined';
      } else {
        expectedClass = 'breadcrumb-component-link';
        expectedType = 'function';
      }

      expect(nodeElement.props.className).to.equal(expectedClass);
      expect(nodeElement.props.onClick).to.be.a(expectedType);
    });
  });

  it('should trigger onClick when a node is clicked', () => {
    const idsRemoved = [];
    const onClick = (newActiveId) => idsRemoved.push(newActiveId);
    const component = createComponent(BreadcrumbComponent, {nodes, onClick});
    expect(component.props.className).to.equal('breadcrumb-component');

    const nodeWrapperElements = component.props.children[1];

    const secondNodeElement = nodeWrapperElements[1].props.children[1];
    expect(secondNodeElement.props.className).to.equal('breadcrumb-component-link');
    expect(secondNodeElement.props.children).to.equal('British Columbia');
    secondNodeElement.props.onClick();
    expect(idsRemoved).to.deep.equal(['b']);

    const allLinkElement = component.props.children[0];
    expect(allLinkElement.props.className).to.equal('breadcrumb-component-link');
    expect(allLinkElement.props.children).to.equal('All');
    allLinkElement.props.onClick();
    expect(idsRemoved).to.deep.equal(['b', 'all']);
  });

  it('should error when a node is clicked with no onClick handler', () => {
    const component = createComponent(BreadcrumbComponent, {nodes});
    const allLinkElement = component.props.children[0];
    expect(() => {
      allLinkElement.props.onClick();
    }).to.throw('Alexandria Breadcrumb needs an onClick handler to take all');
  });
});
