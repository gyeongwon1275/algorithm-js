const binarySearch = (array, number) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor(start, end);

    if (array[middle] < number) {
      start = middle + 1;
    } else if (array[middle] === number) {
      return middle;
    } else {
      end = middle - 1;
    }
  }

  return null;
};

module.exports = {
  binarySearch,
};
