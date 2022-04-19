/* 

s,t 두개의 문자가 주어짐 

최소 window substring 을 반환

t 의 char 를 전부가지는 최소 substring 을 반환

순서는 일치할 필요 없음 


s 에서 t 의 char 를 가지는 부분 문자열이 있는지 검색 

없으면 ""

있으면 있는 것 들 중에서 가장 길이가 작은 문자열을 반환 


char 가 연속해서 위치하지 않을 수 있음

t = "ABC"

AXXXBXXXXXC => 답 

논리적으로 생각해본다면 답의 최소길이는 t의 길이와 같을 것 

즉 t의 길이 이상 s의 길이 이하 로 찾아보고 없으면 빈문자열 반환 


무조건 O(n) 으로 차례대로 검색할 필요는 없음 

왼쪽, 오른쪽에서 각각 검색하면 시간을 반으로 줄일 수 있음 


todo

- t 를 문자열이 가지는 지 확인

- 검색범위를 증가

- 왼쪽, 오른쪽 각각 검색



*/

const minWindow = function (s, t) {
  const findIndex = (text, char) => {
    let left = 0;
    let right = text.length - 1;

    while (left <= right) {
      if (text[left] === char) {
        return left;
      }

      if (text[right] === char) {
        return right;
      }

      left++;
      right--;
    }
    /* 
t 에서의 char 가 substring 에 있는지 확인 없으면 false 

있으면 t 에서 제거, substring 에서 제거
    */

    return -1;
  };
  const hasTargetChar = (substring, t) => {
    const subText = substring.split("");
    let pointer = 0;

    /* 
  
  문자가 중복될 수 도 있다. 

  한번 검색해서 찾은 char 는 검색범위에서 제거한다. 

  */

    while (pointer < t.length) {
      const index = findIndex(subText, t[pointer]);

      if (index === -1) {
        return false;
      }

      subText[index] = null;

      pointer++;
    }

    return true;
  };

  let searchRange = t.length;

  while (searchRange <= s.length) {
    let left = 0;

    let right = s.length;

    while (left <= right) {
      const leftSubstring = s.slice(left, left + searchRange);

      if (hasTargetChar(leftSubstring, t)) {
        return leftSubstring;
      }

      const rightSubstring = s.slice(right - searchRange, right);
      if (hasTargetChar(rightSubstring, t)) {
        return rightSubstring;
      }

      left++;
      right--;
    }

    searchRange++;
  }

  return "";
};

module.exports = minWindow;
