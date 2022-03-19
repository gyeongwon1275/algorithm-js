/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  if (nums.length < 2) {
    return nums[0];
  }

  const numCount = {};

  for (let i = 0; i < nums.length; i++) {
    if (!numCount[nums[i]]) {
      numCount[nums[i]] = 1;
    } else if (numCount[nums[i]]) {
      numCount[nums[i]] = numCount[nums[i]] + 1;

      if (numCount[nums[i]] > nums.length * 0.5) {
        return Number(nums[i]);
      }
    }
  }
};

module.exports = majorityElement;
