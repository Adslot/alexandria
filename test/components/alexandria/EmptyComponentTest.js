/* eslint-env node, mocha */
/* global expect */

import { shallow } from 'enzyme';
import EmptyComponent from 'components/alexandria/EmptyComponent';
import SvgSymbolCircleComponent from 'components/alexandria/SvgSymbolCircleComponent';
import React from 'react';

describe('EmptyComponent', () => {
  it('should render with defaults', () => {
    const component = shallow(<EmptyComponent />);
    expect(component.hasClass('empty-component')).to.equal(true);

    const svgSymbolEl = component.find(SvgSymbolCircleComponent);
    expect(svgSymbolEl.prop('href')).to.equal('/assets/svg-symbols.svg#checklist-incomplete');
    expect(svgSymbolEl.prop('classSuffixes')).to.deep.equal(['gray-darker', '70', 'circle']);

    const textElement = component.find('.empty-component-text');
    expect(textElement.hasClass('empty-component-text')).to.equal(true);
    expect(textElement.text()).to.equal('Nothing to show.');
  });

  it('should render an empty div when passed a non-empty collection Array', () => {
    const component = shallow(<EmptyComponent collection={[1]} />);
    expect(component.prop('className')).to.be.an('undefined');
    expect(component.children()).to.have.length(0);
  });

  it('should render an empty div when passed a non-empty collection Object', () => {
    const component = shallow(<EmptyComponent collection={{ foo: 1 }} />);
    expect(component.prop('className')).to.be.an('undefined');
    expect(component.children()).to.have.length(0);
  });

  it('should render with custom SVG symbol', () => {
    const svgSymbol = { href: '//wherever.svg#id', classSuffixes: ['class'] };
    const props = { svgSymbol, text: 'Where is everybody?' };
    const component = shallow(<EmptyComponent {...props} />);
    expect(component.hasClass('empty-component')).to.equal(true);

    const svgSymbolEl = component.find(SvgSymbolCircleComponent);
    expect(svgSymbolEl.prop('href')).to.equal('//wherever.svg#id');
    expect(svgSymbolEl.prop('classSuffixes')).to.deep.equal(['class']);

    const textElement = component.find('.empty-component-text');
    expect(textElement.hasClass('empty-component-text')).to.equal(true);
    expect(textElement.text()).to.equal('Where is everybody?');
  });

  it('should render with custom SVG symbol, using default classSuffixes', () => {
    const svgSymbol = { href: '//wherever.svg#id' };
    const component = shallow(<EmptyComponent {...{ svgSymbol }} />);
    expect(component.hasClass('empty-component')).to.equal(true);

    const svgSymbolEl = component.find(SvgSymbolCircleComponent);
    expect(svgSymbolEl.prop('href')).to.equal('//wherever.svg#id');
    expect(svgSymbolEl.prop('classSuffixes')).to.deep.equal(['gray-darker', '70', 'circle']);
  });
});
