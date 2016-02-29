import _ from 'lodash';
import SvgSymbol from 'components/alexandria/SvgSymbolComponent';
import React, { PropTypes } from 'react';

require('styles/alexandria/Search.scss');

const SearchComponent = ({
  onChange,
  onClear,
  placeholder,
  svgSymbolCancel,
  svgSymbolSearch,
  value,
}) => {
  const onChangeBound = (event) => onChange(_.get(event, 'target.value'));

  return (
    <div className="search-component">
      <input
        autoComplete="off"
        className="search-component-input"
        name="search"
        onChange={onChangeBound}
        placeholder={`Search ${placeholder}`}
        type="search"
        value={value}
      />
      {_.isEmpty(value) ?
        <SvgSymbol href={svgSymbolSearch.href} classSuffixes={svgSymbolSearch.classSuffixes} /> :
        <SvgSymbol href={svgSymbolCancel.href} classSuffixes={svgSymbolCancel.classSuffixes} onClick={onClear} />
      }
    </div>
  );
};

SearchComponent.displayName = 'AlexandriaSearchComponent';

SearchComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  svgSymbolCancel: PropTypes.shape(SvgSymbol.propTypes),
  svgSymbolSearch: PropTypes.shape(SvgSymbol.propTypes),
  value: PropTypes.string.isRequired,
};

SearchComponent.defaultProps = {
  onChange: () => {throw new Error('Alexandria Search needs an onChange handler');},

  onClear: () => {throw new Error('Alexandria Search needs an onClear handler');},

  placeholder: '',
  svgSymbolCancel: {
    classSuffixes: ['gray-darker'],
    href: '/assets/svg-symbols.svg#cancel',
  },
  svgSymbolSearch: {
    classSuffixes: ['gray-light'],
    href: '/assets/svg-symbols.svg#search',
  },
  value: '',
};

export default SearchComponent;
