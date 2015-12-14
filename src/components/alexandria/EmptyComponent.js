import _ from 'lodash';
import React, { PropTypes } from 'react';

require('styles/alexandria/Empty.scss');

const EmptyComponent = ({ collection, icon, text }) => {
  if (_.isEmpty(collection)) {
    return (
      <div className="empty-component">
        <img className="empty-component-icon" src={icon} />
        <div className="empty-component-text">{text}</div>
      </div>
    );
  }

  return <div />;
};

EmptyComponent.displayName = 'AlexandriaEmptyComponent';

EmptyComponent.propTypes = {
  collection: PropTypes.any,
  icon: PropTypes.string,
  text: PropTypes.string,
};
EmptyComponent.defaultProps = {
  collection: null,
  icon: '//placehold.it/70x70',
  text: 'Nothing to show.',
};

export default EmptyComponent;
