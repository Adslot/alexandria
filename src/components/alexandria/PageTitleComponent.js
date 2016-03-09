import React, { PropTypes } from 'react';

require('styles/alexandria/PageTitle.scss');

const baseClass = 'pagetitle-component';
const PageTitleComponent = ({ title, children }) => (
  <div className={baseClass}>
    {title}
    {children ? <div className={`${baseClass}-children`}>{children}</div> : null}
  </div>
);

PageTitleComponent.displayName = 'AlexandriaPageTitleComponent';

PageTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
PageTitleComponent.defaultProps = {
  title: 'Page Title',
};

export default PageTitleComponent;
