/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

*/

const ValidParentheses = require("./ValidParentheses");

describe("ValidParentheses", () => {
  it("괄호가 제대로 닫혀있는지 확인", () => {
    expect(ValidParentheses("()")).toBe(true);
    expect(ValidParentheses(")(")).toBe(false);

    expect(ValidParentheses("{}")).toBe(true);
    expect(ValidParentheses("}{")).toBe(false);

    expect(ValidParentheses("[]")).toBe(true);
    expect(ValidParentheses("][")).toBe(false);

    expect(ValidParentheses("()[]{}")).toBe(true);
    expect(ValidParentheses(")(][}{")).toBe(false);

    expect(ValidParentheses("([{}])")).toBe(true);
    expect(ValidParentheses(")]}{[(")).toBe(false);
  });
});
