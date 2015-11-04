/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/

import createComponent from 'helpers/shallowRenderHelper';
import SliceyComponent from 'components/alexandria/SliceyComponent';

describe('SliceyComponent', () => {
  it('should have its component name as default className', () => {
    const component = createComponent(SliceyComponent);
    expect(component.props.className).to.equal('slicey-component');
  });

  it('should render a given dataset', () => {
    const props = {
      dataset: [
        {label: 'positive', value: 5},
        {label: 'negative', value: 3},
      ],
    };
    const component = createComponent(SliceyComponent, props);
    expect(component.props.className).to.equal('slicey-component');
    expect(component.props.height).to.equal(100);
    expect(component.props.viewBox).to.equal('-0.5 -0.5 1 1');
    expect(component.props.width).to.equal(100);
    expect(component.type).to.equal('svg');

    expect(component.props.children).to.have.length(3);
  });
});
