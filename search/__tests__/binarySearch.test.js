const { binarySearch } = require("../binarySearch.js");

describe("binarySearch", () => {
  const array = new Array(100);

  for (let i = 0; i < array.length; ++i) {
    array[i] = i + 1;
  }

  it("찾고자하는 숫자가 위치한 index 를 반환합니다.", () => {
    expect(binarySearch(array, 120)).toEqual(null);
    expect(binarySearch(array, 78)).toEqual(77);
  });
});
