/* 

*/

const textCounter = (text) => {
  const result = {};

  for (const char of text) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
};
const minWindow = function (s, t) {
  const map = textCounter(t);

  let count = t.length;
  let min = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let left = 0;
  let right = 0;

  if (!s.length || !t.length) return "";

  while (right < s.length) {
    if (map[s[right]] !== undefined) {
      if (map[s[right]] > 0) {
        count--;
      }
      map[s[right]]--;
    }

    right++;

    while (count === 0) {
      // 최소값 update
      if (right - left < min) {
        min = right - left;
        start = left;
      }

      if (map[s[left]] !== undefined) {
        /* 
        
        t 의 char 전부 포함할 때 까지 right pointer 이동함 

        t 의 char 전부 포함한 상태를 유지시키면서 left pointer 이동

        중복으로 count 되서 char 의 count 가 음수가 된 경우 

        딱 갯수가 0이 될 때까지만 left pointer 이동하도록 함 

        count 가 0이 아니게 되면 반복문을 빠져나가도록 
        */
        if (map[s[left]] === 0) count++;
        map[s[left]]++;
      }

      left++;
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? "" : s.slice(start, start + min);
};

module.exports = minWindow;
