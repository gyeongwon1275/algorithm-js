function solution(estimates, k) {
  if (estimates.length < k) {
    return 0;
  }

  let before = estimates.slice(0, k).reduce((prev, curr) => prev + curr);
  let maxValue = before;

  for (let day = k; day < estimates.length; day++) {
    const currentEstimate = before - estimates[day - k] + estimates[day];
    maxValue = Math.max(maxValue, currentEstimate);
    before = currentEstimate;
  }

  return maxValue;
}

console.log(solution([5, 1, 9, 8, 10, 5], 3));
