import CellNeighborhood from '../../src/cell_neighborhood';
import defaultSeed from '../../src/default_seed';
import WorldState from '../../src/world_state';

var world = WorldState.init(10, 10, defaultSeed);

describe('#init', () => {
  describe('for a middle cell', () => {
    it('returns neighbors', () => {
      let neighbors = CellNeighborhood.init(world, 1, 1);
      expect(neighbors.block.tl).to.equal(1);
      expect(neighbors.block.t).to.eq(1);
      expect(neighbors.block.tr).to.eq(1);
      expect(neighbors.block.l).to.eq(1);
      expect(neighbors.block.r).to.eq(0);
      expect(neighbors.block.bl).to.eq(0);
      expect(neighbors.block.b).to.eq(0);
      expect(neighbors.block.br).to.eq(0);
    });
  });
});

describe('#neighborhood', () => {
  it('returns an array of neighbors', () => {
    let neighborhood = CellNeighborhood.init(world, 1, 1);
    let neighbors = neighborhood.neighbors();
    expect(neighbors.length).to.equal(8);
    expect(neighbors[0]).to.equal(1);
    expect(neighbors[4]).to.equal(0);
  });
});

describe('for top row', () => {
  it('gets the right neighbors', () => {
    let neighborhood = CellNeighborhood.init(world, 1, 0);
    let neighbors = neighborhood.neighbors();

    expect(neighborhood.block.l).to.equal(1);
    expect(neighborhood.block.t).to.equal(undefined);

    expect(neighbors.length).to.equal(5);
  });
});

describe('for right column', () => {
  it('gets the right neighbors', () => {
    let neighborhood = CellNeighborhood.init(world, 9, 1);
    let neighbors = neighborhood.neighbors();

    expect(neighborhood.block.l).to.equal(0);
    expect(neighborhood.block.r).to.equal(undefined);

    expect(neighbors.length).to.equal(5);
  });
});

describe('for the bottom row', () => {
  it('gets the right neighbors', () => {
    let neighborhood = CellNeighborhood.init(world, 1, 9);
    let neighbors = neighborhood.neighbors();

    expect(neighborhood.block.l).to.equal(0);
    expect(neighborhood.block.b).to.equal(undefined);

    expect(neighbors.length).to.equal(5);
  });
});

describe('for the left column', () => {
  it('gets the right neighbors', () => {
    let neighborhood = CellNeighborhood.init(world, 0, 1);
    let neighbors = neighborhood.neighbors();

    expect(neighborhood.block.r).to.equal(1);
    expect(neighborhood.block.l).to.equal(undefined);

    expect(neighbors.length).to.equal(5);
  });
});

describe('for the corners', () => {
  it('gets the right neighbors', () => {
    let neighborhood = CellNeighborhood.init(world, 0, 0);
    let neighbors = neighborhood.neighbors();
    expect(neighbors.length).to.equal(3);

    neighborhood = CellNeighborhood.init(world, 9, 0);
    neighbors = neighborhood.neighbors();
    expect(neighbors.length).to.equal(3);

    neighborhood = CellNeighborhood.init(world, 9, 9);
    neighbors = neighborhood.neighbors();
    expect(neighbors.length).to.equal(3);

    neighborhood = CellNeighborhood.init(world, 0, 9);
    neighbors = neighborhood.neighbors();
    expect(neighbors.length).to.equal(3);

  });
});
