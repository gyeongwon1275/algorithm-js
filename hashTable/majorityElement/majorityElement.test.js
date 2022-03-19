const majorityElement = require("./majorityElement");

describe("majorityElement", () => {
  it("배열에서 과반을 차지하는 수를 반환합니다.", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });
});
