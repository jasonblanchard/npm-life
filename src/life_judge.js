export default function(currentValue, neighbors) {
  let aliveCount = neighbors.filter((value) => {
    return value !== 0;
  }).length;

  if (currentValue > 0) {

    if ((aliveCount < 2) || (aliveCount > 3)) {
      return 'd';
    }

    if ((aliveCount === 2) || (aliveCount === 3)) {
      return 'a';
    }

  } else {
    if (aliveCount === 3) {
      return 'a';
    }
  }
}
