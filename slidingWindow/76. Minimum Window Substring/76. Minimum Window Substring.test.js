const minWindow = require("./76. Minimum Window Substring");

/* 
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.
*/
describe("76. Minimum Window Substring", () => {
  it('The minimum window substring "BANC" includes "A", "B", and "C" from string t.', () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
  });

  it("s = bbaa t= aba output = baa", () => {
    expect(minWindow("bbaa", "aba")).toBe("baa");
  });

  it("s = bbaac t= aba output = baa", () => {
    expect(minWindow("bbaac", "aba")).toBe("baa");
  });
});
