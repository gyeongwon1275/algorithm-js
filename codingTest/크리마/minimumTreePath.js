/* 

root 도 없고, 방향도 없는 그래프

node 1 부터 node n 까지 순회

경로는 주어진 visitNodes 를 무조건 통과해야 한다. 


node 1 부터 시작 

node n 에서 끝

인접한 node 끼리만 이동 가능

node 는 재방문 가능함


edges = [[1,2],[1,3],[3,4],[3,5]]

visitNodes = [2,4]

value = 6

1 -> 2 -> 1 -> 3 -> 4 -> 3 -> 5

sort 


2 가 있는거 찾음 1,2 

4 가 있는거 찾어 3,4

3 이 있고, 2 가 있는거 나머지가 있는 node 찾음 1,3





*/

function minimumTreePath(n, edges, visitNodes) {
  // Write your code here
}
