const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    // 인접한 요소끼리 비교하고 자리바꾸기
    // 마지막 요소 전까지 pointer 로 잡고 마지막 요소와 비교하면 됨 ( array.length -1)
    // 바깥 반복문 한번 돌때 마다 요소 한개씩 정렬이 완료되어 안쪽 반복문에서 한개 씩 빼주면 됨 ( array.length -1 - i)
    //
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

module.exports = {
  bubbleSort,
};
