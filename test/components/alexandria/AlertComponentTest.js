/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

import createComponent from 'helpers/shallowRenderHelper';
import AlertComponent from 'components/alexandria/AlertComponent.js';

describe('AlertComponent', () => {

  it('should render default info type', () => {
    const component = createComponent(AlertComponent);
    expect(component.props.className).to.equal('alert-component alert-component-info');
  });

  it('should render success type', () => {
    const component = createComponent(AlertComponent, {type: 'success'});
    expect(component.props.className).to.equal('alert-component alert-component-success');
  });

  it('should render warning type', () => {
    const component = createComponent(AlertComponent, {type: 'warning'});
    expect(component.props.className).to.equal('alert-component alert-component-warning');
  });

  it('should render danger type', () => {
    const component = createComponent(AlertComponent, {type: 'danger'});
    expect(component.props.className).to.equal('alert-component alert-component-danger');
  });
});
