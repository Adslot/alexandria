/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import EmptyComponent from 'components/alexandria/EmptyComponent';

describe('EmptyComponent', () => {
  it('should render with defaults', () => {
    const component = createComponent(EmptyComponent);
    expect(component.props.className).to.equal('empty-component');

    const imgElement = component.props.children[0];
    expect(imgElement.props.className).to.equal('empty-component-icon');
    expect(imgElement.props.src).to.equal('//placehold.it/70x70');

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

  it('should render with custom icon and text', () => {
    const component = createComponent(EmptyComponent, { icon: '//wherever.com', text: 'So lonely.' });
    expect(component.props.className).to.equal('empty-component');

    const imgElement = component.props.children[0];
    expect(imgElement.props.className).to.equal('empty-component-icon');
    expect(imgElement.props.src).to.equal('//wherever.com');

    const textElement = component.props.children[1];
    expect(textElement.props.className).to.equal('empty-component-text');
    expect(textElement.props.children).to.equal('So lonely.');
  });

  it('should render with custom SVG symbol', () => {
    const svgSymbol = { href: '//wherever.svg#id', classSuffixes: ['class'] };
    const component = createComponent(EmptyComponent, { svgSymbol, text: 'So lonely.' });
    expect(component.props.className).to.equal('empty-component');

    const imgElement = component.props.children[0];
    expect(imgElement.props.className).to.equal('empty-component-svg-symbol');
    expect(imgElement.props.children.props.href).to.equal('//wherever.svg#id');
    expect(imgElement.props.children.props.classSuffixes).to.deep.equal(['class']);

    const textElement = component.props.children[1];
    expect(textElement.props.className).to.equal('empty-component-text');
    expect(textElement.props.children).to.equal('So lonely.');
  });
});
