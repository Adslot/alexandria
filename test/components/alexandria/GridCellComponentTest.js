/* eslint-env node, mocha */
/* global expect */
import React from 'react';
import createComponent from 'helpers/shallowRenderHelper';
import GridCellComponent from '../../../src/components/alexandria/GridCellComponent';

describe('GridCellComponent', () => {
  it('should have its component name as default className', () => {
    const component = createComponent(GridCellComponent);
    expect(component.props.className).to.equal('grid-component-cell');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should pass through children', () => {
    const children = <div className="test-class">Party town</div>;
    const component = createComponent(GridCellComponent, {}, children);
    expect(component.props.className).to.equal('grid-component-cell');

    const childElement = component.props.children;
    expect(childElement.props.className).to.equal('test-class');
    expect(childElement.props.children).to.equal('Party town');
  });
});
