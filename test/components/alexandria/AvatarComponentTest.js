/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import AvatarComponent from 'components/alexandria/AvatarComponent';

describe('AvatarComponent', () => {
  it('should render with defaults', () => {
    const component = createComponent(AvatarComponent);
    expect(component.props.className).to.equal('avatar-component');
    expect(component.props.title).to.equal(' ');

    const avatarElement = component.props.children[0];
    expect(avatarElement).to.be.an('undefined');

    const initialsElement = component.props.children[1];
    expect(initialsElement.props.className).to.equal('avatar-component-initials');
    expect(initialsElement.props.children).to.equal('');
  });

  it('should render with names given', () => {
    const component = createComponent(AvatarComponent, { givenName: 'John', surname: 'Doe' });
    expect(component.props.className).to.equal('avatar-component');
    expect(component.props.title).to.equal('John Doe');

    const avatarElement = component.props.children[0];
    expect(avatarElement).to.be.an('undefined');

    const initialsElement = component.props.children[1];
    expect(initialsElement.props.className).to.equal('avatar-component-initials');
    expect(initialsElement.props.children).to.equal('JD');
  });

  it('should render with different color', () => {
    const component = createComponent(AvatarComponent, { givenName: 'John', surname: 'Doe', color: 'blue' });
    expect(component.props.className).to.equal('avatar-component avatar-component-blue');
    expect(component.props.title).to.equal('John Doe');

    const avatarElement = component.props.children[0];
    expect(avatarElement).to.be.an('undefined');

    const initialsElement = component.props.children[1];
    expect(initialsElement.props.className).to.equal('avatar-component-initials');
    expect(initialsElement.props.children).to.equal('JD');
  });

  it('should render with avatar', () => {
    const component = createComponent(AvatarComponent, { givenName: 'John', surname: 'Doe', image: '//avatar.com' });
    expect(component.props.className).to.equal('avatar-component');
    expect(component.props.title).to.equal('John Doe');

    const avatarElement = component.props.children[0];
    expect(avatarElement.props.className).to.equal('avatar-component-image');
    expect(avatarElement.props.src).to.equal('//avatar.com');

    const initialsElement = component.props.children[1];
    expect(initialsElement.props.className).to.equal('avatar-component-initials');
    expect(initialsElement.props.children).to.equal('JD');
  });
});
