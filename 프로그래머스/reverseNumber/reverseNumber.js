function solution(n) {
  const answer = [];

  while (n > 0) {
    answer.push(n % 10);

    n = Math.floor(n / 10);
  }
  return answer;
}

module.exports = solution;
