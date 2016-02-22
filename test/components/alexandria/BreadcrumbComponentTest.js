/* eslint-env node, mocha */
/* global expect */

import _ from 'lodash';
import createComponent from 'helpers/shallowRenderHelper';
import BreadcrumbComponent from 'components/alexandria/BreadcrumbComponent';

describe('BreadcrumbComponent', () => {
  let nodes;

  beforeEach(() => {
    nodes = [
      { id: 'a', label: 'Canada' },
      { id: 'b', label: 'British Columbia' },
      { id: 'c', label: 'Victoria' },
    ];
  });

  it('should render empty with the component className when no nodes', () => {
    const component = createComponent(BreadcrumbComponent);
    expect(component.props.className).to.equal('breadcrumb-component');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should render nodes', () => {
    const component = createComponent(BreadcrumbComponent, { nodes });
    expect(component.props.className).to.equal('breadcrumb-component');
    expect(component.props.children).to.have.length(2);

    const allLink = component.props.children[0];
    expect(allLink.props.isLast).to.equal(false);
    expect(allLink.props.node).to.deep.equal({ id: 'all', label: 'All' });
    expect(allLink.props.onClick).to.be.a('function');

    const nodeWrapperElements = component.props.children[1];
    expect(nodeWrapperElements).to.have.length(nodes.length);
    _.forEach(nodeWrapperElements, (nodeWrapperElement, index) => {
      expect(nodeWrapperElement.type).to.equal('span');
      expect(nodeWrapperElement.key).to.equal(nodes[index].id);

      const dividerElement = nodeWrapperElement.props.children[0];
      expect(dividerElement.props.children).to.equal(' > ');

      const nodeElement = nodeWrapperElement.props.children[1];
      expect(nodeElement.props.node).to.equal(nodes[index]);

      expect(nodeElement.props.isLast).to.equal(index === nodes.length - 1);
      expect(nodeElement.props.onClick).to.be.a('function');
    });
  });
  it('should error when clicking a node with no onClick handler', () => {
    const component = createComponent(BreadcrumbComponent, { nodes });
    const allLinkElement = component.props.children[0];
    expect(() => {
      allLinkElement.props.onClick('all');
    }).to.throw('Alexandria Breadcrumb needs an onClick handler to take all');
  });
});
