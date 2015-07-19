import tick from '../../src/life_tick.js';
import defaultSeed from '../../src/default_seed';
import WorldState from '../../src/world_state';

let state = WorldState.init(10, 10, defaultSeed).state();

describe('tick', () => {
  it('updates state of the world', () => {
    let newState = tick(state);
    expect(newState[1][1]).to.equal(0);
    expect(newState[1][3]).to.equal(2);
  });
});
