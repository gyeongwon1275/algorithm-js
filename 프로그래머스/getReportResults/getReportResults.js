/* 
신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.
*/

function solution(id_list, report, k) {
  const result = new Array(id_list.length);

  /* 
    
    각 유저별 이메일을 받은 횟수를 구하라

    이메일을 받은 횟수를 구하려면 ?? 

    유저(victim)가 신고한 유저(suspect) 가 특정횟수(k) 이상 신고받았으면 
    
    유저(victim) 은 이메일을 받는다. 

    신고당한 유저 (suspect) 가 자신을 신고한 유저(victim)들의 정보를 가지고 있으면 

    신고한 유저(victim) 의 갯수를 세는 것으로 이메일을 보낼지 조건을 확인할 수 있음

    
    
    */

  const users = {};

  id_list.forEach((id, index) => {
    users[id] = {
      index,
      victims: [],
      email: 0,
    };
  });

  report.forEach((relation) => {
    const [victim, suspect] = relation.split(" ");

    if (!users[suspect].victims.includes(victim)) {
      users[suspect].victims.push(victim);
    }
  });

  Object.keys(users).forEach((id) => {
    if (users[id].victims.length >= k) {
      users[id].victims.forEach((id) => {
        users[id].email++;
      });
    }
  });

  Object.keys(users).forEach((id) => {
    const { index, email } = users[id];
    result[index] = email;
  });

  return result;
}

module.exports = solution;
