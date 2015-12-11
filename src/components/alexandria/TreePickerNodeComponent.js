import _ from 'lodash';
import GridCell from 'components/alexandria/GridCellComponent';
import GridRow from 'components/alexandria/GridRowComponent';
import React, { PropTypes } from 'react';

require('styles/alexandria/TreePickerNode.scss');

const TreePickerNodeComponent = ({ buttonFirst, valueFormatter, includeNode, node, removeNode, selectedNodes }) => {
  const pathElement = (!_.isEmpty(node.path)) ?
    <span className="treepickernode-component-path">
      {node.path.reverse().join(', ')}
    </span> :
    null;

  const buttonElement = (
    <GridCell classSuffixes={['button']}>
      {
        (_.some(selectedNodes, { id: node.id })) ?
          <button onClick={removeNode.bind(null, node)}>Remove</button> :
          <button onClick={includeNode.bind(null, node)}>Include</button>
      }
    </GridCell>
  );

  return (
    <div className="treepickernode-component">
      <GridRow>
        {(buttonFirst) ? buttonElement : null}
        <GridCell stretch>
          <span>{node.label}</span>
          <span className="treepickernode-component-metadata"> ({node.type} in {pathElement})</span>
        </GridCell>
        <GridCell>
          {valueFormatter(node.value)}
        </GridCell>
        {(buttonFirst) ? null : buttonElement}
      </GridRow>
    </div>
  );
};

TreePickerNodeComponent.displayName = 'AlexandriaTreePickerNodeComponent';

const nodePropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  path: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
});

TreePickerNodeComponent.propTypes = {
  buttonFirst: PropTypes.bool.isRequired,
  valueFormatter: PropTypes.func.isRequired,
  includeNode: PropTypes.func.isRequired,
  node: nodePropType.isRequired,
  removeNode: PropTypes.func.isRequired,
  selectedNodes: PropTypes.arrayOf(nodePropType).isRequired,
};

TreePickerNodeComponent.defaultProps = {
  buttonFirst: false,
  valueFormatter: (value) => value,
  includeNode: (node) => {throw new Error(`Alexandria TreePickerNode needs an includeNode handler for ${node}`);},

  removeNode: (node) => {throw new Error(`Alexandria TreePickerNode needs a removeNode handler for ${node}`);},

  selectedNodes: [],
};

export default TreePickerNodeComponent;
