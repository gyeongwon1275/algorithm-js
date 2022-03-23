const { reverseList, ListNode } = require("./reverseLinkedList");

describe("reverseLinkedList", () => {
  const node = new ListNode(1, null);
  node.next = new ListNode(2, null);
  node.next.next = new ListNode(3, null);
  node.next.next.next = new ListNode(4, null);
  node.next.next.next.next = new ListNode(5, null);

  it("연결리스트를 뒤집어라", () => {
    let reversedNode = reverseList(node);

    const result = [];
    while (reversedNode) {
      result.push(reversedNode.val);
      reversedNode = reversedNode.next;
    }

    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});
