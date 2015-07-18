export default {
  init: function(world, x, y) {
    this.block = {};

    if (x > 0) {
      this.block.tl = world[x - 1][y - 1];
      this.block.t = world[x - 1][y];
      if (y < world.length - 1) {
        this.block.tr = world[x - 1][y + 1];
      }
    }
    this.block.l = world[x][y - 1];

    if (y < world.length - 1) {
      this.block.br = world[x + 1][y + 1];
      this.block.r = world[x][y + 1];
    }

    this.block.b = world[x + 1][y];
    this.block.bl = world[x + 1][y - 1];

    return this;
  },

  neighbors: function() {
    return Object.keys(this.block).map((key) => {
      return this.block[key];
    });
  }
};
