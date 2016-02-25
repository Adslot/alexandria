import React, { PropTypes } from 'react';
import classSuffixHelper from '../../helpers/classSuffixHelper';
import svg4everybody from 'svg4everybody';

require('styles/alexandria/SvgSymbol.scss');

const SvgSymbolComponent = ({ classSuffixes, href }) => {
  svg4everybody();

  const componentClass = 'svg-symbol-component';
  const classesList = classSuffixHelper({ classSuffixes, componentClass });

  return (
    <svg className={`${componentClass}${classesList}`}>
      <use xlinkHref={href} />
    </svg>
  );
};

SvgSymbolComponent.displayName = 'AlexandriaSvgSymbolComponent';

SvgSymbolComponent.propTypes = {
  classSuffixes: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string.isRequired,
};
SvgSymbolComponent.defaultProps = {
  classSuffixes: [],
  href: '/assets/svg-symbols.svg#checklist-incomplete',
};

export default SvgSymbolComponent;
