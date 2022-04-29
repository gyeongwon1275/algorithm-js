const solution = require("./missingInteger");

describe("find missing interger", () => {
  it("ex 1", () => {
    expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
  });

  it("ex 2", () => {
    expect(solution([1, 2, 3])).toBe(4);
  });

  it("ex 3", () => {
    expect(solution([-1, -2, -3])).toBe(1);
  });

  it("ex 4", () => {
    expect(solution([-1, -2, -3, 0])).toBe(1);
  });

  it("ex 5", () => {
    expect(solution([0, 0, 0])).toBe(1);
  });
});
