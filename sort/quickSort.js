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

module.exports = {
  quickSort,
};
