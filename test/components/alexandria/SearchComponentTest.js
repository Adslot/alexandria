/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

import createComponent from 'helpers/shallowRenderHelper';
import React from 'react';
import SearchComponent from 'components/alexandria/SearchComponent';
import TestUtils from 'react-addons-test-utils';

describe('SearchComponent', () => {
  it('should render using defaultProps', () => {
    const component = createComponent(SearchComponent);

    expect(component.props.className).to.equal('search-component');

    const inputEl = component.props.children[0];
    expect(inputEl.props.className).to.equal('search-component-input');
    expect(inputEl.props.name).to.equal('search');
    expect(inputEl.props.onChange).to.be.a('function');
    expect(inputEl.props.placeholder).to.equal('Search ');
    expect(inputEl.props.type).to.equal('search');
    expect(inputEl.props.value).to.equal('');

    const iconEl = component.props.children[1];
    expect(iconEl.props.className).to.equal('search-component-icon is-empty');
    expect(iconEl.props.onClick).to.be.a('function');
  });

  it('should render using a placeholder', () => {
    const component = createComponent(SearchComponent, {placeholder: 'your feelings'});

    const inputEl = component.props.children[0];
    expect(inputEl.props.placeholder).to.equal('Search your feelings');
  });

  it('should error when the user changes the value with no onQuery handler', () => {
    const component = createComponent(SearchComponent);
    const inputEl = component.props.children[0];
    expect(() => {
      inputEl.props.onChange({target: {value: "Cam's Awesome Text"}});
    }).to.throw("Alexandria Search needs an onQuery handler to take Cam's Awesome Text");
  });

  it('should let the user change the value and clear the input', () => {
    const getRenderOutputAndCheck = ({renderer, expectedText, expectedIconClass}) => {
      const componentRenderOutput = renderer.getRenderOutput();

      const inputEl = componentRenderOutput.props.children[0];
      expect(inputEl.props.value).to.equal(expectedText);

      const iconEl = componentRenderOutput.props.children[1];
      expect(iconEl.props.className).to.equal(expectedIconClass);
      return {inputEl, iconEl};
    };

    const queries = [];
    const testOnQuery = (query) => queries.push(query);

    const renderer = TestUtils.createRenderer();
    renderer.render(<SearchComponent onQuery={testOnQuery} />);

    const {inputEl} = getRenderOutputAndCheck({
      renderer,
      expectedText: '',
      expectedIconClass: 'search-component-icon is-empty',
    });

    // Manually invoke onChange handler via props
    inputEl.props.onChange({target: {value: "Cam's Awesome Text"}});

    const {iconEl} = getRenderOutputAndCheck({
      renderer,
      expectedText: "Cam's Awesome Text",
      expectedIconClass: 'search-component-icon',
    });
    expect(queries).to.deep.equal(["Cam's Awesome Text"]);

    // Manually invoke onClick handler via props to clear the input
    iconEl.props.onClick();

    getRenderOutputAndCheck({
      renderer,
      expectedText: '',
      expectedIconClass: 'search-component-icon is-empty',
    });

    expect(queries).to.deep.equal(["Cam's Awesome Text", '']);
  });
});
