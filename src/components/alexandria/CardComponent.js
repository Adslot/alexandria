import React, { PropTypes } from 'react';

require('styles/alexandria/Card.scss');

const CardContentComponent = ({ children, className, stretch, fill }) => {
  const baseClass = 'card-component-content';
  const contentClassNames = [baseClass];

  if (stretch) contentClassNames.push('stretch');
  if (fill) contentClassNames.push('fill');
  if (className) contentClassNames.push(className);

  return (
    <div className={contentClassNames.join(' ')}>
      {children}
    </div>
    );
};

CardContentComponent.displayName = 'AlexandriaCardContentComponent';

CardContentComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fill: PropTypes.bool.isRequired,
  stretch: PropTypes.bool.isRequired,
};

CardContentComponent.defaultProps = {
  fill: false,
  stretch: false,
};

const CardComponent = ({ children, className }) => {
  const baseClass = 'card-component';
  const containerClassNames = [baseClass];
  if (className) containerClassNames.push(className);

  return (
    <div className={containerClassNames.join(' ')}>
      <div className={`${baseClass}-content-container`}>{children}</div>
    </div>
  );
};

CardComponent.displayName = 'AlexandriaCardComponent';

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default {
  Container: CardComponent,
  Content: CardContentComponent,
};
