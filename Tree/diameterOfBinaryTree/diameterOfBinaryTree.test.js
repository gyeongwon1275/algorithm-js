const diameterOfBinaryTree = require("./diameterOfBinaryTree");
const TreeNode = require("../TreeNode");

describe("diameterOfBinaryTree", () => {
  it("왼쪽 가장 긴 길이 + 오른쪽 가장 긴 길이의 최대값을 찾아라", () => {
    const tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    tree.right.left = new TreeNode(15);
    tree.right.right = new TreeNode(7);

    expect(diameterOfBinaryTree(tree)).toBe(3);
  });

  it("왼쪽 가장 긴 길이 + 오른쪽 가장 긴 길이의 최대값을 찾아라", () => {
    const tree = new TreeNode(0);

    tree.left = new TreeNode(2);
    tree.right = new TreeNode(4);

    tree.left.left = new TreeNode(1);
    tree.left.right = new TreeNode(98);

    tree.left.left.left = new TreeNode(5);
    tree.left.left.right = new TreeNode(1);

    tree.left.right.left = new TreeNode(null);
    tree.left.right.right = new TreeNode(6);

    tree.right.left = new TreeNode(3);
    tree.right.right = new TreeNode(-1);

    tree.right.left.left = new TreeNode(8);

    expect(diameterOfBinaryTree(tree)).toBe(6);
  });
});
