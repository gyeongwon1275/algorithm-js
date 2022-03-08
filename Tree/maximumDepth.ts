function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

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

module.exports = { TreeNode, maxDepth };
