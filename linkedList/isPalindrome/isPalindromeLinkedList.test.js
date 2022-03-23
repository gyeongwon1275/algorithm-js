const isPalindromeLinkedList = require("./isPalindromeLinkedList");
const ListNode = require("../listNode");
/* 
Given the head of a singly linked list, return true if it is a palindrome.
*/

describe("isPalindromeLinkedList", () => {
  it("연결리스트가 페린드롬 이면 true 반환", () => {
    const head = new ListNode(1, null);
    head.next = new ListNode(2, null);
    head.next.next = new ListNode(2, null);
    head.next.next.next = new ListNode(1, null);

    expect(isPalindromeLinkedList(head)).toBe(true);
  });

  it("연결리스트가 페린드롬이 아니면 false 반환", () => {
    const head = new ListNode(1, null);
    head.next = new ListNode(2, null);
    head.next.next = new ListNode(2, null);
    head.next.next.next = new ListNode(3, null);

    expect(isPalindromeLinkedList(head)).toBe(false);
  });
});
