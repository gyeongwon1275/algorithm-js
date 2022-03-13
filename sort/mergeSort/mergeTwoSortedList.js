function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  let temp1 = list1;
  let temp2 = list2;

  const result = new ListNode(0, null);

  let tempResult = result;

  while (temp1 && temp2) {
    if (temp1.val <= temp2.val) {
      tempResult.next = temp1;

      temp1 = temp1.next;
    } else {
      tempResult.next = temp2;

      temp2 = temp2.next;
    }

    tempResult = tempResult.next;
  }

  if (!temp1 && temp2) {
    tempResult.next = temp2;
    temp2 = temp2.next;
  } else if (temp1 && !temp2) {
    tempResult.next = temp1;
    temp1 = temp1.next;
  }

  return result.next;
};

module.exports = {
  mergeTwoLists,
  ListNode,
};
