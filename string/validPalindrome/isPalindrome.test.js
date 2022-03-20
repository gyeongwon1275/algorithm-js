const isPalindrome = require("./isPalindrome");

/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

비 알파벳을 제외하고 앞으로 시작하나 뒤로 시작하나 같은 문자인지 확인한다.
*/

describe("isPalindrome", () => {
  it("문자가 페린드롬인지 확인한다. ", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  it("문자가 페린드롬인지 확인한다. ", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
  it("문자가 페린드롬인지 확인한다. ", () => {
    expect(isPalindrome(" ")).toBe(true);
  });
  it("문자가 페린드롬인지 확인한다. ", () => {
    expect(isPalindrome("0P")).toBe(false);
  });
  it("문자가 페린드롬인지 확인한다. ", () => {
    expect(isPalindrome("ab_a")).toBe(true);
  });
});
