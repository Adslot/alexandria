import React, { PropTypes } from 'react';

import classSuffixHelper from '../../helpers/classSuffixHelper';

require('styles/alexandria/SvgSymbol.scss');

const SvgSymbolComponent = (props) => {
  const { classSuffixes, href } = props;
  const componentClass = 'svg-symbol-component';
  const suffixOptions = { clickable: props.onClick };
  const classesList = classSuffixHelper({ classSuffixes, suffixOptions, componentClass });

  return (
    <svg className={`${componentClass}${classesList}`} {...props}>
      <use xlinkHref={href} />
    </svg>
  );
};

SvgSymbolComponent.displayName = 'AlexandriaSvgSymbolComponent';

SvgSymbolComponent.propTypes = {
  classSuffixes: PropTypes.arrayOf(PropTypes.string.isRequired),
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SvgSymbolComponent.defaultProps = {
  classSuffixes: [],
  href: '/assets/svg-symbols.svg#checklist-incomplete',
};

export default SvgSymbolComponent;
