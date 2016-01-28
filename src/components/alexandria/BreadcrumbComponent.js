import React, { PropTypes } from 'react';

require('styles/alexandria/Breadcrumb.scss');

const BreadcrumbComponent = ({ nodes, onClick }) => {
  if (nodes.length === 0) {
    return <div className="breadcrumb-component" />;
  }

  const getNodeElement = ({ node, isLast }) => {
    const onClickNode = () => onClick(node.id);
    if (isLast) {
      return (<span className="breadcrumb-component-last">{node.label}</span>);
    }

    return (
      <span className="breadcrumb-component-link" onClick={onClickNode}>
        {node.label}
      </span>);
  };

  const onClickAll = () => onClick('all');

  return (
    <div className="breadcrumb-component">
      <span className="breadcrumb-component-link" onClick={onClickAll}>All</span>
      {
        nodes.map((node, index) =>
          <span key={node.id}>
            <span> > </span>
            {getNodeElement({ node, isLast: index === nodes.length - 1 })}
          </span>
        )
      }
    </div>
  );
};

BreadcrumbComponent.displayName = 'AlexandriaBreadcrumbComponent';

BreadcrumbComponent.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
BreadcrumbComponent.defaultProps = {
  nodes: [],
  onClick: (newActiveId) => {throw new Error(`Alexandria Breadcrumb needs an onClick handler to take ${newActiveId}`);},
};

export default BreadcrumbComponent;
