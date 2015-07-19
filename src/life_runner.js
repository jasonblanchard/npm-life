import WorldState from './world_state';
var world = null;

export default {
  init: function(options) {
    // TODO Use a merge here
    let xDimension = options.xDimension || 20;
    let yDimension = options.yDimension || 20;
    let seed = options.seed || null;

    world = WorldState.init(xDimension, yDimension, seed);
    return this;
  },

  world: function() {
    return world;
  }
};
