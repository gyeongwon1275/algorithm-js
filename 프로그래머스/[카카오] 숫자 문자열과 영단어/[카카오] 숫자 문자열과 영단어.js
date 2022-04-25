// function solution(s) {
//   /*

//     문자로 된 숫자를 10진법 숫자로 변경해라

//     */

//   const numbers = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   const isEnglish = (s) => /[a-zA-Z]/.test(s);

//   /*;
//     원래 문자열에서 숫자가 영어로 표현된 것을 찾아서 변경함

//     - 단어를 확인

//     - 전체 문자열에서 단어를 분리
//     - 단어의 의미단위로 분리 가능?

//     one,4,seven,eight => 1,4,7,8

//     char 하나하나 확인하면서 numbers 에 속하는 문자가 되면 변경

//     영문자면 모으고, 아니면 모으지 않음

//     변경되면 초기화

//     - 해당 문자를 숫자로 변경
//     */

//   let word = "";

//   let result = "";

//   for (let i = 0; i < s.length; i++) {
//     if (isEnglish(s[i])) {
//       word += s[i];

//       if (numbers[word]) {
//         result += numbers[word];

//         word = "";
//       }
//     } else {
//       result += s[i];
//     }
//   }
//   return parseInt(result, 10);
// }

/* 

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
*/

function solution(s) {
  const charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (const [word, number] of Object.entries(charSet)) {
    s = s.replace(new RegExp(word, "ig"), number);
  }
  return parseInt(s, 10);
}

module.exports = solution;
