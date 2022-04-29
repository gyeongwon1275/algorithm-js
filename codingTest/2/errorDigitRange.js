/* 


숫자 변환



input 11891

1과 관련된 bug 발생 99899

원래 9 는 영향 없음 1만 9로 잘못 변환됨 

1 이 0-9 로 잘못 변환될 수 있음 

뭐가 잘못 변환될지 알지 못하는 상태 

최소값, 최대값을 찾아서 

최대값 - 최소값을 반환해라


가정 > 
0으로 시작하는 숫자는 없다. 



error 가 발생하는 숫자는 1개 

해당 숫자는 0-9 로 변환 가능 

10018 -> 1에서 error -> 90098 ( max)

10018 -> 8에서 error -> 10010 (min)

답 : 90098 - 10010


첫번째 자리는 0이 될 수 없음 

즉 무조건 최소값을 000000 으로 못한다는 뜻 


최대값을 찾고 

- 앞자리가 최대여야 최대값이 될 수 있음 

최소값을 찾아야 함 

- 앞자리가 최소여야 최소값이 될 수 있음



ex > 91198

최대값 구하기

앞자리가 1

앞자리가 9

최대값을 구하려고 할 때 앞자리가 9이면 변경할 필요 없음 

다음 값을 변경하면 됨 

최대값을 구하려고 할 때 앞자리가 1이면 무조건 9로 변경해야 함 

두번째 자리부터는 0 도 9로 변환해야 함 

num 을 왼쪽 -> 오른쪽 돌면서

첫번째 자리 확인함 -> 9가 아니면 해당 숫자에서 error 발생했다고 판단하고 해당 숫자 전부를 9로 변경함 

두번째~ 끝 확인함 -> 9가 아니면 해당 숫자에서 error 발생했다고 판단하고 해당 숫자 전부를 9로 변경함 


최소값 구하기 

num 을 왼쪽 -> 오른쪽 돌면서

첫번째 자리 확인함 -> 1이 아니면 해당 숫자에서 error 발생했다고 판단하고 해당 숫자 전부를 1로 변경함 

두번째~ 끝 확인함 -> 1이 아니면 해당 숫자에서 error 발생했다고 판단하고 해당 숫자 전부를 0로 변경함 


*/

/* 
    첫번째 자리의 최소값은 1

첫번째 자리가 1이 아니면 1로 만든다. 

    두번째 부터는 0

     두번째 부터 0이 아니면 0으로 만든다. 

     첫번째 자리가 0이 되면 안되니 

     첫번째 자리와 같은 숫자면 error 발생 후보군에서 탈락 시킴
    */

/* 
전부 1일 경우? 

최소값은 1111111 

88888

*/

function findRange(num) {
  const findMax = (num) => {
    let max = String(num);

    const pivotNumber = max.split("").find((number) => number !== "9");

    if (!pivotNumber) return parseInt(max, 10);

    max = max.replace(new RegExp(pivotNumber, "g"), "9");

    return parseInt(max, 10);
  };

  const findMin = (num) => {
    let min = String(num);

    const firstNumber = min[0];

    if (firstNumber !== "1") {
      min = min.replace(new RegExp(firstNumber, "g"), "1");

      return parseInt(min, 10);
    }

    const pivotNumber = min
      .slice(1)
      .split("")
      .find((number) => number !== "0" && number !== firstNumber);

    if (!pivotNumber) {
      return parseInt(min, 10);
    }

    min = min.replace(new RegExp(pivotNumber, "g"), "0");

    return parseInt(min, 10);
  };

  return findMax(num) - findMin(num);
}

/* console.log(1, "findMax", findMax(10018));
console.log(2, "findMax", findMax(11111));
console.log(3, "findMax", findMax(199999));

console.log(1, "findMin", findMin(10018));
console.log(2, "findMin", findMin(11111));
console.log(3, "findMin", findMin(10000));
console.log(4, "findMin", findMin(199999));
console.log(5, "findMin", findMin(888888));
console.log(6, "findMin", findMin(1222222));
console.log(7, "findMin", findMin(10101010));
console.log(8, "findMin", findMin(1019781010)); */

console.log(1, "findRange", findRange(10018)); // 80088
console.log(2, "findRange", findRange(111)); // 888
console.log(3, "findRange", findRange(909)); // 898
console.log(4, "findRange", findRange(123512)); // 820082
