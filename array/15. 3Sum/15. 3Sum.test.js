const threeSum = require("./15. 3Sum");

describe("15. 3Sum", () => {
  it("ex > 1 [-1, 0, 1, 2, -1, -4]", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it("ex > 2 [0, 0, 0]", () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it("ex > 3 [-15, 1, 14, 4, 11]", () => {
    expect(threeSum([-15, 1, 14, 4, 11])).toEqual([
      [-15, 1, 14],
      [-15, 4, 11],
    ]);
  });
});
