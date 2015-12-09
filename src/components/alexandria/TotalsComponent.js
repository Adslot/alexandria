import _ from 'lodash';
import Grid from 'components/alexandria/GridComponent';
import GridCell from 'components/alexandria/GridCellComponent';
import GridRow from 'components/alexandria/GridRowComponent';
import React from 'react';

const TotalsComponent = ({ toSum, valueFormatter }) => (
  <Grid>
    {toSum.map(({ label, value }, index) =>
      <GridRow short horizontalBorder={false} key={index}>
        <GridCell stretch>{label}</GridCell>
        <GridCell>{valueFormatter(value)}</GridCell>
      </GridRow>
    )}
    <GridRow short horizontalBorder={false} type="footer">
      <GridCell stretch>Total</GridCell>
      <GridCell>{valueFormatter(_.sum(toSum, 'value'))}</GridCell>
    </GridRow>
  </Grid>
);

TotalsComponent.displayName = 'AlexandriaTotalsComponent';

TotalsComponent.propTypes = {
  toSum: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.number.isRequired,
    })
  ).isRequired,
  valueFormatter: React.PropTypes.func.isRequired,
};

TotalsComponent.defaultProps = {
  toSum: [],
  valueFormatter: (value) => value,
};

export default TotalsComponent;
