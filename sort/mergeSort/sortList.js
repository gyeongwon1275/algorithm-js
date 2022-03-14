const { mergeSort } = require("./mergeSort");
const { mergeTwoLists } = require("./mergeTwoSortedList");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/* var sortList = function (head) {
  if (!head) {
    return head;
  }

  const originArray = [];

  while (head) {
    originArray.push(head.val);
    head = head.next;
  }

  const sortedArray = mergeSort(originArray);

  const result = new ListNode(sortedArray[0], null);

  let temp = result;

  for (let i = 1; i < sortedArray.length; i++) {
    temp.next = new ListNode(sortedArray[i], null);
    temp = temp.next;
  }

  return result;
}; */

const sortList = function (head) {
  // 완벽하게 반을 나누려면 list 전체를 확인해야 함
  // pointer 를 3개 사용해서 대략적으로 나눌 수 있다.

  // half
  // slow
  // fast

  if (!head || !head.next) {
    return head;
  }

  let half = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    half = slow;
    fast = fast.next.next;
    slow = slow.next;
  }

  // head 를  반띵 전까지 로 분리
  // slow 는 반찡 이후 linkedList
  half.next = null;

  const list1 = sortList(head);
  const list2 = sortList(slow);

  return mergeTwoLists(list1, list2);
};

module.exports = { sortList, ListNode };
