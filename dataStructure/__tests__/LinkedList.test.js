const LinkedList = require("../LinkedList");

describe("LinkedList", () => {
  it("append Node", () => {
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
