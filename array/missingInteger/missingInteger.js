function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const max = Math.max(...A);

  if (max < 1) return 1;

  const setA = new Set(A);
  for (let i = 1; i <= max + 1; i++) {
    if (!setA.has(i)) {
      return i;
    }
  }

  return max + 1;
}
module.exports = solution;
