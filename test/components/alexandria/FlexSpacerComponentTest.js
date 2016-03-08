import { shallow } from 'enzyme';
import FlexSpacerComponent from 'components/alexandria/FlexSpacerComponent';
import React from 'react';

describe('FlexSpacerComponent', () => {
  it('should have its component name as className', () => {
    const component = shallow(<FlexSpacerComponent />);
    expect(component.prop('className')).to.equal('flexspacer-component');
  });
});
