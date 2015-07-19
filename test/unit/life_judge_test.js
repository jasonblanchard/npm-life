import lifeJudge from '../../src/life_judge';

describe('judge', () => {
  it('Any live cell with fewer than two live neighbours dies', () => {
    let neighbors = [1, 0, 0, 0];
    expect(lifeJudge(1, neighbors)).to.equal('d');
  });

  it('Any live cell with two or three live neighbours lives on to the next generation', () => {
    let neighbors = [1, 1, 0, 0];
    expect(lifeJudge(1, neighbors)).to.equal('a');

    neighbors = [1, 1, 1, 0];
    expect(lifeJudge(1, neighbors)).to.equal('a');
  });

  it('Any live cell with more than three live neighbours dies, as if by overcrowding', () => {
    let neighbors = [1, 1, 1, 1];
    expect(lifeJudge(1, neighbors)).to.equal('d');
  });

  it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', () => {
    let neighbors = [0, 1, 1, 1];
    expect(lifeJudge(0, neighbors)).to.equal('a');

  });
});
