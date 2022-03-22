/* const trap = function (height) {
  let leftMaxHeight = height[0];

  let trappedWater = 0;

  for (let i = 1; i < height.length; i++) {
    let rightMaxHeight = height[i];
    if (height[i] > leftMaxHeight) {
      leftMaxHeight = height[i];
    }

    for (let j = i; j < height.length; j++) {
      if (height[j] > rightMaxHeight) {
        rightMaxHeight = height[j];
      }
    }

    if (leftMaxHeight > height[i] && rightMaxHeight > height[i]) {
      trappedWater =
        trappedWater + (Math.min(rightMaxHeight, leftMaxHeight) - height[i]);
    }
  }

  return trappedWater;
}; */

/* 

TWO Pointer
최대높이에 도달하기 전까지 과거 지나왔던 높이의 최대값 - 현재높이 만큼 
부피에 추가하면 됨 

과거 지나왔던 높이의 최대값 - 현재높이 만큼 
부피에 추가하는 과정을 왼쪽, 오른쪽 각각 최대값에 도달하기 전까지 하면 됨 

*/

const trap = function (height) {
  let leftPosition = 0;
  let rightPosition = height.length - 1;

  let leftMax = height[leftPosition];
  let rightMax = height[rightPosition];

  let trappedWater = 0;

  while (leftPosition < rightPosition) {
    leftMax = Math.max(leftMax, height[leftPosition]);
    rightMax = Math.max(rightMax, height[rightPosition]);

    if (leftMax <= rightMax) {
      trappedWater = trappedWater + leftMax - height[leftPosition];

      leftPosition++;
    } else {
      trappedWater = trappedWater + rightMax - height[rightPosition];

      rightPosition--;
    }
  }

  return trappedWater;
};

module.exports = trap;
