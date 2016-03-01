import _ from 'lodash';
import SvgSymbol from 'components/alexandria/SvgSymbolComponent';
import React, { PropTypes } from 'react';

require('styles/alexandria/Empty.scss');

const EmptyComponent = ({ collection, svgSymbol, text }) => {
  const classSuffixes = _.isEmpty(svgSymbol.classSuffixes) ?
    EmptyComponent.defaultProps.svgSymbol.classSuffixes :
    svgSymbol.classSuffixes;

  if (_.isEmpty(collection)) {
    return (
      <div className="empty-component">
        <SvgSymbol
          href={svgSymbol.href}
          classSuffixes={classSuffixes}
        />
        <div className="empty-component-text">{text}</div>
      </div>
    );
  }

  return <div />;
};

EmptyComponent.displayName = 'AlexandriaEmptyComponent';

EmptyComponent.propTypes = {
  collection: PropTypes.any,
  svgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  text: PropTypes.string,
};
EmptyComponent.defaultProps = {
  collection: null,
  svgSymbol: {
    href: '/assets/svg-symbols.svg#checklist-incomplete',
    classSuffixes: ['gray-darker', '70', 'circle'],
  },
  text: 'Nothing to show.',
};

export default EmptyComponent;
