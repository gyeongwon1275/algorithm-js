const removeDuplicateLetters = require("./RemoveDuplicateLetters");

describe("RemoveDuplicateLetters", () => {
  it("중복된 문자를 제거하여 반환합니다.", () => {
    expect(removeDuplicateLetters("bcabc")).toBe("abc");

    expect(removeDuplicateLetters("cbacdcbc")).toBe("acdb");

    expect(removeDuplicateLetters("ecbacba")).toBe("eacb");

    expect(removeDuplicateLetters("ecbacbaeb")).toBe("acbe");
  });
});
