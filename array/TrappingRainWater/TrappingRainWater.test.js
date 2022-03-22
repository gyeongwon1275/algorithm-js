/* 
Given n non-negative integers representing an elevation map 
where the width of each bar is 1, 
compute how much water it can trap after raining.
*/

const trap = require("./TrappingRainWater");

describe("TrappingRainWater", () => {
  it("trap 되는 물 양 반환", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    expect(trap([2, 0, 2])).toBe(2);
  });
});
