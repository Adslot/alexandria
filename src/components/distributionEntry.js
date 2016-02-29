// Export all the components that are consumable.

import svg4everybody from 'svg4everybody';
import Alert from 'components/alexandria/AlertComponent';
import Avatar from 'components/alexandria/AvatarComponent';
import Breadcrumb from 'components/alexandria/BreadcrumbComponent';
import Empty from 'components/alexandria/EmptyComponent';
import FlexSpacer from 'components/alexandria/FlexSpacerComponent';
import Grid from 'components/alexandria/GridComponent';
import GridCell from 'components/alexandria/GridCellComponent';
import GridRow from 'components/alexandria/GridRowComponent';
import Search from 'components/alexandria/SearchComponent';
import Slicey from 'components/alexandria/SliceyComponent';
import SvgSymbol from 'components/alexandria/SvgSymbolComponent';
import Totals from 'components/alexandria/TotalsComponent';

svg4everybody();

module.exports = {
  Alert,
  Avatar,
  Breadcrumb,
  Empty,
  FlexSpacer,
  Grid,
  GridCell,
  GridRow,
  Search,
  Slicey,
  SvgSymbol,
  Totals,
};
