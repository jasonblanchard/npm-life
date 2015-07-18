export default {
  init: function(world, x, y) {
    this.block = {};

    if (y > 0) {
      if (x > 0) {
        this.block.tl = world[y - 1][x - 1];
      }
      this.block.t = world[y - 1][x];
      if (x < world.length - 1) {
        this.block.tr = world[y - 1][x + 1];
      }
    }

    if (x > 0) {
      this.block.l = world[y][x - 1];
    }

    if (x < world.length - 1) {
      if (y < world[0].length - 1) {
        this.block.br = world[y + 1][x + 1];
      }
      this.block.r = world[y][x + 1];
    }

    if (y < world[0].length - 1) {
      this.block.b = world[y + 1][x];
      if (x > 0) {
        this.block.bl = world[y + 1][x - 1];
      }
    }

    return this;
  },

  neighbors: function() {
    return Object.keys(this.block).map((key) => {
      return this.block[key];
    });
  }
};
