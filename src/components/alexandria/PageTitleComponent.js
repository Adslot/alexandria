import React, { PropTypes } from 'react';

require('styles/alexandria/PageTitle.scss');

const baseClass = 'pagetitle-component';

const PageTitleComponent = ({ children, isFooter, title }) => {
  const className = isFooter ? `${baseClass} ${baseClass}-is-footer` : baseClass;
  return (
    <div className={className}>
      {title}
      {children ? <div className={`${baseClass}-children`}>{children}</div> : null}
    </div>
  );
};

PageTitleComponent.displayName = 'AlexandriaPageTitleComponent';

PageTitleComponent.propTypes = {
  children: PropTypes.node,
  isFooter: PropTypes.bool.isRequired,
  title: PropTypes.string,
};
PageTitleComponent.defaultProps = {
  isFooter: false,
};

export default PageTitleComponent;
