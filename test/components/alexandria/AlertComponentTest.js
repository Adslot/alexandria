/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import AlertComponent from 'components/alexandria/AlertComponent';
import React from 'react';

describe('AlertComponent', () => {
  it('should render default info type', () => {
    const component = createComponent(AlertComponent, {}, <div />);
    expect(component.props.className).to.equal('alert-component alert-component-info');
    expect(component.props.children.type).to.equal('div');
  });

  it('should render success type', () => {
    const component = createComponent(AlertComponent, { type: 'success' }, <div />);
    expect(component.props.className).to.equal('alert-component alert-component-success');
  });

  it('should render warning type', () => {
    const component = createComponent(AlertComponent, { type: 'warning' }, <div />);
    expect(component.props.className).to.equal('alert-component alert-component-warning');
  });

  it('should render danger type', () => {
    const component = createComponent(AlertComponent, { type: 'danger' }, <div />);
    expect(component.props.className).to.equal('alert-component alert-component-danger');
  });
});
