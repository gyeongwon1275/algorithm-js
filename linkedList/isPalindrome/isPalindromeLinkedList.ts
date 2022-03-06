/**
 * @param {string} s
 * @return {boolean}
 */

// stack 사용

const isPalindromeLinkedList = function (head) {
  const stack = [];

  let temp = head;

  while (temp) {
    stack.push(temp.val);
    temp = temp.next;
  }

  temp = head;

  while (stack.length) {
    if (stack.pop() !== temp.val) {
      return false;
    }

    temp = temp.next;
  }

  return true;
};

module.exports = isPalindromeLinkedList;
