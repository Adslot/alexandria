/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/
'use strict';

import createComponent from 'helpers/shallowRenderHelper';
import ArcComponent from 'components/alexandria/slicey/ArcComponent.js';

describe('ArcComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ArcComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('arc-component');
  });
});
