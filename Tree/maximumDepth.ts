/* 

using DFS

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  const stack = [[1, root]];

  let maxDepth = 1;

  while (stack.length) {
    const [depth, currentTree] = stack.pop();

    const newDepth = depth + 1;

    if (currentTree.left || currentTree.right) {
      maxDepth = Math.max(newDepth, maxDepth);
    }

    if (currentTree.left) {
      stack.push([newDepth, currentTree.left]);
    }

    if (currentTree.right) {
      stack.push([newDepth, currentTree.right]);
    }
  }

  return maxDepth;
} */

// using BFS

/* 

각 depth 마다 반복문을 별도로 가져갈 수 있으면 
depth 가 바뀔 때마다 depth 를 1씩 증가시키고 
최종 depth 를 반환하면 됨 

전체 depth 를 관리하는 반복문 안에 
자식 node 를 queue 에 넣는 반복문을 둠 

queue 길이를 미리 받아놓고 queue 길이만큼 
자식 node 를 넣음 

*/
function maxDepth(root) {
  if (!root) {
    return 0;
  }

  const queue = [root];

  let depth = 0;

  while (queue.length) {
    depth += 1;

    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const curRoot = queue.shift();

      if (curRoot.left) {
        queue.push(curRoot.left);
      }

      if (curRoot.right) {
        queue.push(curRoot.right);
      }
    }
  }

  return depth;
}

module.exports = maxDepth;
