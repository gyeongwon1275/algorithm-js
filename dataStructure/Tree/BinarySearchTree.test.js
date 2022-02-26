const BST = require("./BinarySearchTree");

describe("BinarySearchTree", () => {
  describe("insert", () => {
    it("트리에 node 를 삽입합니다.", () => {
      const binarySearchTree = new BST(10);
      binarySearchTree.insert(10);
      binarySearchTree.insert(4);
      binarySearchTree.insert(2);
      binarySearchTree.insert(6);
      binarySearchTree.insert(5);
      binarySearchTree.insert(7);
      binarySearchTree.insert(12);

      expect(binarySearchTree.search(987)).toBe(false);
      expect(binarySearchTree.search(3427)).toBe(false);
      expect(binarySearchTree.search(3)).toBe(false);
      expect(binarySearchTree.search(11)).toBe(false);

      expect(binarySearchTree.search(10)).toBe(true);
      expect(binarySearchTree.search(4)).toBe(true);
      expect(binarySearchTree.search(2)).toBe(true);
      expect(binarySearchTree.search(6)).toBe(true);
      expect(binarySearchTree.search(5)).toBe(true);
      expect(binarySearchTree.search(7)).toBe(true);
      expect(binarySearchTree.search(12)).toBe(true);
    });
  });

  describe("전위순회 (traversePreOrder) ", () => {
    it("현재노드 -> 왼쪽하위 트리 -> 오른쪽 하위트리 순으로 순회합니다.", () => {
      const binarySearchTree = new BST(6);
      binarySearchTree.insert(4);
      binarySearchTree.insert(10);
      binarySearchTree.insert(2);
      binarySearchTree.insert(5);
      binarySearchTree.insert(1);
      binarySearchTree.insert(3);
      binarySearchTree.insert(8);
      binarySearchTree.insert(15);
      binarySearchTree.insert(7);
      binarySearchTree.insert(9);
      binarySearchTree.insert(12);

      expect(binarySearchTree.traversePreOrder()).toEqual([
        6, 4, 2, 1, 3, 5, 10, 8, 7, 9, 15, 12,
      ]);
    });
  });

  describe("중위순회 (traverseInOrder) ", () => {
    it("왼쪽하위 트리 -> 현재노드 -> 오른쪽 하위트리 순으로 순회합니다.", () => {
      const binarySearchTree = new BST(6);
      binarySearchTree.insert(4);
      binarySearchTree.insert(10);
      binarySearchTree.insert(2);
      binarySearchTree.insert(5);
      binarySearchTree.insert(1);
      binarySearchTree.insert(3);
      binarySearchTree.insert(8);
      binarySearchTree.insert(15);
      binarySearchTree.insert(7);
      binarySearchTree.insert(9);
      binarySearchTree.insert(12);

      expect(binarySearchTree.traverseInOrder()).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15,
      ]);
    });
  });

  describe("후위순회 (traversePostOrder) ", () => {
    it("왼쪽하위 트리 -> 현재노드 -> 오른쪽 하위트리 순으로 순회합니다.", () => {
      const binarySearchTree = new BST(6);
      binarySearchTree.insert(4);
      binarySearchTree.insert(10);
      binarySearchTree.insert(2);
      binarySearchTree.insert(5);
      binarySearchTree.insert(1);
      binarySearchTree.insert(3);
      binarySearchTree.insert(8);
      binarySearchTree.insert(15);
      binarySearchTree.insert(7);
      binarySearchTree.insert(9);
      binarySearchTree.insert(12);
      expect(binarySearchTree.traversePostOrder()).toEqual([
        1, 3, 2, 5, 4, 7, 9, 8, 12, 15, 10, 6,
      ]);
    });
  });

  describe("remove", () => {
    it("특정 node 를 삭제합니다.", () => {
      const binarySearchTree = new BST(6);
      binarySearchTree.insert(4);
      binarySearchTree.insert(10);
      binarySearchTree.insert(2);
      binarySearchTree.insert(5);
      binarySearchTree.insert(1);
      binarySearchTree.insert(3);
      binarySearchTree.insert(8);
      binarySearchTree.insert(15);
      binarySearchTree.insert(7);
      binarySearchTree.insert(9);
      binarySearchTree.insert(12);

      binarySearchTree.remove(10);
      expect(binarySearchTree.search(10)).toBe(false);

      expect(binarySearchTree.traverseInOrder()).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15,
      ]);
    });
  });
});
