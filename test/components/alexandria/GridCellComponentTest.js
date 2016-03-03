/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import React from 'react';

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

  it('should apply stretch class when stretch is true', () => {
    const component = createComponent(GridCellComponent, { stretch: true });
    expect(component.props.className).to.equal('grid-component-cell grid-component-cell-stretch');
  });

  it('should handle onClick when passed', () => {
    let called = 0;
    const onClick = () => {called += 1;};

    const component = createComponent(GridCellComponent, { onClick });
    expect(component.props.className).to.equal('grid-component-cell grid-component-cell-clickable');
    expect(component.props.onClick).to.be.a('function');
    component.props.onClick();
    expect(called).to.equal(1);
  });

  it('should apply extra classes when passed classSuffixes', () => {
    const component = createComponent(GridCellComponent, { classSuffixes: ['foo', 'bar'] });
    expect(component.props.className).to.equal([
      'grid-component-cell',
      'grid-component-cell-foo',
      'grid-component-cell-bar',
    ].join(' '));
  });

  it('should apply extra classes and stretch when passed classSuffixes and stretch', () => {
    const component = createComponent(GridCellComponent, { stretch: true, classSuffixes: ['foo', 'bar'] });
    expect(component.props.className).to.equal([
      'grid-component-cell',
      'grid-component-cell-foo',
      'grid-component-cell-bar',
      'grid-component-cell-stretch',
    ].join(' '));
  });
});
