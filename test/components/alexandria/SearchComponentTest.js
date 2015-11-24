/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

import _ from 'lodash';
import createComponent from 'helpers/shallowRenderHelper';
import React from 'react';
import SearchComponent from 'components/alexandria/SearchComponent.js';
import TestUtils from 'react-addons-test-utils';

describe('SearchComponent', () => {
  let component;

  it('should render using defaultProps', () => {
    component = createComponent(SearchComponent);

    expect(component.props.className).to.equal('search-component');

    const inputEl = component.props.children[0];
    expect(inputEl.props.className).to.equal('search-component-input');
    expect(inputEl.props.name).to.equal('search');
    expect(inputEl.props.onChange).to.satisfy(_.isFunction);
    expect(inputEl.props.placeholder).to.equal('Search ');
    expect(inputEl.props.type).to.equal('search');
    expect(inputEl.props.value).to.equal('');

    const iconEl = component.props.children[1];
    expect(iconEl.props.className).to.equal('search-component-icon is-empty');
    expect(iconEl.props.onClick).to.satisfy(_.isFunction);
  });

  it('should render using a placeholder', () => {
    component = createComponent(SearchComponent, {placeholder: 'your feelings'});

    const inputEl = component.props.children[0];
    expect(inputEl.props.placeholder).to.equal('Search your feelings');
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
