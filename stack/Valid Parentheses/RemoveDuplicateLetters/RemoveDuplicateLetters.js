/* 
중복 없는 char 를 조합해서 사전순으로 앞에 위치하는 문자를 조합하기

일단 전체 문자열에서 중복 없이 char 들을 뽑아야 함 

set 을 활용하면 됨 

이후 사전순으로 앞에 위치할 수 있는 문자를 조합해야 함 

char 를 정렬한 후

char 를 하나하나 넣어가면서 가능한 char 인지 확인하면 됨 

정렬된 char 를 넣어가면서 문자열 조합이 가능하다고 확인된 char 는 

위치가 확정이 됬기 때문에 빼고 나머지 char 만 계속해서 위치를 확정시켜 나가면 끝 


*/

/* const removeDuplicateLetters = function (s) {
  const set = [...new Set(s)].sort();

  for (let i = 0; i < set.length; i++) {
    const index = s.split("").findIndex((char) => char === set[i]);

    const partialArr = s.slice(index);

    if ([...new Set(partialArr)].sort().join("") === set.join("")) {
      return (
        set[i] +
        removeDuplicateLetters(partialArr.replace(new RegExp(set[i], "g"), ""))
      );
    }
  }

  return "";
}; */

/* 
stack 에 중복없이 사전순으로 빠른 char 를 넣어놓고 마지막에 join 해서 반환 

중복없이 넣으려면 현재 stack 에서 지금 넣으려고 하는 char 가 있는지, 없는지만 확인

사전순으로 빠른 걸 넣으려면 현재 stack 에 있는 모든 요소가 넣으려고 하는 char 보다 아스키 코드가 크면

전부 빼내고 char 를 넣는다. 

현재 stack 에 들어가 있는 요소들의 여유분이 없을경우 못빼고 그냥 stack 위에 넣어야 한다.
*/
const removeDuplicateLetters = function (s) {
  const counter = {};

  s.split("").forEach((char) => {
    counter[char] = counter[char] ? counter[char] + 1 : 1;
  });

  const stack = [];

  for (const char of s) {
    counter[char] = counter[char] ? counter[char] - 1 : 0;

    if (stack.includes(char)) {
      continue;
    }

    while (
      stack.length &&
      stack[stack.length - 1] > char &&
      counter[stack[stack.length - 1]] > 0
    ) {
      stack.pop();
    }

    stack.push(char);
  }

  return stack.join("");
};

module.exports = removeDuplicateLetters;
