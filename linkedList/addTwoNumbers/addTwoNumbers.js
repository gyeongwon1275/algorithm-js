const ListNode = require("../listNode");

const addTwoNumbers = function (l1, l2) {
  let complement = 0;

  const result = new ListNode(0, null);

  let temp = result;

  while (l1 || l2 || complement !== 0) {
    const left = l1 ? l1.val : 0;
    const right = l2 ? l2.val : 0;

    const add = left + right + complement;
    complement = 0;

    if (add >= 10) {
      complement = Math.floor(add / 10);
    }

    temp.next = new ListNode(add % 10, null);
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;

    temp = temp.next;
  }

  return result.next;
};

module.exports = addTwoNumbers;
