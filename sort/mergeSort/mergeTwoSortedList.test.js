const { ListNode, mergeTwoLists } = require("./mergeTwoSortedList");

describe("mergeTwoSortedList", () => {
  it("두 정렬된 list 를 정렬된 새로운 list 로 합친다.", () => {
    const list1 = new ListNode(1, null);
    list1.next = new ListNode(2, null);
    list1.next.next = new ListNode(4, null);

    const list2 = new ListNode(1, null);
    list2.next = new ListNode(3, null);
    list2.next.next = new ListNode(4, null);

    const list3 = new ListNode(1, null);
    list3.next = new ListNode(1, null);
    list3.next.next = new ListNode(2, null);
    list3.next.next.next = new ListNode(3, null);
    list3.next.next.next.next = new ListNode(4, null);
    list3.next.next.next.next.next = new ListNode(4, null);

    expect(mergeTwoLists(list1, list2)).toEqual(list3);
  });

  it("두 정렬된 list 를 정렬된 새로운 list 로 합친다.", () => {
    const list1 = new ListNode(1, null);

    const list2 = null;

    const list3 = new ListNode(1, null);

    expect(mergeTwoLists(list1, list2)).toEqual(list3);
  });

  it("두 정렬된 list 를 정렬된 새로운 list 로 합친다.", () => {
    const list1 = null;

    const list2 = null;

    const list3 = null;

    expect(mergeTwoLists(list1, list2)).toEqual(list3);
  });
});
