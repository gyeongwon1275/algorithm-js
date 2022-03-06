const binarySearch = (array, number) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === number) {
      return middle;
    }

    if (array[middle] < number) {
      start = middle + 1;
      continue;
    }

    if (array[middle] > number) {
      end = middle - 1;
      continue;
    }
  }

  return null;
};

module.exports = {
  binarySearch,
};
