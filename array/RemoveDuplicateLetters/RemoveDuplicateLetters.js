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

const removeDuplicateLetters = function (s) {
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
};

module.exports = removeDuplicateLetters;
