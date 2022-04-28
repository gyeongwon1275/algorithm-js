const solution = require("./[카카오] 실패율.js");

describe("[카카오] 실패율", () => {
  it("ex 1> ", () => {
    expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
  });

  it("ex 2> ", () => {
    expect(solution(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
  });
});
