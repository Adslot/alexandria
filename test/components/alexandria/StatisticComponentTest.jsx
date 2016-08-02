import React from 'react';
import { shallow } from 'enzyme';

import StatisticComponent from '../../../src/components/alexandria/StatisticComponent';

describe('StatisticComponent', () => {
  it('should render with value and label', () => {
    const component = shallow(<StatisticComponent label="Views" value="2 Million" />);
    expect(component.prop('className')).to.equal('statistic-component');
    expect(component.children()).to.have.length(2);

    expect(component.children().first().equals(
      <div className="statistic-component-value">
        2 Million
      </div>
    )).to.equal(true);

    expect(component.children().last().equals(
      <label className="statistic-component-label">
        Views
      </label>
    )).to.equal(true);
  });

  it('should render inline', () => {
    const component = shallow(<StatisticComponent label="Views" value="2 Million" inline />);
    expect(component.prop('className')).to.equal('statistic-component inline');
  });
});
