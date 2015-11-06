/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/

import DataProcessor from 'components/alexandria/slicey/DataProcessor';

describe('DataProcessor', () => {

  it('should export constants', () => {
    expect(DataProcessor.QUARTER).to.equal(Math.PI / 2);
    expect(DataProcessor.HALF).to.equal(Math.PI);
    expect(DataProcessor.ROUND).to.equal(Math.PI * 2);
  });

  it('should export point methods', () => {
    expect(DataProcessor.getPointX(Math.PI)).to.equal(-0.5);
    expect(DataProcessor.getPointY(Math.PI / 2)).to.equal(0.5);
  });
});
