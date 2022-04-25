/* 


대문자로 된 문자열 받음 

AWS 를 input 문자열에서 제거

근데 한번에 제거가 아니라 반복적으로 제거 해야 함 

input : AWAWSSG / output : G 

AWAWSSG -> AWSG

AWSG -> G


input
ABCDWS


output
ABCDWS


정확하게 AWS 여야 함 


최종 string 이 빈값이면 "-1" 을 을 반환 


*/

function getFinalString(s) {
  while (s.length > 0 && /AWS/g.test(s)) {
    s = s.replace("AWS", "");
  }

  return s || "-1";
}

console.log(1, getFinalString("AWAWSSG"));
console.log(2, getFinalString("ABCDWS"));
console.log(3, getFinalString("AAWSWS"));
console.log(3, getFinalString("AWS"));
console.log(4, getFinalString(""));
