/* 
Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

The length of the path between two nodes is represented by the number of edges between them.
*/
const TreeNode = require("../TreeNode");
const longestUnivaluePath = require("./687. Longest Univalue Path");

describe("687. Longest Univalue Path", () => {
  it("[]", () => {
    const treeNode = new TreeNode(5);

    expect(longestUnivaluePath(treeNode)).toBe(0);
  });

  it("[5,4,5]", () => {
    const treeNode = new TreeNode(5);
    treeNode.left = new TreeNode(4);
    treeNode.right = new TreeNode(5);

    expect(longestUnivaluePath(treeNode)).toBe(1);
  });

  it("[5,4,5,1,1,5]", () => {
    const treeNode = new TreeNode(5);
    treeNode.left = new TreeNode(4);
    treeNode.right = new TreeNode(5);
    treeNode.left.left = new TreeNode(1);
    treeNode.left.right = new TreeNode(1);
    treeNode.right.right = new TreeNode(5);

    expect(longestUnivaluePath(treeNode)).toBe(2);
  });

  it("[1,4,5,4,4,5]", () => {
    const treeNode = new TreeNode(1);
    treeNode.left = new TreeNode(4);
    treeNode.right = new TreeNode(5);
    treeNode.left.left = new TreeNode(4);
    treeNode.left.right = new TreeNode(4);
    treeNode.right.right = new TreeNode(5);

    expect(longestUnivaluePath(treeNode)).toBe(2);
  });

  it("[1,null,1,1,1,1,1,1]", () => {
    const treeNode = new TreeNode(1);
    treeNode.left = new TreeNode(null);
    treeNode.right = new TreeNode(1);
    treeNode.right.left = new TreeNode(1);
    treeNode.right.right = new TreeNode(1);

    treeNode.right.left.left = new TreeNode(1);
    treeNode.right.left.right = new TreeNode(1);

    treeNode.right.right.left = new TreeNode(1);
    treeNode.right.right.right = new TreeNode(null);

    expect(longestUnivaluePath(treeNode)).toBe(4);
  });

  it("[1,2,2,2,2,2,2,2]", () => {
    const treeNode = new TreeNode(1);
    treeNode.left = new TreeNode(2);
    treeNode.right = new TreeNode(2);
    treeNode.left.left = new TreeNode(2);
    treeNode.left.left.left = new TreeNode(2);
    treeNode.left.left.right = new TreeNode(null);
    treeNode.left.right = new TreeNode(2);

    treeNode.right.left = new TreeNode(2);
    treeNode.right.right = new TreeNode(2);

    expect(longestUnivaluePath(treeNode)).toBe(3);
  });
});
