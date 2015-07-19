import LifeRunner from '../life_runner';
import defaultSeed from '../default_seed';
import readline from 'readline';
import colors from 'colors';

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let additionalSeed = [
  [9, 9],
  [9, 8],
  [8, 8],
  [8, 7],
  [1, 6],
  [2, 6],
  [8, 1],
  [9, 1],
  [9, 2],
  [7, 1],
  [7, 3],
  [7, 4],
  [6, 4],
  [5, 4],
  [3, 9],
  [3, 8],
  [4, 8],
  [4, 7]
];
let seed = defaultSeed.concat(additionalSeed);

var world = LifeRunner.init({
  xDimension: 10,
  yDimension: 10,
  seed: seed
});

world.start(100, (state) => {
  readline.cursorTo(rl, 0, 0)
  readline.clearScreenDown(rl)
  state.forEach((column) => {
    column.forEach((cell) => {
      if (cell === 0) {
        process.stdout.write('[  ] ');
      } else {
        process.stdout.write(`[${('0' + cell).slice(-2)}] `.green);
      }
    });
    console.log('');
    console.log('');
  });
});

