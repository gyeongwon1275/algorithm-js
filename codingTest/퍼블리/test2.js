function solution(price) {
  const profitDayList = new Array(price.length);

  for (let buyDay = 0; buyDay < price.length; buyDay++) {
    for (let sellDay = buyDay + 1; sellDay < price.length; sellDay++) {
      if (price[buyDay] < price[sellDay]) {
        profitDayList[buyDay] = sellDay - buyDay;
        break;
      }
    }

    if (!profitDayList[buyDay]) {
      profitDayList[buyDay] = -1;
    }
  }

  return profitDayList;
}
/* 

주식을 구매한 후 차익을 얻기까지 날짜별로 최소 며칠씩 기다려야 하는지 알고 싶음? 


차익을 얻기까지의 최소 기간? 


price 배열의 index 는 날짜



오늘 샀어 
오늘보다 비싼 날 찾어 

비싼날 - 오늘 
*/

const price = [13, 7, 3, 7, 5, 16, 12];
const result = [5, 4, 1, 2, 1, -1, -1];

console.log(solution(price)); // [5,4,1,2,1,-1,-1]
