const LinkedList = require("../sequential/LinkedList");

describe("LinkedList", () => {
  describe("append", () => {
    it("데이터를 list 맨 뒤에 삽입합니다.", () => {
      let root = LinkedList.append(null, 10);
      root = LinkedList.append(root, 11);
      root = LinkedList.append(root, 12);

      expect(root.getData()).toBe(10);

      let next = root.getNextOrNull();
      expect(next.getData()).toBe(11);

      next = next.getNextOrNull();
      expect(next.getData()).toBe(12);
    });
  });

  describe("prepend", () => {
    it("데이터를 list 맨 앞에 삽입합니다.", () => {
      let root = LinkedList.append(null, 10);

      root = LinkedList.prepend(root, 11);

      expect(root.getData()).toBe(11);

      root = LinkedList.prepend(root, 12);

      expect(root.getData()).toBe(12);

      let next = root.getNextOrNull();

      expect(next.getData()).toBe(11);

      next = next.getNextOrNull();

      expect(next.getData()).toBe(10);
    });
  });

  describe("insertAt", () => {
    it("데이터를 특정위치에 삽입합니다.", () => {
      let root = LinkedList.append(null, 10);

      root = LinkedList.insertAt(root, 0, 11);
      expect(root.getData()).toBe(11);

      root = LinkedList.insertAt(root, 1, 12);
      expect(root.getData()).toBe(11);

      let next = root.getNextOrNull();
      expect(next.getData()).toBe(12);

      next = next.getNextOrNull();
      expect(next.getData()).toBe(10);
    });
  });

  describe("removeAt", () => {
    it("특정 위치의 데이터를 제거합니다.", () => {
      let root = LinkedList.append(null, 10);

      root = LinkedList.append(root, 11);
      root = LinkedList.append(root, 12);
      root = LinkedList.append(root, 13);
      root = LinkedList.append(root, 14);
      root = LinkedList.append(root, 15);

      root = LinkedList.removeAt(root, 0);

      expect(root.getData()).toBe(11);

      root = LinkedList.removeAt(root, 1);

      expect(root.getData()).toBe(11);

      const next = root.getNextOrNull();

      expect(next.getData()).toBe(13);

      root = LinkedList.removeAt(root, 2);
      expect(root.getNextOrNull().getNextOrNull().getData()).toBe(15);

      root = LinkedList.removeAt(root, -2);
      expect(root).toBeNull();
    });
  });

  describe("getIndexOf", () => {
    it("특정 element 가 전체 연결리스트에서 몇번째 있는지 확인", () => {
      let root = LinkedList.append(null, 10);
      root = LinkedList.append(root, 11);
      root = LinkedList.append(root, 12);
      root = LinkedList.append(root, 13);
      root = LinkedList.append(root, 14);
      root = LinkedList.append(root, 15);

      expect(LinkedList.getIndexOf(null, 10)).toBe(null);
      expect(LinkedList.getIndexOf(root, 10)).toBe(0);
      expect(LinkedList.getIndexOf(root, 11)).toBe(1);
      expect(LinkedList.getIndexOf(root, 12)).toBe(2);
      expect(LinkedList.getIndexOf(root, 13)).toBe(3);
      expect(LinkedList.getIndexOf(root, 14)).toBe(4);
      expect(LinkedList.getIndexOf(root, 15)).toBe(5);
      expect(LinkedList.getIndexOf(root, 1121)).toBe(null);
    });
  });

  describe("getOrNull", () => {
    it("연결리스트 특정 위치의 있는 Node 확인", () => {
      let root = LinkedList.append(null, 10);
      root = LinkedList.append(root, 11);
      root = LinkedList.append(root, 12);
      root = LinkedList.append(root, 13);
      root = LinkedList.append(root, 14);
      root = LinkedList.append(root, 15);

      expect(LinkedList.getOrNull(null, 0)).toBe(null);
      expect(LinkedList.getOrNull(root, 0).getData()).toBe(10);
      expect(LinkedList.getOrNull(root, 1).getData()).toBe(11);
      expect(LinkedList.getOrNull(root, 2).getData()).toBe(12);
      expect(LinkedList.getOrNull(root, 3).getData()).toBe(13);
      expect(LinkedList.getOrNull(root, 4).getData()).toBe(14);
      expect(LinkedList.getOrNull(root, 5).getData()).toBe(15);
      expect(LinkedList.getOrNull(root, 6)).toBe(null);
    });
  });

  describe("reverse", () => {
    it("연결리스트를 뒤집습니다.", () => {
      let root = LinkedList.append(null, 10);
      root = LinkedList.append(root, 11);
      root = LinkedList.append(root, 12);
      root = LinkedList.append(root, 13);
      root = LinkedList.append(root, 14);
      root = LinkedList.append(root, 15);

      root = LinkedList.reverse(root);

      expect(LinkedList.getOrNull(root, 0).getData()).toBe(15);
      expect(LinkedList.getOrNull(root, 1).getData()).toBe(14);
      expect(LinkedList.getOrNull(root, 2).getData()).toBe(13);
      expect(LinkedList.getOrNull(root, 3).getData()).toBe(12);
      expect(LinkedList.getOrNull(root, 4).getData()).toBe(11);
      expect(LinkedList.getOrNull(root, 5).getData()).toBe(10);
    });
  });
});
