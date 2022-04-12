function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const insertionSortList = function (head) {
  const total = new ListNode(0);

  while (head) {
    if (!total.next) {
      total.next = head;
      const temp = head.next;
      total.next.next = null;
      head = temp;
    } else {
      if (total.next.val >= head.val) {
        const totalTemop = total.next;
        total.next = head;

        const headTemp = head.next;

        total.next.next = totalTemop;

        head = headTemp;
      } else {
        let current = total.next;

        while (current.next && current.next.val <= head.val) {
          current = current.next;
        }

        const tempNext = current.next;

        current.next = head;

        const headTemp = head.next;
        current.next.next = tempNext;
        head = headTemp;
      }
    }
  }
  return total.next;
};

module.exports = { insertionSortList, ListNode };
