/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import BreadcrumbNodeComponent from 'components/alexandria/BreadcrumbNodeComponent.js';

describe('BreadcrumbNodeComponent', () => {
  let node;
  let onClick;

  beforeEach(() => {
    node = { id: 'a', label: 'Canada' };
    onClick = () => null;
  });

  it('should render a link node', () => {
    const component = createComponent(BreadcrumbNodeComponent, {
      isLast: false,
      onClick,
      node,
    });
    expect(component.type).to.equal('span');
    expect(component.props.className).to.equal('breadcrumbnode-component breadcrumbnode-component-link');
    expect(component.props.onClick).to.be.a('function');
    expect(component.props.children).to.equal('Canada');
  });

  it('should render a last node', () => {
    const component = createComponent(BreadcrumbNodeComponent, {
      isLast: true,
      onClick,
      node,
    });
    expect(component.type).to.equal('span');
    expect(component.props.className).to.equal('breadcrumbnode-component');
    expect(component.props.onClick).to.be.an('undefined');
    expect(component.props.children).to.equal('Canada');
  });

  it('should trigger onClick when clicking a node', () => {
    const idsRemoved = [];
    const onClickMock = (newActiveId) => idsRemoved.push(newActiveId);
    const component = createComponent(BreadcrumbNodeComponent, {
      isLast: false,
      node,
      onClick: onClickMock,
    });

    expect(component.props.className).to.equal('breadcrumbnode-component breadcrumbnode-component-link');
    expect(component.props.children).to.equal(node.label);
    component.props.onClick();
    expect(idsRemoved).to.deep.equal(['a']);
  });
});
