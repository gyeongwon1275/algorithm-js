const solution = require("./[카카오] 숫자 문자열과 영단어");

describe("[카카오] 숫자 문자열과 영단어", () => {
  it("one4seveneight", () => {
    expect(solution("one4seveneight")).toBe(1478);
  });

  it("23four5six7", () => {
    expect(solution("23four5six7")).toBe(234567);
  });

  it('"2three45sixseven"', () => {
    expect(solution("2three45sixseven")).toBe(234567);
  });

  it('"123"', () => {
    expect(solution("123")).toBe(123);
  });
});
