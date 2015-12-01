import _ from 'lodash';
import React from 'react';

require('styles/alexandria/Empty.scss');

const EmptyComponent = ({collection, icon, text}) => {
  if (_.isEmpty(collection)) {
    return (
      <div className="empty-component">
        <img className="empty-component-icon" src={icon} />
        <div className="empty-component-text">{text}</div>
      </div>
    );
  }

  return <div className="empty-component" />;
};

EmptyComponent.displayName = 'AlexandriaEmptyComponent';

EmptyComponent.propTypes = {
  collection: React.PropTypes.any,
  icon: React.PropTypes.string,
  text: React.PropTypes.string,
};
EmptyComponent.defaultProps = {
  collection: null,
  icon: '//placehold.it/70x70',
  text: 'Nothing to show.',
};

export default EmptyComponent;
