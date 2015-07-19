import WorldState from '../../src/world_state';

describe('WorldState', () => {

  describe('#state', () => {
    it('is a multidimensional array', () => {
      expect(typeof WorldState.state()).to.equal('object');
    });
  });

  describe('#init', () => {
    it('initializes the World to a certain dimension', () => {
      WorldState.init(20, 10);
      expect(WorldState.state().length).to.equal(10);
      expect(WorldState.state()[1].length).to.equal(20);
      expect(WorldState.state()[5][5]).to.equal(0);
    });

    it('initializes the world with a specific seed', () => {
      WorldState.init(10, 10, [
        [0, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [0, 3],
        [1, 1],
        [3, 4],
        [5, 0],
        [0, 3],
        [1, 3],
        [2, 3]
      ]);

      expect(WorldState.state()[1][0]).to.equal(1);
      expect(WorldState.state()[3][4]).to.equal(1);
      expect(WorldState.state()[1][2]).to.equal(0);
    });
  });

  describe('#update state', () => {
    it('updates the internal state', () => {
      let world = WorldState.init(10, 10, [
        [0, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [0, 3],
        [1, 1],
        [3, 4],
        [5, 0],
        [0, 3],
        [1, 3],
        [2, 3]
      ]);

      let state = world.state();

      expect(state[1][1]).to.equal(1);
      state[1][1] = 0;
      world.updateState(state);
      expect(world.state()[1][1]).to.equal(0);
    });
  });
});
