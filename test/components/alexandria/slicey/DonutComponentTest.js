/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/

import createComponent from 'helpers/shallowRenderHelper';
import DonutComponent from 'components/alexandria/slicey/DonutComponent';

describe('DonutComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(DonutComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('donut-component');
  });

  it('should have a radius of .45 of the unit circle and an origin of 0,0', () => {
    expect(component.props.r).to.equal('.45');
    expect(component.props.cx).to.equal('0');
    expect(component.props.cy).to.equal('0');
  });
});
