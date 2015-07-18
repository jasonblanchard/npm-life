var state = [];

export default {
  state: function() {
    return state;
  },

  init: function(x, y, seed) {
    let yVals = Array(y).fill(0);

    state = yVals.map(() => {
      return Array(x).fill(0);
    });

    if (seed && seed.length > 0) {
      seed.forEach(function(coords) {
        state[coords[0]][coords[1]] = 1;
      });
    }

    return state;
  }
};
