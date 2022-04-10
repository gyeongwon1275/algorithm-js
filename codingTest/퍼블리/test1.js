function getWarmSpace({ row, column, heaterLength, office }) {
  let warmSpace = 0;

  for (let i = row; i < row + heaterLength; i++) {
    for (let j = column; j < column + heaterLength; j++) {
      if (office[i][j] === 1) {
        warmSpace++;
      }
    }
  }

  return warmSpace;
}

function solution(office, k) {
  let maxWarmSpace = 0;
  const limit = office.length - k + 1;

  for (let row = 0; row < limit; row++) {
    for (let column = 0; column < limit; column++) {
      maxWarmSpace = Math.max(
        getWarmSpace({ row, column, heaterLength: k, office }),
        maxWarmSpace
      );
    }
  }

  return maxWarmSpace;
}

const office = [
  [1, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 0],
];
const k = 2;

console.log(solution(office, 2)); // 3
