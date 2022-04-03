/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const mergeArray = (array1, array2) => {
  let array1Pointer = 0;
  let array2Pointer = 0;

  const result = [];

  while (array1Pointer < array1.length && array2Pointer < array2.length) {
    const [start1, end1] = array1[array1Pointer];
    const [start2, end2] = array2[array2Pointer];

    if (start1 < start2) {
      result.push(array1[array1Pointer]);
      array1Pointer++;
    } else if (start1 === start2) {
      if (end1 <= end2) {
        result.push(array1[array1Pointer]);
        array1Pointer++;
      } else {
        result.push(array2[array2Pointer]);
        array2Pointer++;
      }
    } else {
      result.push(array2[array2Pointer]);
      array2Pointer++;
    }
  }

  if (array1Pointer < array1.length) {
    const leftover = array1.slice(array1Pointer);
    result.push(...leftover);
  }

  if (array2Pointer < array2.length) {
    const leftover = array2.slice(array2Pointer);
    result.push(...leftover);
  }

  return result;
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const pivot = Math.floor(array.length * 0.5);
  const left = mergeSort(array.slice(0, pivot));
  const right = mergeSort(array.slice(pivot));

  return mergeArray(left, right);
};

var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  const sortedIntervals = mergeSort(intervals);

  let pointer = 0;

  while (pointer < sortedIntervals.length - 1) {
    const [start1, end1] = sortedIntervals[pointer];
    const [start2, end2] = sortedIntervals[pointer + 1];

    const start = Math.min(start1, start2);
    const end = Math.max(end1, end2);

    if (end1 >= start2) {
      sortedIntervals[pointer] = null;
      sortedIntervals[pointer + 1] = [start, end];
    }

    pointer++;
  }

  return sortedIntervals.filter((interval) => interval !== null);
};

module.exports = merge;
