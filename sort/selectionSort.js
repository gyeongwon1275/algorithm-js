const selectionSort = (array) => {
  for (let i = 0; i < array.length; ++i) {
    for (let j = i; j < array.length - 1; ++j) {
      // 만약 현재 최소값 보다 작은 값을 찾으면
      if (array[i] > array[j + 1]) {
        // 현재 최소값 위치와 새로 찾은 최소값의 위치를 바꾼다.
        let temp = array[j + 1];

        array[j + 1] = array[i];

        array[i] = temp;
      }

      console.log(`in result=${array}`);
    }
    console.log(`out result=${array}`);
  }
  return array;
};

module.exports = {
  selectionSort,
};
