const { sortList, ListNode } = require("./sortList");

describe("sortList", () => {
  const linkedList = new ListNode(4, null);
  linkedList.next = new ListNode(2, null);
  linkedList.next.next = new ListNode(1, null);
  linkedList.next.next.next = new ListNode(3, null);

  const sortedList = new ListNode(1, null);
  sortedList.next = new ListNode(2, null);
  sortedList.next.next = new ListNode(3, null);
  sortedList.next.next.next = new ListNode(4, null);

  it("무작위의 linkedList 를 오름차순으로 정렬한 linkedList 를 반환합니다.", () => {
    expect(sortList(linkedList)).toEqual(sortedList);
  });
});
