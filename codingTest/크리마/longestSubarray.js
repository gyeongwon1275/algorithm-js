/* 

array [1,2,3]

부분집합 [1] ,[2],[3] ,[1,2] [1,3] [2,3] [1,2,3] 공집합은 없다. 

k 는 정수

더했을 때 k 이하인데 길이가 가징 긴 부분집합을 반환 

two pointer 써도 됨 


a 에서 더한다음 k 랑 비교 길이가 길면은 결과값 변경

없으면 ? 

정수가 없는애들로 filter 

메모리 안잡아 먹는? 


*/

function maxLength(a, k) {
  const sum = (numbers) => numbers.reduce((acc, cur) => acc + cur);

  let max = 0;
  const subsets = [[]];

  for (const number of a) {
    const limit = subsets.length || 1;

    for (let i = 0; i < limit; i++) {
      const arr = [...subsets[i], number];
      const sumResult = sum(arr);
      if (sumResult !== k) {
        continue;
      }

      if (sumResult === k) {
        max = Math.max(max, arr.length);
      }
    }
  }

  return max;
}

// console.log("sum", sum([1, 2, 3])); // 6

// console.log(1, "maxLength", maxLength([3, 1, 2, 3], 4));

// console.log("[...new Set(a)];", [...new Set([3, 1, 2, 3])]);
// console.log("getSubSet", getSubSet([1, 2, 3]));

// 부분집합 중에 요소들을 더해서 22337 가 되는 부분집합의 길이 중 최대값

// 부분집합을 전부 구하지 말고
// 합만 구하면 되지 않나?
// 부분집합 구할 때 합 계산 하고 아니면 버림

const test = [
  74, 659, 931, 273, 545, 879, 924, 710, 441, 166, 493, 43, 988, 504, 328, 730,
  841, 613, 304, 170, 710, 158, 561, 934, 100, 279, 817, 336, 98, 827, 513, 268,
  811, 634, 980, 150, 580, 822, 968, 673, 394, 337, 486, 746, 229, 92, 195, 358,
  2, 154, 709, 945, 669, 491, 125, 197, 531, 904, 723, 667, 550,
];

// 부분 문자열 만들다가 너무 많아서 메모리 터짐

console.log(1, "maxLength", maxLength([1, 2, 3], 4));
console.log(2, "maxLength", maxLength([3, 1, 2, 1], 4));
// console.log(3, "maxLength", maxLength(test, 22337));
// console.log("test", test.length, Math.pow(2, 61));
