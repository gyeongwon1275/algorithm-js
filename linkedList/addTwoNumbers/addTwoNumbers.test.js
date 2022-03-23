/* 
You are given two non-empty linked lists representing two non-negative integers. 

The digits are stored in reverse order, and each of their nodes contains a single digit. 

Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/

const ListNode = require("../listNode");
const addTwoNumbers = require("./addTwoNumbers");

describe("addTwoNumbers", () => {
  const list1 = new ListNode(2, null);
  list1.next = new ListNode(4, null);
  list1.next.next = new ListNode(3, null);

  const list2 = new ListNode(5, null);
  list2.next = new ListNode(6, null);
  list2.next.next = new ListNode(4, null);

  const result = new ListNode(7, null);
  result.next = new ListNode(0, null);
  result.next.next = new ListNode(8, null);

  it("list node를 각각 더한 값을 반환합니다.", () => {
    expect(addTwoNumbers(list1, list2)).toEqual(result);
  });
});
