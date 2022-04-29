const solution = require("./reverseNumber");

describe("reverseNumber", () => {
  it("reverse number ", () => {
    expect(solution(54321)).toEqual([1, 2, 3, 4, 5]);
  });
});
