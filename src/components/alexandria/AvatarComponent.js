import _ from 'lodash';
import React, { PropTypes } from 'react';

require('styles/alexandria/Avatar.scss');

const AvatarComponent = ({ color, givenName, image, surname }) => {
  let imageEl;
  if (image !== undefined) {imageEl = <img className="avatar-component-image" src={image} />;}

  let className = 'avatar-component';
  if (color !== undefined) {className = `${className} ${className}-${color}`;}

  const initials = `${_.first(givenName) || ''}${_.first(surname) || ''}`;

  return (
    <div className={className} title={`${givenName || ''} ${surname || ''}`}>
      {imageEl}
      <div className="avatar-component-initials">{initials}</div>
    </div>
  );
};

AvatarComponent.displayName = 'AlexandriaAvatarComponent';

AvatarComponent.propTypes = {
  color: PropTypes.string,
  givenName: PropTypes.string,
  image: PropTypes.string,
  surname: PropTypes.string,
};

export default AvatarComponent;
