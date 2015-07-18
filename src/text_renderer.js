import LifeRunner from './life_runner';
import defaultSeed from './default_seed';

var world = LifeRunner.init({
  xDimension: 10,
  yDimension: 10,
  seed: defaultSeed
});

world.forEach((column) => {
  column.forEach((row) => {
    process.stdout.write(`[${row.toString()}]`);
  });
  console.log('');
});
