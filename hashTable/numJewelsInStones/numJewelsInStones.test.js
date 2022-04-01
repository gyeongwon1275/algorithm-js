const numJewelsInStones = require("./numJewelsInStones");

describe("numJewelsInStones", () => {
  it("jewels 에 있는 char 가 몇개있는지 센다.", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
    expect(numJewelsInStones("z", "ZZ")).toBe(0);
  });
});
