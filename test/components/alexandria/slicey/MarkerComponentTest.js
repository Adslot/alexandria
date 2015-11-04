/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/

import createComponent from 'helpers/shallowRenderHelper';
import MarkerComponent from 'components/alexandria/slicey/MarkerComponent';

describe('MarkerComponent', () => {
  it('should have its component name as default className', () => {
    const component = createComponent(MarkerComponent);
    expect(component.props.className).to.equal('marker-component');
  });

  it('should draw the marker at the top of the circle when given no fraction', () => {
    const component = createComponent(MarkerComponent);
    expect(component.props.className).to.equal('marker-component');
    expect(component.props.points).to.equal('3.061616997868383e-17,-0.5 0,0');
  });

  it('should draw the marker given a fraction of the circle', () => {
    const props = {
      fraction: 3 / 4,
    };
    const component = createComponent(MarkerComponent, props);
    expect(component.props.className).to.equal('marker-component');
    expect(component.props.points).to.equal('-0.5,6.123233995736766e-17 0,0');
  });
});
