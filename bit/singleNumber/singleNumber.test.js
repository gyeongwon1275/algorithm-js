const singleNumber = require("./singleNumber");

describe("singleNumber", () => {
  it("Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });
});
