/* 
TOP- DOWN 방식
*/

/* function maxDepth(root) {
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

const getDiameter = (root) => {
  if (!root) {
    return 0;
  }

  let diameter = 0;

  if (root.left) {
    diameter += maxDepth(root.left);
  }

  if (root.right) {
    diameter += maxDepth(root.right);
  }

  return diameter;
};

const diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const stack = [root];
  // DFS
  while (stack.length) {
    const tree = stack.pop();

    if (tree.left) {
      stack.push(tree.left);
    }

    if (tree.right) {
      stack.push(tree.right);
    }

    maxDiameter = Math.max(maxDiameter, getDiameter(tree));
  }

  return maxDiameter;
}; */

/* 
Bottom-Up 방식
*/

const diameterOfBinaryTree = (root) => {
  if (!root) {
    return 0;
  }

  let maxDiameter = 0;

  const dfs = (root) => {
    // 자식이 있으면 거리가 1 인데
    // 0으로 초기화를 시켜버리면 계속 0이 되버림
    if (!root) return -1;

    const left = dfs(root.left);
    const right = dfs(root.right);

    maxDiameter = Math.max(maxDiameter, left + right + 2);
    // 자식이 있으면 거리 증가시키기 위해 +1 해줌

    // 자식에서 부모로 올라갈 때 마다 +1 해줌
    return Math.max(left, right) + 1;
  };

  dfs(root);

  return maxDiameter;
};

module.exports = diameterOfBinaryTree;
