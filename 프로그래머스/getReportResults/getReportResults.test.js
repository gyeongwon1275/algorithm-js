/* 
신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.
*/

const solution = require("./getReportResults");

describe("getReportResults", () => {
  it("1", () => {
    const id_list = ["muzi", "frodo", "apeach", "neo"];
    const report = [
      "muzi frodo",
      "apeach frodo",
      "frodo neo",
      "muzi neo",
      "apeach muzi",
    ];

    expect(solution(id_list, report, 2)).toEqual([2, 1, 1, 0]);
  });

  it("2", () => {
    const id_list = ["con", "ryan"];
    const report = ["ryan con", "ryan con", "ryan con", "ryan con"];

    expect(solution(id_list, report, 2)).toEqual([0, 0]);
  });
});
