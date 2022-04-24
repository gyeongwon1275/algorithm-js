const reorderLogFiles = require("./937. Reorder Data in Log Files");

describe("937. Reorder Data in Log Files", () => {
  it("ex 1", () => {
    expect(
      reorderLogFiles([
        "dig1 8 1 5 1",
        "let1 art can",
        "dig2 3 6",
        "let2 own kit dig",
        "let3 art zero",
      ])
    ).toEqual([
      "let1 art can",
      "let3 art zero",
      "let2 own kit dig",
      "dig1 8 1 5 1",
      "dig2 3 6",
    ]);
  });

  it("ex 2", () => {
    expect(
      reorderLogFiles([
        "a1 9 2 3 1",
        "g1 act car",
        "zo4 4 7",
        "ab1 off key dog",
        "a8 act zoo",
      ])
    ).toEqual([
      "g1 act car",
      "a8 act zoo",
      "ab1 off key dog",
      "a1 9 2 3 1",
      "zo4 4 7",
    ]);
  });

  it("ex 3", () => {
    expect(
      reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"])
    ).toEqual(["5 m w", "j mo", "t q h", "g 07", "o 2 0"]);
  });

  it("ex 4", () => {
    expect(
      reorderLogFiles([
        "dig1 8 1 5 1",
        "let1 art can",
        "dig2 3 6",
        "let2 own kit dig",
        "let3 art zero",
      ])
    ).toEqual([
      "let1 art can",
      "let3 art zero",
      "let2 own kit dig",
      "dig1 8 1 5 1",
      "dig2 3 6",
    ]);
  });
});
