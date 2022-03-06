const twoSum = require("./twoSum");

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


*/

describe("twoSum", () => {
  it("두 숫자의 합이 target number 와 같은 index 배열을 반환합니다.", () => {
    expect(twoSum([15, 11, 7, 2], 9)).toEqual([2, 3]);
    expect(twoSum([4, 3, 2], 6)).toEqual([0, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    expect(twoSum([1, 3, 4, 2], 6)).toEqual([2, 3]);
  });
});
