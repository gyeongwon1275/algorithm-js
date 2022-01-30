const { bubbleSort } = require("../bubbleSort.js");

describe("bubbleSort", () => {
  it("배열의 숫자를 오름차순으로 변경해야 합니다.", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
