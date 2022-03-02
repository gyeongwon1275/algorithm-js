const {
  fibonacciNumbersRecursive,
  fibonacciNumbersMemo,
} = require("./FibonacciNumbers");

describe("FibonacciNumbers", () => {
  const result = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  describe("fibonacciNumbersRecursive", () => {
    it("첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합을 반환합니다.", () => {
      result.forEach((value, index) => {
        expect(fibonacciNumbersRecursive(index)).toBe(value);
      });
    });
  });

  describe("fibonacciNumbersMemo", () => {
    it("첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합을 반환합니다.", () => {
      result.forEach((value, index) => {
        expect(fibonacciNumbersMemo(index)).toBe(value);
      });
    });
  });

  describe("fibonacciNumbersTabulation", () => {
    it("첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합을 반환합니다.", () => {
      result.forEach((value, index) => {
        expect(fibonacciNumbersMemo(index)).toBe(value);
      });
    });
  });
});
