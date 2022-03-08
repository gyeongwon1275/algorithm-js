function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

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
}

module.exports = { TreeNode, maxDepth };
