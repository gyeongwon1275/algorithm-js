const solution = require("./[카카오 인턴] 키패드 누르기");

describe("[카카오 인턴] 키패드 누르기", () => {
  it('[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right" LRLLLRLLRRL', () => {
    expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")).toBe(
      "LRLLLRLLRRL"
    );
  });

  it('[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left" LRLLRRLLLRR', () => {
    expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")).toBe(
      "LRLLRRLLLRR"
    );
  });

  it('[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right" LLRLLRLLRL', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")).toBe(
      "LLRLLRLLRL"
    );
  });
});
