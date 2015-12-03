/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import Main from 'components/Main';

describe('MainComponent', () => {
  it('should have its component name as default className', () => {
    const MainComponent = createComponent(Main);
    expect(MainComponent.props.className).to.equal('index');
  });
});
