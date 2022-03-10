const insertSort = (array) => {
  for (let i = 0; i < array.length; ++i) {
    let pointer = i;

    while (pointer > 0 && array[pointer] < array[pointer - 1]) {
      const temp = array[pointer];
      array[pointer] = array[pointer - 1];
      array[pointer - 1] = temp;
      pointer--;
    }
  }

  return array;
};

module.exports = {
  insertSort,
};
