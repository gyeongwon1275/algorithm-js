/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const findPivot = (nums) => {
  let beforeValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < beforeValue) {
      return i;
    } else {
      beforeValue = nums[i];
    }
  }

  return -1;
};

const binarySearch = ({ nums, target, start, end }) => {
  while (start <= end) {
    const middle = Math.floor((start + end) * 0.5);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] <= target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};

const search = function (nums, target) {
  if (nums.length < 1) {
    return -1;
  }

  /*

pivot 을 찾는다. 
pivot 기준으로 각각 이진탐색을 진행한다. 

왼쪽, 오른쪽 전부 없으면 -1 반환 

있으면 있는 쪽 반환 


오름차순으로 정렬되어 있었는데, 회전시킨 것

갑자기 작아지는 부분 => pivot
*/
  const pivotIndex = findPivot(nums);

  if (pivotIndex === -1) {
    return binarySearch({ nums, target, start: 0, end: nums.length - 1 });
  }

  const leftResult = binarySearch({
    nums,
    target,
    start: 0,
    end: pivotIndex - 1,
  });
  const rightResult = binarySearch({
    nums,
    target,
    start: pivotIndex,
    end: nums.length - 1,
  });

  if (leftResult !== -1) {
    return leftResult;
  }

  if (rightResult !== -1) {
    return rightResult;
  }

  return -1;
};

module.exports = search;
