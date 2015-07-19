import judge from './life_judge';
import CellNeighborhood from './cell_neighborhood';

function updateCell(cell, neighbors) {
  let fate = judge(cell, neighbors);
  let newVal = 0;

  if (fate === 'a') {
    newVal = cell += 1;
  }

  return newVal;
}

export default function tick(currentState) {
  return currentState.map((row, yIndex) => {
    return row.map((cell, xIndex) => {
      let neighbors = CellNeighborhood.init(currentState, xIndex, yIndex).neighbors();
      return updateCell(cell, neighbors);
    });
  });
}
