/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import SearchComponent from 'components/alexandria/SearchComponent';

describe('SearchComponent', () => {
  const indices = {
    input: 0,
    icon: 1,
  };
  Object.freeze(indices);

  it('should render using defaultProps', () => {
    const component = createComponent(SearchComponent);
    expect(component.props.className).to.equal('search-component');

    const inputEl = component.props.children[indices.input];
    expect(inputEl.props.className).to.equal('search-component-input');
    expect(inputEl.props.name).to.equal('search');
    expect(inputEl.props.onChange).to.be.a('function');
    expect(inputEl.props.placeholder).to.equal('Search ');
    expect(inputEl.props.type).to.equal('search');
    expect(inputEl.props.value).to.equal('');

    const svgSymbolEl = component.props.children[indices.icon];
    expect(svgSymbolEl.type.name).to.equal('SvgSymbolComponent');
    expect(svgSymbolEl.props.href).to.equal('/assets/svg-symbols.svg#search');
    expect(svgSymbolEl.props.classSuffixes).to.deep.equal(['gray-light']);
    expect(svgSymbolEl.props.onClick).to.be.an('undefined');
  });

  it('should render using a placeholder', () => {
    const component = createComponent(SearchComponent, { placeholder: 'your feelings' });

    const inputEl = component.props.children[indices.input];
    expect(inputEl.props.placeholder).to.equal('Search your feelings');
  });

  it('should render using a value', () => {
    const component = createComponent(SearchComponent, { value: 'needle' });

    const inputEl = component.props.children[indices.input];
    expect(inputEl.props.value).to.equal('needle');
    const svgSymbolEl = component.props.children[indices.icon];
    expect(svgSymbolEl.type.name).to.equal('SvgSymbolComponent');
    expect(svgSymbolEl.props.href).to.equal('/assets/svg-symbols.svg#cancel');
    expect(svgSymbolEl.props.classSuffixes).to.deep.equal(['gray-darker']);
  });

  it('should fire onChange when the user changes the value', () => {
    const values = [];
    const testFunction = (value) => values.push(value);
    const component = createComponent(SearchComponent, { onChange: testFunction });
    const inputEl = component.props.children[indices.input];
    inputEl.props.onChange({ target: { value: 'needle' } });
    expect(values).to.deep.equal(['needle']);
  });

  it('should error when the user changes the value with no onChange handler', () => {
    const component = createComponent(SearchComponent);
    const inputEl = component.props.children[indices.input];
    expect(() => {
      inputEl.props.onChange();
    }).to.throw('Alexandria Search needs an onChange handler');
  });

  it('should fire onClear when the user clicks the icon', () => {
    let fireCount = 0;
    const testFunction = () => {fireCount += 1;};

    const component = createComponent(SearchComponent, { onClear: testFunction, value: 'a' });
    const svgSymbolEl = component.props.children[indices.icon];
    svgSymbolEl.props.onClick();
    expect(fireCount).to.equal(1);
  });

  it('should error when the user clicks the icon with no onClear handler', () => {
    const component = createComponent(SearchComponent, { value: 'a' });
    const svgSymbolEl = component.props.children[indices.icon];
    expect(() => {
      svgSymbolEl.props.onClick();
    }).to.throw('Alexandria Search needs an onClear handler');
  });
});
