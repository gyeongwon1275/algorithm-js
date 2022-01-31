const { quickSort } = require("../quickSort.js");

describe("quickSort", () => {
  const array = [7, 2, 5, 1, 3, 8, 7, 4, 9, 6];

  it("배열의 숫자를 오름차순으로 변경해야 합니다.", () => {
    quickSort(array);
    expect(array).toEqual([...array].sort());
  });
});
