import _ from 'lodash';
import React from 'react';

require('styles/alexandria/TreePickerNode.scss');

const TreePickerNodeComponent = ({ buttonFirst, currencyFilter, includeNode, node, removeNode, selectedNodes }) => {
  const pathElement = (!_.isEmpty(node.path)) ?
    <span className="treepickernode-component-path">
      {node.path.reverse().join(', ')}
    </span> :
    null;

  const buttonElement = (
    <span className="grid-component-cell grid-component-cell-button">
      {
        (_.some(selectedNodes, { id: node.id })) ?
          <button onClick={removeNode.bind(null, node)}>Remove</button> :
          <button onClick={includeNode.bind(null, node)}>Include</button>
      }
    </span>
  );

  return (
    <span className="treepickernode-component">
      <div className="grid-component-row">
        {(buttonFirst) ? buttonElement : null}
        <span className="grid-component-cell grid-component-cell-grow">
          <span>{node.label}</span>
          <span className="treepickernode-component-metadata"> ({node.type} in {pathElement})</span>
        </span>
        <span className="grid-component-cell">
          {currencyFilter(node.cost)}
        </span>
        {(buttonFirst) ? null : buttonElement}
      </div>
    </span>
  );
};

TreePickerNodeComponent.displayName = 'AlexandriaTreePickerNodeComponent';

const nodePropType = React.PropTypes.shape({
  id: React.PropTypes.number.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  cost: React.PropTypes.number.isRequired,
  path: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
});

TreePickerNodeComponent.propTypes = {
  buttonFirst: React.PropTypes.bool.isRequired,
  currencyFilter: React.PropTypes.func.isRequired,
  includeNode: React.PropTypes.func.isRequired,
  node: nodePropType.isRequired,
  removeNode: React.PropTypes.func.isRequired,
  selectedNodes: React.PropTypes.arrayOf(nodePropType).isRequired,
};

TreePickerNodeComponent.defaultProps = {
  buttonFirst: false,
  currencyFilter: (value) => value,
  includeNode: (node) => {throw new Error(`Alexandria TreePickerNode needs an includeNode handler for ${node}`);},

  removeNode: (node) => {throw new Error(`Alexandria TreePickerNode needs a removeNode handler for ${node}`);},

  selectedNodes: [],
};

export default TreePickerNodeComponent;
