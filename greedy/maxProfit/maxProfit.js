/* 

그리디 알고리듬의 핵심

그 순간 목적을 달성할 수 있는 최적의 방법을 선택

목적 : 이득을 극대화

내가 갖고있는 주식보다 조금이라도 비싸면 바로 팔아서 이득을 취한다. 

미래에 더 비싸게 팔 수 있을 지는 전혀 상관하지 않고 
greedy 하게 현재 순간에 조금이라도 얻을 수 있는 이득이 있으면 
그 방법을 사용한다. 



*/

const maxProfit = function (prices) {
  let profit = 0;

  let stock = null;

  for (let i = 0; i < prices.length; i++) {
    if (stock !== null) {
      profit = profit + (prices[i] - stock);
      stock = null;
    }

    if (stock === null && i < prices.length - 1 && prices[i] < prices[i + 1]) {
      stock = prices[i];
    }
  }

  return profit;
};

module.exports = maxProfit;
