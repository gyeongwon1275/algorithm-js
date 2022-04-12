function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/* 
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
*/
/* 

오름차순 정렬 기준으로 전체 list 중에서 가장 작은 node 를 찾아서 붙여나가는 방식 

=> 사실 따지고 보면 선택정렬의 방법.. 


*/
const insertionSortList = function (head) {
  let total = new ListNode(0);
  let current = total;

  while (head) {
    while (current.next && current.next.val <= head.val) {
      current = current.next;
    }

    const currentNextTemp = current.next;

    current.next = head;

    const headNextTemp = head.next;
    current.next.next = currentNextTemp;
    head = headNextTemp;

    current = total;
  }

  return current.next;
};

module.exports = { insertionSortList, ListNode };
