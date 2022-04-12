/* 
https://leetcode.com/problems/insertion-sort-list/
*/

const { insertionSortList, ListNode } = require("./147. Insertion Sort List");

describe("147. Insertion Sort List", () => {
  it("[5,4,3,2,1] => [1,2,3,4,5]", () => {
    const list = new ListNode(5);
    list.next = new ListNode(4);
    list.next.next = new ListNode(3);
    list.next.next.next = new ListNode(2);
    list.next.next.next.next = new ListNode(1);

    const sortedList = new ListNode(1);
    sortedList.next = new ListNode(2);
    sortedList.next.next = new ListNode(3);
    sortedList.next.next.next = new ListNode(4);
    sortedList.next.next.next.next = new ListNode(5);

    expect(insertionSortList(list)).toEqual(sortedList);
  });

  it("[5, 3, 1, 3, 4, 6, 2] => [1, 2, 3, 3, 4, 5, 6]", () => {
    const list = new ListNode(5);
    list.next = new ListNode(3);
    list.next.next = new ListNode(1);
    list.next.next.next = new ListNode(3);
    list.next.next.next.next = new ListNode(4);
    list.next.next.next.next.next = new ListNode(6);
    list.next.next.next.next.next.next = new ListNode(2);

    const sortedList = new ListNode(1);
    sortedList.next = new ListNode(2);
    sortedList.next.next = new ListNode(3);
    sortedList.next.next.next = new ListNode(3);
    sortedList.next.next.next.next = new ListNode(4);
    sortedList.next.next.next.next.next = new ListNode(5);
    sortedList.next.next.next.next.next.next = new ListNode(6);

    expect(insertionSortList(list)).toEqual(sortedList);
  });
});
