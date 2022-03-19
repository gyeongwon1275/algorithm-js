/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const numCount = {};

  for (let i = 0; i < nums.length; i++) {
    if (!numCount[nums[i]]) {
      numCount[nums[i]] = 1;
    } else {
      numCount[nums[i]] = numCount[nums[i]] + 1;
    }
  }

  const [num] = Object.entries(numCount).find(
    ([, count]) => count > nums.length * 0.5
  );
  return Number(num);
};

module.exports = majorityElement;
