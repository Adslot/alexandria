/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import EmptyComponent from 'components/alexandria/EmptyComponent';

describe('EmptyComponent', () => {
  it('should render with defaults', () => {
    const component = createComponent(EmptyComponent);
    expect(component.props.className).to.equal('empty-component');

    const svgSymbolEl = component.props.children[0];
    expect(svgSymbolEl.type.name).to.equal('SvgSymbolComponent');
    expect(svgSymbolEl.props.href).to.equal('/assets/svg-symbols.svg#checklist-incomplete');
    expect(svgSymbolEl.props.classSuffixes).to.deep.equal(['gray-darker', '70', 'circle']);

    const textElement = component.props.children[1];
    expect(textElement.props.className).to.equal('empty-component-text');
    expect(textElement.props.children).to.equal('Nothing to show.');
  });

  it('should render an empty div when passed a non-empty collection Array', () => {
    const component = createComponent(EmptyComponent, { collection: [1] });
    expect(component.props.className).to.be.an('undefined');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should render an empty div when passed a non-empty collection Object', () => {
    const component = createComponent(EmptyComponent, { collection: { foo: 1 } });
    expect(component.props.className).to.be.an('undefined');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should render with custom SVG symbol', () => {
    const svgSymbol = { href: '//wherever.svg#id', classSuffixes: ['class'] };
    const component = createComponent(EmptyComponent, { svgSymbol, text: 'Where is everybody?' });
    expect(component.props.className).to.equal('empty-component');

    const svgSymbolEl = component.props.children[0];
    expect(svgSymbolEl.type.name).to.equal('SvgSymbolComponent');
    expect(svgSymbolEl.props.href).to.equal('//wherever.svg#id');
    expect(svgSymbolEl.props.classSuffixes).to.deep.equal(['class']);

    const textElement = component.props.children[1];
    expect(textElement.props.className).to.equal('empty-component-text');
    expect(textElement.props.children).to.equal('Where is everybody?');
  });

  it('should render with custom SVG symbol, using default classSuffixes', () => {
    const svgSymbol = { href: '//wherever.svg#id' };
    const component = createComponent(EmptyComponent, { svgSymbol, text: 'Where is everybody?' });

    const svgSymbolEl = component.props.children[0];
    expect(svgSymbolEl.props.href).to.equal('//wherever.svg#id');
    expect(svgSymbolEl.props.classSuffixes).to.deep.equal(['gray-darker', '70', 'circle']);
  });
});
