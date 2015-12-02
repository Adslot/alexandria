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

  it('should render without contents when passed a non-empty collection Array', () => {
    const component = createComponent(EmptyComponent, {collection: [1]});
    expect(component.props.className).to.equal('empty-component');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should render without contents when passed a non-empty collection Object', () => {
    const component = createComponent(EmptyComponent, {collection: {foo: 1}});
    expect(component.props.className).to.equal('empty-component');
    expect(component.props.children).to.be.an('undefined');
  });

  it('should render with custom icon and text', () => {
    const component = createComponent(EmptyComponent, {icon: '//wherever.com', text: 'So lonely.'});
    expect(component.props.className).to.equal('empty-component');

    const imgElement = component.props.children[0];
    expect(imgElement.props.className).to.equal('empty-component-icon');
    expect(imgElement.props.src).to.equal('//wherever.com');

    const textElement = component.props.children[1];
    expect(textElement.props.className).to.equal('empty-component-text');
    expect(textElement.props.children).to.equal('So lonely.');
  });
});
