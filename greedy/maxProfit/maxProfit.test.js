const maxProfit = require("./maxProfit");

/* 
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
*/
describe("maxProfit", () => {
  describe("주식거래로 얻을 수 있는 최대 이익을 반환합니다.", () => {
    it("[7, 1, 5, 3, 6, 4]", () => {
      expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
    });

    it("[1,2,3,4,5]", () => {
      expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    });

    it("[2,1,2,0,1]", () => {
      expect(maxProfit([2, 1, 2, 0, 1])).toBe(2);
    });

    it("[5,4,3,2,1]", () => {
      expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
    });
  });
});
