const trap = function (height) {
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
};

module.exports = trap;
