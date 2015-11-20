import _ from 'lodash';
import React from 'react';

require('styles/alexandria/Search.scss');

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.throttledOnQuery = _.throttle(
      () => props.onQuery(this.state.value),
      props.throttleTime);
  }

  changeValue({target}) {
    this.setState({value: target.value}, this.throttledOnQuery);
  }

  clearValue() {
    this.changeValue({target: {value: ''}});
  }

  render() {
    const {value} = this.state;
    return (
      <div className="search-component">
        <input
            className="search-component-input"
            name="search"
            onChange={this.changeValue.bind(this)}
            placeholder={`Search ${this.props.placeholder}`}
            type="search"
            value={value}
        />
        <div
            className={`search-component-icon${_.isEmpty(value) ? ' is-empty' : ''}`}
            onClick={this.clearValue.bind(this)}
        />
      </div>
    );
  }
}

SearchComponent.propTypes = {
  onQuery: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  throttleTime: React.PropTypes.number,
};

SearchComponent.defaultProps = {
  onQuery: (query) => new Error(`Pass an onQuery Function to Alexandria Search to receive ${query}`),
  placeholder: '',
  throttleTime: 0,
};

module.exports = SearchComponent;
