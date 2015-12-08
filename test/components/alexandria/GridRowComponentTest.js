/* eslint-env node, mocha */
/* global expect */
import React from 'react';
import createComponent from 'helpers/shallowRenderHelper';
import GridRowComponent from '../../../src/components/alexandria/GridRowComponent';

describe('GridRowComponent', () => {
  it('should have its component name as default className', () => {
    const component = createComponent(GridRowComponent);
    expect(component.props.className).to.equal('grid-component-row grid-component-row-body');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should apply vertical borders class when verticalCellBorder is true', () => {
    const component = createComponent(GridRowComponent, { verticalCellBorder: true });
    expect(component.props.className).to.equal(
      'grid-component-row grid-component-row-body grid-component-row-vertical-border');
  });

  it('should pass through children', () => {
    const children = <div className="test-class">Party town</div>;
    const component = createComponent(GridRowComponent, {}, children);
    expect(component.props.className).to.equal('grid-component-row grid-component-row-body');

    const childElement = component.props.children;
    expect(childElement.props.className).to.equal('test-class');
    expect(childElement.props.children).to.equal('Party town');
  });
});
