const newIDRecommendation = require("./newIDRecommendation");

describe("신규 ID 추천", () => {
  it("...!@BaT#*..y.abcdefghijklm =>bat.y.abcdefghi", () => {
    expect(newIDRecommendation("...!@BaT#*..y.abcdefghijklm")).toBe(
      "bat.y.abcdefghi"
    );
  });

  it('"z-+.^." =>"z--"', () => {
    expect(newIDRecommendation("z-+.^.")).toBe("z--");
  });

  it("=.= =>aaa", () => {
    expect(newIDRecommendation("=.=")).toBe("aaa");
  });

  it("123_.def =>123_.def", () => {
    expect(newIDRecommendation("123_.def")).toBe("123_.def");
  });

  it("abcdefghijklmn.p =>abcdefghijklmn", () => {
    expect(newIDRecommendation("abcdefghijklmn.p")).toBe("abcdefghijklmn");
  });
});
