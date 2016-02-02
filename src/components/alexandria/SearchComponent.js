import _ from 'lodash';
import React, { PropTypes } from 'react';

require('styles/alexandria/Search.scss');

const SearchComponent = ({
  onChange,
  onClear,
  placeholder,
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
      <div
        className={`search-component-icon${_.isEmpty(value) ? ' is-empty' : ''}`}
        onClick={onClear}
      />
    </div>
  );
};

SearchComponent.displayName = 'AlexandriaSearchComponent';

SearchComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

SearchComponent.defaultProps = {
  onChange: () => {throw new Error(`Alexandria Search needs an onChange handler`);},

  onClear: () => {throw new Error(`Alexandria Search needs an onClear handler`);},

  placeholder: '',
  value: '',
};

export default SearchComponent;
