/* function solution(N, stages) {
  stages.sort();

  let count = 1;

  let totalCount = stages.length;
  const failTable = {};

  for (let i = 1; i <= N; i++) {
    failTable[i] = 0;
  }

  for (let i = 0; i < stages.length; i++) {
    if (i > 0 && stages[i] === stages[i - 1]) {
      count++;
    } else if (i > 0 && stages[i] !== stages[i - 1]) {
      totalCount = totalCount - count;
      count = 1;
    }

    if (stages[i] <= N) {
      failTable[stages[i]] = count / totalCount;
    }
  }

  const table = Object.entries(failTable);

  const result = table
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      }
      if (a[1] < b[1]) {
        return 1;
      }

      return 0;
    })
    .map((array) => parseInt(array[0]), 10);

  return result;
} */

function solution(N, stages) {
  const failTable = {};

  for (let i = 1; i <= N; i++) {
    failTable[i] = 0;
  }

  const set = [...new Set(stages)];
  for (let i = 0; i < set.length; i++) {
    const count = stages.filter((statge) => statge === set[i]).length;
    const totalCount = stages.filter((statge) => statge >= set[i]).length;

    if (set[i] < N + 1) {
      failTable[set[i]] = totalCount === 0 ? 0 : count / totalCount;
    }
  }

  const table = Object.entries(failTable);

  const result = table
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      }
      if (a[1] < b[1]) {
        return 1;
      }

      return 0;
    })
    .map((array) => parseInt(array[0]), 10);

  return result;
}

module.exports = solution;
