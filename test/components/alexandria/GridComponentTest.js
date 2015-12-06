/* eslint-env node, mocha */
/* global expect */
import React from 'react';
import createComponent from 'helpers/shallowRenderHelper';
import GridComponent from '../../../src/components/alexandria/GridComponent';

describe('GridComponent', () => {
  it('should have its component name as default className', () => {
    const component = createComponent(GridComponent);
    expect(component.props.className).to.equal('grid-component');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should pass through children', () => {
    const children = <div className="test-class">Party town</div>;
    const component = createComponent(GridComponent, {}, children);
    expect(component.props.className).to.equal('grid-component');

    const childElement = component.props.children;
    expect(childElement.props.className).to.equal('test-class');
    expect(childElement.props.children).to.equal('Party town');
  });
});
