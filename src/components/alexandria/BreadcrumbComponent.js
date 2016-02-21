import BreadcrumbNodeComponent from 'components/alexandria/BreadcrumbNodeComponent';
import React, { PropTypes } from 'react';

require('styles/alexandria/Breadcrumb.scss');

const BreadcrumbComponent = ({ nodes, onClick }) => {
  if (nodes.length === 0) {
    return <div className="breadcrumb-component" />;
  }

  return (
    <div className="breadcrumb-component">
      <BreadcrumbNodeComponent
        isLast={false}
        node={{ id: 'all', label: 'All' }}
        onClick={onClick}
      />
      {
        nodes.map((node, index) =>
          <span key={node.id}>
            <span> > </span>
            <BreadcrumbNodeComponent
              isLast={index === nodes.length - 1}
              node={node}
              onClick={onClick}
            />
          </span>
        )
      }
    </div>
  );
};

BreadcrumbComponent.displayName = 'AlexandriaBreadcrumbComponent';

BreadcrumbComponent.propTypes = {
  nodes: PropTypes.arrayOf(BreadcrumbNodeComponent.propTypes.node).isRequired,
  onClick: PropTypes.func.isRequired,
};
BreadcrumbComponent.defaultProps = {
  nodes: [],
  onClick: (newActiveId) => {throw new Error(`Alexandria Breadcrumb needs an onClick handler to take ${newActiveId}`);},
};

export default BreadcrumbComponent;
