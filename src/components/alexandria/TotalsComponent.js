import _ from 'lodash';
import Grid from 'components/alexandria/GridComponent';
import GridCell from 'components/alexandria/GridCellComponent';
import GridRow from 'components/alexandria/GridRowComponent';
import React, { PropTypes } from 'react';

const TotalsComponent = ({ toSum, valueFormatter }) => (
  <Grid>
    {_(toSum).reject(({ isHidden: true })).map(({ label, value }, index) =>
      <GridRow short horizontalBorder={false} key={index}>
        <GridCell stretch>{label}</GridCell>
        <GridCell>{valueFormatter(value)}</GridCell>
      </GridRow>
    ).value()}
    <GridRow short horizontalBorder={false} type="footer">
      <GridCell stretch>Total</GridCell>
      <GridCell>{valueFormatter(_.sum(toSum, 'value'))}</GridCell>
    </GridRow>
  </Grid>
);

TotalsComponent.displayName = 'AlexandriaTotalsComponent';

TotalsComponent.propTypes = {
  toSum: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number.isRequired,
      isHidden: PropTypes.bool,
    })
  ).isRequired,
  valueFormatter: PropTypes.func.isRequired,
};

TotalsComponent.defaultProps = {
  toSum: [],
  valueFormatter: (value) => value,
};

export default TotalsComponent;
