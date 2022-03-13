const mergeArray = (left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;

  let mergedArray = [];

  while (leftIndex !== left.length && rightIndex !== right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] > right[rightIndex]) {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex !== left.length) {
    mergedArray.push(...left.slice(leftIndex));
  } else if (rightIndex !== right.length) {
    mergedArray.push(...right.slice(rightIndex));
  }

  return mergedArray;
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.round(array.length / 2);

  const left = mergeSort(array.slice(0, middleIndex));
  const right = mergeSort(array.slice(middleIndex));

  return mergeArray(left, right);
};

module.exports = {
  mergeSort,
};
