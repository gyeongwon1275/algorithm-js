const { TreeNode, maxDepth } = require("./maximumDepth");

/* 
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/
describe("maximum depth", () => {
  it("이진 트리의 최대 깊이를 반환합니다.", () => {
    const tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    tree.right.left = new TreeNode(15);
    tree.right.right = new TreeNode(7);

    expect(maxDepth(tree)).toBe(3);
  });

  it("이진 트리의 최대 깊이를 반환합니다.", () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(null);
    tree.right = new TreeNode(2);

    expect(maxDepth(tree)).toBe(2);
  });

  it("이진 트리의 최대 깊이를 반환합니다.", () => {
    const tree = new TreeNode(0);

    tree.left = new TreeNode(2);
    tree.right = new TreeNode(4);

    tree.left.left = new TreeNode(1);
    tree.left.right = new TreeNode(null);

    tree.right.left = new TreeNode(3);
    tree.right.right = new TreeNode(-1);

    tree.left.left.left = new TreeNode(5);
    tree.left.left.right = new TreeNode(1);

    tree.left.right.left = new TreeNode(null);
    tree.left.right.right = new TreeNode(6);

    tree.right.left.left = new TreeNode(8);

    expect(maxDepth(tree)).toBe(4);
  });
});
