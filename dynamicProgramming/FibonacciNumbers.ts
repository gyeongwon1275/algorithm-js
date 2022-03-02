function fibonacciNumbersRecursive(index: number): number {
  if (index < 2) {
    return index;
  }

  return (
    fibonacciNumbersRecursive(index - 2) + fibonacciNumbersRecursive(index - 1)
  );
}

function fibonacciNumbersMemo(index: number): number {
  const cache = [0, 1];

  function fibonacciNumbersMemoRecursive(index: number, cache = [0, 1]) {
    if (index < 2) {
      return index;
    }
    if (cache[index]) {
      return cache[index];
    }

    return (
      fibonacciNumbersMemoRecursive(index - 2, cache) +
      fibonacciNumbersMemoRecursive(index - 1, cache)
    );
  }

  cache[index] = fibonacciNumbersMemoRecursive(index, cache);

  return cache[index];
}

function fibonacciNumbersTabulation(index: number): number {
  if (index < 2) {
    return index;
  }

  let beforeNumber2 = 0;
  let beforeNumber1 = 1;
  let result = index;

  for (let i = 2; i <= index; i++) {
    result = beforeNumber2 + beforeNumber1;
    beforeNumber2 = beforeNumber1;
    beforeNumber1 = result;
  }

  return result;
}

module.exports = {
  fibonacciNumbersRecursive,
  fibonacciNumbersMemo,
  fibonacciNumbersTabulation,
};
