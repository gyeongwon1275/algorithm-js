const { mergeSort } = require("./mergeSort.js");

describe("mergeSort", () => {
  it("배열의 숫자를 오름차순으로 변경해야 합니다.", () => {
    expect(mergeSort([5, 3, 1, 3, 4, 6, 2])).toEqual(
      [5, 3, 1, 3, 4, 6, 2].sort()
    );
  });
});
