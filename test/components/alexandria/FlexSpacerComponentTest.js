/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import FlexSpacerComponent from 'components/alexandria/FlexSpacerComponent';

describe('FlexSpacerComponent', () => {
  it('should have its component name as className', () => {
    const component = createComponent(FlexSpacerComponent);
    expect(component.props.className).to.equal('flexspacer-component');
  });
});
