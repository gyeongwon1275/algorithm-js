const BST = require("./BinarySearchTree");

describe("BinarySearchTree", () => {
  describe("insert", () => {
    it("트리에 node 를 삽입합니다.", () => {
      const binarySearchTree = new BST();
      binarySearchTree.insert(10);
      binarySearchTree.insert(4);
      binarySearchTree.insert(2);
      binarySearchTree.insert(6);
      binarySearchTree.insert(5);
      binarySearchTree.insert(7);
      binarySearchTree.insert(12);

      expect(binarySearchTree.search(10)).toBe(true);
      expect(binarySearchTree.search(4)).toBe(true);
      expect(binarySearchTree.search(2)).toBe(true);
      expect(binarySearchTree.search(6)).toBe(true);
      expect(binarySearchTree.search(5)).toBe(true);
      expect(binarySearchTree.search(7)).toBe(true);
      expect(binarySearchTree.search(12)).toBe(true);
    });
  });
});
