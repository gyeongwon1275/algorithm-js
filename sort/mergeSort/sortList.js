function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeSortedArray = (left, right) => {
  let leftIndex = 0;
  let rightIndex = 0;

  const result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex < left.length) {
    result.push(...left.slice(leftIndex));
  }

  if (rightIndex < right.length) {
    result.push(...right.slice(rightIndex));
  }

  return result;
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.round(array.length * 0.5);

  const left = mergeSort(array.slice(0, middleIndex));
  const right = mergeSort(array.slice(middleIndex));

  return mergeSortedArray(left, right);
};

var sortList = function (head) {
  if (!head) {
    return head;
  }

  const originArray = [];

  while (head) {
    originArray.push(head.val);
    head = head.next;
  }

  const sortedArray = mergeSort(originArray);

  const result = new ListNode(sortedArray[0], null);

  let temp = result;

  for (let i = 1; i < sortedArray.length; i++) {
    temp.next = new ListNode(sortedArray[i], null);
    temp = temp.next;
  }

  return result;
};

module.exports = { sortList, ListNode };
