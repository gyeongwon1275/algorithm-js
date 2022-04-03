const search = require("./33.SearchInRotatedSortedArray");

describe("33.SearchInRotatedSortedArray", () => {
  it("회전된 정렬된 배열에서 target 의 위치를 찾아라", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(search([4, 5, 6, 7, 0, 1, 2], 8)).toBe(-1);

    expect(search([1], 1)).toBe(0);
    expect(search([1], 0)).toBe(-1);

    expect(search([1, 3], 1)).toBe(0);
    expect(search([1, 3], 5)).toBe(-1);

    expect(search([3, 1], 3)).toBe(0);
    expect(search([3, 1], 5)).toBe(-1);
  });
});
