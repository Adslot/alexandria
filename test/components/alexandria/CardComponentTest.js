import React from 'react';
import { shallow } from 'enzyme';

import CardComponent from 'components/alexandria/CardComponent';

describe('CardContainerComponent', () => {
  it('should render and pass through children', () => {
    const children = <div className="test-class">Test Text</div>;
    const component = shallow(<CardComponent.Container>{children}</CardComponent.Container>);
    expect(component.prop('className')).to.equal('card-component');
    expect(component.children()).to.have.length(1);
    expect(component.find('.test-class').text()).to.equal('Test Text');
  });

  it('should render with "inline" class', () => {
    const component = shallow(<CardComponent.Container inline>Test Text</CardComponent.Container>);
    expect(component.prop('className')).to.equal('card-component inline');
    expect(component.children()).to.have.length(1);
  });

  it('should render with classNames', () => {
    const component = shallow(<CardComponent.Container className="red blue">Test Text</CardComponent.Container>);
    expect(component.prop('className')).to.equal('card-component red blue');
    expect(component.children()).to.have.length(1);
  });
});

describe('CardContentComponent', () => {
  it('should render and pass through children', () => {
    const children = <div className="test-class">Test Text</div>;
    const component = shallow(<CardComponent.Content>{children}</CardComponent.Content>);
    expect(component.prop('className')).to.equal('card-component-content');
    expect(component.children()).to.have.length(1);
    expect(component.find('.test-class').text()).to.equal('Test Text');
  });

  it('should render with "stretch" class', () => {
    const component = shallow(<CardComponent.Content stretch>Test Text</CardComponent.Content>);
    expect(component.prop('className')).to.equal('card-component-content stretch');
    expect(component.children()).to.have.length(1);
  });

  it('should render with "fill" class', () => {
    const component = shallow(<CardComponent.Content fill>Test Text</CardComponent.Content>);
    expect(component.prop('className')).to.equal('card-component-content fill');
    expect(component.children()).to.have.length(1);
  });

  it('should render with custom classNames', () => {
    const component = shallow(<CardComponent.Content fill className="some classes">Test Text</CardComponent.Content>);
    expect(component.prop('className')).to.equal('card-component-content fill some classes');
    expect(component.children()).to.have.length(1);
  });
});
