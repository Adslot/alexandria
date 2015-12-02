/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import ArcComponent from 'components/alexandria/slicey/ArcComponent';

describe('ArcComponent', () => {
  it('should have its component name as default className', () => {
    const component = createComponent(ArcComponent);
    expect(component.props.className).to.equal('arc-component');
  });

  it('should render an arc for given data', () => {
    const props = {
      data: {
        label: 'Something Great',
        id: 0,
        largeArcFlag: 0,
        x1: 3.06,
        y1: -0.5,
        x2: 0.14,
        y2: 0.47,
      },
    };
    const component = createComponent(ArcComponent, props);
    expect(component.props.className).to.equal('arc-component something-great');
    expect(component.type).to.equal('path');
    expect(component.props.d).to.equal('M0,0 L3.06,-0.5 A0.5,0.5 0 0,1 0.14,0.47 z');
  });
});
