import WorldState from './world_state';
import lifeTick from './life_tick';
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
  },

  start: function(speed, cb) {
    cb(this.world().state());

    setInterval(() => {
      let currentState = this.world().state();
      let newState = lifeTick(currentState);
      world.updateState(newState);
      cb(newState);
    }, speed);
  }
};
