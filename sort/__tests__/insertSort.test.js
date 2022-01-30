const { insertSort } = require("../insertSort.js");

describe("insertSort", () => {
  it("배열의 숫자를 오름차순으로 변경해야 합니다.", () => {
    expect(insertSort([5, 3, 1, 3, 4, 6, 2])).toEqual([1, 2, 3, 3, 4, 5, 6]);
  });
});
