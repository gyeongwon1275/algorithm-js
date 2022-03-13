const quickSortRecursive = (left, right, array) => {
  if (left >= right) {
    return;
  }

  let tempRightPointer = right;

  for (let i = right; i > left; --i) {
    if (array[i] > array[left]) {
      const temp = array[i];
      array[i] = array[tempRightPointer];
      array[tempRightPointer] = temp;
      tempRightPointer--;
    }
  }

  let tempLeftValue = array[left];
  array[left] = array[tempRightPointer];
  array[tempRightPointer] = tempLeftValue;

  quickSortRecursive(left, tempRightPointer - 1, array);
  quickSortRecursive(tempRightPointer + 1, right, array);
};

const quickSort = (array) => {
  return quickSortRecursive(0, array.length - 1, array);
};

/* 

pivot 이 right 버젼
const quickSortRecursive = (array, left = 0, pivot = array.length - 1) => {
  if (left >= pivot) {
    return;
  }

  let leftTemp = left;

  for (let current = left; current < pivot; current++) {
    if (array[current] <= array[pivot]) {
      const temp = array[current];
      array[current] = array[leftTemp];
      array[leftTemp] = temp;
      leftTemp++;
    }
  }

  const temp = array[leftTemp];
  array[leftTemp] = array[pivot];
  array[pivot] = temp;

  quickSortRecursive(array, left, leftTemp - 1);
  quickSortRecursive(array, leftTemp + 1, pivot);
};

const quickSort = (array) => {
  return quickSortRecursive(array, 0, array.length - 1);
};
*/

module.exports = {
  quickSort,
};
