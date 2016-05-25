import React, { PropTypes } from 'react';

require('styles/alexandria/Card.scss');

const CardContentComponent = ({ children, stretch, fill }) => {
  const baseClass = 'card-component-content';
  const contentClassNames = [baseClass];

  if (stretch) contentClassNames.push('stretch');
  if (fill) contentClassNames.push('fill');

  return (
    <div className={contentClassNames.join(' ')}>
      {children}
    </div>
    );
};

CardContentComponent.displayName = 'AlexandriaCardContentComponent';

CardContentComponent.propTypes = {
  children: PropTypes.node.isRequired,
  fill: PropTypes.bool.isRequired,
  stretch: PropTypes.bool.isRequired,
};

CardContentComponent.defaultProps = {
  fill: false,
  stretch: false,
};

const CardComponent = ({ children, className, inline }) => {
  const baseClass = 'card-component';
  const containerClassNames = [baseClass];
  if (className) containerClassNames.push(className);
  if (inline) containerClassNames.push('inline');

  return (
    <div className={containerClassNames.join(' ')}>
      {children}
    </div>
  );
};

CardComponent.displayName = 'AlexandriaCardComponent';

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool.isRequired,
};

CardComponent.defaultProps = {
  inline: false,
};

export default {
  Container: CardComponent,
  Content: CardContentComponent,
};
