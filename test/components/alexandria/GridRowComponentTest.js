/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import React from 'react';

import GridRowComponent from '../../../src/components/alexandria/GridRowComponent';

describe('GridRowComponent', () => {
  it('should render with defaults', () => {
    const component = createComponent(GridRowComponent);
    expect(component.props.className).to.equal(
      'grid-component-row grid-component-row-body grid-component-row-horizontal-border');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should pass through children', () => {
    const children = <div className="test-class">Party town</div>;
    const component = createComponent(GridRowComponent, {}, children);
    expect(component.props.className).to.equal(
      'grid-component-row grid-component-row-body grid-component-row-horizontal-border');

    const childElement = component.props.children;
    expect(childElement.props.className).to.equal('test-class');
    expect(childElement.props.children).to.equal('Party town');
  });

  it('should have no horizontalBorder class when horizontalBorder is false', () => {
    const component = createComponent(GridRowComponent, { horizontalBorder: false });
    expect(component.props.className).to.equal('grid-component-row grid-component-row-body');
  });

  it('should apply short class when when short is true', () => {
    const component = createComponent(GridRowComponent, { short: true });
    expect(component.props.className).to.equal([
      'grid-component-row',
      'grid-component-row-body',
      'grid-component-row-horizontal-border',
      'grid-component-row-short',
    ].join(' '));
  });

  it('should apply header class instead of body when type is header', () => {
    const component = createComponent(GridRowComponent, { type: 'header' });
    expect(component.props.className).to.equal([
      'grid-component-row',
      'grid-component-row-header',
      'grid-component-row-horizontal-border',
    ].join(' '));
  });

  it('should apply subfooter class instead of body when type is subfooter', () => {
    const component = createComponent(GridRowComponent, { type: 'subfooter' });
    expect(component.props.className).to.equal([
      'grid-component-row',
      'grid-component-row-subfooter',
      'grid-component-row-horizontal-border',
    ].join(' '));
  });

  it('should apply footer class instead of body when type is footer', () => {
    const component = createComponent(GridRowComponent, { type: 'footer' });
    expect(component.props.className).to.equal([
      'grid-component-row',
      'grid-component-row-footer',
      'grid-component-row-horizontal-border',
    ].join(' '));
  });

  it('should apply vertical-cell-border class when verticalCellBorder is true', () => {
    const component = createComponent(GridRowComponent, { verticalCellBorder: true });
    expect(component.props.className).to.equal([
      'grid-component-row',
      'grid-component-row-body',
      'grid-component-row-horizontal-border',
      'grid-component-row-vertical-cell-border',
    ].join(' '));
  });
});
