const selectionSort = (array) => {
  /* 
  
  전체 배열에서 최소값을 찾아서 앞으로 보냄 
  최소값 찾아서 앞으로 보낼 때 마다 요소 한개 정렬 완료
  요소 한개 정렬 완료할 때 마다 최소값을 찾는 범위는 한개씩 줄어듦

  */

  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (min >= array[j]) {
        min = array[j];
        array[j] = array[i];
        array[i] = min;
      }
    }
  }
  return array;
};
module.exports = {
  selectionSort,
};
