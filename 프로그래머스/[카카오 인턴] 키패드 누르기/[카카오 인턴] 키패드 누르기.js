/* 

각 숫자별 어떤 손으로 누르면 되는지 확인해서 반환 

1,4,7 => 무조건 왼
3,6,9 => 무조건 오

2,5,8,0 => 현재 가장 가까운 손가락 

위치가 동일하다면 평소 사용하는 손가락 

stack 

numbers number 를 순회하면서 어떤 손가락 으로 누를건지 판단하고 
현재 손가락의 위치도 update 해야 함 

2,5,8,0 위치를 어떻게 확인할건지?? 


행렬 

미리 행렬에 넣어놨다가 필요할때마다 계산하면 됨 

hashtable




*/

function solution(numbers, hand) {
  const keypad = {
    1: "10",
    2: "11",
    3: "12",
    4: "20",
    5: "21",
    6: "22",
    7: "30",
    8: "31",
    9: "32",
    0: "41",
  };

  let leftThumbPosition = "40";
  let rightThumbPosition = "42";
  const leftKeys = [1, 4, 7];
  const rightKeys = [3, 6, 9];

  let answer = "";

  numbers.forEach((number) => {
    if (leftKeys.includes(number)) {
      answer += "L";
      leftThumbPosition = keypad[number];
    } else if (rightKeys.includes(number)) {
      answer += "R";
      rightThumbPosition = keypad[number];
    } else {
      /* 

거리 비교

행 + 열 
*/

      const leftDistance =
        Math.abs(Number(leftThumbPosition[0]) - Number(keypad[number][0])) +
        Math.abs(Number(leftThumbPosition[1]) - Number(keypad[number][1]));
      const rightDistance =
        Math.abs(Number(rightThumbPosition[0]) - Number(keypad[number][0])) +
        Math.abs(Number(rightThumbPosition[1]) - Number(keypad[number][1]));

      if (leftDistance === rightDistance) {
        answer += hand === "left" ? "L" : "R";

        leftThumbPosition =
          hand === "left" ? keypad[number] : leftThumbPosition;
        rightThumbPosition =
          hand === "right" ? keypad[number] : rightThumbPosition;
      } else if (leftDistance < rightDistance) {
        answer += "L";
        leftThumbPosition = keypad[number];
      } else {
        answer += "R";
        rightThumbPosition = keypad[number];
      }
    }
  });

  return answer;
}

module.exports = solution;
