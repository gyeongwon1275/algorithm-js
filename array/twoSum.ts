/* const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const remainingNumber = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (remainingNumber === nums[j]) {
        return [i, j];
      }
    }
  }
}; */

/* 
찾고자 하는 건 index 니까 
dictionary 에 key(숫자) value (index) 로 넣음

target 숫자에서 뺀 숫자를 dictionary 에서 찾으면 끝

*/
const twoSum = function (nums, target) {
  const dictionry = {};

  nums.forEach((number, index) => {
    dictionry[number] = index;
  });

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (dictionry[complement] && dictionry[complement] !== i) {
      return [i, dictionry[complement]];
    }
  }
};

module.exports = twoSum;
