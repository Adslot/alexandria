import _ from 'lodash';
import React, { PropTypes } from 'react';
import SvgSymbol from 'components/alexandria/SvgSymbolComponent';

require('styles/alexandria/Empty.scss');

const EmptyComponent = ({ collection, icon, svgSymbol, text }) => {
  if (_.isEmpty(collection)) {
    return (
      <div className="empty-component">
        {svgSymbol === undefined ?
          <img className="empty-component-icon" src={icon} /> :
          <div className="empty-component-svg-symbol">
            <SvgSymbol classSuffixes={svgSymbol.classSuffixes} href={svgSymbol.href} />
          </div>
        }
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
  svgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  text: PropTypes.string,
};
EmptyComponent.defaultProps = {
  collection: null,
  icon: '//placehold.it/70x70',
  text: 'Nothing to show.',
};

export default EmptyComponent;
