/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/

import createComponent from 'helpers/shallowRenderHelper';
import SliceyComponent from 'components/alexandria/SliceyComponent';

describe('SliceyComponent', () => {
  let dataset;

  beforeEach(() => {
    dataset = [
      {label: 'positive', value: 5},
      {label: 'negative', value: 3},
    ];
  });

  it('should render an empty state', () => {
    const component = createComponent(SliceyComponent);
    expect(component.props.className).to.equal('slicey-component');
    expect(component.props.height).to.equal(100);
    expect(component.props.viewBox).to.equal('-0.5 -0.5 1 1');
    expect(component.props.width).to.equal(100);

    expect(component.props.children).to.have.length(3);
    expect(component.props.children[0].props.className).to.equal('slicey-empty');

    // Marker and Donut should be undefined.
    expect(component.props.children[1]).to.be.an('undefined');
    expect(component.props.children[2]).to.be.an('undefined');
  });

  it('should render a given dataset', () => {
    const props = {
      dataset,
    };
    const component = createComponent(SliceyComponent, props);
    expect(component.props.className).to.equal('slicey-component');
    expect(component.props.height).to.equal(100);
    expect(component.props.viewBox).to.equal('-0.5 -0.5 1 1');
    expect(component.props.width).to.equal(100);
    expect(component.type).to.equal('svg');

    expect(component.props.children).to.have.length(4);

    // Marker and Donut should be undefined.
    expect(component.props.children[2]).to.be.an('undefined');
    expect(component.props.children[3]).to.be.an('undefined');
  });

  it('should render a circle if there is only one arc to draw', () => {
    const props = {
      dataset: [{label: 'positive', value: 5}],
    };
    const component = createComponent(SliceyComponent, props);
    expect(component.props.className).to.equal('slicey-component');
    expect(component.props.height).to.equal(100);
    expect(component.props.viewBox).to.equal('-0.5 -0.5 1 1');
    expect(component.props.width).to.equal(100);
    expect(component.type).to.equal('svg');

    expect(component.props.children).to.have.length(4);

    const arcCircle = component.props.children[1];
    expect(arcCircle.type).to.equal('circle');
    expect(arcCircle.props.className).to.equal('arc-component positive');

    // Marker and Donut should be undefined.
    expect(component.props.children[2]).to.be.an('undefined');
    expect(component.props.children[3]).to.be.an('undefined');
  });

  it('should render a marker on a donut with a custom diameter', () => {
    const props = {
      dataset,
      marker: 0.5,
      donut: true,
      diameter: 50,
    };
    const component = createComponent(SliceyComponent, props);
    expect(component.props.className).to.equal('slicey-component');
    expect(component.props.height).to.equal(50);
    expect(component.props.viewBox).to.equal('-0.5 -0.5 1 1');
    expect(component.props.width).to.equal(50);
    expect(component.type).to.equal('svg');

    expect(component.props.children).to.have.length(4);
    expect(component.props.children[0].props.className).to.equal('slicey-background');

    const arcs = component.props.children[1];
    expect(arcs[0].type.name).to.equal('ArcComponent');
    expect(arcs[1].type.name).to.equal('ArcComponent');

    const marker = component.props.children[2];
    expect(marker.type.name).to.equal('MarkerComponent');
    expect(marker.props.fraction).to.equal(0.5);

    expect(component.props.children[3].type.name).to.equal('DonutComponent');
  });
});
