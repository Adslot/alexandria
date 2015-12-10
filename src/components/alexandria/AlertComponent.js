import React, { PropTypes } from 'react';

require('styles/alexandria/Alert.scss');

const AlertComponent = ({ type, children }) => (
  <div className={`alert-component alert-component-${type}`}>
    {children}
  </div>
);

AlertComponent.displayName = 'AlexandriaAlertComponent';

AlertComponent.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
};
AlertComponent.defaultProps = {
  type: 'info',
};

export default AlertComponent;
