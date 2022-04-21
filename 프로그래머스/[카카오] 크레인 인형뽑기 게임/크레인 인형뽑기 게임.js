function solution(board, moves) {
  let count = 0;
  const stack = [];

  /* 
    

    moves 배열을 돌면서 stack 에 인형을 넣음 
    
    신규로 뽑은 인형과 stack 최 상단의 인형과 같으면 count ++

    count 반환 


    moves 는 열 이동 

    인형 뽑을 때 마다 가장 위의 행에서 숫자를 stack 에 넣고 

    board 의 해당 위치에는 0 으로 표시함 
    */

  moves.forEach((column) => {
    for (let row = 0; row < board.length; row++) {
      const doll = board[row][column - 1];

      if (!doll) continue;
      if (doll) {
        board[row][column - 1] = 0;
        if (stack[stack.length - 1] === doll) {
          count += 2;

          stack.pop();
        } else {
          stack.push(doll);
        }

        break;
      }
    }
  });

  return count;
}

module.exports = solution;
