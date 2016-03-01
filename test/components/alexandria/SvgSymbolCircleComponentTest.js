/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import SvgSymbolCircleComponent from 'components/alexandria/SvgSymbolCircleComponent.js';

describe('SvgSymbolCircleComponent', () => {
  it('should render with defaults', () => {
    const component = createComponent(SvgSymbolCircleComponent);
    expect(component.props.className).to.equal('svgsymbolcircle-component');
    const svgSymbolEl = component.props.children;
    expect(svgSymbolEl.type.name).to.equal('SvgSymbolComponent');
    expect(svgSymbolEl.props.classSuffixes).to.have.length(0);
    expect(svgSymbolEl.props.href).to.equal('/assets/svg-symbols.svg#checklist-incomplete');
  });

  it('should render with props', () => {
    const component = createComponent(SvgSymbolCircleComponent, {
      href: 'foo#bar',
      classSuffixes: ['70'],
    });
    expect(component.props.className).to.equal('svgsymbolcircle-component svgsymbolcircle-component-70');
    const svgSymbolEl = component.props.children;
    expect(svgSymbolEl.type.name).to.equal('SvgSymbolComponent');
    expect(svgSymbolEl.props.classSuffixes).to.deep.equal(['70']);
    expect(svgSymbolEl.props.href).to.equal('foo#bar');
  });
});
