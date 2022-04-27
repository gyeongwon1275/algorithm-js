/* 

Given an integer array nums, 

return all the triplets [nums[i], nums[j], nums[k]] 

such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


nums 중에서 서로 더하면 0이 되는 집합을 반환하라


nums 중에서 x + y + z =0 인 애들을 찾아서 

[-1, -1, 2] [-1, 2, -1] 둘다 넣을 수 없음

n^3 

x + y + z =0 인 것을 찾는데 기존에 찾은 index 면 포함하지 않음

x + k = 0;

특정 element 에 대해서 two sum 을 O(n) 돌리기

한번 확인한 element 에 대해서는 two sum 을 돌리지 않음

[-1,-1,2,1,0,2,-4]

-1 확인하고 이후 -1 에 대해서는 hash map 을 사용해서 중복을 제거할 수 있음 

하지만 2 에서 도 2, -1, -1 의 조합이 있을 수 있음

그렇다고 해서 숫자를 한번만 사용할 수 는 없음, 특정 숫자가 다른 조합에 사용될 수 도 있기 때문 


찾은 조합에 대해서도 요소의 index 를 정렬하고 문자열 key 로 만들어서 hash map 에 저장해두고

0이 되는 조합을 찾았으면 해당 hashmap 에 있는지 확인함 없으면 결과값에 추가


x+y+z = 0 인 것을 찾아서 result 에 push 


너무 오래 걸림...

연산을 어떻게 줄일 수 있을 까 ? 

정렬 ? 

hash table 


삼중반복문은 => 중복이 발생할 수 있음 

한번 0이 되는 것을 확인했으면 별도로 저장해 놓아야 함

한 숫자를 fix 나머지를 two sum 알고리즘으로 돌림

-1 => 확인

-1 [ 0, 1, 2, -1, -4]

0 특정 요소를 제외한 나머지 요소들만 가지고 two sum 진행 

filter 등으로 새로운 배열을 만드는 건 메모리 낭비가 될 수 있음

array 

-1 에서 


주어진 배열에서 세개의 숫자를 더해서 0 이 되는 집합을 반환하라 

중복이 되면 안된다. 

[-1,-1,2] 가 들어갔으면 [2,-1,-1] 이 들어가면 안된다. 

-1,-1,2 가 들어갔다는 것을 어딘가에 저장해놔야 함 

set 을 사용해서 있으면 넣으면 안됨 


*/

/* 
    
    array 1 부터 시작 

    array 에서 두요소의 합이 number 인 배열 반환 

    x fix 

     y = number - x

     한번 방문한 요소는 searched 에 push 



중복은 허용하지 않음 



세 숫자를 합해서 0이 나오는 경우


x + y + z = 0

x + k = 0 => two sum 으로 변환

y + z = k

k = -x 


x 를 뽑고 -x 가 되는 집합을 받아서 조합하면 되지 않을 까? 

숫자는 같을 수 있으나 index 는 같을 수 없으므로 

방문한 index 의 경우 hashmap 에 저장
    
    */

/* const binarySearch = (nums, targetNumber) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === targetNumber) return nums[middle];

    if (nums[middle] > targetNumber) {
      end = middle - 1;
    }

    if (nums[middle] < targetNumber) {
      start = middle + 1;
    }
  }

  return null;
};
const twoSum = (nums, targetNumber) => {
  const result = [];
  const searched = {};

  for (let i = 0; i < nums.length; i++) {
    if (searched[nums[i]]) {
      continue;
    }
    const others = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const other = binarySearch(others, targetNumber - nums[i]);
    if (other !== null) {
      result.push([nums[i], other]);
      searched[nums[i]] = true;
      searched[other] = true;
    }
  }
  return result;
};

const threeSum = (nums) => {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);
  const result = [];

  const searched = {};

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const others = [...nums.slice(0, i), ...nums.slice(i + 1)];

    const searchResult = twoSum(others, nums[i] * -1);

    if (searchResult.length > 0) {
      for (let j = 0; j < searchResult.length; j++) {
        const el = [nums[i], ...searchResult[j]];
        const key = el.sort().join(",");
        if (searched[key]) {
          continue;
        }
        result.push(el);

        searched[key] = true;
      }
    }
  }

  // console.log("result", result);
  return result;
};
 */
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

const threeSum = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return result;
};
module.exports = threeSum;
