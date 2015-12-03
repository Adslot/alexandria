import React from 'react';

require('styles/alexandria/Breadcrumb.scss');

const BreadcrumbComponent = ({ nodes, onClick }) => {
  if (nodes.length === 0) {
    return <div className="breadcrumb-component" />;
  }

  const getNodeElement = ({ node, isLast }) => {
    return isLast ?
      <span className="breadcrumb-component-last">{node.label}</span> :
      (
        <span className="breadcrumb-component-link" onClick={() => onClick(node.id)}>
          {node.label}
        </span>
      );
  };

  return (
    <div className="breadcrumb-component">
      <span className="breadcrumb-component-link" onClick={() => onClick('all')}>All</span>
      {
        nodes.map((node, index) => {
          return (
            <span key={node.id}>
              <span> > </span>
              {getNodeElement({ node, isLast: index === nodes.length - 1 })}
            </span>
          );
        })
      }
    </div>
  );
};

BreadcrumbComponent.displayName = 'AlexandriaBreadcrumbComponent';

BreadcrumbComponent.propTypes = {
  nodes: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
    })
  ),
  onClick: React.PropTypes.func,
};
BreadcrumbComponent.defaultProps = {
  nodes: [],
  onClick: (newActiveId) => {throw new Error(`Alexandria Breadcrumb needs an onClick handler to take ${newActiveId}`);},
};

export default BreadcrumbComponent;
