const merge = require("./56.MergeIntervals");

describe("56.MergeIntervals", () => {
  it("구간이 겹치는 구간을 합칩니다.", () => {
    expect(
      merge([
        [15, 18],
        [8, 10],
        [2, 6],
        [1, 3],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it("구간이 겹치는 구간을 합칩니다.", () => {
    expect(
      merge([
        [1, 4],
        [1, 4],
      ])
    ).toEqual([[1, 4]]);
  });

  it("구간이 겹치는 구간을 합칩니다.", () => {
    expect(
      merge([
        [1, 4],
        [2, 3],
      ])
    ).toEqual([[1, 4]]);
  });

  it("구간이 겹치는 구간을 합칩니다.", () => {
    expect(
      merge([
        [1, 4],
        [0, 2],
        [3, 5],
      ])
    ).toEqual([[0, 5]]);
  });
});
