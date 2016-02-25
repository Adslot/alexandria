/* eslint-env node, mocha */
/* global expect */

import createComponent from 'helpers/shallowRenderHelper';
import SvgSymbolComponent from 'components/alexandria/SvgSymbolComponent';

describe('SvgSymbolComponent', () => {
  it('should render with href', () => {
    const component = createComponent(SvgSymbolComponent);
    expect(component.props.className).to.equal('svg-symbol-component');

    const useElement = component.props.children;
    expect(useElement.props.xlinkHref).to.equal('/assets/svg-symbols.svg#checklist-incomplete');
  });

  it('should render with props', () => {
    const component = createComponent(SvgSymbolComponent, {
      classSuffixes: ['16', 'red'],
      href: '/assets/other-svg-symbols.svg#checklist-incomplete',
    });
    expect(component.props.className).to.equal('svg-symbol-component svg-symbol-component-16 svg-symbol-component-red');

    const useElement = component.props.children;
    expect(useElement.props.xlinkHref).to.equal('/assets/other-svg-symbols.svg#checklist-incomplete');
  });
});
