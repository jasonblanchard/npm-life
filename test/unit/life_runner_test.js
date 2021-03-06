import LifeRunner from '../../src/life_runner';
import defaultSeed from '../../src/default_seed';

describe('LifeRunner', () => {
  it('initializes a LifeWorld', () => {
    LifeRunner.init({
      xDimension: 10,
      yDimension: 10,
      seed: defaultSeed
    });

    expect(LifeRunner.world().state().length).to.equal(10);
    expect(LifeRunner.world().state()[1].length).to.equal(10);
    expect(LifeRunner.world().state()[9][9]).to.equal(0);
    expect(LifeRunner.world().state()[0][1]).to.equal(1);
  });
});
