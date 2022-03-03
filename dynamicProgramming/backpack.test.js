const { getMaxPriceInbackpack } = require("./backpack");

describe("backpack", () => {
  it("가방에 넣을 수 있는 물품들의 합의 최대값을 반환합니다.", () => {
    const items = [
      { price: 5, space: 5 },
      { price: 2, space: 4 },
      { price: 6, space: 11 },
    ];

    expect(getMaxPriceInbackpack(items, 15)).toBe(8);
  });
});
