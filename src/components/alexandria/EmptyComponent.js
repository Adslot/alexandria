import _ from 'lodash';
import SvgSymbolCircle from 'components/alexandria/SvgSymbolCircleComponent';
import React, { PropTypes } from 'react';

require('styles/alexandria/Empty.scss');

const EmptyComponent = ({ collection, svgSymbol, text }) => {
  const classSuffixes = _.isEmpty(svgSymbol.classSuffixes) ?
    EmptyComponent.defaultProps.svgSymbol.classSuffixes :
    svgSymbol.classSuffixes;

  if (_.isEmpty(collection)) {
    return (
      <div className="empty-component">
        <SvgSymbolCircle
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
  svgSymbol: PropTypes.shape(SvgSymbolCircle.propTypes),
  text: PropTypes.any, // can be string or, if you want rich formatting, a node
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
